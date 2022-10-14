---
title: 2022-09
---
<div align="right" style="color:#512DA8">day10</div> 

> 很多时候，人的勇敢来自于没有选择。

<details>
<summary><b>2022-09-30</b></summary>

<p style="color:blue">1. get请求传参长度的误区 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

误区:我们经常说get请求参数的大小存在限制，而post请求的参数大小是无限制的。  
实际上HTTP协议从未规定GET/POST的请求长度限制是多少。对get请求参数的限制是来源与Web浏览器，浏览器限制了url的长度，为了明确这个概念我们必须再次强调下面几点： 
- HTTP协议未规定GET和POST的长度限制 
- GET的最大长度显示是因为浏览器限制了URL的长度  
- 不同浏览器 限制的最大长度不一样：若支持IE最大长度为2083byte，若只支持Chrome，最大长度为8182byte

</p>
</details>

<p style="color:blue">2. mouseover和mouseenter的区别 【】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程，对应的移除事件是mouseout。 
- mouseenter：当鼠标移除元素本身(不包含元素的子元素)会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

</p>
</details>

<p style="color:blue">3. 使元素消失的方法有哪些？【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- opacity:0 该元素被隐藏了，但不会改变页面布局，且若该元素绑定了事件，还会继续触发。  
- visibility:hidden 该元素隐藏，但不会改变页面布局，若该元素绑定了事件，不会触发。  
- display:none 该元素隐藏，且会改变页面布局，在页面中将该元素删除掉

</p>
</details>

<p style="color:blue">4. script标签中defer和async的区别 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行; 
- async属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；   
- defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。

</p>
</details>

<p style="color:blue">5. 强缓存和协商缓存 【HTML】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 强缓存是从缓存中读取的，状态码是200(from cache)，不会发送请求,直接从缓存中存取  
- 协商缓存从缓存中读取的，状态码是304(not modified),会发送请求，通过服务器来告知缓存是否可用

- 强缓存相关字段有：expires、cache-control.],若同时存在，cache-control优先级高于expires 
- 协商缓存相关字段有：Last-modified/If Modified Since,Etag/If None Match

</p>
</details>
</details>

<hr/>
<div align="right" style="color:#512DA8">day9</div> 

>  所有值得做的事情，做得一团糟也值得做，因为做得糟总比不做好。

<details>
<summary><b>2022-09-29</b></summary>


<p style="color:blue">1. CSS中的calc函数用法 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- calc()函数支持加减乘除四种运算。
- 书写上一定要注意啊，加减号两边一定要有空格
- 任何长度值都可以使用calc函数进行计算:% vh vw px em等
- calc函数使DOM元素更加灵活的响应视口改变，还可以通过calc函数实现元素的绝对剧中定位(position:absolute;top:calc(50vh - Xpx))

</p>
</details>

<p style="color:blue">2. 谈谈HTTP2 【HTTP】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

**HTTP2的多路复用**
针对 HTTP/1.1 的问题，队头阻塞是由于 TCP 本身机制导致的，所以 HTTP/2.0 就针对了如何规避 TCP 的慢启动和 TCP 连接之间的宽带竞争下手。 
HTTP/2 的解决思路是一个域名只使用一个TCP 长连接来传输数据，这样整个页面的资源下载只需要一次慢启动，且避免了多个 TCP 连接竞争宽带的问题。  
当然如果一个域名使用一个TCP长连接，那么针对队头阻塞问题，请求完一个请求再去发送另一个请求无疑是非常慢的，所以 HTTP/2 需要实现资源的并行请求：也就是任何时候都可以将请求发送给服务器。 

一句话总结 HTTP/2 为：一个域名只使用一个 TCP 长连接和解决队头阻塞问题。 也就是最具颠覆性的多路复用机制。
多路复用机制的过程：是说每一个请求都一有一个对应的ID，服务端拿到这些请求的ID和内容后，自行决定哪些是关键资源，然后立即将关键资源返回。好处就是优先处理关键资源请求。

