---
title: Day24
---

<div align="right" style="color:#512DA8">2022-10-28 星期五</div>

> 你日渐平庸，甘于平庸，将继续平庸。

<p style="color:blue">1. Vue如何监听Vuex的变化  【Vue】</p>
<details>
<summary><b>参考答案</b></summary>

1. 通过 watch 方法监听

```JavaScript
const app = createApp({
    watch: {
        '$store.state.counter'() {
        console.log('https://day.liugezhou.online');
        }
    }
})
```

2. 使用 vuex 提供的 API：`store.subscribe()`

```JavaScript
store.subscribe((mutation, state) => {
    if (mutation.type === 'add') {
        console.log('counter change in subscribe()!');
    }
})
```

总结：

- watch 方式简单好用，且能获取变化前后值，首选；
- subscribe 方法会被所有 commit 行为触发，因此还需要判断 mutation.type，用起来略繁琐，一般用于 vuex 插件中。

</details>

<hr/>
<p style="color:blue">2. 详细解释 React 组件的生命周期方法 【React】 </p>
<details>
<summary><b>参考答案</b></summary>

一些最重要的生命周期方法是：

- componentWillMount() – 在渲染之前执行，在客户端和服务器端都会执行。
- componentDidMount() – 仅在第一次渲染后在客户端执行。
- componentWillReceiveProps() – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
- shouldComponentUpdate() – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。
- componentWillUpdate() – 在 DOM 中进行渲染之前调用。
- componentDidUpdate() – 在渲染发生后立即调用。
- componentWillUnmount() – 从 DOM 卸载组件后调用。用于清理内存空间。

</details>

<hr/>
<p style="color:blue">3. 微信小程序中的e.target 和 e.currentTarget 有什么区别？ 【miniProgram】</p>
<details>
<summary><b>参考答案</b></summary>

e.target与e.currentTarget的区别尤其是涉及到页面传值时，特别有用。

- e.target：触发事件的元素
- e.currentTarget：绑定事件的元素

简答举例:   
有一个父元素绑定了事件，父元素中有A B两个子元素,当我们点击A或者B元素的时候，这个时候e.target指的是A或B，e.currentTarget指的是父元素。   

即：
1. 如果绑定的事件所在组件没有子元素，则用e.target===e.currentTarget一样；
2. 如果事件绑定在父元素中，且该父元素有子元素，当用e.currentTarget时，不管点击父元素所在区域还是子元素（当前事件），都正确执行，若用e.target时，点击父元素所在区域无错，点击子元素区域，执行报错-------》报错的原因是事件没绑定在子元素上，是在父元素上，子元素要用e.currentTarget才正确！

总之：使用e.target时要注意，e.currentTarget就无所谓了~

</details>

<hr/>
<p style="color:blue">4. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？【CSS】 </p>

<details>
<summary><b>参考答案</b></summary>

- clientWidth/clientHeight 返回的是元素的内部宽度，它的值只包含 content + padding，如果有滚动条，不包含滚动条。 clientTop 返回的是上边框的宽度。 clientLeft 返回的左边框的宽度。 

- offsetWidth/offsetHeight 返回的是元素的布局宽度，它的值包含 content + padding + border 包含了滚动条。 offsetTop 返回的是当前元素相对于其 offsetParent 元素的顶部的距离。 offsetLeft 返回的是当前元素相对于其 offsetParent 元素的左部的距离。 

- scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸。 scrollTop 属性返回的是一个元素的内容垂直滚动的像素数。 scrollLeft 属性返回的是元素滚动条到元素左边的距离。

</details>

<hr/>
<p style="color:blue">5.HTML中常⽤的meta标签有哪些 【HTML】 </p>

<details>
<summary><b>参考答案</b></summary>

meta 标签由 name 和 content 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些name作为大家使用的共识，开发者还可以自定义name。
- `<meta charset="UTF-8" >` : 用来描述HTML文档的编码类型
- `<meta name="keywords" content="关键词" />` : 页面关键字设置
- `<meta name="description" content="页面描述内容" />` : 页面描述设置
- `<meta http-equiv="refresh" content="0;url=" />` : 页面重定向和刷新
- `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` :适配移动端，可以控制视口的大小和比例：
- `<meta name="robots" content="index,follow" />`:<meta name="robots" content="index,follow" />
  content参数有：
    - all：文件将被检索，且页面上的链接可以被查询；
    - none：文件将不被检索，且页面上的链接不可以被查询；
    - index：文件将被检索；
    - follow：页面上的链接可以被查询；
    - noindex：文件将不被检索；
    - nofollow：页面上的链接不可以被查询。

</details>
