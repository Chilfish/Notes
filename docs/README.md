---
home: true
title: Fish's Notes
date: 2022-01-20
heroImage: /hero.jpg
footer: MIT Licensed | Copyright © 2022-present OrganicFish

features:
  - title: 编程语言
    icon: code
    details: 为什么我才学了这么点语言啊……
    link: Language/

  - title: 算法
    icon: ability
    details: 以 C++ 为主的算法
    link: Algorithm/

  - title: 前端技术
    icon: html
    details: 果然还得是大前端
    link: FrontEnd/

  - title: 计算机基础
    icon: computer
    details: 又称 《计算机科学知识补全计划》 \doge
    link: CSBase/

  - title: 博客日志
    icon: blog
    details: 一些日常的日志）到时候再分离出去
    link: blogs/

  - title: 其他一些
    icon: article
    details: 以及别的不好分类的东西
    link: balabala/
---

<ClientOnly>
  <Sakana/>
</ClientOnly>

<style lang="scss">
.hero-info-wrapper {
  margin: 3rem auto;
  & > img {
  border-radius: 0.5rem;
  box-shadow: 2.9px 4.5px 2.5px -6px rgba(0, 0, 0, 0.05),
    11px 17px 20px -6px rgba(0, 0, 0, 0.1);
  }
}
</style>