**多路复用的实现**
HTTP/2添加了一个二进制分帧层。
然后客户端发送过来的请求，经过这个层，进行处理给他们编号(帧)，然后发送给服务器。
服务器接收到请求，将相同编号的进行合并成一条完整信息进行一次处理，然后再返回给这个二进制分帧层。
二进制分帧层再将响应数据拆开，然后返回给客户端。

**HTTP/2其他特性-基于二进制分帧层**
可以设置请求的优先级
服务器推送：HTTP2可以直接将数据提前推送至客户端
头部压缩：对请求头和响应头做了压缩。
其它

</p>
</details>

<p style="color:blue">3. Webpack的热更新理解 【Webpack】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

webpack的热更新又称为热替换(Hot Module Replacement) – `HMR`
这个机制可以做到不用刷新浏览器而将变更的模块替换掉。

HMR的核心就是：客户端从服务端拉去更新后的文件(他们直接维护了一个websocket)，当本地资源发生变更后，客户端进行资源对比，然后增量更新。
开启HMR，要在webpack配置文件的devServer中设置hot为true即可。

</p>
</details>

<p style="color:blue">4. babel是什么，基本原理以及配置文件的基本格式是什么 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. babel是什么？
Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。

2. Babel的基本工作原理
主要分为 parsing、transforming、printing三个阶段
parsing为解析阶段，将ES6代码进行词法分析和语法分析转换成抽象语法树
transforming为转换阶段，将抽象语法树进行变换操作
printing为生成阶段，通过babel-generator生成对应的代码。

3. 配置文件.babelrc的基本格式
首先，我们先对babel配置的基本格式有个浅显的了解：他是个对象、他的两个属性都是数组，他们分别是presets和plugins。
```
{
  "presets": [],
  "plugins": []
}
```
</p>
</details>

<p style="color:blue">5. 什么是CSS Sprite（“精灵图”）【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- CSS Sprites叫 CSS精灵或者雪碧图，是一种网页图片应用处理方式。
- CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中。再利用CSS的"background-image"，“background-repeat”，"background-position"的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置

</p>
</details>

</details>

<hr/>
<div align="right" style="color:#512DA8">day8</div>

> The things one is most proud of are often the hardest things to do. You must not doubt it.

<details>
<summary><b>2022-09-28</b></summary>


<p style="color:blue">1. JS创建对象的方式 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. 通过 Object()方法来创建 `let obj = new Object({a:1})`
2. 通过字面量创建对象 `let obj ={a:1}`
3. 通过自定义函数创建对象

```javascript
function Image(width,height){
    this.width=width;
    this.height=height;
    this.content=function{
    console.log("图片的高是"+this.height+"宽是"+this.width);
    }
  }
 var image=new Image("300px","300px");
 image.content();

```

4. 通过工厂模式创建对象

```javascript
function createPerson(name, age, gender) {
  //创建一个新的对象
  var obj = new Object()
  //向对象中添加属性
  obj.name = name
  obj.age = age
  obj.gender = gender
  obj.sayName = function () {
    alert(this.name)
  }
  return obj
}
```

5. 通过原型模式
```javascript
function Person(){};
Person.prototype.name="Mary";
Person.prototype.age=18;
Person.prototype.job="teacher";
Person.prototype.sayName=function (){
    alert(this.name);
}
var person1=new Person(); 
person1.sayName();   //Mary-来自原型

var person2= new Person(); 
person2.sayName();   //Mary-来自原型
```

</p>
</details>

<p style="color:blue">2. `["1", "2", "3"]`.map(parseInt) 输出？ 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

[1,NaN,NaN]
解析：

1. map 函数的 callback 参数：自动传入三个参数
   currentValue（当前被传递的元素）
   index（当前被传递的元素的索引）
   array（调用 map 方法的数组）

2. parseInt 方法接收两个参数
   第三个参数["1", "2", "3"]将被忽略。

