---
title: Day4
---

<summary><b>2022-09-22 星期四</b></summary>

> 想起来全是问题，做起来才有答案。


<p style="color:blue">1. || 和 && 操作符的返回值是什么？【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- `||`最终返回转换为布尔值为true的那个值，如果都没有true值，返回最后一个。
- `&&`最终返回转化为布尔值为false的那个值，如果都是true,返回最后一个。

</p>
</details>

<p style="color:blue">2. 怎么将一个值转换为二进值，以及如何将一个二进制数转换为十进制 【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 二进制转十进值：(1010101).toString(2) ‘toString()中转进值’  
- 十进制数转二进制：Number.parseInt(10100,2)

</p>
</details>

<p style="color:blue">3. 为什么0.1+0.2!==0.3，如何使其相等？【JS】 </p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 计算机是通过二进制存储数据的，所以在计算0.1 + 0.2的时候，是计算这两个数二进制的和，然而这俩数都是无限循环的数，因此再次转成十进值的时候就会转成一个无限循环的多位数，因此0.1+0.2!==0.3    
- 解决:Number.parseFloat((0.1+0.2).toFixed(10)) 

- 另外还有一个Number.EPSILON值，根据规格，它表示 1 与大于 1 的最小浮点数之间的差，Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。  

- 遗留问题：1.1+2.2的和与3.3进行比较，误差大于Number.EPSILON，即0.3000000000000003 > 0.30000000000000022204返回了true。。。

</p>
</details>

<p style="color:blue">4. 请说出三种方式来判断一个对象是否为数组 【JS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

值为value
- Array.isArray(value) 返回true则是数组，否则不是数组
- Object.prototype.toString.call(value) 若为'[object Array]'则为数组，都为不是数组  
- value instanceof Array 若返回true则为数组。 
- Array.prototype.isPrototypeOf(value) 若返回true则为数组

</p>
</details>

<p style="color:blue">5. typeof null 的结果是什么？为什么？【JS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- 'object',这是JS最初的一个设计错误。

在 JavaScript 第一个版本中，所有值都存储在 32 位的单元中，每个单元包含一个小的 类型标签(1-3 bits) 以及当前要存储值的真实数据。  
类型标签存储在每个单元的低位中，共有五种数据类型：  
- 000: object   - 当前存储的数据指向一个对象。
-   1: int      - 当前存储的数据是一个 31 位的有符号整数。
- 010: double   - 当前存储的数据指向一个双精度的浮点数。
- 100: string   - 当前存储的数据指向一个字符串。
- 110: boolean  - 当前存储的数据是布尔值。

如果最低位是 1，则类型标签标志位的长度只有一位；  
如果最低位是 0，则类型标签标志位的长度占三位，为存储其他四种数据类型提供了额外两个 bit 的长度。   
有两种特殊数据类型：  
- undefined的值是 -2<sup>30</sup> (一个超出整数范围的数字)；
- null 的值是机器码 NULL 指针(null 指针的值全是 0)

那也就是说null的类型标签也是000，和Object的类型标签一样，所以会被判定为Object。
</p>
</details>

<comment/>
