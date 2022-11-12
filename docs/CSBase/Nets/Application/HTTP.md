---
title: HTTP 与 HTTPS 协议
date: 2022-07-24
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

- **参考：**
  - [HTTP1、2、3](https://juejin.cn/post/6995109407545622542)
  - [菜鸟 content-type](https://www.runoob.com/HTTP/HTTP-content-type.html)
  - [菜鸟 状态码](https://www.runoob.com/HTTP/HTTP-status-codes.html)
  - [阮一峰 cors](https://www.ruanyifeng.com/blog/2016/04/cors.html)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [概述](#概述)
  - [HTTP 的一些性质](#http-的一些性质)
- [URL](#url)
- [HTTP 和 HTTPS](#http-和-https)
  - [基本概念](#基本概念)
  - [区别及优缺点](#区别及优缺点)
  - [HTTPS 协议的工作原理](#https-协议的工作原理)
- [HTTP 报文](#http-报文)
  - [请求报文](#请求报文)
    - [请求方法](#请求方法)
    - [Request Header 请求头](#request-header-请求头)
    - [Request Body 请求体](#request-body-请求体)
  - [响应报文](#响应报文)
    - [状态行](#状态行)
    - [响应头](#响应头)
    - [响应主体](#响应主体)
- [HTTP 应用](#http-应用)
  - [持久性连接与缓存](#持久性连接与缓存)
    - [HTTP 缓存的类型](#http-缓存的类型)
    - [HTTP 缓存控制](#http-缓存控制)
  - [Cookie, Session 与 Token](#cookie-session-与-token)
  - [代理服务器](#代理服务器)

<!-- /code_chunk_output -->

<br>

## 概述

<div class="art">

HTTP 是一个客户端（用户）和服务端（网站）之间**请求和应答的标准**，通常使用 **TCP 协议**。通过使用网页浏览器、网络爬虫或者其它的工具，客户端发起一个 **HTTP 请求**到服务器上指定端口（默认端口为 80）

我们称这个客户端为**用户代理**程序（user agent）。应答的服务器上存储着一些资源，比如 _HTML 文件和图像_。我们称这个应答服务器为**源服务器**（origin server）。在用户代理和源服务器中间可能存在多个“中间层”，比如代理服务器、网关或者隧道（tunnel）

HTTP 并不需要其底层的传输层协议是面向连接的，只需要它是**可靠的，或不丢失消息的（至少返回错误）**。在互联网中，有两个最常用的传输层协议：TCP 是可靠的，而 UDP 不是。因此，HTTP 依赖于面向连接的 TCP 进行消息传递，但连接并不是必须的

通常，由 HTTP 客户端发起一个请求，创建一个到服务器指定端口（默认是 80 端口）的 TCP 连接。HTTP 服务器则在那个端口监听客户端的请求。一旦收到请求，服务器会向客户端返回一个状态，比如"`HTTP/1.1 200 OK`"，以及返回的内容，如请求的文件、错误消息、或者其它信息

</div>

### HTTP 的一些性质

<div class="art">
<div class="h5">无状态，有会话</div>

**无状态是指在同一个连接中，两个执行成功的请求之间是没有关系的。** 这就带来了一个问题，用户没有办法在同一个网站中进行连续的交互。比如在一个电商网站里，用户把某个商品加入到购物车，切换到另一个商品页面后再次添加了商品，这两次添加商品的*请求之间没有关联*，浏览器无法知道用户最终选择了哪些商品

而使用 Cookies 就可以解决这个问题。把 Cookies 添加到头部中，创建一个会话让每次请求都能共享相同的上下文信息，达成相同的状态

<div class="h5">能控制一些特性：</div>

- **缓存** 服务端能告诉代理和客户端哪些文档需要被缓存，缓存多久，而客户端也能够命令中间的缓存代理来忽略存储的文档
- **开放同源限制** 为了防止网络窥听和其它隐私泄漏，浏览器强制对 Web 网站做了分割限制。**只有来自于相同来源的网页才能够获取网站的全部信息**。HTTP 可以通过修改头部来开放这样的限制，因此 Web 文档可以是由不同域下的信息拼接成的（某些情况下，这样做还有安全因素考虑）
- **认证** 一些页面能够被保护起来，仅让特定的用户进行访问。基本的认证功能可以直接通过 HTTP 提供，使用 `Authenticate` 相似的头部即可，或用 `HTTP Cookies` 来设置指定的会话
- **代理和隧道** 通常情况下，服务器 和/或 客户端是处于内网的，对外网隐藏真实 IP 地址。因此 HTTP 请求就要通过代理越过这个网络屏障。但并非所有的代理都是 HTTP 代理。例如，`SOCKS` 协议的代理就运作在更底层，一些像 FTP 这样的协议也能够被它们处理
- **会话** 使用 `HTTP Cookies` 允许你用一个服务端的状态发起请求，创建一个让**每次请求都能共享相同的上下文信息**，达成相同的状态的会话

</div><br>

## URL

<div class="art">

统一资源定位符（`Uniform Resource Locator`），缩写：URL，也就是网址。完整格式如下：

`[协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]`

其中`[访问凭证信息]`、`[端口号]`、`[查询]`、`[片段 ID]`都属于选填项

例如： `https://lab.sample.com:2333/url/xxx.html?pid=2333&f=asd#what%20is%20url`，其中：

- **协议类型：** 此处为 `https`，表示该网址应用的协议，如 `HTTP`、`HTTPS`、`FTP`、`file`、`mailto`、`thunder`
- **域名部分：** 此处为 `lab.sample.com`，其中 `lab` 为二级域名，`sample` 为一级域名，`com` 为顶级域名，交由后面的 **域名解析系统** 获得服务器的 ip 地址。也可以只用 ip 作为域名
- **端口号：** 此处为 `:2333`，用来将服务器“分区”，以获取不同类型的文件。如 80 为 `http` 的默认端口， 443 为 `https` 的默认端口，这两个指定协议类型时可以省略
- **文件目录：** 此处为 `/url/`，以根域名为主目录，一直到被访问的文件。但在前后端工程化的现在，大多为由路由生成的 _虚拟目录_
- **文件名：** 此处为 `xxx.html`，从域名后最后一个 `/` 开始到 `?` 为止的部分，表示被访问文件的文件名。如果以 `/` 结尾则表示的是访问该目录下的默认文件名 `index.xxx`，因此有时文件名也不是必须的
- **定位锚：** 此处为 `#what is url`，访问带上锚就会自动将页面滑到锚点
- **查询参数：** 此处为 `?pid=2333&f=asd`，指 `?` 到 `#` 之间的部分，表示要请求的参数，以 `?` 开始，`&` 作分隔，键值(`key=value`)的格式

<div class="h5">URL 的编码与解码</div>

因为 URL 上的字符只能是 ASCII 码，也就是说 URL 只能使用英文字母、阿拉伯数字和某些标点符号，不能使用其他文字和符号

即只有字母和数字`[0-9a-zA-Z]`、一些特殊符号`$-_.+!*'()`(不包括双引号)、以及某些保留字（空格转换为+），才可以不经过编码直接用于 URL。这意味着 如果 URL 中有汉字，就必须编码后使用。如 `汉字` 就会被编码成 `%E6%B1%89%E5%AD%97`。如上述的网址中的 `%20` 就是对 空格 字符的编码

js 通常使用 `encodeURLComponent()` 来编码，`decodeURLComponent`来解码

</div>

<br>

## HTTP 和 HTTPS

### 基本概念

- `HTTP`: 是一个**客户端**和**服务器端**请求和应答的**标准**，用于从 `WWW` 服务器传输超文本到本地浏览器的**超文本传输协议**

- `HTTPS`：在 HTTP 加上 **加密处理**、**认证**、**完整性保护**，套上 SSL(`Secure Socket Layer`) 就是 HTTPS

### 区别及优缺点

- `HTTP` 的信息是**明文传输**，`HTTPS` 协议要比 `HTTP` 协议安全。`HTTPS` 是具有安全性的 `ssl` 加密传输协议，可防止数据在传输过程中被窃取、改变，确保数据的完整性 (当然这种安全性并非绝对的)
- `HTTP` 协议的默认端口为 `80`，`HTTPS` 的默认端口为 `443`
- `HTTP` 的连接很简单，是无状态的。`HTTPS` 握手阶段比较费时，会使页面加载时间延长 `50%`
- `HTTPS` 缓存不如 `HTTP` 高效，会增加数据开销
- `Https` 协议需要 `ca` 证书，费用较高，功能越强大的证书费用越高
- `HTTP` 无法证明报文完整性，其可能会被中途篡改
-

### HTTPS 协议的工作原理

客户端在使用 `HTTPS` 方式与 web 服务器通信时有以下几个步骤：

- 客户端使用 `HTTPS url` 访问服务器，则要求 web 服务器建立 `ssl` 链接
- web 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），传输给客户端
- 客户端和 web 服务器端开始协商 `SSL` 链接的安全等级，也就是加密等级
- 客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站
- web 服务器通过自己的私钥解密出会话密钥
- web 服务器通过会话密钥加密与客户端之间的通信

<br>

## HTTP 报文

**HTTP 报文** 的每一个字段都是长度不确定的 **ASCII 码串**

### 请求报文

`HTTP` 报文的组成成分：

- **请求报文**：{ 请求行、请求头、空行、请求体 }
- **请求行**：{ http 方法、页面地址、http 协议、http 版本 }
- **响应报文**：{ 状态行、响应头、空行、响应体 }

如下为一个请求：

```yaml {.line-numbers}
GET /logo.png HTTP/2
Host: notes.organicfish.top
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0
Accept: image/avif,image/webp,*/*
Accept-Language: en-US,zh;q=0.8,zh-CN;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br
DNT: 1
Connection: keep-alive
Referer: https://notes.organicfish.top/
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
If-Modified-Since: Tue, 08 Nov 2022 15:27:00 GMT
If-None-Match: "636a7544-1bad2"
TE: trailers
```

#### 请求方法

<div style="text-align: center;margin: 1rem;">

<span></span>
方法| 描述
:---:|:---
GET| 请求指定的页面信息，并返回实体主体
HEAD| 类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头
POST| 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改
PUT| 从客户端向服务器传送的数据取代指定的文档的内容
DELETE| 请求服务器删除指定的页面
CONNECT| 要求在与代理服务器通信时建立隧道，实现用隧道协议进行 TCP 通信
OPTIONS| 查询对 URL 指定的资源支持的方法
TRACE| 回显服务器收到的请求，主要用于测试或诊断
PATCH| 是对 PUT 方法的补充，用来对已知资源进行局部更新

</div>

<div class="h5">GET 与 POST 的区别</div>

- **浏览器回退表现不同**：GET 在浏览器回退时是无害的，而 POST 会再次提交请求
- **浏览器对请求地址的处理不同**：GET 请求地址会被浏览器主动缓存，而 POST 不会，除非手动设置
- **浏览器对响应的处理不同**：GET 请求参数会被完整的保留在浏览器历史记录里，而 POST 中的参数不会被保留
- **参数大小不同**：GET 请求在 URL 中传送的参数是有长度的限制，而 POST 没有限制
- **安全性不同**：GET 参数通过 URL 传递，不安全；POST 放在 `Request Body` 中，相对更安全。但因为 HTTP 传输的内容都是明文的，虽然在浏览器地址拦看不到 POST 提交的 body 数据，但是只要抓个包就都能看到了。所以，要避免传输过程中数据被窃取，就要使用 **HTTPS 协议**，这样所有 HTTP 的数据都会被加密传输
- **针对数据操作的类型不同**：GET 对数据进行查询，POST 主要对数据进行增删改！简单说，GET 是只读，POST 是写

<br>

#### Request Header 请求头

这里设置的主要是一些信息，包含客户端，服务器

- `GET/`：请求行
- `Host`：请求的目标域名和端口，允许多个域名同处一个 IP 地址，即一个物理服务器主机可以承载多个域名，每个域名的主机就是这个物理主机的 **虚拟主机**，Host 就是要表明要访问哪一个虚拟主机
- `User-Agent`：浏览器的具体类型，如：`User-Agent：Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0`
- `Accept`：客户端希望接受的数据类型，如：`Accept: text/html,application/xhtml+xml,application/xml;q=0.9;`
- `Accept-Charset`：浏览器采用的编码方式，如：`Accept-Charset: ISO-8859-1`
- `Accept-Encoding`：浏览器支持解码的数据压缩格式,如：`Accept-Encoding: gzip, deflate`
- `Accept-Language`：浏览器的语言环境,如：`Accept-Language zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3`
- `Connection`：表示是否需要持久的 TCP 连接。`Keep-Alive` | `close`。`HTTP1.1` 默认是持久连接，它可以利用持久连接的优点，当页面包含多个元素时（例如图片），显著地减少下载所需要的时间
- `Content-Length`：表示请求消息正文的长度。对于 `POST` 请求来说是必须出现
- `Content-Type`：WEB 服务器告诉浏览器自己响应的对象的类型和字符集。例如：`Content-Type: text/html; charset='gb2312'`
- `Content-Encoding`：WEB 服务器表明自己使用了什么压缩方法来压缩响应中的对象。例如：`Content-Encoding：gzip`
- `Content-Language`：WEB 服务器告诉浏览器自己响应的对象的语言
- `Cookie`：浏览器每次都会将`cookie` 发送到服务器上，允许服务器在客户端存储少量数据
- `Referer`：包含一个 URL，用户从该 URL 代表的页面出发访问当前请求的页面。服务器能知道你是从哪个页面过来的。`Referer: https://cn.bing.com/search?q=递归`

<div class="h5"><code>Content-Type</code> 的一些类型：</div>

- 常见的媒体格式类型如下：
  - `text/html`： HTML 格式
  - `text/plain`：纯文本格式
  - `text/xml`： XML 格式
  - `image/gif`：gif 图片格式
  - `image/jpeg`：jpg 图片格式
  - `image/png`：png 图片格式
- 以 `application` 开头的媒体格式类型：
  - `application/xhtml+xml`：XHTML 格式
  - `application/xml`： XML 数据格式
  - `application/atom+xml`：Atom XML 聚合格式
  - `application/json`： JSON 数据格式
  - `application/pdf`：pdf 格式
  - `application/msword`： Word 文档格式
  - `application/octet-stream`： 二进制流数据（如常见的文件下载）
  - `application/x-www-form-urlencoded`： `<form encType="">`中默认的 `encType`，form 表单数据被编码为 `key/value` 格式发送到服务器（表单默认的提交数据的格式）
- 另外一种常见的媒体格式是上传文件之时使用的：
  - `multipart/form-data `： 需要在表单中进行文件上传时，就需要使用该格式

#### Request Body 请求体

这里是提交给服务器的数据。需要注意的是，如果是往服务器提交数据，需要在请求头中设置 `Content-Type:application/x-www-form-urlencoded`

### 响应报文

响应报文是服务器发回给客户端的。组成部分有**状态行**，**响应头**，**响应主体**

对上面请求的一个响应：

```yaml {.line-numbers}
HTTP/2 304 Not Modified
date: Wed, 09 Nov 2022 07:13:08 GMT
via: 1.1 varnish
cache-control: max-age=600
etag: "636a7544-1bad2"
expires: Wed, 09 Nov 2022 07:23:08 GMT
age: 0
x-served-by: cache-tyo11942-TYO
x-cache: MISS
x-cache-hits: 0
x-timer: S1667977989.772745,VS0,VE181
vary: Accept-Encoding
x-fastly-request-id: 2261d73ed59e38f18e603a9e65f1318235cfdba0
X-Firefox-Spdy: h2
```

#### 状态行

由协议版本号、状态码和状态信息构成。如：`HTTP/1.1 200 OK`

<div class="h5">常见的状态码：</div>

- 1XX：属于提示信息，是协议处理中的一种中间状态，实际用到的比较少
  - `100 Continue`：一般在发送 post 请求时，已发送了 `HTTP header`：之后服务端将返回此信息，表示确认，之后发送具体参数信息
- 2XX：表示服务器成功处理了客户端的请求
  - `200 OK`：正常返回信息
  - `201 Created`：请求成功并且服务器创建了新的资源
  - `202 Accepted`：服务器已接受请求，但尚未处理
  - `204 No Content`：也是常见的成功状态码，与 200 OK 基本相同，但响应头没有 body 数据
  - `206 Partial Content`：是应用于 HTTP 分块下载或断点续传，表示响应返回的 body 数据并不是资源的全部，而是其中的一部分，也是服务器处理成功的状态
- 3XX：表示客户端请求的资源发生了变动，需要客户端用新的 URL 重新发送请求获取资源，也就是**重定向**
  - `301 Moved Permanently`：表示**永久重定向**，说明请求的资源已经不存在了，需改用新的 URL 再次访问
  - `302 Found`：表示**临时重定向**，说明请求的资源还在，但暂时需要用另一个 URL 来访问
    > 301 和 302 都会在响应头里使用字段`Location`，指明后续要跳转的 URL，浏览器会自动重定向新的 URL
  - `304 Not Modified`：不具有跳转的含义，表示资源未修改，重定向已存在的缓冲文件，也称**缓存重定向**，也就是告诉客户端可以继续使用缓存资源，用于缓存控制
- 4XX：表示 **客户端发送的报文有误**，服务器无法处理，也就是错误码的含义
  - `400 Bad Request`：表示客户端请求的报文有错误，但只是个笼统的错误
  - `401 Unauthorized`：请求**未授权**
  - `403 Forbidden`表示服务器禁止访问资源，并不是客户端的请求出错
  - `404 Not Found`：表示请求的资源在服务器上不存在或未找到，所以无法提供给客户端
- 5XX: 表示客户端请求报文正确，但是**服务器处理时内部发生了错误**，属于服务器端的错误码
  - `500 Internal Server Error`：与 400 类型，是个笼统通用的错误码，服务器发生了什么错误，我们并不知道
  - `501 Not Implemented`：表示客户端请求的功能还不支持，类似“即将开业，敬请期待”的意思
  - `502 Bad Gateway`：通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误
  - `503 Service Unavailable`：表示服务器当前很忙，暂时无法响应客户端，类似“网络服务正忙，请稍后重试”的意思

#### 响应头

- `Date`：服务端发送资源时的 **服务器时间**
- `Server`：服务器信息
- `Last-Modified`：服务器发来的当前资源最后一次修改的时间，下次请求时，如果服务器上当前资源的修改时间大于这个时间，就返回新的资源内容
- `ETag`：资源修改后生成的唯一标识，由服务器自动生成
- `Content-Length`：响应主体长度
- `Content-Type`：响应资源的类型

#### 响应主体

即服务端返回给客户端的内容

<br>

## HTTP 应用

<br>

### 持久性连接与缓存

<div class="art">

在客户端与服务器能够交互之前，必须在这两者间建立一个 TCP 链接，打开一个 TCP 连接需要多次往返交换消息（因此耗时）。`HTTP/1.0` 默认为每一对 HTTP 请求/响应都打开一个单独的 TCP 连接。当需要连续发起多个请求时，这种模式比多个请求共享同一个 TCP 链接更低效

为了减轻这些缺陷，`HTTP/1.1` 引入了**持久连接**的概念：底层的 TCP 连接可以通过 `Connection 头部` 来被部分控制。服务器在发送响应后仍然保持这条连接，使同一个客户端可以在这条连接上进行后续的通信

而 **缓存** 是一种保存资源副本并在下次请求时直接使用该副本的技术

我们使用 HTTP 缓存，通过复用缓存资源，减少了客户端等待时间和网络流量，同时也能缓解服务器端的压力。可以显著的提升我们网站和应用的性能。虽然 HTTP 缓存不是必须的，但重用缓存的资源通常是必要的，HTTP 缓存是一个 web 性能优化的重要手段

</div>

#### HTTP 缓存的类型

通常 HTTP 缓存策略分为两种：强缓存、协商缓存。从字面意思我们可以很直观的看到它们的差别：

- 强缓存即强制直接使用缓存
- 协商缓存就得和服务器协商确认下这个缓存能不能用

<div class="h5">强缓存</div>

强缓存不会向服务器发送请求，直接从 **浏览器缓存** 中读取资源，在 DevTool 的 network 选项中可以看到该请求返回 200 的状态码，并且 size 显示 `from disk cache` 或 `from memory cache`

<div class="h5">协商缓存</div>

协商缓存会先向服务器发送一个请求，服务器会根据这个**请求头**的一些参数来判断是否命中协商缓存，如果命中，则返回 304 状态码并带上新的**响应头**通知浏览器从缓存中读取资源

#### HTTP 缓存控制

<div class="art">

在 HTTP 中，我们可以通过设置响应头以及请求头来控制缓存策略：强缓存可以通过设置 `Expires` 和 `Cache-Control` 两种响应头实现。如果同时存在，`Cache-Control` 优先级高于 `Expires`

<div class="h5">Expires</div>

`Expires` 响应头，它是 `HTTP/1.0` 的产物。代表该资源的过期时间，其值为一个**绝对时间**。它告诉浏览器在过期时间之前可以直接从浏览器缓存中存取数据。由于是个绝对时间，客户端与服务端的时间时差或误差等因素可能造成客户端与服务端的时间不一致，将导致缓存命中的误差。如果在 `Cache-Control` 响应头设置了 `max-age` 或者 `s-max-age` 指令，那么 Expires 会被忽略

```json{.line-numbers}
Expires: Wed, 02 Nov 2022 01:27:40 GMT
```

<div class="h5">Cache-Control</div>

`Cache-Control` 出现于 `HTTP/1.1`。可以通过指定多个指令来实现缓存机制。主要用表示**资源缓存的最大有效时间**。即在该时间端内，客户端不需要向服务器发送请求。优先级高于 Expires。其过期时间指令的值是相对时间，它解决了绝对时间的带来的问题

**`Cache-Control` 属性：**

- **可缓存性**
  - `public` 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存
  - `private` 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）
  - `no-cache` 不使用强缓存，需要与服务器验协商缓存验证
  - `no-store` 缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存
- **过期**
  - `max-age=<seconds>` 缓存存储的最大周期，超过这个周期被认为过期
  - `s-maxage=<seconds>` 设置共享缓存。会覆盖 max-age 和 expires,私有缓存会忽略它
  - `max-stale[=<seconds>]` 客户端愿意接收一个已经过期的资源，可以设置一个可选的秒数，表示响应不能已经过时超过该给定的时间
  - `min-fresh=<seconds>` 客户端希望在指定的时间内获取最新的响应
- **重新验证和重新加载**
  - `must-revalidate` 如页面过期，则去服务器进行获取
  - `proxy-revalidate` 与 `must-revalidate` 作用相同，但是用于共享缓存
- **其他**
  - `only-if-cached` 不进行网络请求，完全只使用缓存
  - `no-transform` 不得对资源进行转换和转变。例如，不得对图像格式进行转换

<div class="h5">协商缓存</div>

**协商缓存** 可以通过 `Last-Modified/If-Modified-Since` 和 `ETag/If-None-Match` 这两对 Header 来控制。`Last-Modified` 与 `If-Modified-Since` 的值都是 GMT 格式的时间字符串，代表的是文件的最后修改时间

在服务器在响应请求时，会通过 `Last-Modified` 告诉浏览器资源的最后修改时间
浏览器再次请求服务器的时候，请求头会包含 `Last-Modified` 字段，后面跟着在缓存中获得的最后修改时间

服务端收到此请求头发现有 `if-Modified-Since`，则与被请求资源的最后修改时间进行对比，如果一致则**返回 304 和响应报文头**，浏览器只需要从缓存中获取信息即可。如果已经修改，那么开始传输响应一个整体，服务器返回：200 OK

但是在服务器上经常会出现这种情况，一个资源被修改了，但其实际内容根本没发生改变，会因为 `Last-Modified` 时间匹配不上而返回了整个实体给客户端（即使客户端缓存里有个一模一样的资源）。为了解决这个问题，`HTTP/1.1` 推出了 Etag。优先级高与 `Last-Modified`

<div class="h5">Etag、If-None-Match</div>

Etag 都是服务器为每份资源生成的唯一标识，就像一个指纹，资源变化都会导致 ETag 变化，跟最后修改时间没有关系，ETag 可以保证每一个资源是唯一的

在浏览器发起请求，浏览器的请求报文头会包含 `If-None-Match` 字段，其值为上次返回的 Etag 发送给服务器，服务器接收到次报文后发现 `If-None-Match` 则与被请求资源的唯一标识进行对比

- 如果相同说明资源没有修改，则响应返 304，浏览器直接从缓存中获取数据信息
- 如果不同则说明资源被改动过，则响应整个资源内容，返回状态码 200

</div>

> temp: [简书 HTTP 缓存](https://www.jianshu.com/p/227cee9c8d15)

<br>

### Cookie, Session 与 Token

> temp: [掘金](https://juejin.cn/post/7040695405486538759)

<br>

### 代理服务器