parseInt 的第二个参数为 0 时，作为十进制数字的字符串解析；  
parseInt 的第二个参数为 1 时，解析结果为 NaN；  
parseInt 的第二个参数在 2—36 之间时，如果第一个参数（除空白以外），不属于指定进制下的字符，解析结果为 NaN。 
parseInt("3", 2)执行时，由于"3"不属于二进制字符，解析结果为 NaN。 

</p>
</details>

<p style="color:blue">3. position的全部属性 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

|值|	描述|
|-|-|
|absolute|	生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|  
|fixed|	生成绝对定位的元素，相对于浏览器窗口进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|  
|relative	|生成相对定位的元素，相对于其正常位置进行定位。 因此，"left:20" 会向元素的 left 位置添加 20 像素。|
|sticky|	CSS3 新增，粘性定位，相对于最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto 或 overlay时，即不是 visible 时）。 它的行为就像 position:relative 而当页面滚动超出目标区域时，它的表现就像 position:fixed，它会固定在目标位置。|
|static	|默认值。没有定位，元素出现在正常的流中 （忽略 left、top、right、bottom 或者 z-index 声明）。|
|inherit|	规定应该从父元素继承 position 属性的值。|

</p>
</details>

<p style="color:blue">4. 如何删除一个cookie？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

Cookie并不提供修改、删除操作。如果要修改某个Cookie，只需要新建一个同名的Cookie来覆盖原来Cookie。  

1. 如果没有显示设置cooke过期时间，cookie不会存入本地硬盘，仅存留于内存中。  
当我们关闭浏览器的时候，cookie会自动删除，生命周期无需我们操控。

2. 删除Cookie的代码示例
```javascript
//取cookies     
function getCookie(name){
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]); 
  return null;
}
//删除cookie
function delCookie(name){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) 
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
}
delCookie("name");
document.cookie;
```

3. 使用三方库`js-cookie`->`Cookies.remove('name', { path: '' })`

</p>
</details>

<p style="color:blue">5.XML与JSON的区别？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

xml和json都是数据传输的载体，并且具有跨平台跨语言的特性，区别如下： 
1. 数据体积方面。JSON 相对于 XML 来讲，数据的体积小，传递的速度更快些。
2. 数据交互方面。JSON 与 JavaScript 的交互更加方便，更容易解析处理，更好的数据交互。
3. 数据描述方面。JSON 对数据的描述性比 XML 较差。
4. 传输速度方面。JSON 的速度要远远快于 XML。

</p>
</details>

</details>

<hr/>
<div align="right" style="color:#512DA8">day7</div> 

> 你学不会的东西，老天爷会让你一遍一遍经历。如果一个人有明显的缺点，比如不细心、马虎，Ta会在未来的人生经历中一次次犯错，一次次体会因为马虎带来的失败，直到他改正这个缺点为止。

<details>
<summary><b>2022-09-27</b></summary>

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
</details>

<hr/>
<div align="right" style="color:#512DA8">day6</div> 

> One of the best lessons I've learned on the Internet is never copy and paste code you didn't write. If you have to copy, just type it word for word and force yourself to think about what the code actually means.

<details>
<summary><b>2022-09-26</b></summary>



<p style="color:blue">1. 如何实现图片在某个容器中居中的？</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 父元素固定宽高，利用定位及设置子元素 margin 值为自身的一半。  
- 父元素固定宽高，子元素设置 position: absolute，margin：auto 平均分配 margin   
- css3 属性 transform。子元素设置 position: absolute; left: 50%; top: 50%;transform: translate(-50%,-50%);即可。    
- 将父元素设置成 display: table, 子元素设置为单元格 display: table-cell。   
- 弹性布局 display: flex。设置 align-items: center; justify-content: center 

</p>
</details>

<p style="color:blue">2. transition 和 animation 的区别？【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值。 

主要区别是 ：   

- transition 需要触发一个事件才能改变属性  
- animation 不需要触发任何事件的情况下才会随时间改变属性值，并且 transition 为 2 帧，从from .... to，而 animation 可以一帧一帧的。

</p>
</details>

