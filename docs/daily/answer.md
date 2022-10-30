---
title: Day25
---

<div align="right" style="color:#512DA8">2022年10月31日 星期一</div>

> When you want something, all the universe conspires in helping you to achieve it.

<p style="color:blue">1. Vue2中为什么只能有一个根组件 【Vue】</p>
<details>
<summary><b>参考答案</b></summary>

- vue2中组件确实只能有一个根，但vue3中组件已经可以多根节点了。
- 之所以需要这样是因为vdom是一颗单根树形结构，patch方法在遍历的时候从根节点开始遍历，它要求只有一个根节点。组件也会转换为一个vdom，自然应该满足这个要求。
- vue3中之所以可以写多个根节点，是因为引入了`Fragment`的概念，这是一个抽象的节点，如果发现组件是多根的，就创建一个`Fragment`节点，把多个根节点作为它的children。将来patch的时候，如果发现是一个`Fragment`节点，则直接遍历children创建或更新。

</details>

<hr/>
<p style="color:blue">2. 怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？ </p>
<details>
<summary><b>参考答案</b></summary>

晚上补充啊

</details>

<hr/>
<p style="color:blue">3.Javascript中如何实现函数缓存？函数缓存有哪些应用场景？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>

晚上补充啊

</details>

<hr/>
<p style="color:blue">4.如何判断一个元素是否在可视区域中？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>

晚上补充啊

</details>

<hr/>
<p style="color:blue">5. 说说对 Node 中的 process 的理解？有哪些常用方法？ 【Node】</p>

<details>
<summary><b>参考答案</b></summary>

每晚补充

</details>

<comment/>
