---
title: Day12
---

<summary><b>2022-10-09 星期日</b></summary>

> Life was a box of chocolates, you never know what you're gonna get.

<p style="color:blue">1. 浏览器在生成页面的时候，会生成那两颗树？【Web】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

构造两棵树，DOM 树和 CSSOM 规则树，
当浏览器接收到服务器相应来的 HTML 文档后，会遍历文档节点，生成 DOM 树，
CSSOM 规则树由浏览器解析 CSS 文件生成。

</p>
</details>

<hr/>
<p style="color:blue">2. csrf 和 xss 的网络攻击及防范 【Web】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

CSRF：跨站请求伪造，可以理解为攻击者盗用了用户的身份，以用户的名义发送了恶意请求，比如用户登录了一个网站后，立刻在另一个tab页面访问量攻击者用来制造攻击的网站，这个网站要求访问刚刚登陆的网站，并发送了一个恶意请求，这时候CSRF 就产生了。  
比如这个制造攻击的网站使用一张图片，但是这种图片的链接却是可以修改数据库的，这时候攻击者就可以以用户的名义操作这个数据库，防御方式的话：使用验证码，检查 https 头部的 refer，使用 token。

XSS：跨站脚本攻击，是说攻击者通过注入恶意的脚本，在用户浏览网页的时候进行攻击，比如获取 cookie，或者其他用户身份信息，可以分为存储型和反射型，存储型是攻击者输入一些数据并且存储到了数据库中，其他浏览者看到的时候进行攻击，反射型的话不存储在数据库中，往往表现为将攻击代码放在 url 地址的请求参数中，防御的话为 cookie 设置 httpOnly 属性，对用户的输入进行检查，进行特殊字符过滤。

</p>
</details>

<hr/>
<p style="color:blue">3. cookie 和 session 的区别 【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. cookie 数据存放在客户的浏览器上，session 数据放在服务器上。
2. cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺 骗
考虑到安全应当使用 session。
3. session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务
器的性能
考虑到减轻服务器性能方面，应当使用 COOKIE。
4. 单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存
20 个 cookie。

</p>
</details>

<hr/>
<p style="color:blue">4. overflow 的原理 【CSS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

要讲清楚这个解决方案的原理，首先需要了解块格式化上下文
> A block formatting  context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other.

翻译过来就是:块格式化上下文是 CSS 可视化渲染的一部分，它是一块区域，规定了内部块盒 的渲染方式，以及浮动相互之间的影响关系   

当元素设置了 overflow 样式且值部位 visible 时，该元素就构建了一个 BFC，BFC 在计算高度时，内部浮动元素的高度也要计算在内，也就是说技术 BFC 区域内只有一个 浮动元素，BFC 的高度也不会发生塌缩，所以达到了清除浮动的目的。  

</p>
</details>

<hr/>
<p style="color:blue">5. box-sizing 的语法和基本用处 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

box-sizing 规定两个并排的带边框的框，语法为 box-sizing：content-box/border-box/inherit

- content-box：宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内边距和边框
- border-box：为元素设定的宽度和高度决定了元素的边框盒，
- inherit：继承父元素的 box-sizing

</p>
</details>

<comment/>