---
title: LaTeX & KaTeX
date: 2022-02-25
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

- **可参考：**
  - [常用数学公式排版 KaTex 语法总结](https://kissingfire123.github.io/2022/02/18_%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8Fkatex%E5%B8%B8%E7%94%A8%E8%AF%AD%E6%B3%95%E6%80%BB%E7%BB%93/)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [前言](#前言)
- [基本公式使用](#基本公式使用)
  - [插入公式](#插入公式)

<!-- /code_chunk_output -->

## 前言

$\TeX$ 数学公式是以文本的形式和规则书写，由公式渲染器进行渲染，可以嵌入 Markdown，HTML 网页等内容。知名且广泛使用的数学 JS 渲染器支持有 $MathJax$ ， $\KaTeX$ ，两者底层采用的都是 $\TeX$ 排版协议

$MathJax$ 支持的公式功能更多更全面，但是$\KaTeX$ 渲染速度更快，而且其特性覆盖范围足够大多数人使用

> 其实讲得更多的是用在 $MarkDown$ 的 $\KaTeX$ ，可被编译在 HTML 及 `MarkDown-it` 中呈现

## 基本公式使用

### 插入公式

$\LaTeX$ 的数学公式有两种：行内公式和独立公式。行中公式放在文中与其它文字混编，独立公式单独成行

行内公式可以用单个美元符号包裹表示：例如 `$a^2+b^2 = c^2$`，渲染后 $a^2+b^2 = c^2$

独立成行的公式用 2 个美元符号包裹表示：例如 `$$a^2+b^2 = c^2$$`，渲染后：
$$a^2+b^2 = c^2$$
