---
title: Day14
---

<summary><b>2022-10-11 星期二</b></summary>

> 我们曾经那么好，现在却连声问候，都怕是打扰。  


<p style="color:blue">1. Vue3.0 里为什么要用 Proxy API 替代 defineProperty API？ 【Vue】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

响应式优化。
- 1. defineProperty API 的局限性最大原因是它只能针对单例属性做监听。
    Vue2.x 中的响应式实现正是基于 defineProperty 中的 descriptor，对 data 中的属性做了遍历 + 递归，为每个属性设置了 getter、setter。
    这也就是为什么 Vue 只能对 data 中预定义过的属性做出响应的原因，在 Vue 中使用下标的方式直接修改属性的值或者添加一个预先不存在的对象属性是无法做到 setter监听的，这是 defineProperty 的局限性。

- 2. Proxy API 的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作， 这就完全可以代理所有属性，将会带来很大的性能提升和更优的代码。
    Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
- 3. 响应式是惰性的
    在 Vue.js 2.x 中，对于一个深层属性嵌套的对象，要劫持它内部深层次的变化，就需要递归遍历这个对象，执行 Object.defineProperty 把每一层对象数据都变成响应式的，这无疑会有很大的性能消耗。 
    在 Vue.js 3.0 中，使用 Proxy API 并不能监听到对象内部深层次的属性变化，因此它的处理方式是在 getter 中去递归响应式，这样的好处是真正访问到的内部属性才会变成响应式，简单的可以说是按需实现响应式，减少性能消耗。

</p>
</details>

<hr/>
<p style="color:blue">2. git stash的用法 【Git】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

1. 把未提交的修改（暂存和非暂存）保存起来   
    **git stash save "test-cmd-stash" -u[存放未跟踪的文件]**
2. 查看现有stash    
    **git stash list**
3. 查看指定stash的修改  
    **git stash show [stash@{1}-不指定显示最新的]  [-u 显示未跟踪文件]**
4. 恢复之前的进度继续开发新功能 
   **git stash pop** [stash@{1}]
5. 移除stash    
   **git stash drop [stash_id(不指定删除最新的)]**
6. 删除所有stash    
   **git stash clear**

</p>
</details>

<hr/>
<p style="color:blue">3. item2 (终端) 常用的快捷键记录</p>
<details>
<summary><b>参考答案</b></summary>
<p>

描述|命令
--|----|
新建标签|command + t|
切换标签|command + 数字|
切换全屏|command + enter|
垂直分屏|command + d|
删除文本到末尾|ctrl + k |
清除当前行 | ctrl + u|
清除当前屏幕 | ctrl + l|
到行首 |ctrl + a|
到行尾 |ctrl + e|
本地拷贝文件到服务器|scp /Users/opload.js [root@x.x.x.x](mailto:root@x.x.x.x):/data/|
多级目录创建|mkdir -p dir/dir1/dir2|
文件拷贝 |cp -r /test/demo.js /data/demo.js|
文件移动 |mv /root/jar/demo.jar /data/|
查看当前文件下所有路径|find . |
解压文件 |tar -zxvf test.tar.zip -C /data/demo|
连接服务器 |ssh -p 22 root@ip_address|
系统信息 |uname -a|
本地地址 |ifconfig|
查看服务器端口占用|netstat -tunpl|


</p>
</details>

<hr/>
<p style="color:blue">4. 新建正则实例的两种方式 【Reg】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. let regex = /xyz/;
2. let regex = new RegExp('xyz','i') 


</p>
</details>

<hr/>
<p style="color:blue">5. 浏览器对象location.reload()参数作用 【BOM】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

location.reload():传入true，则重新加载本页面且scrollTop为0,传为false，则会回到当前位置。

</p>
</details>

<comment/>