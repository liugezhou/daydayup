---
title: Day21
---

<div align="right" style="color:#512DA8">2022-10-25 星期二</div> 

> 

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
<p style="color:blue">3. </p>
<details>
<summary><b>参考答案</b></summary>

</details>

<hr/>
<p style="color:blue">4. </p>

<details>
<summary><b>参考答案</b></summary>

</details>

<hr/>
<p style="color:blue">5. </p>

<details>
<summary><b>参考答案</b></summary>


</details>

<comment/>