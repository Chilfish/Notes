---
title: 对象、类和 OOP
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [对象](#对象)
  - [对象和属性](#对象和属性)
    - [创建对象](#创建对象)
    - [for 遍历](#for-遍历)
    - [对象的克隆](#对象的克隆)
    - [this](#this)
  - [标准内置对象](#标准内置对象)
    - [Array 数组](#array-数组)
    - [Date 对象](#date-对象)
    - [Math 对象](#math-对象)
    - [Map 对象](#map-对象)
    - [Set 对象](#set-对象)
    - [正则表达式](#正则表达式)
  - [迭代器 iterator](#迭代器-iterator)
  - [arguments 对象](#arguments-对象)
- [类](#类)

<!-- /code_chunk_output -->

<br>

## 对象

在 `JavaScript` 中 **万物皆可为对象**

### 对象和属性

#### 创建对象

- **使用对象初始化器** :

  ```js {.line-numbers}
  let obj = {
    name: 'haha',
    age: 14,
    color: 'pink',
  }; // 创建对象,或：
  let oo = new Object();

  obj.like = 'Java'; //也能创建后通过赋值来添加或改变值

  console.log(obj.name, 'is', obj['age'], 'old');
  // haha is 14 old
  ```

  > 有点类似于`json`语法，用点号或`[]`下标访问

- **构造函数来创建对象**

  ```js {.line-numbers}
  function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }
  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  let rand = new Person('Rand McKinnon', 33, 'M'),
    car1 = new Car('Eagle', 'Talon TSi', 1993, rand);

  console.log(car1.owner.name); // Rand McKinnon
  ```

- **使用 Object.create( ) 方法** &emsp;&emsp; 对象也可以用 `Object.create()` 方法创建。该方法非常有用，因为它允许你为创建的对象选择一个原型对象，而不用定义构造函数

  ```js {.line-numbers}
  let Animal = {
    type: 'Invertebrates', // 属性默认值
    displayType: function () {
      console.log(this.type); // 用于显示type属性的方法
    }, // 对象中套函数
  };
  // 创建一种新的动物——Fishes
  let fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // Output:Fishes
  ```

- **对象长度：**

  ```js {.line-numbers}
  let len = Object.keys(oo).length;
  ```

#### for 遍历

- 纯对象是不能用 `for of` 遍历的(`myObj is not iterable`)，需要制定遍历的对象（值或键）

  ```js {.line-numbers}
  for (let i of Object.values(myObj)) // Object.keys(myObj)
    console.log(i);
  //
  for (let [key, val] of Object.entries(fish)) {
    console.log(val);
  }
  //
  Object.entries(fish).forEach(([key, val]) => {
    console.log(val);
  });
  ```

#### 对象的克隆

对象是属于引用型数据，直接用等号赋值时会把原对象的地址也赋值过去了。这时候就要用到对象的克隆：

```js {.line-numbers}
const a = {
  name: 'fish',
  data: {
    value: 2333,
  },
};
const b = Object.assign(a);
```

#### this

在 `JavaScript` 中 `this` 不是固定不变的，它会随着执行环境的改变而改变

- 在**对象方法**中， this 指向调用它所在方法的对象
- **单独**使用 this，它指向全局(Global)对象
- **函数**使用中，this 指向函数的所属者
- **严格模式**下函数是没有绑定到 this 上，这时候 this 是 `undefined`
- 在 **HTML 事件**句柄中，this 指向了接收事件的 HTML 元素
- apply 和 call 允许切换函数执行的上下文环境（context），即 this 绑定的对象，可以将 this 引用到任何对象

- **如：**

  ```js {.line-numbers}
  let f = function () {
    console.log(this.x);
  };
  let x = 1;
  let obj = {
    ff: f,
    x: 2,
  };

  f(); // 单独执行, window 环境 // 1
  obj.ff(); // obj 环境执行  // 2
  ```

### 标准内置对象

#### Array 数组

<div class="h5">函数方法：</div>

- `arr.splice(pos, len, ...[array])`：增删元素，无返回值。在 `pos` 处删除 `len` 长的元素，并插入新元素(可选)
- `arr.slice(start, end)`：数组切片，返回 从 [`start`, `end`) 之间的元素的数组，无参数则复制整个数组
- `array.concat(array | value)` : 合并拼接数组
  ```js {.line-numbers}
  let num1 = [1, 2, 3],
    num2 = [4, 5, 6],
  let num = num1.concat(num2); // [1, 2, 3, 4 ,5 ,6]
  ```
- `array.join(value)` : 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
  ```js {.line-numbers}
  let numbers = [4, 2, 5, 1, 3];
  console.log(numbers.join('--'));
  //4--2--5--1--3
  ```
- **搜索：**
  - `arr.indexOf(value, pos)`：从 pos 开始搜索 value，找到则返回下标
  - `arr.includes(value | pos)` : 从`pos`开始判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`
  - `arr.find(function(item, index, arr))`：
    找到时返回 `item`，否则返回 `undefined`
    ```js {.line-numbers}
    let users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Pete' },
      { id: 3, name: 'Mary' },
    ];
    let user = users.find((item) => item.id == 1);
    user.name; // -> John
    ```
  - `arr.filter(function(item, index, arr))`：
    过滤器，返回符合条件的数组
    ```js {.line-numbers}
    let arr = [1, 2, 3, 4];
    let ans = arr.filter((item) => {
      return item % 2;
    });
    ans; //->[1 3]
    ```
- `array.pop()`、 `array.push()`：队尾增删
- `arr.shift()`、`arr.unshift()`：队首增删
- `array.sort(fun)` : 默认地按 **字符串** 的方式来排序

  ```js {.line-numbers}
  let numbers = [4, 2, 5, 1, 3];
  numbers.sort((a, b) => a - b); //所以排数字时要定义排序的函数
  numbers; //-> [1 2 3 4 5]

  //也能是排序数组中的对象
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  ```

- **遍历数组：** 方法的**参数**都一样： `arr.fun(function(item, index, arr))` ：当前值、值的下标、数组本身

  - `forEach` : 无返回值，通常只用于 只调用数组数据的情况
    ```js {.line-numbers}
    let a = [1, 2, 3];
    a.forEach((i) => {
      console.log(i);
    });
    // 1 2 3
    ```
  - `map`： 处理器，返回处理后的新数组
    ```js {.line-numbers}
    let arr = [1, 2, 3, 4];
    let ans = arr.map((item) => {
      return item * 2;
    });
    ans; //-> [2 4 6 8]
    ```
  - `reduce`： 归并器，多带一个参数：`arr.reduce(function(prev, curr, index, arr))`

- **等概率的随机洗牌：**
  ```js {.line-numbers}
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  ```

> 参考：[MDN Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%8F%8F%E8%BF%B0) 、 [数组方法](https://zh.javascript.info/array-methods)

#### Date 对象

- **属性**

  ```js {.line-numbers}
  let date = new Date(year | monthIndex | day | hours | minutes | seconds);
  // 参数可选，否则返回当前的本地时间
  date.method();
  ```

- **函数方法**

<div class="tableBox">

<span></span>
| 方法 | 描述 |
| :-----------------: | :------------------------------------------ |
| `getDate()` | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
| `getDay()` | 从 Date 对象返回一周中的某一天 (0 ~ 6)。 |
| `getFullYear()` | 从 Date 对象以四位数字返回年份。 |
| `getHours()` | 返回 Date 对象的小时 (0 ~ 23)。 |
| `getMilliseconds()` | 返回 Date 对象的毫秒(0 ~ 999)。 |
| `getMinutes()` | 返回 Date 对象的分钟 (0 ~ 59)。 |
| `getMonth()` | 从 Date 对象返回月份 (0 ~ 11)。 |
| `getSeconds()` | 返回 Date 对象的秒数 (0 ~ 59)。 |
| `getTime()` | 返回 1970 年 1 月 1 日至今的毫秒数。 |

</div>

> 设置则将 get 改为 set ，时间前加上 UTC 代表 UTC 时

#### Math 对象

Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法

- **属性**

  - `Math.E` : 欧拉常数，也是自然对数的底数，约等于 2.718
  - `Math.LN2` ： 2 的自然对数，约等于 0.693
  - `Math.PI` : 圆周率，约等于 3.14159

- **函数方法**

  - `Math.floor(x)`: 返回 x 的向下取整后的值
  - `Math.hypot(x, y,..)`: 返回参数的平方和的平方根
  - `Math.random()` : 返回 0 到 1 内的随机数
    - 0 到最大值的随机数：
      ```js {.line-numbers}
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      ```
    - 包含范围在内的随机数：
      ```js {.line-numbers}
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
      }
      ```
  - `Math.round(x)` : 返回 x 四舍五入后的值
  - `Math.trunc(x)` : 返回 x 的整数部分

#### Map 对象

- **定义** &emsp;&emsp; 一个 Map 的键可以是任意值，包括函数、对象或任意基本类型。且 Map 中的 key 是有序的。因此当迭代的时候以插入的顺序返回键值

- **属性**

  ```js {.line-numbers}
  let mpa = new Map();
  mpa.set('key', 'value');
  mpa.set('name', 'haha');
  mpa.set('age', 14);
  console.log(mpa.size); // 3
  ```

- **遍历**

  ```js {.line-numbers}
  for (let [i, j] of mpa) console.log(i, ':', j);

  for (let key of mpa.keys()) console.log(key);

  mpa.forEach((value, key) => {
    console.log(key, ':', value);
  });
  ```

- **方法**
  - `mpa.clear()` : 清除所有元素
  - `mpa.delete(key)` : 删除 key 并返回 bool 值
  - `mpa.has(key)` : 返回 bool 值
  - `mpa.get(key)` : 返回 key 下的 value
  - `mpa.entries()` : 返回一个新的包含 `[key, value]` 对的 `Iterator` 对象，返回的迭代器的迭代顺序与 Map 对象的**插入顺序**相同

#### Set 对象

- **定义** &emsp;&emsp; Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set 中的元素只会出现一次，即 Set 中的元素是唯一的

- **属性**

  ```js {.line-numbers}
  let mySet = new Set();
  mySet.add(1); // Set [ 1 ]
  mySet.add(5); // Set [ 1, 5 ]
  mySet.add(5); // Set [ 1, 5 ]
  mySet.add('some text'); // Set [ 1, 5, "some text" ]
  ```

- **方法**
  - `set.add(value)` : 添加值
  - 其他的和 map 类似

#### 正则表达式

-

> Ref: [MDN 中的正则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### 迭代器 iterator

所有的迭代器对象都有一个 `next()` 方法，每次调用都返回一个结果对象。结果对象有两个属性：一个是 **`value`**，表示下一个将要返回的值；另一个是 **`done`**，它是一个布尔类型的值，当没有更多可返回数据时返回 true

- **可被迭代的对象** 目前所有的内置可迭代对象如下：String、Array、TypedArray、Map 、 Set 和 NodeList 对象

### arguments 对象

是一个对应于传递给函数的参数的**类数组**对象

- **如：**

  ```js {.line-numbers}
  function add() {
    let sum = 0,
      len = arguments.length;
    for (let i = 0; i < len; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  add(); // 0
  add(1); // 1
  add(1, 2, 3, 4); // 10
  ```

  > 其实就是将函数传入的参数列到 `arguments` 数组中，但又不同于 `Array`

<br>

## 类