<p style="color:blue">3. Doctype 作用是什么?严格模式与混杂模式如何区分？它们有何意义? 【HTML】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

作用：  
`<!DOCTYPE>`声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。`<!DOCTYPE>`声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签,高速诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。

- 严格模式：又称标准模式，是指浏览器按照 W3C 标准解析代码。
- 混杂模式：又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。
- 如何区分：浏览器解析时到底使用严格模式还是混杂模式，与网页中的 DTD 直接相关。

意义：严格模式与混杂模式存在的意义与其来源密切相关，如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。

</p>
</details>

<p style="color:blue">4. addEventListener 参数 【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

addEventListener() 方法用于向指定元素添加事件句柄。     
使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。

参数：`addEventListener(event, function, useCapture)` 
- event 指定事件名；[必须]
- function 指定要事件触发时执行的函数；[必须]
- useCapture 指定事件是否在捕获或冒泡阶段执行。[可选，布尔值]

</p>
</details>

<p style="color:blue">5.click 在 ios 上有 300ms 延迟，原因及如何解决？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

原因：  
iOS上浏览器怎么区分用户是只要单击操作还是要双击进行缩放操作。所以设置了300ms的延迟时间，加以判断用户是单击还是双击缩放

浏览器会在捕获用户第一次单击时，保持300ms的时间：若在300ms内若捕获不到第二次单击，则用户就是单纯执行单击操作；若在300ms内，用户有第二次单击操作，则对该区域进行缩放操作。

1. 粗暴型，禁用缩放
`<meta name="viewport" content="width=device-width, user-scalable=no">`
2. 利用 FastClick，其原理是：
检测到 touchend 事件后，立刻出发模拟 click 事件，并且把浏览器 300 毫秒之后真正出发的事件给阻断掉

</p>
</details>

</details>

<hr/>
<div align="right" style="color:#512DA8">day5</div> 

> 你之所以会活的不开心，是因为你太喜欢回头看了，人的这一生很长，不要站在现在的角度去批判过去的自己，除了生病之外，我们所有能感受到的痛苦，都不是真实存在的，而是那么多年的价值观所带来的的，所以即使人生能够重来，相信以当时的心智和当时的阅历，我们还是会做出同样的选择，所以人一定要学会跟自己和解，去接受每一个阶段的自己，无论好坏，这都是你的人生。

<details>
<summary><b>2022-09-23</b></summary>


<p style="color:blue">1. typeof NaN的结果？isNaN和Number.isNaN函数的区别？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

NaN 指“不是一个数字”，用于指出数字类型中的错误情况。  
`typeof NaN; // "number"`

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反的值。  
`NaN !== NaN 为 true。`

函数isNaN会将参数转换为数值，任何不能被转换为数值的值都会返回true，因此非数字值传入也会返回true。   
函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

</p>
</details>

<p style="color:blue">2. Object.is() 与比较操作符 “===”、“==” 的区别？【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。    

+0 === -0 //true    
NaN === NaN // false
 
Object.is(+0, -0) // false    
Object.is(NaN, NaN) // true   

</p>
</details>

<p style="color:blue">3. Object.assign和扩展运算法是深拷贝还是浅拷贝 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

两者都是浅拷贝

- 扩展运算符：
```
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = {...outObj}
newObj.inObj.a = 2
console.log(outObj) // { inObj: {a: 2, b: 2} }
```

- Object.assign():
```
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = Object.assign({}, outObj)
newObj.inObj.a = 2
console.log(outObj) // { inObj: {a: 2, b: 2} }
```

</p>
</details>

<p style="color:blue">4. 深拷贝方法 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

JSON.stringify()  
JSON.parse()

</p>
</details>

<p style="color:blue">5.手写递归深拷贝 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

```JavaScript
 function deepClone1(obj) {
        var objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") {
                        objClone[key] = deepClone1(obj[key]);
                    } else {
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }
```

</p>
</details>

</details>

<hr/>
<div align="right" style="color:#512DA8">day4</div> 

