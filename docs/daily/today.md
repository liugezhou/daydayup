---
title: Day25
---

<div align="right" style="color:#512DA8">2022年10月31日 星期一</div>

> When you want something, all the universe conspires in helping you to achieve it.

<p style="color:blue">1. Vue2中为什么只能有一个根组件 【Vue】</p>
<details>
<summary><b>参考答案</b></summary>

- vue2中组件确实只能有一个根，但vue3中组件已经可以多根节点了。
- 之所以需要这样是因为vdom是一颗单根树形结构，patch方法在遍历的时候从根节点开始遍历，它要求只有一个根节点。组件也会转换为一个vdom，自然应该满足这个要求。
- vue3中之所以可以写多个根节点，是因为引入了`Fragment`的概念，这是一个抽象的节点，如果发现组件是多根的，就创建一个`Fragment`节点，把多个根节点作为它的children。将来patch的时候，如果发现是一个`Fragment`节点，则直接遍历children创建或更新。

</details>

<hr/>
<p style="color:blue">2. 怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？ </p>
<details>
<summary><b>参考答案</b></summary>

 **1. keep-alive是什么**
- keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM，它是包裹动态组件，会缓存不活动的组件实例，而不是销毁他们。  

- props属性可以设置为 include、exclude和max

- 设置了keep-alive缓存的组件，会多出两个生命周期钩子 `activated`和`deactivated` 
   -  首次进入组件: beforeRouteEnter -> beforeCreate -> created -> beforeMount -> mounted -> activated -> beforeRouteLeave -> deactivated
   -  再次进入组件: beforeRouteEnter -> activated -> beforeRouteLeave -> deactivated

**2. 组件缓存后如何更新**
因经过keep-alive包裹的组件进入时均会执行 beforeRouteEnter和activated两个生命周期钩子，因此可以在这两个钩子内进行数据获取。

</details>

<hr/>
<p style="color:blue">3.Javascript中如何实现函数缓存？函数缓存有哪些应用场景？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>

**是什么**
函数缓存，就是将函数运算过的结果进行缓存，本质上是用空间（缓存存储）换时间（计算过程），常用于缓存数据计算结果和缓存对象。  

```Javascript
const res = (a,b) => a+ b
const sum = memorize(res) //函数缓存
sum(1,2)
sum(12,20)
```

**如何实现**
实现函数缓存主要依靠闭包、柯里化、高阶函数。
- 闭包：函数和函数体内可访问的变量总和，组合在一起就形成了闭包。  
- 柯里化：把接收多个参数的函数转换成接收一个单一参数的函数。
```javascript
let sum = function(x,y){
  return x + y
}
sum(2,5)
let sum2 = function(x){
  return function(y){
    return x + y
  }
}
sum(2)(5)
```
- 高阶函数：通过接收其它函数作为参数或返回其它函数的函数
```javascript
function foo(){ // 函数foo返回另一个函数bar
  let a = 2;
  function bar(){
    console.log(a)
  }
  return bar
}
let baz = foo()
baz()
```

实现代码实例
```javascript
const memorize = function(func,content){
  let cache = Object.create(null)
  content = content || this
  return (...key) =>{
    if(!cache[key]){
      cache[key] = func.apply(content,key)
    }
    return cache[key]
  }
}
const result = memorize(sum)
const num1 = result(100,200)
const num2 = result(100,200) //缓存得到的结果
```
</details>

<hr/>
<p style="color:blue">4.如何判断一个元素是否在可视区域中？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>

[https://github.com/febobo/web-interview/issues/84](https://github.com/febobo/web-interview/issues/84)

</details>

<hr/>
<p style="color:blue">5. 说说对 Node 中的 process 的理解？有哪些常用方法？ 【Node】</p>

<details>
<summary><b>参考答案</b></summary>

**是什么**
process对象是一个全局变量，提供了有关当前Node.js进程的信息并对其控制，作为一个全局变量。  

**属性和方法**
- process.env: 环境变量，例如通过`process.env.NODE_ENV`获取不同环境的项目配置信息 
- process.nextTick: 这个在谈及EventLoop时经常被提到
- process.id: 获取当前的进程ID
- process.ppid:当前进程对应的父进程
- precess.cwd():获取当前进程工作目录
- process.platform:获取当前进程运行的操作系统平台
- process.uptime(): 当前进程已运行时间，例如pm2守护进程的uptime值
- 进程事件: process.on('uncaughtException',cb)--捕获异常信息、process.on('exit',cb) -- 进程推出监听
- 三个标准流: process.stdout(标准输入)、process.stdin(标准输入)、process.stderr(标准错误输出)
- process.title:指定进程名称，有的时候需要给进程指定一个名称

</details>

<comment/>
