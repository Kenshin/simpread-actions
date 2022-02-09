<p align="center"><img src="http://sr.ksria.cn/logo%20bigger.png" /></p>
<h1 align="center">简悦<sup>1.0</sup> - SimpRead</h1>
<p align="center">让你瞬间进入沉浸式阅读的扩展，还原阅读的本质，提升你的阅读体验。</p>
<p align="center">为了达到完美的阅读模式这个小目标 ，我适配了 <a target="_blank" href="https://simpread.ksria.cn/sites/">数百种类型</a> 的网站，因此诞生了简悦。</p>
<p align="center">
   <a href="https://github.com/kenshin/simpread/releases"><img src="https://img.shields.io/badge/lastest_version-2.2.0-blue.svg"></a>
   <a target="_blank" href="https://simpread.pro"><img src="https://img.shields.io/badge/website-_simpread.ksria.com-1DBA90.svg"></a>
   <a target="_blank" href="https://chrome.google.com/webstore/detail/simpread-reader-view/ijllcpnolfcooahcekpamkbidhejabll"><img src="https://badgen.net/chrome-web-store/stars/ijllcpnolfcooahcekpamkbidhejabll?icon=chrome&color=0f9d58"></a>
</p>
<p align="center">
   <a target="_blank" href="https://chrome.google.com/webstore/detail/%E7%AE%80%E6%82%A6-simpread/ijllcpnolfcooahcekpamkbidhejabll"><img src="https://img.shields.io/badge/download-_chrome_webstore-brightgreen.svg"></a>
   <a href="http://ksria.com/simpread/crx/2.2.0/simpread.crx"><img src="https://img.shields.io/badge/download-_crx-0294b9.png"></a>
   <a target="_blank" href="https://greasyfork.org/zh-CN/scripts/39998"><img src="https://s1.ax1x.com/2020/07/25/UzMUSS.png"></a>
   <a target="_blank" href="https://xteko.com/redir?url=http://sr.ksria.cn/jsbox/simpread-1.0.3.box?202010231502&name=%E7%AE%80%E6%82%A6"><img src="https://s1.ax1x.com/2020/07/25/UzMHfK.png"></a>
</p>
<h1 align="center">简悦<sup>2.0</sup> - 真正成为你的生产力工具</h1>
<h3 align="center">阅读模式 + 剪藏 + 标注 + 稍后读 = 做你的知识管理粘合剂</h3>

***

# 利用 Github Actions 将简悦的每日回顾推送到 Telegram 或飞书群

> 每晚 19点40分，通过 Github Actions 与简悦 API，将每日回顾推送到你的 Telegram 或飞书群。

## 效果

> 发送到 Telegram

![image-20220208120301218](https://cdn.jsdelivr.net/gh/23784148/upload-images@main/typora/20220208_1644292981.png)

> 发送到飞书群

![image-20220208115548111](https://cdn.jsdelivr.net/gh/23784148/upload-images@main/typora/20220208_1644292548.png)

## 特点

Github Actions 是一个持续集成的自动化方案，具有很多玩法，春节期间抽时间用了用，所以诞生了这个项目，这个项目的特点是：

- 不需要编写任何代码
- 不需要任何额外服务支持

## 前置知识

- 需要配置 [知识库](https://www.yuque.com/kenshin/simpread/lglfy2)、 [资料库](https://www.yuque.com/kenshin/simpread/vcmg4o) 与 [开放平台](https://www.yuque.com/kenshin/simpread/ieu1w6)
- 需要使用 [简悦 · 同步助手 小二](https://t.me/simpread_bot) 或 [飞书群 以及 飞书 bot](https://github.com/Kenshin/simpread/discussions/3104)
- 需要注册 Github 账户

## 配置

- [Github Discussions](https://github.com/Kenshin/simpread/discussions/3383)
- [简悦的知乎专栏](https://zhuanlan.zhihu.com/p/464881364)

## 视频效果

完成上述操作后的视频效果请看 [知乎视频](https://www.zhihu.com/zvideo/1474366077962051585)。

## 注意事项

- 上述教程以 Telegram 为例，如果使用飞书群与此方式类似，但无需 `TELEGRAM_CHAT`，但需要获得 `FEISHU_TOKEN` 。

-  `send-daily.yml` 的触发条件有两个：
    * 每天晚上 **19点40分** （修改为任意时间）
    * 每次 Push 代码到 main 分支（也就是当你修改代码并 push 后自动执行）

- 每次发送的每日回顾内容可以通过**简悦扩展端 → 稍后读 → 24小时**查看。（如果你配置完没有收到的话，看看这里是否存在稍后读，如果没有的话，则不会发送。

# 关联

- [适配飞书妙记](https://github.com/Kenshin/simpread/discussions/3190)
- [发送当前 URL 到飞书群（包括：加入稍后读或手动触发）](https://github.com/Kenshin/simpread/discussions/3104)
- [将当前阅读模式转换为 Telegraph Page 并发送到你的 Telegram Channel](https://github.com/Kenshin/simpread/discussions/3337)
- [适配了一组关于 Telegram 的新站](https://github.com/Kenshin/simpread/discussions/2883)
- [保存到 Telegraph](https://github.com/Kenshin/simpread/discussions/2795)
- [如何玩转 Telegram bot（通过 Telegram bot 收藏到简悦的稍后读）](https://github.com/Kenshin/simpread/discussions/2792)