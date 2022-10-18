---
title: Day8
---

<summary><b>2022-09-28 星期三</b></summary>

> The things one is most proud of are often the hardest things to do. You must not doubt it.


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

<comment/>