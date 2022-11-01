---
title: Day1
---
<summary><b>2022-09-19 星期一</b></summary>

> 人生就是这样，求上得中求中得下，求下而不得。职场黄金期，没几年的，你年轻，要跟优秀的人一起做事，学会他们的工作方法，待人处事，不要一直想着要好好做，就单纯的好好去做。所有的学习，最开始都像是在照镜子，无非是学到了，再换一个老师，换一面镜子，直到有一天你发现，新的镜子里是你自己，你就有你自己的方法了，你就可以做别人的镜子了。  


<p style="color:blue">1.使用代码画一个三角形 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

```
.triangle{
  width:0;
  height:0;
  border:100px solid red;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

```
</p>
</details>

<p style="color:blue">2. 1rem、1em、1vh、1vw、1px各自代表的含义？vw和vh与百分比的区别？vw和%可以同时使用吗，比如宽度用vw，padding用%？ 讲讲viewport和移动端布局 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 1rem与网站根标签font-size有关，若html根标签设置font-size:20px,那么这里的1rem为20px；  
- 1em与父元素有关，若父元素设置的font-size:20px;那么在子组件中2em就表示为40px；   
- 1vh(Viewport Height)表示可视化窗口高度的的1%；
- 1vw(Viewport Width)表示可视化窗口宽度的的1% ；
- 1px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的；

- vw和%同时使用可能会发生宽度自动滑动的问题，建议尽量宽度使用%。  

- 

</p>
</details>

<p style="color:blue">3. 普通文档流的布局规则和BFC布局规则？BFC的理解？清除浮动的方式？ 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

普通文档流奇怪问题：
1. 两个相邻元素的margin会重叠
2. 父子元素相邻时，子元素的margin属性会传递到父元素中
3. 普通文档流存在的问题可以通过触发BFC机制去解决

* 触发BFC机制：
1. float:left | right (父元素若没给定高度，使用float布局、会有高度坍缩问题)
2. overflow:auto| hidden| scroll
3. display:flex | inline-block | table-cells
4. position:absolute | fixed

[https://github.com/febobo/web-interview/issues/99](https://github.com/febobo/web-interview/issues/99)

</p>
</details>

<p style="color:blue">4. 说一下图片懒加载和预加载 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。  
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。  

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

</p>
</details>

<p style="color:blue">5. JS哪些操作会引起内存泄漏  【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. 意外的全局变量；在js文件开头添加 ‘use strict’，开启严格模式；
2. 未清理的DOM元素引用；
    var a = document.getElementById('id');
    document.body.removeChild(a);
解决：a = null；
3. 被遗忘的定时器或者回调；
解决：调用clearInterval或者clearTimeout
4. 闭包

</p>
</details>

<comment/>