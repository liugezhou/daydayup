---
title: Day23
---

<div align="right" style="color:#512DA8">2022-10-27 星期四</div>

>

<p style="color:blue">1. Vue如何监听Vuex的变化  【Vue】</p>
<details>
<summary><b>参考答案</b></summary>

1. 通过 watch 方法监听

```JavaScript
const app = createApp({
    watch: {
        '$store.state.counter'() {
        console.log('https://day.liugezhou.online');
        }
    }
})
```

2. 使用 vuex 提供的 API：`store.subscribe()`

```JavaScript
store.subscribe((mutation, state) => {
    if (mutation.type === 'add') {
        console.log('counter change in subscribe()!');
    }
})
```

总结：

- watch 方式简单好用，且能获取变化前后值，首选；
- subscribe 方法会被所有 commit 行为触发，因此还需要判断 mutation.type，用起来略繁琐，一般用于 vuex 插件中。

</details>

<hr/>
<p style="color:blue">2.  </p>
<details>
<summary><b>参考答案</b></summary>


</details>

<hr/>
<p style="color:blue">3. </p>
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
