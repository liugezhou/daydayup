---
title: Day22
---

<div align="right" style="color:#512DA8">2022-10-26 星期三</div> 

> 你以为这个世界是有规则的，其实它没有。 没有规则，只有规律，混沌是常态。

<p style="color:blue">1. npm install安装流程 【Node】</p>
<details>
<summary><b>参考答案</b></summary>

1. 执行npm install,检查项目的node_modules是否已经存在安装模块，如果存在就不会进行安装(即使已经有了新版本) (npm install -f 不管本地是否已经安装了模块，都会重新安装。)  
2. 检查是否有package-lock.json文件,
    a. 没有lock文件，直接获取package.json的版本 
    b. 有package-lock.json文件,当package.json的版本规范与package-lock.json版本兼容时,按lock文件安装，如果不兼容按package安装。  
3. 检查缓存(npm config get cache) 
4. 如果有缓存，直接解压到node_modules 
5. 如果没有缓存，下载压缩包，存放在~/.npm目录,解压压缩包到node_modules
5. 生成package-lock.json文件

</details>

<hr/>
<p style="color:blue">2. CSS如何使文本以大写字母开头 【CSS】 </p>
<details>
<summary><b>参考答案</b></summary>

```css
p{
  text-transform:capitalize;
}
```
```html
<p>my name is liugezhou </p>
<!-- covert to : My Name Is Liugezhou -->
```

</details>

<hr/>
<p style="color:blue">3. 伪类 :nth-child 和 :nth-of-type的区别 【CSS】 </p>
<details>
<summary><b>参考答案</b></summary>

- :nth-child(n): 首先找到所有当前元素的兄弟元素(不是相同类型的元素),用n来筛选出在当前元素的兄弟元素节点的位置。
- :nth-of-type(n): 针对具有一组兄弟节点的标签(相同的类型标签),用n来筛选出在一组兄弟节点的位置。

区别：nth-of-type查找的是相同类型标签元素,nth-child查找的同一个级别的元素(可以是不同类型标签)。


</details>

<hr/>
<p style="color:blue">4. 设计模式的理解？常见的设计模式有哪些？ 【概念】</p>

<details>
<summary><b>参考答案</b></summary>

在软件工程领域中，设计模式是对软件设计中普通存在的各种问题提出的解决方案，不以直接写代码的方式解决，而是在各种不同情况下，描述如何解决一个问题。

- 单例模式
> 保证一个类仅有一个实例,并提供一个访问他的全局访问点。 
> 实现的方法为先判断是否有这个实例，如果存在直接返回，如果不存在就创建这个实例之后再返回。  

- 工厂模式
> 工厂模式通常分为三个角色  
> 1. 工厂角色:负责实现创建所有实例的内部逻辑  
> 2. 抽象产品角色:它是创建的所有对象的父类,负责描述所有实例所共有的接口 
> 3. 具体产品角色:是创建的目标,所有创建的对象都充当这个角色的某个具体类的实例

- 策略模式
> 策略模式就是定义一系列的算法,把他们一个个封装起来,并且使他们可以互相替换。  
> 策略类(可变):策略类封装了具体的算法，并负责具体的计算过程 
> 环境类(不变):接受客户的请求，随后请请求委托给某一个策略类

- 代理模式
> 为对象提供一个代用品或占位符,以便控制对它的访问。 
> 比如图片的懒加载功能,先通过loading图占位,然后通过异步方式加载图片,图片加载完毕后再加载到img标签里面。 

- 中介者模式
> 通过一个中介者对象,其他所有的相关对象都通过这个中介对象来通信,而不是相互引用.当其中一个对象发生改变时,只需要通知中介者对象即可。  
> 通过中介者模式可以解除对象与对象之间的紧耦合关系

- 装饰者模式
> 定义:在不改变对象自身的基础上,在程序运行期间给对象动态地添加方法。  
> 通常运用在原有方法维持不变,在原有方法上再挂载其他方法满足现有需求。 

</details>

<hr/>
<p style="color:blue">5. 什么是响应式设计,响应式设计的基本原理是什么?如何做响应式设计  【CSS】</p>

<details>
<summary><b>参考答案</b></summary>

1. 简单理解:同时适配PC+平板+手机等设备,网站的布局会根据视口来调整模块的大小和位置。  

2. 基本原理:通过媒体查询 监测不同设备 做屏幕尺寸处理, 需要注意为了处理移动端,页面头部必须有meta声明viewport 
  - width=device-width 自适应手机屏幕的尺寸宽度 
  - maximum-scale  缩放比例的最大值
  - initial-scale 缩放的初始化
  - user-scalable 是否允许用户缩放
```Html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>
```

3. 实现方式
  - 媒体查询  `@media screen [(min-width:375px)] and (max-width:600px){}`
  - 百分比
  - vw/vh
  - rem

为了实时、准确的监听设备窗口的变化，我们可以在css之前插入script标签
```javascript
function init(){
  const width = document.documentElement.clientWidth  
  document.documentElement.style.fontSize = width/10 + 'px'
}
// 首次加载
init()
// 监听手机旋转
window.addEventListener('orientationChange',init)
// 监听手机窗口变化
window.addEventListener('resize',init)

```

</details>

<comment/>