> 想起来全是问题，做起来才有答案。

<details>
<summary><b>2022-09-22</b></summary>

<p style="color:blue">1. || 和 && 操作符的返回值是什么？【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- `||`最终返回转换为布尔值为true的那个值，如果都没有true值，返回最后一个。
- `&&`最终返回转化为布尔值为false的那个值，如果都是true,返回最后一个。

</p>
</details>

<p style="color:blue">2. 怎么将一个值转换为二进值，以及如何将一个二进制数转换为十进制 【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 二进制转十进值：(1010101).toString(2) ‘toString()中转进值’  
- 十进制数转二进制：Number.parseInt(10100,2)

</p>
</details>

<p style="color:blue">3. 为什么0.1+0.2!==0.3，如何使其相等？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 计算机是通过二进制存储数据的，所以在计算0.1 + 0.2的时候，是计算这两个数二进制的和，然而这俩数都是无限循环的数，因此再次转成十进值的时候就会转成一个无限循环的多位数，因此0.1+0.2!==0.3    
- 解决:Number.parseFloat((0.1+0.2).toFixed(10)) 

- 另外还有一个Number.EPSILON值，根据规格，它表示 1 与大于 1 的最小浮点数之间的差，Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。  

- 遗留问题：1.1+2.2的和与3.3进行比较，误差大于Number.EPSILON，即0.3000000000000003 > 0.30000000000000022204返回了true。。。

</p>
</details>

<p style="color:blue">4. 请说出三种方式来判断一个对象是否为数组 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

值为value
- Array.isArray(value) 返回true则是数组，否则不是数组
- Object.prototype.toString.call(value) 若为'[object Array]'则为数组，都为不是数组  
- value instanceof Array 若返回true则为数组。 
- Array.prototype.isPrototypeOf(value) 若返回true则为数组

</p>
</details>

<p style="color:blue">5. typeof null 的结果是什么？为什么？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 'object',这是JS最初的一个设计错误。

在 JavaScript 第一个版本中，所有值都存储在 32 位的单元中，每个单元包含一个小的 类型标签(1-3 bits) 以及当前要存储值的真实数据。  
类型标签存储在每个单元的低位中，共有五种数据类型：  
- 000: object   - 当前存储的数据指向一个对象。
-   1: int      - 当前存储的数据是一个 31 位的有符号整数。
- 010: double   - 当前存储的数据指向一个双精度的浮点数。
- 100: string   - 当前存储的数据指向一个字符串。
- 110: boolean  - 当前存储的数据是布尔值。

如果最低位是 1，则类型标签标志位的长度只有一位；  
如果最低位是 0，则类型标签标志位的长度占三位，为存储其他四种数据类型提供了额外两个 bit 的长度。   
有两种特殊数据类型：  
- undefined的值是 -2<sup>30</sup> (一个超出整数范围的数字)；
- null 的值是机器码 NULL 指针(null 指针的值全是 0)

那也就是说null的类型标签也是000，和Object的类型标签一样，所以会被判定为Object。
</p>
</details>



</details>

<hr/>
<div align="right" style="color:#512DA8">day3</div> 

> 无所畏惧（fearless）不是没有恐惧；而是你依然心怀恐惧，但无论如何都决定要跳进去。

<details>
<summary><b>2022-09-21</b></summary>

<p style="color:blue">1.在地址栏里输入一个 URL,到这个页面呈现出来，中间会发生什么？</p>
<details>
<summary><b>参考答案</b></summary>
<p>

