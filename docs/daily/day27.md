---
title: Day27
---

<div align="right" style="color:#512DA8">2022年11月02日 星期三</div>

>  Have you somewhat to do tomorrow, do it today.

<p style="color:blue">1. 文件上的git标识 U A M D R 都表示什么意思 【Git】</p>
<details>
<summary><b>参考答案</b></summary>

- U:表示文件未被追踪，即远方仓库没有，本地也没有提交至暂存区。
- A:表示本次新增的文件，且提交至了暂存区。
- M:表示这个文件已在远程仓库上了，本地做了修改。
- D:表示这个文件在远程仓库上，本地做了删除。
- R:表示文件名称做了修改，且本地提交至暂存区。

</details>

<hr/>
<p style="color:blue">2. 如果要做优化，CSS提高性能的方法有哪些？ 【CSS】 </p>
<details>
<summary><b>参考答案</b></summary>

实现方式主要从以下几个方面：  

1. 内敛首屏关键 CSS
 CSS内联使用使渲染时间提前，关键代码能够使浏览器在下载完html后就能立刻渲染，但对于较大的CSS代码不合适内敛。

2. 异步加载 CSS
- 在CSS文件请求、下载、解析完成之前，CSS 会阻塞渲染，浏览器将不会渲染任何已处理的内容
- 前面加载内联代码后，后面的外部引用css则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案

3. 资源压缩 
利用webpack gulp/grunt rollup 等模块化工具，将CSS代码进行压缩，使文件变小，可以大大降低浏览器的加载时间

4. 合理利用选择器
css的匹配规则是从右往左开始匹配，如果潜套曾经过多，页面中元素过多，匹配所要花费的时间代码会更高   

因此建议不要嵌套超过三层的选择器，使用id选择器就不会进行嵌套，通配符和属性选择器效率最低，避免使用

5. 不要使用 @import
css引入样式右两种方式，@import和使用link元素，使用@import的方式会影响浏览器的并行下载，且会导致下载的顺序紊乱。
 [链接](https://github.com/febobo/web-interview/issues/114)

</details>

<hr/>
<p style="color:blue">3. TCP为什么需要三次握手和四次挥手？【HTTP】 </p>
<details>
<summary><b>参考答案</b></summary>

**三次握手**
三次握手（Three-way Handshake）其实就是指建立一个TCP连接时，需要客户端和服务器总共发送3个包

主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备

**四次挥手**
tcp终止一个连接，需要经过四次挥手

服务端在收到客户端断开连接Fin报文后，并不会立即关闭连接，而是先发送一个ACK包先告诉客户端收到关闭连接的请求，只有当服务器的所有报文发送完毕之后，才发送FIN报文断开连接，因此需要四次挥手

[详细链接](https://github.com/febobo/web-interview/issues/151)

</details>

<hr/>
<p style="color:blue">4.Node. js 有哪些全局对象？【Node】 </p>

<details>
<summary><b>参考答案</b></summary>

 Node.js中的全局对象是 `global`

全局对象分为 真正的全局对象  和 模块级别的全局变量

**真正的全局对象**
- Class:Buffer ：可以处理二进制以及非Unicode编码的数据
- process：提供有关当前过程的信息和控制，包括在执行node程序过程中传入的参数
- console：控制台打印
- clearInterval、setInterval
- clearTimeout、setTimeout
- global：前面的对象全都放在了global中，`process === global.process`

**模块级别的全局对象**
- __dirname ：获取当前文件所在的路径，不包括文件名
- __filename ：获取当前文件所在的路径和文件名称
- exports：module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容
- module：对当前模块的引用，通过module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容
- require：用于引入模块、 JSON、或本地文件。 可以从 node_modules 引入模块。


[详细链接](https://github.com/febobo/web-interview/issues/154)

</details>

<hr/>
<p style="color:blue">5.如何解决useEffect重复调用问题【React】 </p>

<details>
<summary><b>参考答案</b></summary>

https://juejin.cn/post/6844904117303934989

</details>

<comment/>
