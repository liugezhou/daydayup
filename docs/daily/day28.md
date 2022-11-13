---
title: Day28
---

<div align="right" style="color:#512DA8">2022年11月14日 星期一</div>

>  Be brave,take some risks,make some mistakes and then learn from them.

<p style="color:blue">1. CSS的use-select属性作用 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>

 user-select 属性可以 禁用光标选中 ，让网页看着和移动端一样。

</details>

<hr/>
<p style="color:blue">2. Canvas的基本使用 【Canvas】  </p>
<details>
<summary><b>参考答案</b></summary>

1. HTML定义 `<canvas id="demo"></canvas>`
2. 获取Canvas元素的引用：`let canvas = document.getElementById('demo')`  
3. 获取元素的context：`let ctx = canvas.getContext('2d')`
4. 绘制矩形的方法：
  - fillRect(x,y,width,height)  (绘制一个填充的矩形)
  - strokeRect(x,y,width,height) (绘制一个矩形的边框)
  - clearRect(x,y,width,height)  (清空指定矩形区域，让清除部分透明)
  - （ x 和 y 相当于绘制矩形的左上角）
5. 绘制路径的方法、步骤：
  - beginPath(): 新建一条路径，每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形 
  - moveTo(x,y): 不会发生什么图形上变化，移动笔触
  - lineTo(x,y): 绘制直线
  - closePath(): 路径闭合
  - stroke():通过线条来绘制图形轮廓
  - fill(): 通过填充路径内容区域生成实心的图形
6. 圆弧
  - arc(x,y,radius,startAngle,endAngle,direction)--以x,y为圆心，radius为半径，从star角度开始，end角度结束默认顺时针画圆。
  - arcTo(x1,y2,x2,y2,radius):根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点  
7. 二次贝塞尔曲线
  - quadraticCurveTo(cp1x,cp1y,x,y):绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。
8. 三次贝塞尔曲线
  - bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y):绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
9. 矩形
  - rect(x,y,width,height):绘制一个左上角坐标为 (x,y)的矩形
10. 色彩color
  - ctx.fillStyle ='blue' 
  - ctx.strokeStyle = 'black'
tips：
- 默认canvas宽高像素为：300 X 150
- `</canvas>`标签不可省
- canvas只支持两种形式的图形绘制：矩形和路径  
-  参数中的`width`和`height`是以宽为300份，高为150份计算的，比如canvas 设置了宽为100vw，那么300表示的就是全部的宽.
- fillStyle和strokeStyle设置后的值为后续默认值，如果要上不同的颜色，需要重新设置值。  

</details>

<hr/>
<p style="color:blue">3. box-shadow用法 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>

CSS box-shadow 属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色。

**语法**
/* x 偏移量 | y 偏移量 | 阴影颜色 */
- box-shadow:60px 16px black;

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 */
- box-shadow:60px 16px 5px black;

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
- box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页 (阴影向内) | x 偏移量 | y 偏移量 | 阴影颜色 */
- box-shadow: inset 5em 1em gold;

/* 任意数量的阴影，以逗号分隔 */
- box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* 全局关键字 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;

</details>

<hr/>
<p style="color:blue">4. vue + ts项目中Prop用法 【Vue/TS】 </p>

<details>
<summary><b>参考答案</b></summary>

- Vue中支持ts写法需要用到 `vue-property-decorator` 
- @Prop装饰器接收一个参数，这个参数有三种写法：  
- PropOptions, 包含type required default validator 四个参数 

```typescript
import { Vue, Component, Prop } from 'vue-property-decorator'
 
@Component
export default class Component extends Vue {
  // number类型
  @Prop(Number) readonly propA: number | undefined
  // 默认值为'default value'
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
  @Prop({
        default: () => {
            return [];
        }
  })
  readonly propD: {}[]
}
```


</details>

<hr/>
<p style="color:blue">5. vue-property-decorator使用指南 【TS】</p>

<details>
<summary><b>参考答案</b></summary>

[掘金链接](https://juejin.cn/post/6844903741456384014)  

- @Component
```typescript
import {Component,Vue} from 'vue-property-decorator';
import {componentA,componentB} from '@/components';

 @Component({
    components:{
        componentA,
        componentB,
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    }
})
export default class YourCompoent extends Vue{
   
}
```
- @Prop
```typescript

import {Component,Vue,Prop} from vue-property-decorator;

@Component
export default class YourComponent extends Vue {
    @Prop(String)
    propA:string;
    
    @Prop([String,Number])
    propB:string|number;
    
    @Prop({
     type: String, // type: [String , Number]
     default: 'default value', // 一般为String或Number
      //如果是对象或数组的话。默认值从一个工厂函数中返回
      // default                                    : () => {
      //     return ['a','b']
      // }
     required: true,
     validator: (value) => {
        return [
          'InProcess',
          'Settled'
        ].indexOf(value) !== -1
     }
    })
    propC:string;
    
    
}
```
- @Model
- @Watch

```typescript
import {Vue, Component, Watch} from 'vue-property-decorator';

@Component
export default class YourComponent extends Vue{
    @Watch('person', { immediate: true, deep: true })
    onPersonChanged(val: Person, oldVal: Person) { }
}
```
- @Emit
```typescript
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  count = 0

  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}

```

- @Inject
- @Provide

```typescript
import {Vue,Component,Inject,Provide} from 'vue-property-decorator';

const symbol = Symbol('baz')

@Component
export defalut class MyComponent extends Vue{
    @Inject()
    foo!: string;
    
    @Inject('bar')
    bar!: string;
    
    @Inject({
        from:'optional',
        default:'default'
    })
    optional!: string;
    
    @Inject(symbol)
    baz!: string;
    
    @Provide()
    foo = 'foo'
    
    @Provide('bar')
    baz = 'bar'
}

```

- @Mixins

</details>

<comment/>
