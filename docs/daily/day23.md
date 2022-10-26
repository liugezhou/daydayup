---
title: Day23
---

<div align="right" style="color:#512DA8">2022-10-27 星期四</div>

> 原谅自己,我不是那么厉害的人,做不到就做不到,没啥大不了的。

<h4>Promise输出专项练习，相信你在弄懂了这几道打印输出后，会对Promise(微任务)的代码执行顺序有一个较清晰的认识,后续会继续补充。</h4>


<p style="color:blue">1. Promise demo1 </p>

```JavaScript
const promise1 = new Promise((resolve,reject)=>{
  console.log('promise1')
})
console.log('1',promise1)
```

<details>
<summary><b>参考答案</b></summary>

答案是: 
> promise1   
> 1 Promise `{<pending>}`

先执行构造函数中的代码promise1，然后执行同步代码 1，由于没有resolve或者reject，此时状态为pending. 

</details>

<hr/>
<p style="color:blue">2.  Promise demo2 </p>

```JavaScript
const promise = new Promise((resolve,reject)=>{
  console.log(1)
  resolve('success')
  console.log(2)
})
promise.then(()=>{
  console.log(3)
})
console.log(4)
```
<details>
<summary><b>参考答案</b></summary>

答案是:
> 1   
> 2   
> 4   
> 3   

1. 首先执行同步代码，打印出1
1. 接着resolve的出现，只是将promise的状态改变成了resolved，并且将success这个值保存了下来。
1. 会接着执行同步代码，输出2
1. promise.then是一个微任务，放入到微任务列表，等待宏任务执行完毕后，再执行微任务列表
1. 继续执行本轮的宏任务，输出4
1. 接着本轮宏任务执行完毕，检查微任务列表发现了这个promise…then，执行输出3

</details>

<hr/>
<p style="color:blue">3. Promise demo3 </p>

```JavaScript
const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
```
<details>
<summary><b>参考答案</b></summary>

答案是:   
> 1   
> 2   
> 4

- 在promise中因为没有resolve或者reject，因此promise.then不会执行,即不会打印3

</details>

<hr/>
<p style="color:blue">4. Promise demo4 </p>

```JavaScript
const promise1 = new Promise((resolve, reject) => {
  console.log('1')  
  resolve('2')      
})
const promise2 = promise1.then(res => { 
  console.log(res)  
})
console.log('3', promise1);  
console.log('4', promise2);  
```

<details>
<summary><b>参考答案</b></summary>

答案是:   
> 1   
> 3 Promise {`<fulfilled>`: '2'}    
> 4,Promise {`<pending>`}   
> 2


```JavaScript
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')  // 1 执行构造函数中代码，打印输出
  resolve('resolve1')      // 2 将promise1状态改为resolved，并将结果保存下来
})
const promise2 = promise1.then(res => { // 3. 将这个微任务，放入到微任务队列
  console.log(res)  // 6.执行微任务，打印出结果 resolve1
})
console.log('1', promise1);  //4 打印出promise1的状态为 resolved
console.log('2', promise2);  //5 打印出promise2的状态为 pending，宏任务执行完毕，寻找微任务队列,去到步骤6
```


</details>

<hr/>
<p style="color:blue">5.Promise demo5 </p>

```JavaScript
const fn = () => (new Promise((resolve, reject) => {
  console.log(1)   
  resolve('success') 
}))
fn().then(res => { 
  console.log(res) 
})
console.log('start') 
```
<details>
<summary><b>参考答案</b></summary>

答案是:   
> 1    
> start   
> success

```JavaScript
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);   //2.执行同步代码，打印1
  resolve('success') //3.更新fn的状态为resolved的Promise，且保存其值
}))
fn().then(res => { // 1.执行fn函数，.then为微任务列表，等待本轮宏任务执行完毕来检查
  console.log(res)  // 4执行完，发现有微列表，打印success
})
console.log('start') // 4 本来宏任务，打印4
```
</details>
<hr/>
<p style="color:blue">6.Promise demo6 </p>

```JavaScript
const fn = () => new Promise((resolve, reject) => {
  console.log(1);      
  resolve("success");  
});
console.log("start");  
fn().then(res => {		 
  console.log(res);		 
});

```
<details>
<summary><b>参考答案</b></summary>

答案是:   
> start   
> 1    
> success

```JavaScript
const fn = () =>
new Promise((resolve, reject) => {
  console.log(1);     // 3.执行fn函数同步代码，打印1
  resolve("success"); // 4.将fn的结果Promise状态改为resolved，且保存这个值
});
console.log("start"); // 1.直接打印 start
fn().then(res => {		// 2.先去执行调用的fn函数，且将.then存入到微任务列表
  console.log(res);		// 5.打印保存的这个值 success
});
```
</details>

[题目来源](https://blog.liugezhou.online/026-%E5%BE%88%E7%88%BD%E7%9A%84Promise%E5%87%A0%E9%81%93console%E9%A2%98/)

<comment/>
