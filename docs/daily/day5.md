---
title: Day5
---

<summary><b>2022-09-23 星期五</b></summary>


> 你之所以会活的不开心，是因为你太喜欢回头看了，人的这一生很长，不要站在现在的角度去批判过去的自己，除了生病之外，我们所有能感受到的痛苦，都不是真实存在的，而是那么多年的价值观所带来的的，所以即使人生能够重来，相信以当时的心智和当时的阅历，我们还是会做出同样的选择，所以人一定要学会跟自己和解，去接受每一个阶段的自己，无论好坏，这都是你的人生。


<p style="color:blue">1. typeof NaN的结果？isNaN和Number.isNaN函数的区别？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

NaN 指“不是一个数字”，用于指出数字类型中的错误情况。  
`typeof NaN; // "number"`

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反的值。  
`NaN !== NaN 为 true。`

函数isNaN会将参数转换为数值，任何不能被转换为数值的值都会返回true，因此非数字值传入也会返回true。   
函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

</p>
</details>

<p style="color:blue">2. Object.is() 与比较操作符 “===”、“==” 的区别？【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。    

+0 === -0 //true    
NaN === NaN // false
 
Object.is(+0, -0) // false    
Object.is(NaN, NaN) // true   

</p>
</details>

<p style="color:blue">3. Object.assign和扩展运算法是深拷贝还是浅拷贝 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

两者都是浅拷贝

- 扩展运算符：
```
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = {...outObj}
newObj.inObj.a = 2
console.log(outObj) // { inObj: {a: 2, b: 2} }
```

- Object.assign():
```
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = Object.assign({}, outObj)
newObj.inObj.a = 2
console.log(outObj) // { inObj: {a: 2, b: 2} }
```

</p>
</details>

<p style="color:blue">4. 深拷贝方法 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

JSON.stringify()  
JSON.parse()

</p>
</details>

<p style="color:blue">5.手写递归深拷贝 【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

```JavaScript
 function deepClone1(obj) {
        var objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") {
                        objClone[key] = deepClone1(obj[key]);
                    } else {
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }
```

</p>
</details>

<comment/>
