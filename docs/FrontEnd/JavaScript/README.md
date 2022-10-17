---
title: JavaScript
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

- **外链**
  - [现代 JavaScript 教程](https://zh.javascript.info/)
  - [MDN 官方文档](https://developer.mozilla.org/zh-CN/)
  - [阮一峰 - ES6](https://es6.ruanyifeng.com)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [简介](#简介)
- [DOM](#dom)
  - [浏览器事件](#浏览器事件)
- [BOM](#bom)
  - [window 对象](#window-对象)

<!-- /code_chunk_output -->

<br>

## 简介

简介……

<br>

- [基础语法](base.md)
- [对象和类](Object.md)
- [ES6.js](ES6.js.md)
- [同步与异步](Async.md)

<br>

## DOM

文档对象模型（DOM）是用来表达 HTML、XHTML 及 XML 文档中的对象或与其进行交互的约定，它是跨平台的，并且与编程语言无关。通过调用 DOM 树上对象的方法可以操纵这些对象。

**详见：** [DOM](DOM.md)

### 浏览器事件

**事件** 是某事发生的信号。所有的 DOM 节点都生成这样的信号（但事件不仅限于 DOM）。 为了对事件作出响应，我们可以分配一个 处理程序（handler）—— 一个在事件发生时运行的**函数**。 处理程序是在发生用户行为（action）时运行 JavaScript 代码的一种方式。

**详见：** [Evens.md](Events.md)

<br>

## BOM

**BOM**：**Browser Object Model** 是浏览器对象模型，浏览器对象模型提供了独立与内容的、可以与浏览器窗口进行互动的对象结构。 BOM 由多个对象构成，其中代表浏览器窗口的 window 对象是 BOM 的顶层对象，其他对象都是该对象的子对象。

### window 对象

浏览器里面，window 对象指当前的浏览器窗口。它也是当前页面的**顶层对象**，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。

**详见：** [BOM window](BOM.md)
