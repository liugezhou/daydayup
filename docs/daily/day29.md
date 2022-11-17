---
title: Day29
---

<div align="right" style="color:#512DA8">2022年11月17日 星期四</div>

> 随大流做点新鲜事还是有好处的，它能让你更快的发现自己真正热爱的是什么。

<p style="color:blue">1. ts中的undefined和null类型如何有效使用 【TS】 </p>
<details>
<summary><b>参考答案</b></summary>

```typescript
const u:undefined=undefined // undefined 类型          
const n:null = null    // null 类型                    
```

默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
```typescript
let age: number = null
let realName: string = undefined
```
</details>

<hr/>
<p style="color:blue">2. ts中type和interface的区别是什么 【TS】  </p>
<details>
<summary><b>参考答案</b></summary>

由于 ts 中 type 和 interface 的使用有时候能实现相同的功能，所以容易混淆.    
这里的 type 叫 `类型别名`，interface 叫 `接口`

**interface**：是 TS 设计出来用于定义对象类型的，可以对对象的属性进行描述。     
**type**： 只是给类型起一个新名字，它并不是一个类型，只是一个别名而已。 

比如 `type son = string | number`

相同点：都可以定义一个对象和函数、都允许继承、且可以互相继承  
不同点：type 会给类型起个新名字，可以作用于原始数据类型、联合类型、元组以及其它任何的手写类型，而 interface 可以合并重复声明至合并。

[详细解释](https://juejin.cn/post/7063521133340917773?utm_source=blog.liugezhou.online)

</details>

<hr/>
<p style="color:blue">3. 前端设计通用组件的核心、基础原则 </p>
<details>
<summary><b>参考答案</b></summary>

1. **单一职责原则**  
  即原则上一个组件只专注与一件事，好处是可以最大可能性地复用组件，即单一职责建立在可复用基础上。
2. **通用原则**   
  组件的形态(DOM结构)永远是千变万化的,但是其行为(逻辑)是固定的,因此通用组件的秘诀之一就是将 DOM 结构的控制权交给开发者,组件只负责行为和最基本的 DOM 结构
3. **封装**   
  良好的封装应隐藏内容细节和实现意义，通过props控制行为的输入和输出，同时减少访问全局变量的能力。
4. **富有意义**   
  代码的描述意义和可读性：命名规范、html语义化、合理的代码注释
5. **可测试**   
  单测保证代码的正确性

</details>

<hr/>
<p style="color:blue">4. CSS的布局技术都有哪些？【CSS】  </p>

<details>
<summary><b>参考答案</b></summary>

1. 正常布局流
  浏览器默认的HTML布局方式。      
2. display 属性
3. 弹性盒子 display:flex
4. Grid布局
5. 浮动 float
6. 定位position 
7. 表格布局 table
9. 多列布局 `column-width`

</details>

<hr/>
<p style="color:blue">5. 请求时候遇见过Options吗，什么时候会发送Options请求？（预检请求）</p>

<details>
<summary><b>参考答案</b></summary>

 使用OPTIONS方法对服务器发起请求时，可以检测服务器支持哪些HTTP方法。  
 但我们在开发工程中，在Chrome中网络调试时，对于高版本来说，没有看到发起OPTIONS请求，这是由于Chrome版本升级将预检请求归置在了 `other`分类下。

-  发生预检请求的前提是发生了**CORS跨域**，然后符合以下三种情况中的一种或多种可能会触发OPTIONS请求：
  1. 使用PUT、DELETE、OPTIONS、PATCH、TRACE、CONNECT请求方式；  
  2. 加了自定义Header(与请求方式无关，即也包含GET)； 
  3. Content-Type为application/json等；

浏览器之所以会发生预检请求是因为发生CORS跨域后，可能会对服务器产生副作用的请求。  
因此浏览器会主动发起一个OPTIONS预检请求，从而获知服务器是否允许该跨域请求。

优化点：一旦触发条件跨域请求便会发送2次请求，那可以通过缓存预检请求的结果来实现优化； 

 **Access-Control-Max-Age**，表示预检请求的返回结果可以被缓存的最长时间（秒），如果值为-1表示禁用缓存，因此优化点在于不要将其设置为-1；

</details>

<comment/>
