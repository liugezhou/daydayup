---
title: Day3
---

<summary><b>2022-09-21 星期三</b></summary>

> 无所畏惧（fearless）不是没有恐惧；而是你依然心怀恐惧，但无论如何都决定要跳进去。


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

<comment/>
