---
title: Day15
---

<summary><b>2022-10-12 星期三</b></summary>

> 人们想象自己是什么样子，那他们往往就是什么样子，他们终会变成自己所想的那样。


<p style="color:blue">1. git cherry-pick的使用 【Git】</p>
<details>
<summary><b>参考答案</b></summary>
<p>
git cherry-pick的作用是从一个分支合并部分代码到另一个分支。

语法: git cherry-pick `feature | <commitHash>`

- 该命令将指定提交的(分支[最新提交内容] or commitHash)，应用与当前分支，会在当前分支产生一个新的提交。
- 转移多个提交 ` git cherry-pick <HashA> <HashB>`,会在当前分支生成两个对应的新提交
- 转移一系列提交 `git cherry-pick A..B` 不包含 hash `A`
- 转移一系列提交 `git cherry-pick A^..B` 包含 hash `A`
- 相关配置项等[详细内容](https://ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

</p>
</details>

<hr/>
<p style="color:blue">2. 微信小程序如何区分体验版本、开发版本、正式版本 【miniProgram】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

使用 \_\_wxConfig.envVersion 区分

- envVersion: 'develop', //开发版
- envVersion: 'trial', //体验版
- envVersion: 'release', //正式版

</p>
</details>

<hr/>
<p style="color:blue">3. Vue中的nextTick原理 【Vue】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

#### 作用

使用 Vue.nextTick()是为了可以获取更新后的 DOM 。  
触发时机：在同一事件循环中的数据变化后，DOM 完成更新，立即执行 Vue.nextTick()的回调。

### 示例

- Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。
- 简单说就是，Vue 中的数据修改，并不是马上更新视图，而是等到同一时间循环中的所有变化完成之后，再进行统一的视图更新。

```
// 改变数据
vm.name = 'liugezhou'
console.log(vm.$el.textContent)  // 不会得到liugezhou

Vue.nextTick(function(){
 console.log(vm.$el.textContent)  // 可以得到liugezhou
})
```

#### 应用场景：

- 在 Vue 生命周期的 created()钩子函数进行的 DOM 操作一定要放在 Vue.nextTick()的回调函数中。
  原因：是 created()钩子函数执行时 DOM 其实并未进行渲染。
- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的 DOM 结构的时候，这个操作应该放在 Vue.nextTick()的回调函数中。
  原因：Vue 异步执行 DOM 更新，只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变，如果同一个 watcher 被多次触发，只会被推入到队列中一次。

</p>
</details>

<hr/>
<p style="color:blue">4. 如何判断一个对象是不是空对象？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- JSON.stringify(JSON.parse(obj)) === '{}'
- Object.keys(obj).length === 0

</p>
</details>

<hr/>
<p style="color:blue">5. 如何实现单行／多行文本溢出的省略样式？ 【CSS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 单行文本溢出

```css
.p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

- 多行文本溢出

```css
// 基于行数截断
.p {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

// 基于高度截断
.demo {
  position: relative;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
}
.demo::after {
  content: '...';
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 20px 0 10px;
}
```

</p>
</details>

<comment/>