---
title: Day6
---

<summary><b>2022-09-26 星期一</b></summary>

> One of the best lessons I've learned on the Internet is never copy and paste code you didn't write. If you have to copy, just type it word for word and force yourself to think about what the code actually means.


<p style="color:blue">1. 如何实现图片在某个容器中居中的？</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 父元素固定宽高，利用定位及设置子元素 margin 值为自身的一半。  
- 父元素固定宽高，子元素设置 position: absolute，margin：auto 平均分配 margin   
- css3 属性 transform。子元素设置 position: absolute; left: 50%; top: 50%;transform: translate(-50%,-50%);即可。    
- 将父元素设置成 display: table, 子元素设置为单元格 display: table-cell。   
- 弹性布局 display: flex。设置 align-items: center; justify-content: center 

</p>
</details>

<p style="color:blue">2. transition 和 animation 的区别？【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值。 

主要区别是 ：   

- transition 需要触发一个事件才能改变属性  
- animation 不需要触发任何事件的情况下才会随时间改变属性值，并且 transition 为 2 帧，从from .... to，而 animation 可以一帧一帧的。

</p>
</details>

<p style="color:blue">3. Doctype 作用是什么?严格模式与混杂模式如何区分？它们有何意义? 【HTML】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

作用：  
`<!DOCTYPE>`声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。`<!DOCTYPE>`声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签,高速诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。

- 严格模式：又称标准模式，是指浏览器按照 W3C 标准解析代码。
- 混杂模式：又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。
- 如何区分：浏览器解析时到底使用严格模式还是混杂模式，与网页中的 DTD 直接相关。

意义：严格模式与混杂模式存在的意义与其来源密切相关，如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。

</p>
</details>

<p style="color:blue">4. addEventListener 参数 【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

addEventListener() 方法用于向指定元素添加事件句柄。     
使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。

参数：`addEventListener(event, function, useCapture)` 
- event 指定事件名；[必须]
- function 指定要事件触发时执行的函数；[必须]
- useCapture 指定事件是否在捕获或冒泡阶段执行。[可选，布尔值]

</p>
</details>

<p style="color:blue">5.click 在 ios 上有 300ms 延迟，原因及如何解决？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

原因：  
iOS上浏览器怎么区分用户是只要单击操作还是要双击进行缩放操作。所以设置了300ms的延迟时间，加以判断用户是单击还是双击缩放

浏览器会在捕获用户第一次单击时，保持300ms的时间：若在300ms内若捕获不到第二次单击，则用户就是单纯执行单击操作；若在300ms内，用户有第二次单击操作，则对该区域进行缩放操作。

1. 粗暴型，禁用缩放
`<meta name="viewport" content="width=device-width, user-scalable=no">`
2. 利用 FastClick，其原理是：
检测到 touchend 事件后，立刻出发模拟 click 事件，并且把浏览器 300 毫秒之后真正出发的事件给阻断掉

</p>
</details>

<comment/>