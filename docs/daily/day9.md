---
title: Day9
---

<summary><b>2022-09-29 星期四</b></summary>

>  所有值得做的事情，做得一团糟也值得做，因为做得糟总比不做好。


<p style="color:blue">1. CSS中的calc函数用法 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- calc()函数支持加减乘除四种运算。
- 书写上一定要注意啊，加减号两边一定要有空格
- 任何长度值都可以使用calc函数进行计算:% vh vw px em等
- calc函数使DOM元素更加灵活的响应视口改变，还可以通过calc函数实现元素的绝对剧中定位(position:absolute;top:calc(50vh - Xpx))

</p>
</details>

<p style="color:blue">2. 谈谈HTTP2 【HTTP】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

**HTTP2的多路复用**
针对 HTTP/1.1 的问题，队头阻塞是由于 TCP 本身机制导致的，所以 HTTP/2.0 就针对了如何规避 TCP 的慢启动和 TCP 连接之间的宽带竞争下手。 
HTTP/2 的解决思路是一个域名只使用一个TCP 长连接来传输数据，这样整个页面的资源下载只需要一次慢启动，且避免了多个 TCP 连接竞争宽带的问题。  
当然如果一个域名使用一个TCP长连接，那么针对队头阻塞问题，请求完一个请求再去发送另一个请求无疑是非常慢的，所以 HTTP/2 需要实现资源的并行请求：也就是任何时候都可以将请求发送给服务器。 

一句话总结 HTTP/2 为：一个域名只使用一个 TCP 长连接和解决队头阻塞问题。 也就是最具颠覆性的多路复用机制。
多路复用机制的过程：是说每一个请求都一有一个对应的ID，服务端拿到这些请求的ID和内容后，自行决定哪些是关键资源，然后立即将关键资源返回。好处就是优先处理关键资源请求。

**多路复用的实现**
HTTP/2添加了一个二进制分帧层。
然后客户端发送过来的请求，经过这个层，进行处理给他们编号(帧)，然后发送给服务器。
服务器接收到请求，将相同编号的进行合并成一条完整信息进行一次处理，然后再返回给这个二进制分帧层。
二进制分帧层再将响应数据拆开，然后返回给客户端。

**HTTP/2其他特性-基于二进制分帧层**
可以设置请求的优先级
服务器推送：HTTP2可以直接将数据提前推送至客户端
头部压缩：对请求头和响应头做了压缩。
其它

</p>
</details>

<p style="color:blue">3. Webpack的热更新理解 【Webpack】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

webpack的热更新又称为热替换(Hot Module Replacement) – `HMR`
这个机制可以做到不用刷新浏览器而将变更的模块替换掉。

HMR的核心就是：客户端从服务端拉去更新后的文件(他们直接维护了一个websocket)，当本地资源发生变更后，客户端进行资源对比，然后增量更新。
开启HMR，要在webpack配置文件的devServer中设置hot为true即可。

</p>
</details>

<p style="color:blue">4. babel是什么，基本原理以及配置文件的基本格式是什么 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. babel是什么？
Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。

2. Babel的基本工作原理
主要分为 parsing、transforming、printing三个阶段
parsing为解析阶段，将ES6代码进行词法分析和语法分析转换成抽象语法树
transforming为转换阶段，将抽象语法树进行变换操作
printing为生成阶段，通过babel-generator生成对应的代码。

3. 配置文件.babelrc的基本格式
首先，我们先对babel配置的基本格式有个浅显的了解：他是个对象、他的两个属性都是数组，他们分别是presets和plugins。
```
{
  "presets": [],
  "plugins": []
}
```
</p>
</details>

<p style="color:blue">5. 什么是CSS Sprite（“精灵图”）【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- CSS Sprites叫 CSS精灵或者雪碧图，是一种网页图片应用处理方式。
- CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中。再利用CSS的"background-image"，“background-repeat”，"background-position"的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置

</p>
</details>

<comment/>