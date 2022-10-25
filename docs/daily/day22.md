---
title: Day22
---

<div align="right" style="color:#512DA8">2022-10-26 星期三</div> 

> 

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
<p style="color:blue">3. QUIC协议是什么？ 【HTTP】 </p>
<details>
<summary><b>参考答案</b></summary>


</details>

<hr/>
<p style="color:blue">4. </p>

<details>
<summary><b>参考答案</b></summary>

</details>

<hr/>
<p style="color:blue">5. </p>

<details>
<summary><b>参考答案</b></summary>


</details>

<comment/>