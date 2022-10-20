---
title: Day19
---

<div align="right" style="color:#512DA8">2022-10-20 星期四</div> 

> 只有有耐心圆满完成简单工作的人，才能轻而易举地完成困难的事。

<p style="color:blue">1. React useState的使用以及注意点 【React】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. 使用useState()进行状态管理 
useState()是改变状态的开关，将状态添加到函数组件需要4个步骤:启用状态、初始化、读取和更新。  
`const [state, setState] = useState(initialState);`  
- 状态一旦改变，React 就会重新渲染组件，state变量获取新的状态值,setState变更状态值。
- 通过多次调用useState()，一个函数组件可以拥有多个状态。

2. 注意点
- useState()仅顶层调用：不能在循环，条件，嵌套函数等中调用useState().在多个useState()调用中，渲染之间的调用顺序必须相同。 

3. 使用useState()来管理一个简单的状态。为了处理更复杂的状态，一个更好的的选择是使用useReducer() 。

</p>
</details>

<hr/>
<p style="color:blue">2. React中useEffect的简单使用与理解 【React】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. 在函数组件中，我们没有 this，所以我们不能分配或读取 this.state。我们直接在组件中调用 useState Hook。 
2. 函数组件中没有生命周期，那么可以使用 useEffect 来替代。  
3. 可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。  
4. 默认情况下，组件在第一次渲染和每次更新之后都会执行，保证了每次运行effect的同时，DOM都已经更新完毕。
5. 如果想执行只运行一次的effect(componentDodMount、componentWillUnmount)，可以传递一个空数组作为第二个参数、即effect不依赖于props和state中的值，永运不需要重复执行。    
6. 
</p>
</details>

<hr/>
<p style="color:blue">3. JavaScript有几种类型的值？他们的内存是如何保存的？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

基本数据类型和引用数据类型。
- 基本数据类型：Number、String 、Boolean 、Null、Undefined 、Symbol
- 引用数据类型：数组和对象，Object 是 JavaScript 中所有对象的父对象
- 基本数据类型存储在栈中，引用数据类型（对象）存储在堆中，指针放在栈中。  

两种类型的区别是：
- 存储位置不同；原始数据类型直接存储在栈中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；  
- 引用数据类型存储在堆中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能
- 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

</p>
</details>

<hr/>
<p style="color:blue">4. 简单说说eval是用来做什么的 【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

它的功能是把对应的字符串解析成JS代码并运行；应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

</p>
</details>

<hr/>
<p style="color:blue">5.为什么要初始化CSS样式 【CSS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

</p>
</details>

<comment/>