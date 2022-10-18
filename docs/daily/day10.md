---
title: Day10
---
<summary><b>2022-09-30 星期五</b></summary>

> 很多时候，人的勇敢来自于没有选择。

<p style="color:blue">1. get请求传参长度的误区 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

误区:我们经常说get请求参数的大小存在限制，而post请求的参数大小是无限制的。  
实际上HTTP协议从未规定GET/POST的请求长度限制是多少。对get请求参数的限制是来源与Web浏览器，浏览器限制了url的长度，为了明确这个概念我们必须再次强调下面几点： 
- HTTP协议未规定GET和POST的长度限制 
- GET的最大长度显示是因为浏览器限制了URL的长度  
- 不同浏览器 限制的最大长度不一样：若支持IE最大长度为2083byte，若只支持Chrome，最大长度为8182byte

</p>
</details>

<p style="color:blue">2. mouseover和mouseenter的区别 【】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程，对应的移除事件是mouseout。 
- mouseenter：当鼠标移除元素本身(不包含元素的子元素)会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

</p>
</details>

<p style="color:blue">3. 使元素消失的方法有哪些？【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- opacity:0 该元素被隐藏了，但不会改变页面布局，且若该元素绑定了事件，还会继续触发。  
- visibility:hidden 该元素隐藏，但不会改变页面布局，若该元素绑定了事件，不会触发。  
- display:none 该元素隐藏，且会改变页面布局，在页面中将该元素删除掉

</p>
</details>

<p style="color:blue">4. script标签中defer和async的区别 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行; 
- async属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；   
- defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。

</p>
</details>

<p style="color:blue">5. 强缓存和协商缓存 【HTML】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 强缓存是从缓存中读取的，状态码是200(from cache)，不会发送请求,直接从缓存中存取  
- 协商缓存从缓存中读取的，状态码是304(not modified),会发送请求，通过服务器来告知缓存是否可用

- 强缓存相关字段有：expires、cache-control.],若同时存在，cache-control优先级高于expires 
- 协商缓存相关字段有：Last-modified/If Modified Since,Etag/If None Match

</p>
</details>

<comment/>