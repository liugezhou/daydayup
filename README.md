## 背景
每日五道前端基础知识点。  
随着前端工程化的不断进化，愈发感觉前端知识的繁杂,而基础知识的掌握显得尤为重要。 
当我们不断往前看,不断学习新的技能的时候,前端的基础知识我们是否掌握牢靠？  

这个项目就是在焦虑的想到,前端基础的知识还存在许多查漏补缺的点   
还需要一个彻底搞明白的契机

这个契机就是每天不断的一个一个小知识点的累积。

## 说明
每天随机5道前端知识点,包含但不限于`JavaScript`、`HTML`、`CSS`、`Vue`、`React`、`Browser`、`编程概念`等。   
于每个工作日随机发布。

## 快速入口

**<i>公众号-菜单栏-今日前端</i>**
<image src="https://cdn.staticaly.com/gh/liugezhou/image@master/common/Wakaka_.webp" style="width:50%"></image >

## 项目搭建全流程
1. mkdir frontend-docs
2. npm i -y
3. touch .gitignore 
4. npm i -D vuepress  
5. mkdir docs && echo '# Hello VuePress' > docs/README.md 
6. package.json修改
```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
7. docs下新建.vuepress文件夹: 用于存放全局的配置、组件、静态资源等。  
  - .vuepress下新建config.js,是一个vuepress网站的必备配置,配置内容包含：
    - title 网站标题
    - description 网站描述
    - base 部署相关、$withBase使用
    - nav配置 右上角导航栏 
    - sidebar配置 左侧导航栏
    - configureWebpack 别名等
    - displayAllHeaders:true  显示所有页面的标题链接
    - search: false 禁用默认的搜索框  
    - searchMaxSuggestions: 10  设置搜索显示数量
    - lastUpdated 为Github提交更新时间(默认关闭)
    - repo  仓库配置
    - smoothScroll: true 页面滚动效果

8. .md 单文档配置
- title:文章标题
- sidebarDepth:2  显示到标题的深度，默认为1=>H2
- sidebar: auto   自动生成`一个`仅仅包含了当前页面标题（headers）链接的侧边栏
- sidebar: false  禁用侧边栏
- tags: -1 -2     关键字设置以供搜索
- search:false    对该页面搜索禁用 [搜索范围为h2 h3 tags，若要全局搜索可以使用Algolia ]
- editLink: false 禁用指定页面的编辑链接
- pageClass: className  针对页面的CSS
- home:true      文档主页，提供了一些feature

9. 自动部署
- 新建 .github/workflows/vue-press-deploy.yml 
```
name: Build and Deploy
# 在main分支发生push事件时触发。
on:
  push:
    branches:
      - main
env: # 设置环境变量
  TZ: Asia/Shanghai # 时区（设置时区可使页面中的`最近更新时间`使用时区时间）
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        TARGET_REPO: liugezhou/frontend-docs
        TARGET_BRANCH: gh-pages
        BUILD_SCRIPT: npm install && npm run  build
        BUILD_DIR: docs/.vuepress/dist
        # CNAME: https://www.xxx.com
```
## TODO 
- [x] 添加CNAME更换域名为 https://day.liugezhou.online
- [x] 将之前的[链接](https://blog.liugezhou.online/frontend-docs/everyday/today.html)做一个重定向或者固定页面 
- [x] 添加Github Issue的评论  
- [x] UI设计排版等  
- [x] 新域名的百度统计  