参考答案[见这里](https://blog.liugezhou.online/A1%E9%98%B6%E6%AE%B5%E4%B8%80%EF%BC%9A%E5%AE%8F%E8%A7%82%E8%A7%86%E8%A7%92%E4%B8%8B%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8/#03%EF%BD%9CHTTP%E8%AF%B7%E6%B1%82%E6%B5%81%E7%A8%8B%EF%BC%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E7%AB%99%E7%82%B9%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%89%93%E5%BC%80%E9%80%9F%E5%BA%A6%E4%BC%9A%E5%BE%88%E5%BF%AB)
</p>
</details>

<p style="color:blue">2. HTML5 和 CSS3 用的多吗？你了解它们的新属性吗？有在项目中用过吗？	</p>
<details>
<summary><b>参考答案</b></summary>
<p>

**HTML5**
- 8 个语义元素： header section footer aside nav main article figure(经测试，只要figure有样式，其它语义标签只是display:block)
- 内容元素： 
    - mark 高亮 { background-color:mark;color:marktext }
    - progress 进度新的表单控件 
    - input type新加属性 date time search color datetime-local
- canvas 绘图  
- 支持内联 SVG。   
- 多媒体元素 audio(audio中source) video  embed track
- 本地离线存储，把需要离线存储在本地的文件列在一个 manifest 配置文件  
- web 存储 localStorage、SessionStorage  

**CSS3**  
- CSS3 边框如 border-radius，box-shadow 等；
- CSS3 背景如 background-size，background-origin 等；
- CSS3 2D，3D 转换如 transform 等；CSS3 动画如 animation等。

</p>
</details>

<p style="color:blue">3. CSS的重绘和重排的区别，以及需要注意什么？哪些属性会导致重绘和重排</p>
<details>
<summary><b>参考答案</b></summary>
<p>

一、重绘不一定需要重排，重排必然会导致重绘
1. 重排：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。
  1.1 添加、删除可见的dom 
  1.2 元素的位置改变 
  1.3 元素的尺寸改变（外边距、内边距、边框厚度、宽高等几何属性）
  1.4 页面渲染初始化 
  1.5 浏览器窗口尺寸改变
2. 重绘：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

二、注意点：减少reflow、repaint
1. 不要一条一条的修改DOM的样式，可以先定义好css的class，然后修改DOM的className。
2. 不要把DOM结点的属性值放在一个循环里当成循环里的变量。
3. 为动画的HTML元件适用fixed或absolute的position，那么修改他们的css是不会reflow

三、尽量使用重绘操作
- visibility=hidden不改变页面布局，仍然占位，但不会触发绑定的事件(重绘操作)
- opacity=0 不改变页面布局，仍然占位，可以触发绑定的事件(重绘操作)
- display: none改变页面布局，不再占位(重排操作)

</p>
</details>

<p style="color:blue">4. transform属性使用 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

用于元素的2D或3D转换，允许你将元素旋转,缩放,移动,倾斜等。 [详细transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
```
{
    transform:rotate(7deg);
    -ms-transform:rotate(7deg); 	/* IE 9 */
    -moz-transform:rotate(7deg); 	/* Firefox */
    -webkit-transform:rotate(7deg); /* Safari 和 Chrome */
    -o-transform:rotate(7deg); 	/* Opera */
}
```
transform: none | rotate | scale | skew | translate | matrix;

</p>
</details>

<p style="color:blue">5. js中数组的方法有哪些</p>

<details>
<summary><b>参考答案</b></summary>
<p>

参考答案[见这里](https://blog.liugezhou.online/012-JS%E6%95%B0%E7%BB%84/)
</p>
</details>
</details>

<hr/>
<div align="right" style="color:#512DA8">day2</div> 

> 人心中的成见是一座大山，任你怎么努力都休想搬动，一生中能改变命运的机会可不多呀。

<details>
<summary><b>2022-09-20</b></summary>
<p>

<p style="color:blue">1.你知道哪几种状态码? 都表示什么？【HTML】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 200 请求成功  
- 301 资源(网页)等被永久转移到其它URL
- 302 Found 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI
- 304 Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
- 400 客户端请求的语法错误，服务器无法理解
- 401 请求要求用户的身份认证
- 403 服务器理解请求客户端的请求，但是拒绝执行此请求
- 404 请求的资源不存在
- 500 内部服务器错误
- 502 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
- 505 服务器不支持请求的HTTP协议的版本，无法完成处理

</p>
</details>

<p style="color:blue">2.使用css画一条0.5px的线 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

.line{
  border:1px solid gray;
  transform:scaleY(0.5);
}

</p>
</details>

<p style="color:blue">3. link标签和import标签的区别 【html】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- link 属于 html 标签，而@import 是 css 提供的
- 页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面加载结束后加载。
- link 方式样式的权重高于@import 

</p>
</details>

<p style="color:blue">4. CSS选择器有哪些，优先级排序以及CSS的三大特性 【CSS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- id 选择器，class 选择器，标签选择器，伪元素选择器，伪类选择器等 
- 优先级：important > 内敛样式 > id 选择器 > class 选择器 > 标签选择器

</p>
</details>

<p style="color:blue">5. "use strict"的作用是什么？【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

use strict 出现在 JavaScript 代码的顶部或函数的顶部，可以帮助你写出更安全的 JavaScript 代码。如果你错误地创建了全局变量，它会通过抛出错误的方式来警告你。例如，以下程序将抛出错误：
```
function doSomething(val) {
 "use strict"; 
 x = val + 10;
}
```
它会抛出一个错误，因为 x 没有被定义，并使用了全局作用域中的某个值对其进行赋值，而 use strict 不允许这样做。下面的小改动修复了这个错误：
```
function doSomething(val) {
 "use strict"; 
 var x = val + 10;
}
```

</p>
</details>

</p>
</details>

<hr/>
<div align="right" style="color:#512DA8">day1</div> 

> 人生就是这样，求上得中求中得下，求下而不得。职场黄金期，没几年的，你年轻，要跟优秀的人一起做事，学会他们的工作方法，待人处事，不要一直想着要好好做，就单纯的好好去做。所有的学习，最开始都像是在照镜子，无非是学到了，再换一个老师，换一面镜子，直到有一天你发现，新的镜子里是你自己，你就有你自己的方法了，你就可以做别人的镜子了。  
>
<details>
<summary><b>2022-09-19</b></summary>
<p style="color:blue">1.使用代码画一个三角形 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

```
.triangle{
  width:0;
  height:0;
  border:100px solid red;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

```
</p>
</details>

<p style="color:blue">2. 1rem、1em、1vh、1vw、1px各自代表的含义？vw和vh与百分比的区别？vw和%可以同时使用吗，比如宽度用vw，padding用%？ 讲讲viewport和移动端布局 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 1rem与网站根标签font-size有关，若html根标签设置font-size:20px,那么这里的1rem为20px；  
- 1em与父元素有关，若父元素设置的font-size:20px;那么在子组件中2em就表示为40px；   
- 1vh(Viewport Height)表示可视化窗口高度的的1%；
- 1vw(Viewport Width)表示可视化窗口宽度的的1% ；
- 1px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的；

- vw和%同时使用可能会发生宽度自动滑动的问题，建议尽量宽度使用%。  

- 

</p>
</details>

<p style="color:blue">3. 普通文档流的布局规则和BFC布局规则？BFC的理解？清除浮动的方式？ 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

普通文档流奇怪问题：
1. 两个相邻元素的margin会重叠
2. 父子元素相邻时，子元素的margin属性会传递到父元素中
3. 普通文档流存在的问题可以通过触发BFC机制去解决

* 触发BFC机制：
1. float:left | right (父元素若没给定高度，使用float布局、会有高度坍缩问题)
2. overflow:auto| hidden| scroll
3. display:flex | inline-block | table-cells
4. position:absolute | fixed

</p>
</details>

<p style="color:blue">4. 说一下图片懒加载和预加载 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。  
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。  

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

</p>
</details>

<p style="color:blue">5. JS哪些操作会引起内存泄漏  【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. 意外的全局变量；在js文件开头添加 ‘use strict’，开启严格模式；
2. 未清理的DOM元素引用；
    var a = document.getElementById('id');
    document.body.removeChild(a);
解决：a = null；
3. 被遗忘的定时器或者回调；
解决：调用clearInterval或者clearTimeout
4. 闭包

</p>
</details>
</details>


