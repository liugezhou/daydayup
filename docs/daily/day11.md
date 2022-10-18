---
title: Day11
---

<summary><b>2022-10-08 星期六</b></summary>

> 你从自己的一次失败中学到的东西，比阅读一千个成功故事学到的更多。

<p style="color:blue">1. transform与transition属性都有哪些 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

**transform**

transform 允许缩放、旋转、平移、倾斜等。
- matrix(a1,a2,a3,a4,a5,a6) 定义 2D 转换
- translate(x,y) x 轴与 y 轴的 2D 平移转换
- scale(x,y) x 轴与 y 轴缩放的 2D 转换
- rotate(angle) x 轴与 y 轴 2D 旋转角度 转换
- skew(x-angle,y-angle) x 轴与 y 轴的 2D 倾斜转换

**transition**

- transition 属性是 `transition-property`、`transition-duration`、`transition-timing-function`、`transition-delay`四个属性的简写属性。

1.  `transition-property`:用来设置元素中参与过渡的属性名称 ,语法格式：`transition-property:none | all | property `
    - none:没有属性参与过渡
    - all:所有属性参与过渡
    - property:CSS 属性过渡列表，多个属性使用逗号分隔

2. `transition-duration`:用来设置过渡需要花费的时间 语法格式:`transition-duration:time `  
    多个属性之间可用逗号进行分割:`transition-duration:1s,2s,3s;`

3. `transition-timing-function`:用来设置过渡动画的类型
  - linear:匀速
  - ease:慢到快再到慢
  - ease-in:慢速开始过渡
  - ease-out:慢速结束过渡

4. `transition-delay`: 设置过渡效果何时开始，即等待的时间

</p>
</details>

<hr/>
<p style="color:blue">2. animation的属性 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. `@keyframes`规则 
```CSS
@keyframes animationName{
  from {}
  percentage{}
  to{}
}
```
- `animationName`:动画名称 
- `from`:定义动画的开头 0%
- `percentage`:动画各个阶段，为百分比值，可添加多个 
- `to`:动画结尾，100%

2. 动画应用 
通过`1`创建好动画后，需要将动画应用指定到HTML元素，CSS提供的动画属性有：  
- `animation-name`:设置需要绑定到元素的动画名称 
- `animation-duration`:动画开始到完成所花费的时间 
- `animation-timing-function`:动画速度曲线，默认为ease  
- `animation-fill-mode`:设置当前动画不播放时的状态(forwards为最后一个关键帧样式，backwards为第一个关键中样式，both为两者)  
- `animation-delay`:动画开始执行的延迟时间  
- `animation-iteration-count`:设置动画的播放次数,infinite表示无限次播放，默认值为1
- `animation-play-state`:设置动画是正在运行还是暂停，默认是running  
- `animation`:动画的所有属性

</p>
</details>


<hr/>
<p style="color:blue">3. 什么是原生ESM? 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- JavaScript模块,即提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制 
- 最新的浏览器开始原生支持模块功能了-- 这会是一个好事情 — 浏览器能够最优化加载模块，使它比使用库更有效率：使用库通常需要做额外的客户端处理。 
- 关键词:`import` `export`  
- 根据[MDN JS ESM](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)体验。

</p>
</details>


<hr/>
<p style="color:blue">4. Vite的解决思路是基于什么？ </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- Vite是基于`浏览器开始原生支持ES模块，且越来越多的JS工具使用编译性语言编写`  
- Vite针对缓慢的服务器启动，解决思路是：`基于打包器方式的启动是必须优先抓取并构建整个应用，然后才能提供服务，而Vite是在一开始将应用中的模块分为依赖和源码两项，改进开发服务器启动慢的问题`  
  - 依赖使用esbuild预构建依赖。
  - 源码以原生ESM方式提供(浏览器接管了打包程序的部分工作)。
  - 在 Vite 中，HMR 是在原生 ESM 上执行的。

</p>
</details>

<hr/>
<p style="color:blue">5. Webpack的tree-shaking是什么，需要注意哪些问题，如何配置? </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 一个js文件中有a和b两个方法，只用到了a方法，b方法没有用到，tree-shaking就是解决打包的时候不去打包没用到的b方法。 
- Tree-shaking只支持ES Module(import,export),不支持require  
- 生产环境Tree-shaking默认配置好了，不需要对optimization配置,但仍需要对package.json中的sideEffects配置。  
- 开发环境默认没有配置tree-shaking，需要在webpack.config.js配置文件中添加`optimization:{usedExports:true}`,如果引入第三方资源，需要在`package.json`中配置`sideEffects:false`

</p>
</details>

</details>

<comment/>