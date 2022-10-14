---
title: Today
---

<div align="right" style="color:#512DA8">2022-10-13 星期四</div> 

> 不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。

<hr/>
<p style="color:blue">1. Jest常用的expect方法有哪些？ 【Jest】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- expect(a).toBe(b) 
- expect(a).toEqual(b) 
- expect(a).not.toBe(b)
- expect(a).toBeNull(b)
- expect(a).toBeUndefined()
- expect(a).toBeTruthy()
- expect(a).toBeFalsy()
- expect(a).toContain(b)

</p>
</details>

<hr/>
<p style="color:blue">2. 微信小程序的自动化测试流程步骤  【miniProgram】</p>
<details>
<summary><b>参考答案</b></summary>
<p>
小程序官方的`Automator`模块,提供了启动及连接开发者工具的方法。    

通过connect方法连接到开发工具后，通过 `miniProgram`、`Page` 、`Element`三个模块进行自动化测试。

[简单总结见这里](https://blog.liugezhou.online/032-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95/)

</p>
</details>

<hr/>
<p style="color:blue">3. rgba和opacity的透明效果有什么不同？【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. 定义
- opacity：取值0-1，0表示完全透明，1表示完全不透明；
- rgba：R表示红色，G表示绿色，B表示蓝色，A表示透明度，取值0-1，0表示完全透明，1表示完全不透明；
2. 区别： 
- opacity作用于元素以及元素内所有内容.    
- rgba（）只作用于元素的颜色或者背景图；    
即opacity会继承父元素的opacity属性，而RGBA设置的元素的后代元素不会继承其属性。

</p>
</details>

<hr/>
<p style="color:blue">4. js中的BOM和DOM有什么区别？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>
javascript是由三部分构成，ECMAScript，DOM和BOM，根据宿主（浏览器）的不同，具体的表现形式也不尽相同

### BOM是浏览器对象模型 Browser Object Model
- BOM和浏览器关系密切。是浏览器的内置脚本语言。浏览器的很多东西可以通过JavaScript控制的，例如打开新窗口、打开新选项卡（标签页）、关闭页面，把网页设为主页，或加入收藏夹，等等
- BOM由于没有标准，不同的浏览器实现同一功能，可以需要不同的实现方式。对于上面说的功能，不同的浏览器的实现功能所需要的JavaScript代码可能不相同。
- 常用BOM对象:window、Screen、Cookie、XMLHttpRequest、Storage、History、Location、IndexDB、WebWorker等
### DOM是文档对象模型 Document Object Model
- DOM和文档有关，这里的文档指的是网页，也就是HTML文档。网页是由服务器发送给客户端浏览器的，无论用什么浏览器，接收到的HTML都是一样的，所以DOM和浏览器无关，它关注的是网页本身的内容。由于和浏览器关系不大，所以标准就好定了。
- DOM是W3C的标准.
- DOM的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。     
浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。       
DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。

</p>
</details>

<hr/>
<p style="color:blue">5. bind，apply，call三者的区别 【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 首先，bind，call，apply的作用都是用来改变this指向的。 
- apply方法接收两个参数，第一个参数是this的指向，第二个参数是函数接收的参数，已数组形式传入，且当第一个参数为null、undefined的时候，this默认指向window对象  
- call方法接收的第一个参数也是this的指向，后面传入的是一个参数列表，其他与apply相同。 
- bind和call方法相似，知识它改变this的指向后不会立即执行，而是返回一个永久改变this指向的函数。

</p>
</details>

<comment/>