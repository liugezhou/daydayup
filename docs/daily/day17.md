---
title: Day17
---

<summary><b>2022-10-14 星期五</b></summary>

> 生命在于折腾。做成一件事情时，不要特别放大自己；事情没做好，也不用气馁。 一定要相信我是牛逼的，这件事情不行没有关系，我接着做下一个，我死之前一直干，早晚能成。

<p style="color:blue">1. 进行SEO优化需要注意什么？</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 合理的title、description、 keywords:搜索对着三项的权重逐个减小，title强调重点，description把页面内容高度概括(不可过分堆砌关键词)、keywords列出重要关键词。
- 重要内容不用js输出，爬虫不会执行js获取内容  
- 非装饰性图片必须加alt
- 提高网站速度(网站速度是搜索引擎排序的一个重要指标)
- 谨慎使用display属性
- 减少使用iframe框架
- 服务端渲染
……

</p>
</details>

<hr/>
<p style="color:blue">2. React的有哪些限制以及JSX是什么 【React】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

React的限制如下：

- React 只是一个库，而不是一个完整的框架
- 它的库非常庞大，需要时间来理解
- 新手程序员可能很难理解
- 编码变得复杂，因为它使用内联模板和 JSX

JSX
- JSX 是J avaScript XML 的简写。是 React 使用的一种文件，它利用 JavaScript 的表现力和类似 HTML 的模板语法。这使得 HTML 文件非常容易理解。此文件能使应用非常可靠，并能够提高其性能

</p>
</details>

<hr/>
<p style="color:blue">3.babel插件与预设的理解 【babel】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- babel的核心是插件，babel的所有工作都是由插件完成的。
- babel预设是指：将一系列的常用插件集中在一个篮子里`babel/preset-env`,这样就不用单独的去一个一个安装babel提高的必要插件了 。  
```
{
  "plugins": [],
  "presets": [
    "@babel/preset-env"
  ]
}
```

</p>
</details>

<hr/>
<p style="color:blue">4. Webpack中loader与plugin的区别，以及如何自定义 【Webpack】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

**区别**
- loader本身就只是一个函数，在该函数中对接收到的内容进行转换。它是个翻译官，它在modules的rules中配置，内部包含test、loader和options属性。
- Plugin就是插件，基于事件流。Webpack在运行当中会去广播一些事件，plugin去监听这些事件，然后干活。plugin单独配置，通过构造函数传入参数生效。

**自定义loader**
- loader本质上是一个函数
- 因为函数中的this作为上下文会被webpack填充，因此不能将loader设为一个箭头函数
- 该函数接受一个参数，这个参数是webpack传递给loader的文件源内容

**自定义Plugin**
- webpack编译会创建两个核心对象：compiler和compilation
- compiler：包含了webpack环境的所有配置消息，包括options、loader和plugin，以及webpack整个生命周期相关的钩子
- compilation：作为Plugin内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的compilation将被创建
```Javascript
// 导出一个函数，其中source为webpack传递给loader的输入参数--文件源内容
module.exports = function(source){
  const content = doSomething2JsString(source);
  // 如果loader配置了options对象，那么this.query将指向options
  const options = this.query
  this.fallback(null,content) //异步
  return content; //同步
}
```
自定义Plugin，需要遵循的规范是：插件必须是一个函数或是包含apply方法的对象，这样才能访问compiler实例
```javascript
class MyPlugin{
  //Webpack会调用MyPlugin实例的apply方法给插件实例传入compiler对象
  apply(compiler){
    // 找到合适的事件钩子，实现自己的插件
    compiler.hooks.emit.tap('MyPlugin',compilation=>{
      //do something
    })
  }
}
```

</p>
</details>

<hr/>
<p style="color:blue">5. CSS如何声明变量 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 变量声明的时候变量名前面要加两根连接线 `--`
- var()函数用于读取变量

[更多内容](https://www.ruanyifeng.com/blog/2017/05/css-variables.html)

</p>
</details>

<comment/>