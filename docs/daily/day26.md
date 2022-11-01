---
title: Day26
---

<div align="right" style="color:#512DA8">2022年11月01日 星期二</div>

> 有些人能清楚的听清自己内心深处的声音，并以此行事。这些人要成了疯子，要么变成了传奇。

<p style="color:blue">1. document.getElementsByClassName()和document.getElementById()的使用注意点 【DOM】</p>
<details>
<summary><b>参考答案</b></summary>

- document.getElementsByClassName()方法返回一个**类似数组的对象**，包含了所有 class 名字符合指定条件的元素。
- document.getElementById()方法返回匹配指定 id 属性的**元素节点**。如果没有发现匹配的节点，则返回 null。

</details>

<hr/>
<p style="color:blue">2. 复习:offsetWidth、offsetHeight、offsetLeft、offsetTop属性的含义 【DOM】 </p>
<details>
<summary><b>参考答案</b></summary>

- offsetWidth: 直接返回元素的宽度
- offsetHeight: 直接返回元素的高度

后两个元素与 offsetParent 有关：

- offsetLeft: 返回该元素边界的左上角顶点相对于 offsetParent 左上角顶点的水平偏移量
- offsetTop: 返回该元素边界的左上角顶点相对于 offsetParent 左上角顶点的垂直偏移量
- 一般该元素相对于 body 做偏移，如果其父元素有 `position:relative`属性，那么子元素就相对于父元素做偏移。

</details>

<hr/>
<p style="color:blue">3. CSS属性大全 </p>
<details>
<summary><b>参考答案</b></summary>

**font**
| 描述 | 属性 | 值 |
| ------ | -------------- | ----------------------- |
| 大小 | font-size | x-large(超大)、xx-small(极小) |
| 样式 | font-style | oblique(偏斜体)、italic(斜体)、normal(正常) |
| 粗细 | font-weight | bold(粗体)、lighter (细体)、normal(正常) |
| 变体 | font-variant | small-caps(小写转大写字母)、normal(正常) |
| 大小写 | text-transform | capitalize(首字母大写)、uppercase(大写)、lowercase(小写) |
| 修饰|text-decoration | underline(下划线)、overline(上划线)、line-through(删除线)|
| 背景颜色|background-color |#FFFFFF |
| 背景图片| background-image| url('')|
|背景重复|background-repeat |no-repeat |
|🌟 滚动| background-attachment |fixed(固定)、scroll(滚动) |
| 位置|background-position | left(水平)、top(垂直)|
| 字间距|letter-spacing |normal ｜数值 |
| 缩进|text-indent |数值 px |
| 🌟 词间距|word-spacing |数值 |
|边框属性|border-style|dotted dashed solid double groove ridge inset outset|
|鼠标光标样式|cursor|pointer(链接手指)|
|鼠标光标样式|cursor| crosshair(十字体)|
|鼠标光标样式|cursor| s-resize(箭头朝下)|
|鼠标光标样式|cursor| w-resize(箭头朝左)|
|鼠标光标样式|cursor| n-resize(箭头朝上)|
|鼠标光标样式|cursor| ne-resize(箭头朝右上)|
|鼠标光标样式|cursor| move(移动)|
|鼠标光标样式|cursor| help(加问号)|
|鼠标光标样式|cursor| text(文字I形)|
|鼠标光标样式|cursor| wait(漏斗)|


[摘录](https://blog.csdn.net/u014424282/article/details/72827709)

</details>

<hr/>
<p style="color:blue">4. git reset 和 git revert 的理解？区别？【git】 </p>

<details>
<summary><b>参考答案</b></summary>

**git reset**
- git reset命令用于回退版本，可以指定退回某一次提交的版本
- 语法 git reset [--soft | --mixed | --hard] [HEAD] 

- mixed(默认参数)：移动head指针，改变暂存区内容，不会改变工作区 ，当commit之后想撤回commit，但还不想覆盖工作区内容时，使用--mixed
- soft：仅仅移动当前Head指针，不会改变工作区和暂存区的内容 
- hard：当前head指针、工作区和暂存区内容全部改变 ，完全回滚时，使用--hard来覆盖工作区 

- 示例一：当 `git add . `之后，执行 `git reset`会将暂存区内容移出。 
- 示例二：当 `git commit -m ''` 之后，执行 `git reset --mixed [origin/main | commitId]`会将commit取消且本地文件不变，如果使用`hard`参数，本地文件也会发生改变与`main`分支保持一致  
- 示例三：当 `git push` 之后，`git reset --hard commit_id`,然后执行 `git push origin HEAD --force`就可以把刚才的提交的记录给干掉了。

**git revert**
git revert 撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销作为一次最新的提交。

也就是说在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化，不会改变过去的历史，主要是用于安全地取消过去发布的提交。

</details>

<hr/>
<p style="color:blue">5. 如何实现jwt鉴权机制？思路是什么？【Node】  </p>

<details>
<summary><b>参考答案</b></summary>

**是什么**
JWT（JSON Web Token），本质就是一个字符串书写规范，作用是用来在用户和服务器之间传递安全可靠的信息，一般称作token。

**实现**
主要内容是实现生成token和验证token两部分，生成的token给到前端放入到header的AuthAuthorization中，访问接口的时候带上即可。

- 生成token，借助第三方库`jsonwebtoken`的sign方法生成。   
- 验证token使用`kos-jwt`中间件



</details>

<comment/>
