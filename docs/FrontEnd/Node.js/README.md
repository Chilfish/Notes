---
title: Node.js
---

<p style="font-size: 32px; font-weight: bold;">目录</p>

- [JavaScript](../JavaScript/README.md)
- [Express 框架](Express.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [Node 项目](#node-项目)
  - [初始化](#初始化)
- [模块](#模块)
  - [Common JS 与 ES Modules](#common-js-与-es-modules)
  - [Buffer 缓冲区](#buffer-缓冲区)
  - [Path 路径](#path-路径)
  - [fs 文件读写](#fs-文件读写)
  - [Express 框架](#express-框架)

<!-- /code_chunk_output -->

<br>

> **一些默认的约定：** 下文的 js 文件的工作目录（即 IDE 或命令行打开的目录）为 `D:\Node`，文件路径为`D:\Node\src\index.js`，若无说明，代码的单行注释为该行的输出

<br>

## Node 项目

### 初始化

- cd 到项目文件夹并运行 ↓ 后，按提示填写项目信息，就会生成 `package.json` 文件
  ```shell {.line-numbers}
  pnpm init
  # 选默认值则是:
  pnpm init -y
  ```
- `package.json` 文件包含的信息：

<div class="img" align="center"><img src="./img/Node_package.png"/><p>
  配置信息
</p></div>

- 其中最后的 `type` 字段是涉及到模块规范的支持，它有两个可选值： `commonjs` 和 `module` ，其默认值为 `commonjs`

  > 关于 `package.json` 的完整的选项可以在 [npm Docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)上查阅

- 监视 node 文件更改的 `nodemon`：[官网](https://nodemon.io/) 、 [配置说明](https://www.jianshu.com/p/a35dfc72c6e6)，以及大概的配置：

  ```json {.line-numbers}
  "scripts": {
    "dev": "nodemon --experimental-specifier-resolution=node --ignore ./static --delay 3s ./src"
  },
  ```

> Ref： [Node 项目如何使用 ES 模块](https://blog.csdn.net/sayUonly/article/details/122885171) 、 [tsconfig.json 的配置](https://blog.csdn.net/muguli2008/article/details/122246623) 、 [Node 为什么用不了 ES 模块](https://segmentfault.com/q/1010000039917414)

<br>

## 模块

### Common JS 与 ES Modules

- **`CommonJS`：**
  - **导出：** CJS 使用 `module.exports = {}` 语法导出模块，可以导出任意合法的 `JavaScript` 类型，例如：字符串、布尔值、对象、数组、函数等等
  - **导入：** 使用 `require` 导入模块，在导入的时候，当文件扩展名是 `.js` 时，可以只写文件名
- **`ESModules`：** 要引入 `package.json` 并设置 `"type": "module"`
  - **导出：** 在要导出的 js 类型前加 `export`
  - **导入：** `import {} from './module'`，重命名：`{mie as miemie}`
  - **但这样运行时要加上** `node --experimental-specifier-resolution=node dir` 才能忽略后缀名地使用 ES 模块
- **在 ES 模块下的 `__dirname`：**

  ```js {.line-numbers}
  import { fileURLToPath } from 'url';
  import path from 'path';

  /**
   * @param {string}  metaUrl import.meta.url
   * @returns {string} the path
   */
  export const dirname = (metaUrl) => path.dirname(fileURLToPath(metaUrl));

  // to use (after import):
  dirname(import.meta.url); // D:\Node\src
  ```

<br>

### Buffer 缓冲区

`Buffer` 是 `Node.js` 的内置类型，它是用来表示内存中一块区域的，用以保存二进制数据。内容是以将二进制文件流表现为十六进制的 Buffer 数组

`Buffer` 可以用来表示图片、视频这样的二进制数据，另外我们从文件中读取到的也是 `Buffer` 类型的数据，从网络中接收的数据也是 Buffer 类型的数据

- **一些方法：**
  - `Buffer.alloc(len)`：开辟一个 len 个字节的内存
  - `Buffer.from(x)`：将字符串或数组转为 `Buffer` 对象，范围为 `00 ~ 0xff`
  - `Buffer.toString(decode)`：将 `buffer` 对象转换为指定编码字符串，默认为 `utf8`

<br>

### Path 路径

path 模块包含了一些列处理和转换文件路径的工具集。其中，在 Windows 下，目录的分隔符为 `\`，UNIX 下，分隔符为 `/`

<div class="h5">方法：</div>

- `path.resolve([path1], [path2], ...)`： 按照顺序依次拼接，返回的是 **绝对路径**，路径末尾的不会带有路径分隔符。若合并后的路径没有构成一个绝对路径，则会默认使用 **当前工作目录的绝对路径**
  ```js {.line-numbers}
  path.resolve(); // D:\Node
  path.resolve('path1', 'path2/'); // D:\Node\path1\path2
  path.resolve('F:\\path1', 'path2'); // F:\path1\path2
  ```
- `path.join([path1], [path2], ...)`：与 `resolve` 的区别在于，仅是拼接路径，不会强制转换成绝对路径，末尾可带路径分隔符
  ```js {.line-numbers}
  path.join(); // .
  path.join('path1', 'path2/'); // path1\path2\
  ```
- `path.relative(from, to)`：返回两个路径的相对关系
  ```js {.line-numbers}
  path.join('mie/mie/', 'haha'); // ..\..\haha
  ```
- `path.parse(path)`：返回该路径的路径对象，包括根目录、到该目录（文件）的目录，目录（文件）名、文件后缀、文件名
  ```js {.line-numbers}
  path.parse(__filename);
  /*path:  {
    root: 'D:\\',
    dir: 'D:\\Node\\src',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }*/
  ```
- `path.dirname(path)`：返回该文件（夹）的路径
  ```js {.line-numbers}
  path.dirname(__filename); // D:\Node\src
  ```
- `path.basename(path)`：返回该文件（夹）的名称（不含路径）
- `path.extname(path)`：返回文件的后缀，无后缀则返回 `''`

<br>

### fs 文件读写

**文件写入：** 如果不存在这个文件名，这会创建文件

- **简单写入：**
  - `fs.writeFile(file, data, [,options], callback);`，存在该文件时会覆盖原内容
  - `options` 选项
    1.  `encoding` 默认值: `'utf8'`
    2.  `mode` 默认值: `0o666`
    3.  `flag` 默认值: `'w'`
- **流式写入：** `fs.createWriteStream(path[, options])`
  - 事件监听 `open | close` eg: `ws.on('open', callback(err));`
- **追加写入：** `fs.appendFile(path, data, callback(err))`

**文件读取：** 返回的 data 为 Buffer 类型

- `fs.readFile(file, callback(err, data))`
- 大文件用流式读取： `fs.createReadStream(file)`

<div class="h5">文件删除和复制：</div>

- `fs.unlink(path, callback(err));`：删除文件或符号链接
- `fs.rm(path[, options], callback(err))`：删除目录和文件，其中 `options: {recursive: true}` 执行递归删除嵌套目录
- `fs.copyFile(from, to[, mode], callback(err))`：复制文件，但：
  - 只能复制文件，不能复制目录
  - 目标目录不存在则不会创建并报错
  - 文件类型可以不一致

<div class="h5">重命名：</div>

- `fs.rename(oldPath, newPath, callback(err))`，重命名，但：
  - 不能重命名目录，只能重命名文件
  - 如果重命名文件已存在将被覆盖

<div class="h5">文件夹操作：</div>

- `fs.mkdir(path[, options], callback(err, path))`：创建文件夹
  - 其中的 `options` 有两个参数：
    1. `recursive` 是否以递归的方式创建目录（**创建嵌套目录**），默认为 `false`
    2. `mode` 设置目录权限权限 默认为 0777（**WIndows 不支持**）
  ```js {.line-numbers}
  fs.mkdir('./mie/fish', { recursive: true }, (err, path) => {
    if (err) console.error(err);
    else console.log(path); // D:\Node\mie
  });
  ```
- `fs.readdir(path[, options], callback(err, files))`：读取文件夹
  - `options` 可以是指定编码格式的字符串，也可以是具有以下属性的对象
    - `encoding`：：指定编码格式，默认值： `utf-8`
    - `withFileTypes`： files 数组是否包含 `<fs.Dirent>` 对象，默认值： false
  ```js {.line-numbers}
  fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    else console.log(files); // ['index.js', 'mie']
  });
  ```

**获取文件信息：** `fs.stat(file)`

<br>

**以上均为带回调函数的异步写法**，换成同步写法只需在方法名后加 `Sync`，回调的数据通过 `return` 的形式返回出去，同时必须带上 **异常处理**，免得整个程序宕机了

- **如：**
  ```js {.line-numbers}
  try {
    const p = path.resolve(__dirname, '../static/data.json');
    const data = fs.readFileSync(p).toString();
    console.log(data);
  } catch (error) {
    throw error;
  }
  ```

<br>

### Express 框架

`Node` 本身并不支持其它常见的 `web` 开发任务。如果需要进行一些具体的处理，比如运行其它 `HTTP` 动词（比如 `GET、POST、DELETE` 等）、分别处理不同 `URL` 路径的请求（“路由”）、托管静态文件，或用模板来动态创建响应，那么可能就要自己编写代码了，亦或使用 `web` 框架，以避免重新发明轮子

`Express` 是最流行的 `Node` 框架，是许多其它流行 `Node` 框架的底层库。它提供了以下机制：

- 为不同 `URL` 路径中使用不同 `HTTP` 动词的请求（路由）编写处理程序
- 集成了“视图”渲染引擎，以便通过将数据插入模板来生成响应
- 设置常见 `web` 应用设置，比如用于连接的端口，以及渲染响应模板的位置
- 在请求处理管道的任何位置添加额外的请求处理“中间件”

这些库可以实现 cookie、会话、用户登录、URL 参数、POST 数据、安全头等功能

> 详见： [Express.md](Express.md)
