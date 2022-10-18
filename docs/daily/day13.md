---
title: Day13
---

<summary><b>2022-10-10 星期一</b></summary>

> 平庸将你的心灵烘干到没有一丝水分，然后荣光才会拨动你心灵最深处的弦。


<p style="color:blue">1. Webpack中的sourceMap配置？ 【Webpack】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 项目打包后，如果关闭 sourceMap 的配置，在浏览器打开项目后，看到的 js 代码为打包后的代码，不利于查找代码错误。
- sourceMap 是一个映射关系，他可以知道在 dist 打包后的 main.js 错误的代码对应在未经打包的代码的位置。

配置项为：
- devtool:'source-map'---会在 dist 目录下生成一个.map 的映射文件。
- 如果为'inline-source-map'，则不会生成.map 文件，直接在原 main.js 文见中添加注释以映射(位置在底部)。
- 如果为'cheap-inline-source-map' :与 inline 不同，只告诉是哪行代码出错，效率会高一些。
- 如果为"cheap-module-source-map':不管是业务代码，但是依赖的第三方模块，都会显示出出错的地方。
- eval 是打包效率最高的方式。
- 如果是开发环境，建议使用“cheap-module-eval-source-map'这种方式。如果是生产环境，一般不用设置 devtool 的配置。如果要配置，推荐使用"cheap-module-source-map"。

</p>
</details>

<hr/>
<p style="color:blue">2.JS编译解析原理以及AST的理解 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

JS的编译原理简单说就是先对源代码进行分词(分解)转换成一个个有意义的代码块，然后将这些有意义的代码块生成抽象语法树AST，最后对AST进行操作、解析成可执行代码进行执行。 

1. 首先这个AST也就是抽象语法树，是 Abstract Syntax Tree的缩写。 
2. AST生成的主要就是两个步骤：词法分析和语法分析。
- 词法分析：就是读取源代码，安装预定的规则(比如遇到空格、括号、换行等)将代码合成一个个的标识token。 
- 语法分析：就是将词法分析出来的数组转换成树的表达形式，并同时验证代码语法是否有误。
3. 然后这个时候就生成一颗抽象语法树，它定义了代码的结构。通过操纵这颗树，我们可以精确定位到声明语句、赋值语句、运算语句等等，实现对代码的分析、优化、变更等操作。

很多工具和库的核心都是AST,像webpack、lint、babel等，一般都是分三个阶段运行代码：解析（parsing），转译（transforming），生成（generation)

</p>
</details>

<hr/>
<p style="color:blue">3.node是单线程，为什么能处理高并发 【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

事件驱动。  
- 每个Node.js进程只有一个主线程在执行程序代码，行成一个执行栈 
- 主线程之外还维护了一个"事件队列"(Event Queue)，当用户的网络请求或者其他异步操作到来时，node都会放到事件队列中去，此时不会立即执行这个异步任务，代码也不会阻塞，会继续往下走，直到主线程代码执行完毕。  
- 主线程代码执行完毕后，通过事件循环机制(Event Loop),到事件队列的开头取出第一个事件去执行，执行完毕后主线程不断检查事件队列中是否有未执行事件，若有继续执行，直到事件队列中所有事件执行完毕。 
- 主线程不断重复上面的第三步  

Node之所以单线程可以处理高并发的原因，在于libuv层的事件循环机制，和底层线程池的实现，在事件循环机制上，新版本的node和浏览器类似。
</p>
</details>

<hr/>
<p style="color:blue">4. Promise和async await是解决什么问题的，为什么存在两种方式？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 首先，Promise的出现是为了解决异步产生的回调地狱，使得开发人员用新的方式来编写程序。 
- 而Promise出现引出的新问题是如果有多个Promise要执行，虽然Promise.all可以解决，但是如果存在Promise先后的执行顺序，Promise就不能很好的解决了。 
- 然后 async await出现，允许异步程序用同步代码的方式写程序，也就是说async await解决了Promise产生的一些问题，且是建立在Promise的基础上实现的，返回的仍然是一个Promise。

</p>
</details>

<hr/>
<p style="color:blue">5. TypeScript 如何设计 Class 的声明？ 【TS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

在声明类的时候，一般类中都会包含:构造函数、对构造函数中的属性进行类型声明、类中的方法。
```javascript
class Greeter {
   greeting: string;
   constructor(message: string) {
       this.greeting = message;
   }
   greet(): string{
       return "Hello, " + this.greeting;
   }
}
let greeter = new Greeter("world");
```

</p>
</details>

<comment/>
