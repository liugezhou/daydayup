---
title: Day21
---

<div align="right" style="color:#512DA8">2022-10-25 星期二</div> 

> 任何一个你不喜欢又离不开的地方，任何一种你不喜欢又摆脱不了的生活，就是监狱。如果你感到痛苦和不自由，希望你心里永远有一团不会熄灭的火焰，不要麻木，不要被同化。

<p style="color:blue">1. 忽略对象的可枚举属性(enumerable)为false的操作有哪些？【JS】</p>
<details>
<summary><b>参考答案</b></summary>

- for...in循环:会遍历对象自身和继承的可枚举属性
- Object.keys():只遍历对象自身可枚举的属性  
- JSON.stringify():只串行化对象自身的可枚举属性 
- Object.assign():只拷贝对象自身的可枚举属性  

</details>

<hr/>
<p style="color:blue">2. Redux的connect方法详解 【React】 </p>
<details>
<summary><b>参考答案</b></summary>

1. redux的connect方法接收四个参数，`mapStateToProps` 、 `mapDispatchToProps`、 `mergeProps`、 `options` 
2. `mapStateToProps` 
  - 语法：mapStateToProps(state,[OwnProps]){} 
  - 该方法允许我们将store中的数据作为props绑定到组件中，只要store发生了变化就会调用mapStateToProps方法  
  - mapStateToProps返回的结果必须是一个纯对象，这个纯对象会与组件的props合并
3. `mapDispatchToProps`
  - 语法: mapDispatchToProps(dispatch,[OwnProps]){}  || Object
  - 该方法允许我们将action作为props绑定到组件中 
  - 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作Redux action creator，对象所定义的方法名作为属性名.每个方法将返回一个新的函数，函数中 dispatch 方法会将 action creator 的返回值作为参数执行。这些属性会被合并到组件的 props 中。
```javascript
dispatch => ({
  login: (...args) => dispatch(loginAction.login(..args)),
})

// or
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => dispatch(actions.increase(...args)),
    decrease: (...args) => dispatch(actions.decrease(...args))
  }
}
4. `mergeProps`和`options`暂不补充。
```

</details>

<hr/>
<p style="color:blue">3. JS操作字符串的方法有哪些 【JS】</p>
<details>
<summary><b>参考答案</b></summary>

`let s = 'string`
- s.length          获取字符串长度
- s.charAt(1)       获取字符串指定位置的字符
- s.charAtCode(1)   获取字符串指定位置的Unicode码值   
- s.includes('ing') 检查字符串是否包含特定系列
- s.indexOf('ing')  检查字符串是否包含特定系列
- s.concat('1','2') 连接多个字符串  
- s.split(',')      按传入的格式分割字符串
- s.slice(s,e)      从s下标开始,e下标结束(前包后不包)截取字符串,不会改变原字符串
- s.substr(s,l)     从s下标开始，截取l个字符串，不会改变原字符串
- s.toUpperCase()   小写字符转大写字符
- s.toLowerCase()   大写字符转小写字符
- s.replace(reg,'') 字符串替换
- s.match(reg)      字符串匹配 
- s.trim()          字符串前后空清除
- s.repeat()        字符串重复
- s.padStart()      补气字符串长度

</details>

<hr/>
<p style="color:blue">4. HTTP1.1的主要问题,以及HTTP2.0是如何解决的  【HTTP】</p>

<details>
<summary><b>参考答案</b></summary>

- HTTP1.1的核心问题是:对宽带的利用不理想，主要造成的原因有。
  1. TCP的慢启动（慢启动是 指刚开始的时候 TCP 协议它会采用一种非常慢的速度去发送数据，然后慢慢加快发生数据的速度）
  2. 开启的多条TCP连接，会竞争固定宽带，影响了关键资源下载速度
  3. 队头阻塞问题(同一时刻只能处理一个请求，请求结束前，其它请求处于阻塞状态)

- HTTP2.0解决思路
  1. 一个域名只使用一个TCP 长连接来传输数据，这样整个页面的资源下载只需要一次慢启动，且避免了多个 TCP 连接竞争宽带的问题。
  2. 针对队头阻塞问题，通过实现资源的并行请求(任何时候都可以向服务器发送请求)

  即：多路复用机制。
  
</details>

<hr/>
<p style="color:blue">5. CSS中的常用伪类和伪元素有哪些 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>

1. 伪类可以从状态类伪类、结构类伪类、其它伪类和表单相关伪类进行分类。

- 状态类伪类：** :hover、:link、:active、:visited、:focus**
- 结构类伪类：** :first-child、:last-child、:nth-child(n)**
- 其它伪类：   :fullscreen全屏显示、:lang()匹配指定语言
- 表单相关伪类：  :checked选中、:disabled禁用、:required必填、:read-only只读

2. 伪元素：::before、::after、::first-letter、::first-line、::selection、::placeholder

</details>

<comment/>