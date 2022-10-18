---
title: Day7
---

<summary><b>2022-09-27 星期二</b></summary>

> 你学不会的东西，老天爷会让你一遍一遍经历。如果一个人有明显的缺点，比如不细心、马虎，Ta会在未来的人生经历中一次次犯错，一次次体会因为马虎带来的失败，直到他改正这个缺点为止。

<p style="color:blue">1.inline-block、inline 和 block的区别；【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- block：块级元素，其前后都会有换行符，能设置宽度和高度，margin/padding 水平垂直方向都有效。
- inline：设置width和height无效，margin在竖直方向上无效，padding在水平方向垂直方向都有效，前后无换行符。
- inline-block：能设置宽度高度，margin/padding 水平垂直方向都有效，前后无换行符。

</p>
</details>

<p style="color:blue">2. 为什么img是inline还可以设置宽高? 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

CSS中有一概念叫`可替换元素`，MDN解释：  
> 可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

可替换元素：其内容不受当前文档的样式的影响。  
CSS可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。例如 `<iframe>` 元素，可能具有自己的样式表，但它们不会继承父文档的样式。 
典型的可替换元素有：
1. `<iframe>`
2. `<video>`
3. `<embed>`
4. `<img>`

</p>
</details>

<p style="color:blue">3.对类数组的理解，如何转化成数组 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

JS中类数组主要分为两类：
1. 函数参数对象arguments，箭头函数没有arguments

```Javascript
function fn() {
    console.log(arguments);
}
```
2. 利用querySelectorAll、getElementsByName获取到的NodeList，利用getElementsByTagName、getElementsByClassName获取到的HTMLCollection

```Javascript
<ul id="ul">
  <li name="li" class="li">11</li>
  <li name="li" class="li">22</li>
  <li name="li" class="li">33</li>
</ul>

document.querySelectorAll("li");
document.getElementsByTagName('li');
document.getElementsByClassName('li');
document.getElementsByName('li');
```

类数组转数组：
1. Array.from
```Javascript
const arr = Array.from(arguments);
```
2. 扩展运算符
```Javascript
const arr = [...arguments]
```
3. 使用call、apply改变this指向来调用数组的方法
Array.prototype.slice.call(arguments);

</p>
</details>

<p style="color:blue">4.强类型语言和弱类型语言 【Concept】  </p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. 强类型语言是一种强制类型定义的语言，即一旦某一个变量被定义类型，如果不经强制转换，那么它永远就是该数据类型。代表：C/C++、Delphi、VB等；
2. 弱类型语言某一个变量被定义类型，该变量可以根据环境变化自动进行转换，不需要经过现行强制转换。代表：JS、PHP等；代表：Java、JavaScript、VBScript、Perl、Python等；
3. 强类型原因在速度上可能略逊于弱类型语言，但是强类型定义语带来的严谨性又避免了不必要的错误；

</p>
</details>

<p style="color:blue">5.动态语言与静态语言的区分 【Concept】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. 动态性语言是指在运行期间才去做数据类型检查的语言，编程时不用给任何变量指定数据类型，其会在第一次赋值给变量时，在内部将数据类型记录下来。JavaScript、Python和Ruby就是一种典型的动态类型语言。
2. 静态类型语言与动态类则刚好相反，它的数据类型在编译期间检查，也就是说在写程序时要声明所有变量的数据类型，C/C++是静态类型语言的典型代表，其他静态语言还有TypeScript、C#、Java等。
3. 对于动态语言与静态语言的区分，其根本在于判断是在运行期间去做数据类型还是在编译期间检查。

</p>
</details>

<comment/>