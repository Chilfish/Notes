---
title: BOM_window 对象
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

- [JavaScript.md](README.md)
- [window 对象](https://www.jianshu.com/p/7c796f4ff810)
- [图解：window 与 BOM 的关系](https://www.jianshu.com/p/f5409202a835)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [window 对象](#window-对象)
  - [setTimeout](#settimeout)

<!-- /code_chunk_output -->

## window 对象

### setTimeout

`setTimeout` 会先将回调函数放到等待队列中，等待区域内其他主程序执行完毕后，按时间顺序先进先出执行回调函数。本质上是作用域的问题

**定义**：

```js {.line-numbers}
setTimeout(fun, delay, arg);
// arg 为每次 delay 后传给 fun 的参数
```

**例：**

- 拆分结构

  ```js {.line-numbers}
  function timer(i) {
    setTimeout(console.log(i), i * 1000);
  }
  for (var i = 1; i <= 5; i++) {
    timer(i);
  }
  ```

- `let`

  ```js {.line-numbers}
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  ```

- 带第三参数

  ```js {.line-numbers}
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      function timer() {
        console.log(i);
      },
      i * 1000,
      i
    );
  }
  ```

**返回值：**

`timeoutID`。是一个正整数，表示定时器的编号。这个值可以传递给 `clearTimeout()`来取消该定时器

**取消定时：**

`clearTimeout(timeoutID)`。该 ID 值为 `setTimeout()` 的返回值
