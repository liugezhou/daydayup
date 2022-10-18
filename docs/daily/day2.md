---
title: Day2
---
<summary><b>2022-09-20 星期二</b></summary>

> 人心中的成见是一座大山，任你怎么努力都休想搬动，一生中能改变命运的机会可不多呀。  

<p style="color:blue">1.你知道哪几种状态码? 都表示什么？【HTML】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 200 请求成功  
- 301 资源(网页)等被永久转移到其它URL
- 302 Found 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI
- 304 Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
- 400 客户端请求的语法错误，服务器无法理解
- 401 请求要求用户的身份认证
- 403 服务器理解请求客户端的请求，但是拒绝执行此请求
- 404 请求的资源不存在
- 500 内部服务器错误
- 502 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
- 505 服务器不支持请求的HTTP协议的版本，无法完成处理

</p>
</details>

<p style="color:blue">2.使用css画一条0.5px的线 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

.line{
  border:1px solid gray;
  transform:scaleY(0.5);
}

</p>
</details>

<p style="color:blue">3. link标签和import标签的区别 【html】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- link 属于 html 标签，而@import 是 css 提供的
- 页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面加载结束后加载。
- link 方式样式的权重高于@import 

</p>
</details>

<p style="color:blue">4. CSS选择器有哪些，优先级排序以及CSS的三大特性 【CSS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- id 选择器，class 选择器，标签选择器，伪元素选择器，伪类选择器等 
- 优先级：important > 内敛样式 > id 选择器 > class 选择器 > 标签选择器

</p>
</details>

<p style="color:blue">5. "use strict"的作用是什么？【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

use strict 出现在 JavaScript 代码的顶部或函数的顶部，可以帮助你写出更安全的 JavaScript 代码。如果你错误地创建了全局变量，它会通过抛出错误的方式来警告你。例如，以下程序将抛出错误：
```
function doSomething(val) {
 "use strict"; 
 x = val + 10;
}
```
它会抛出一个错误，因为 x 没有被定义，并使用了全局作用域中的某个值对其进行赋值，而 use strict 不允许这样做。下面的小改动修复了这个错误：
```
function doSomething(val) {
 "use strict"; 
 var x = val + 10;
}
```

</p>
</details>

<comment/>