---
title: Day30
---

<div align="right" style="color:#512DA8">2022年12月15日 星期四</div>

>  一个人可以失败很多次，但是只要他没有开始责怪旁人，他还不是一个失败者。 

<p style="color:blue">1. 手写一个监听复制事件覆盖默认行为 【JS】 </p>
<details>
<summary><b>参考答案</b></summary>

```JavaScript
  window.addEventListener('copy',(e)=>{
    e = window.event || e
    e.preventDefault()
    e.clipboardData.setData('text','覆盖默认复制内容')
  })
```
在浏览网站的时候，如果网页禁止复制，快速的操作方法是:   
控制台console里面输入:`document.body.contentEditable = true` 即可。

</details>

<hr/>
<p style="color:blue">2. UserAgent是什么？  </p>
<details>
<summary><b>参考答案</b></summary>

**UserAgent是什么**
> User-Agent中文名为用户代理，简称UA，是HTTP协议中的一部分，属于头域的组成部分。它是一个特殊的字符串头。  
> 服务器用来识别客户使用的操作系统、版本、CPU类型、浏览器版本、浏览球渲染引擎、浏览器语言、浏览器插件等。 
> 网页一般根据这个标识来显示不同的排版。

`UA可以进行伪装`:简单的方式是直接使用Chrome插件- User-Agent Switcher for Chrome。

[常见UA](https://zhuanlan.zhihu.com/p/97973031)

**识别爬虫**
服务器可以轻易识别请求来自爬虫

```markdown
正常浏览器的User-Agent值为：Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0
使用requests时的默认User-Agent为：python-requests/2.18.4
scrapy的默认值为：Scrapy/1.5.0 (+https://scrapy.org)
```
因此为了减少爬虫被ban的几率，可以通过设置User-Agent来达到欺骗服务器的目的。


</details>

<hr/>
<p style="color:blue">3.Docker常见命令与部署实践  </p>
<details>
<summary><b>参考答案</b></summary>

[参考链接](https://blog.liugezhou.online/021-Docker%E7%9B%B8%E5%85%B3/)

</details>

<hr/>
<p style="color:blue">4. background-size的属性有哪些？ 【CSS】  </p>

<details>
<summary><b>参考答案</b></summary>

**cover**
图片放大至能满足背景区域的最大边时为止，当背景区域与背景图片的宽高不一致时，背景图片会在短边下有裁切，显示不全。

**contain**
与cover相反，图片放大至满足背景区域的最小边时即止，当背景区与背景图片的宽高比不一致的情况下，背景区域会在长边处有空白区域。

**百分比**
可以设置两个值，第一个为长度，第二个为高度。  

</details>

<hr/>
<p style="color:blue">5. CSS一键页面置灰 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>

```CSS
body{
  -webkit-filter:grayscale(100%);
  -moz-filter:grayscale(100%);
  -ms-filter:grayscale(100%);
  -o-filter:grayscale(100%);
  filter:grayscale(100%);
}
```

</details>

<comment/>
