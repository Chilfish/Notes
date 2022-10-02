---
title: JavaScript 基础
date: 2022-03-11
---

<p style="font-size: 32px; font-weight: bold;">目录</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [基本数据类型](#基本数据类型)
- [控制语句与循环](#控制语句与循环)
- [字符串](#字符串)
- [表达式与运算符](#表达式与运算符)
- [类型转换](#类型转换)
- [错误抛出](#错误抛出)
- [函数](#函数)
  - [箭头函数](#箭头函数)
  - [自执行函数](#自执行函数)
  - [函数作用域](#函数作用域)
  - [call, apply, bind](#call-apply-bind)

<!-- /code_chunk_output -->

<br>

## 基本数据类型

<br>

## 控制语句与循环

- **for (.. in ..)** 用下标遍历对象
  ```js {.line-numbers}
  let a = ['12', 34, 'avb'];
  for (let i in a) console.log(a[i]);
  ```
- **for (.. of ..)** 直接遍历对象, 甚至生成器函数
  ```js {.line-numbers}
  let a = ['12', 34, 'avb'];
  for (let i of a) console.log(i);
  ```

## 字符串

**方法**

<div style="text-align: center;margin: 1rem;">

<span></span>
| 方法 | 描述 |
| :----: | :---
| `charAt()` | 返回指定位置的字符 |
| `charCodeAt()` | 返回指定位置的字符的 Unicode 编码 |
| `concat()` | 字符串拼接, 返回拼接得到的新字符串 |
| `slice()` | 提取字符串的片断，并在新的字符串中返回被提取的部分 |
| `substr()` | 从起始索引号提取字符串中指定数目的字符 (包前不包后) |
| `substring()` | 提取字符串中两个指定的索引号之间的字符 (包前不包后) |
| `indexOf()` | 返回某个指定的字符串值在字符串中首次出现的位置 |
| `lastIndexOf()` | 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置 |
| `toLowerCase()` | 把字符串转换为小写 |
| `toUpperCase()` | 把字符串转换为大写 |
| `match()` | 查找找到一个或多个正则表达式的匹配 |
| `search()` | 返回字符串中第一个匹配项的索引,如果没有找到匹配项, 则返回 -1 |
| `replace()` | 在字符串中查找匹配的子串，并替换与正则表达式匹配的子串 |
| `split()` | 把字符串分割为字符串数组 字符串转数组 |
| `trim()` | 去除字符串两边的空白 |
| `localeCompare()` | 比较两个字符串的字符顺序 |
| `formCharCode()` | 接受一个指定的 Unicode 值，然后返回一个字符串 静态方法 |
| `valueOf()` | 返回某个字符串对象的原始值 |

</div>

> 参考：[String 对象方法总结](https://www.jianshu.com/p/1bc145627572)

<br>

## 表达式与运算符

## 类型转换

- 转为数字：`Number(xx)`, `parseInt(xx, 进制)`, `parseFloat(xx)`
- 转为字符串：`xx.toString()`, `String(xx)`, `xx + ''`
- 转为布尔：`Boolean(xx)`
- 转为对象：`new Number()`...

## 错误抛出

- 主要还是为了即使出错了也能保证程序的运行

  ```js {.line-numbers}
  try {
      ...    //异常的抛出
  } catch(e) {
      ...    //异常的捕获与处理
  } finally {
      ...    //结束处理
  }
  ```

## 函数

### 箭头函数

箭头函数表达式的语法比函数表达式**更简洁**，并且没有自己的 `this`，`arguments`，`super` 或 `new.target`，而是指向了 **父作用域**。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数(new)。

**构造：**

- **如**：

  ```js {.line-numbers}
  let a = ['233', '54f', '23'];

  // 一般写法：
  let l = a.map(function (element) {
    return element.length;
  });
  // 箭头函数：
  let l = a.map((len) => len.length);

  console.log(l); //输出 [3, 3, 2]
  ```

- 也能用上**三目运算符**：
  ```js {.line-numbers}
  let max = (a, b) => (a > b ? a : b);
  //调用：
  let maxx = max(12, 33); //当然也有 Math.max();
  ```
- **递归：**
  ```js {.line-numbers}
  let fact = (x) => (x ? x * fact(x - 1) : 1);
  ```

> ! 箭头函数只适合干简单事啦，尽量不用来定义函数

### 自执行函数

- 即不用调用就能执行的函数，多为**匿名函数**

  ```js {.line-numbers}
  (() => {
    console.log('Hello');
  })();
  // 或：
  (function () {
    console.log('Hello');
  })();
  ```

- **结构**
  &emsp;&emsp;先用`( )`将函数主体括起来，末尾再加一个括号表示**给函数的参数传的值**

- **for 循环中的事件**
  &emsp;&emsp; JavaScript 在执行 for 循环语句时，负责给元素安装点击事件，但当用户点击元素触发事件时，for 循环语句早就执行完毕了。所以一般在事件函数中用**自执行函数**

- **如：**

  ```js {.line-numbers}
  for (let k = 0; k < ele.length; k++) {
    (function (k) {
      ele[k].addEventListener('click', function (e) {
        alert('index is: ' + k + ', and this ele is: ' + ele[k].innerHTML);
      });
    })(k);
  }
  ```

> 参考：[浅谈自执行函数（立即调用的函数表达式）](https://www.jianshu.com/p/c64bfbcd34c3)

### 函数作用域

所谓作用域就是：变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的。父对象的所有变量，对子对象都是可见的，反之则不成立。

- 在 javascript 中，`if`、`while`、`for` 等代码块不能形成独立的作用域。因此，javascript 中没有块级作用域，**只有函数作用域**。

但是，在 JS 中有一种特殊情况：

- 如果一个变量没有使用 **`var`** 声明，window 便拥有了该属性，因此这个变量的作用域不属于某一个函数体,而是 window 对象(全局)。

  > 即：没有 var 的变量可在函数外调用

### call, apply, bind

本质上是 **借用函数**。例：

```js {.line-numbers}
const mie = {
    name: 'mie',
    money: 12,
    getMoney(num) {
      this.money += num;
    },
  },
  fish = {
    name: 'fish',
    money: 10,
  };

console.log(fish.money);
mie.getMoney.call(fish, 100);
console.log(fish.money);
```

**即：** `fun.[call | bind | apply](obj, [args])`。区别在于， bind 的参数必须是数组类型，bind 是返回函数但不立即执行
