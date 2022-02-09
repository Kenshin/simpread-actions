const axios = require( 'axios' );

/**
 * Get now time
 * 
 * @return {string} return now, e.g. 2017年04月03日 11:43:53
 */
function now() {
    const date   = new Date(),
          format = value => value = value < 10 ? '0' + value : value;
    return date.getFullYear() + '/' + format( date.getUTCMonth() + 1 ) + '/' + format( date.getUTCDate() );
}

/**
 * Get Simpread Unreader Daily
 */
function getDaily() {
    const settings = {
        method: 'POST',
        url: 'https://simpread.ksria.cn/api/service/list',
        params: {
            token: process.env.SIMPREAD_TOKEN,
            id: process.env.SIMPREAD_ID,
            filter: 'daily'
        }
    },
    urls = [];

    axios( settings ).then( response => {
        if ( response && response.data.length > 0 ) {
            response.data.forEach( item => {
                urls.push( `[${ item.title }](${ item.url })` );
            });
            if ( process.env.SEND_TYPE == 'telegram' ) sendTelegram( urls );
            else if ( process.env.SEND_TYPE == 'feishu' ) sendFeishu( urls );
            else {
                sendTelegram( urls );
                sendFeishu( urls );
            }
        }
    }).catch( error => {
        console.error( error );
    });
}

/**
 * Send Telegram
 * 
 * @param {array} urls 
 */
function sendTelegram( urls ) {
    const text        = `
▎ 简悦 · 每日回顾 ${ now() }

{{urls}}

来自 [简悦](http://simpread.pro/)`,
    config = {
            url      : 'https://api-wrap.simpread.pro/api/service/telegram',
            method   : 'post',
            data     : {
                chat : process.env.TELEGRAM_CHAT,
                token: process.env.TELEGRAM_TOKEN,
                text : text.replace( '{{urls}}', urls.join( '\n' ))
            }
    };
    axios( config ).then( response => {
        console.log( 'sendTelegram success ', response )
    }).catch( error => {
        console.log( 'sendTelegram error ', error )
    });
}

/**
 * Send Feishu
 * 
 * @param {*} urls 
 */
function sendFeishu( urls ) {
    const body = {
        "msg_type": "interactive",
        "card": {
            "config": {
                "wide_screen_mode": true
            },
            "elements": [
            {
                "tag": "div",
                "text": {
                    "content": urls.join( '\n' ),
                    "tag": "lark_md"
                }
            }],
            "header": {
                "template": "blue",
                "title": {
                    "content": "简悦 · 每日回顾 " + now(),
                    "tag": "plain_text"
                }
            }
        }
    };
    axios.post( process.env.FEISHU_TOKEN, body )
    .then( response => {
        console.log( 'sendFeishu success ', response )
    })
    .catch( error => {
        console.log( 'sendFeishu error ', error )
    })
}

getDaily();