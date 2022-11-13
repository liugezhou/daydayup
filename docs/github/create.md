---
title: 新建仓库
search: true
---

本小节记录如何新建一个仓库。

## 1. 新建仓库
新建仓库有以下两种方式，网站首页左侧按钮，活着通过点击右侧 + 号 ，点击New repository

![create001](https://cdn.staticaly.com/gh/liugezhou/image@master/Github/create001.webp)

## 2. 页面设置
新建仓库的页面内容：

![create](https://cdn.staticaly.com/gh/liugezhou/image@master/Github/create.webp)

### Repository name
---

 仓库名称，命名规范为英文、下划线、横线等，不可以使用中文和其它符号。
  
### Description
---

简短的项目描述，可省略。

### Public
---

项目公开，全网可见。

### Private
---

项目私有，对外不可见。

### Add a README file
---

可选，默认添加一个 README的文件作为项目的说明页。

### Add .gitignore
---

为仓库配置忽略的文件，这里预设了一些 .gitignore 文件，可供选择。  
一般可以认为项目初始化时这个设置是不重要的，可以在项目初始化之后根据项目类型添加。  

[.gitignore更多信息](https://docs.github.com/cn/get-started/getting-started-with-git/ignoring-files)

### Choose a license
---

选择开源许可证，可以看到目前官方可供选择的许可证如下: 
![create_license](https://cdn.staticaly.com/gh/liugezhou/image@master/Github/create_license.webp)

对于一个成熟的项目，开源许可证是非常必要的，使用开源许可证对使用者和开发者带来很多便利，界定了项目内容的可使用范围。  
由于开源许可证过多，[这里介绍常用的几个许可证](https://blog.liugezhou.online/009-%E5%BC%80%E6%BA%90%E8%AE%B8%E5%8F%AF%E8%AF%81%E4%BB%8B%E7%BB%8D/)


## 3. 点击创建
当上面的设置，只填写了仓库名称、描述、公开权限后，点击 Create repository 后，显示如下：

![create_code](https://cdn.staticaly.com/gh/liugezhou/image@master/Github/create_code.webp)

页面显示的主内容为Code，由于Code为空，这里给出了三个方式进行项目的初始化
- 在终端初始化一个项目并与该仓库绑定
- 已存在的一个经过项目初始化的项目，与该项目绑定
- 从其它仓库导入一个项目

需要有git相关知识

![create_git](https://cdn.staticaly.com/gh/liugezhou/image@master/Github/create_git.webp)

到这里，我们的仓库就新建完毕了。

<comment/>