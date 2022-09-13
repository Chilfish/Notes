# What the hell seen today ？

[TOC]

<br>

## 22-06

#### 在这之前...

- **文章：**
  [Canvas 资源](https://github.com/chinaBerg/awesome-canvas) &emsp; | [MDN 伪类和伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E5%8F%82%E8%80%83%E8%8A%82) &emsp;| [隼鸟 2 号：首次发现地外氨基酸？](https://weibo.com/ttarticle/p/show?id=2309404781329462984737)

&emsp;&emsp;

### 06-20

- **dashboard：**
  - VsCode：`11h20m` | Firefox：`5h52m`
- **文章 | 文档：**
  [Axios 文档][06-20_1] &emsp; | [使用 Typescript 开发 Node.js 项目][06-20_2] &emsp; | [Express 框架 文档](http://expressjs.com/zh-cn/) &emsp;| [用 Node 写一个 APi 接口](https://www.jianshu.com/p/44149ac15b40) &emsp;| [还算可以的 Node 文章 ](https://brucecai55520.gitee.io/bruceblog/notes/nodejs/Node.html) &emsp;| [输入 URL 到显示过程发生了什么](https://segmentfault.com/a/1190000013662126) &emsp;
- **社交平台：**
- **其他：**
  - 先是凌晨的 [innei.ren 的毕业](https://innei.ren/notes/123)，看了会 [起码课的 Promise](https://www.bilibili.com/video/av712155832) 的异步，终于是由 [50 个项目的 github 查询](https://50projects50days.com/projects/github-profiles) 补了 `ajax | Axios`
  - 艰难地尝试用 ts 配置 `Node` 的工程项目，更多的还是在模块的导入......终于是用 `pnpm i @types/Node` 才能在 ts 中使用 `Node` 自带模块（import）
  - 然后在 <a href="../../Web/TypeScript/ts-fish/src/index.ts">ts 项目</a> 下，用 `HTTP` 模块整出了个 `API` 服务器，并结合 `axios` 成功地获取到了数据
  - 顺便地在 [起码课的 ExpressJs](https://www.bilibili.com/video/av250818016) 项目中，终于是搞明白了 “路由” 的一些概念，以及 `ExpressJs` 框架的...... 所以，不要跳着来，Vue 之前还得是 Node
  - 顺便的一个 Node 工具： `pnpm i nodemon`，它将监测文件的改动来刷新项目，就不用每次改动都手动重启项目了

[06-20_1]: https://www.axios-http.cn/
[06-20_2]: https://segmentfault.com/a/1190000007574276

&emsp;&emsp;

### 06-21

- **dashboard:**
  - VsCode： `3h36m` | FireFox： `4h6m`
- **文章 | 文档**
  [用户代码片段生成器](https://snippet-generator.app/) &emsp; | [JS 注释描述](http://yuri4ever.github.io/jsdoc/) &emsp; | [代码规范](http://alloyteam.github.io/CodeGuide/) &emsp; | [在线的网易云音乐 API 服务器](https://ping-music-api.vercel.app/)
- **社交平台**
  - B 站果然整付费视频了...... 之前爬到的视频 APi：`GET https://api.bilibili.com/x/player/v2?cid=xx&aid=xx&bvid=xx`，中就有一个莫名的返回结果：`preview_toast "为创作付费，购买观看完整视频|购买观看"`
  - ![](./img/22-06-21.png)
- **其他**
  &emsp;&emsp;

### 06-22

- **dashboard:**
  - VsCode：`7h40m` | FireFox：`5h`
- **文章 | 文档**
  [Node 项目如何使用 ES 模块](https://blog.csdn.net/sayUonly/article/details/122885171) &emsp; | [tsconfig.json 的配置](https://blog.csdn.net/muguli2008/article/details/122246623) &emsp; | [GitHub Node 前后端项目](https://github.com/shi-jin/myhoutai) &emsp; | [Cors 跨源资源共享](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
- **社交平台**
- **其他**
  - 终于算是解决了在 ts 中使用 ES 模块但编译到 js 后却用不了的窘况：[为什么用不了 ES 模块](https://segmentfault.com/q/1010000039917414) ......只能说官方没做好...？ 最后还得在 `Node` 之后加句编译选项，整到 `nodemon` 就是 `"serve": "nodemon --exec \"Node --experimental-specifier-resolution=Node ./build/main\""`
  - 主要是在补 Node 了，感觉主要还是先搞定 Node 服务器(`express`)的问题，好在是找到了个用 Node 整前后端的项目。那感觉目前就是要 ——
    - 先是 `node-ts` 后端部署好 API 服务器，同时连上 MySQL
    - 前端先是 `html` 加上 `sass` 和 `css` 框架、ts 代替 js
    - 项目先是一个后台管理系统，差不多时再接上网易云的 API，和网易云的静态界面
    - 最后才上 `Vue` 框架补齐

&emsp;&emsp;

### 06-23

- **dashboard:**
  - VsCode：`6h17m` | Firefox：`2h48m`
- **文章 | 文档**
  [Express 入门项目](https://juejin.cn/post/7022539322670710798)
- **社交平台**
- **其他**
  主要还是用着 `Express + ts` 写了个 `api` 服务器，对本地 `json` 文件增删改查似乎都可以用，`PostMan` 还挺好诶

&emsp;&emsp;

## 22-07

### 07-06

- **dashboard:**
  - VsCode：
- **文章 | 文档**
  [VsCode 中使用 Eslint](https://www.cnblogs.com/Jamie1032797633/p/11125786.html) &emsp; | [从零开始配置 TypeScript 项目](https://juejin.cn/post/6856410900577026061) &emsp; | [Eslint 中文文档](http://eslint.cn/docs/user-guide/configuring) &emsp; | [tsconfig 的一些配置](https://yesifang.com/zh/TypeScript%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B/c2fff071/)
- **社交平台**
- **其他**

&emsp;&emsp;

### 07-10 ~ 11

- **dashboard:**
  - VsCode： `8h10m`
- **文章 | 文档**
  [一些 Web 的聚合文档](https://www.icoderoad.com/) &emsp; | [真丶 Bootstarp 中文文档](https://www.bootstrap.cn/doc/book/2.html) &emsp; | [font-awesome@6.1](https://fontawesome.com/) &emsp; | [可以试一试的 JS Web Projects](https://vanillawebprojects.com/#projects) &emsp; | [Sass 教程](https://juejin.cn/post/7055101823442485255)
- **社交平台**
- **其他**
  - 补了 git，整了分支和一个 `pull request`
  - 趁着买一送一和史低补上了 `Minecraft`！顺便也在 Wiki 补了点基础的，像是版本特性之类的。甚至之前对 MC 的认知还在 `1.8.0` 左右 hh（按版本号的话，破坏性更新的 `2.0.0` 什么时候出 \\Doge）
  - 忘记原因地要找回微博的裂图，然后发现它的原理应该是检测到是“违规图片”后，将链接重定向到 [裂图](https://ww4.sinaimg.cn/images/default_s_large.gif)。但原图还在图床上，改改图床链接就好：
    - 挂图链接（可在 F12 看到）：`https://wx2.sinaimg.cn/orj360/xxx.jpg`
    - 只要将 `/wx(\d)/gm` 改为 `ww$1`，`orj360` 改为原图大小的 `large` 就行。
    - 用 axios 请求到微博详情的 Api：`https://weibo.com/ajax/statuses/show?id=`，其中 id 值为微博原链接 `https://weibo.com/用户id/博文id` 中的 `博文 id`。再把获取到的原图链接再请求下来转存成本地文件就好。码：[一些 Temp.md](一些Temp.md#大眼仔你坏事干净)
  - 学了点 Sass，好玩诶，并且终于上了 `Bootstarp` 和 `font-awesome`，开始筹备起聚合音乐了

&emsp;&emsp;

## 22-08

### 08-01 ~ 10

- **dashboard:** `WakaTime Error`
- **文章 | 文档**
  [C++ 右值引用 && 与 move](https://zhuanlan.zhihu.com/p/335994370) &emsp; |
- **社交平台**
- **其他**
