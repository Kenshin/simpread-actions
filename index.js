const axios      = require( 'axios' );

function sendTelegram() {
    const text        = `
来自 [简悦](http://simpread.pro/) 每日回顾`,
          sendMessage = `https://api.telegram.org/bot${ process.env.TELEGRAM_TOKEN }/sendMessage?chat_id=${ process.env.TELEGRAM_CHAT }&parse_mode=Markdown&text=` + encodeURIComponent( text );
    axios.get( sendMessage )
    .then( response => {
        res.json({ status: 201, response });
    })
    .catch( error => {
        res.json({ status: 201, error });
    })
}

sendTelegram();