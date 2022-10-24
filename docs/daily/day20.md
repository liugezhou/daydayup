---
title: Day20
---

<div align="right" style="color:#512DA8">2022-10-24 星期一</div>

>

<p style="color:blue">1. react-redux的基本使用步骤 【React】</p>
<details>
<summary><b>参考答案</b></summary>

[代码仓库](https://github.dev/liugezhou/react-redux)
1. 依赖包为`redux` `react-redux`
2. 项目主文件使用`react-redux`的`Provider`组件，将`store`传入
```jsx
import {Provider} from 'react-redux';
const App = ({
  <Provider store="store">{Component}</Provider>
})
```
3. store的定义是:使用 `redux`的`createStore`方法将`reducer`传入   
4. reducer的内容是返回一个函数，通过参数state和action返回一个对象
4. 在包装的组件中要使用store，需要使用`react-redux`的`connect`方法，作用是将组件与store联系在一起  
5. connect方法接收四个参数:`mapStateToProps`、`mapDispatchToProps`、`mergeProps`、`options` 


</details>

<hr/>
<p style="color:blue">2. Object的静态方法有哪些 【JS】 </p>
<details>
<summary><b>参考答案</b></summary>

| 属性                                        | 说明                                     |
| ------------------------------------------- | ---------------------------------------- |
| Object.keys(obj)                            | 返回对象自身的所有可遍历属性             |
| for(let v of Object.values(obj)){}          | 配合 for...of 使用，遍历对象的值         |
| for(let [k,v] of Object.values(obj)){}      | 配合 for...of 使用，遍历键值对           |
| Object.getOwnPropertyNames(obj)             | 返回对象自身的所有属性(包括不可遍历的)   |
| Object.getOwnPropertyDescriptors(obj)       | 返回该对象所有属性的描述对象             |
| Object.getOwnPropertyDescriptor(obj,'name') | 返回该对象'name'属性的描述对象           |
| Object.defineProperty(obj,'a',{})           | 通过描述对象，定义对象某个属性的配置     |
| object.defineProperties(obj,{})             | 通过描述对象 ，定义对象的多个属性配置    |
| Object.preventExtensions(obj)               | 阻止对象可扩展                           |
| Object.isExtensible(obj)                    | 判断一个对象是否可扩展                   |
| Object.seal(obj)                            | 禁止对象的配置                           |
| Object.isSealed(obj)                        | 判断对象是否可配置                       |
| Object.getPrototypeOf(obj)                  | 获取参数对象的原型                       |
| Object.setPrototypeOf(target,source)        | 为参数对象设置其原型对象                 |
| Object.create(obj)                          | 传入的参数为创建对象的原型               |
| Object.is(a,b)                              | 判断两个参数是否完全相等                 |
| Object.assign(target,source)                | 将 source 的自有可枚举属性复制到模板对象 |

</details>

<hr/>
<p style="color:blue">3. Object的实例方法有哪些？【JS】</p>
<details>
<summary><b>参考答案</b></summary>

| 属性                                    | 说明                               |
| --------------------------------------- | ---------------------------------- |
| Object.prototype.valueOf()              | 返回当前对象所对应的值             |
| Object.prototype.toString()             | 返回当前对象所对应的字符串         |
| Object.prototype.toLocaleString()       | 返回当前对象对应的本地字符串形式   |
| Object.prototype.hasOwnProperty('foo')  | 判断某个属性是否为自身的属性       |
| Object.prototype.isPrototypeOf()        | 判断当前对象是否为另一个对象的原型 |
| Object.prototype.propertyIsEnumerable() | 判断对象的某个属性是否可以枚举     |

</details>

<hr/>
<p style="color:blue">4. npx的作用流程 【Node】</p>

<details>
<summary><b>参考答案</b></summary>

npm 的 5.2 版本（发布于 2017 年 7 月）开始可用，npx 的作用流程是：
1. 首先 会自动查找当前依赖包中的可执行文件
2. 如果找不到，就会去 PATH 里找。
3. 如果依然找不到，就会帮你安装。
4. 使用完后，帮你卸载。

例如:本地的create-react-app不需要再安装了，直接`npx create-react-app projectName`

</details>

<hr/>
<p style="color:blue">5. HTML中给汉字加拼音 【HTML】</p>

<details>
<summary><b>参考答案</b></summary>

```html
<ruby>
  使用ruby标签
  <rt>shi yong r u b y biao qian</rt>
</ruby>
```
<ruby>
  使用ruby标签,内部使用rt
  <rt>shi yong ruby  biao qian,nei bu shi yong rt</rt>
</ruby>
</details>

<comment/>
