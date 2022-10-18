---
title: Day18
---

<summary><b>2022-10-18 星期二</b></summary>

> 不要追求当一个老好人，要去追求当一个强人。你没有那么强的能量，你去当好人，你不仅不会有好报，你还会死的很快。好人不会有好报，但是强人会有好报。

<p style="color:blue">1. Webpack Proxy工作原理？为什么能解决跨域 【Webpack】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

参考答案[掘金](https://juejin.cn/post/7141295947006345229)

</p>
</details>

<hr/>
<p style="color:blue">2. HTML5 drag API 【HTML】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

</p>
</details>

<hr/>
<p style="color:blue">3. Vue编程式导航的写法有哪些 【Vue】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

```javascript
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })

// 替换当前位置
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

注意： 如果提供了 path，params 会被忽略

</p>
</details>

<hr/>
<p style="color:blue">4. 数组如何进行降维（扁平化） 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

1、利用 Array.some 方法判断数组中是否还存在数组，es6 展开运算符连接数组

```javascript
let arr = [1, 2, [3, 4]]
while (arr.some((item) => Array.isArray(item))) {
  arr = [].concat(...arr)
}
```

2、使用数组的 concat 方法

```javascript
let arr = [1, 2, [3, 4]]
let result = []
result = Array.prototype.concat.apply([], arr)
```

3、 使用数组的 concat 方法和扩展运算符

```javascript
var arr = [1, 2, [3, 4]]
var result = []
result = [].concat(...arr)
```

4、es6 中的 flat 函数也可以实现数组的扁平化

```javascript
    let arr = [1,2,['a','b',['中','文',[1,2,3,[11,21,31]]]],3];
    let result = arr.flat( Infinity )
    注意：flat方法的infinity属性，可以实现多层数组的降维
```

</p>
</details>

<hr/>
<p style="color:blue">5. Chrome如何支持小于12px 的文字 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. 方案一：使用zoom
- zoom 可以改变页面上元素的尺寸，属于真实尺寸。
- zoom:50%，表示缩小到原来的一半
- zoom:0.5，表示缩小到原来的一半
```css
.span10{
    font-size: 12px;
    display: inline-block;
    zoom: 0.8;
}
```
2. transform:scale()
```css
.span10{
    font-size: 12px;
    display: inline-block;
    transform:scale(0.8);
}
```
</p>
</details>

<comment/>
