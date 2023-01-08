import{_ as i,V as r,W as s,$ as e,X as o,Y as n,Z as a,a0 as d,a1 as g,F as l}from"./framework-cf51392c.js";const u="/assets/HTTP_url-683e5903.png",_={},S=e("p",null,[e("br"),e("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),h=e("strong",null,"章节目录：",-1),w=e("strong",null,"参考：",-1),p={href:"https://www.bilibili.com/video/BV1c4411d7jb",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cswiki.top/pages/net/",target:"_blank",rel:"noopener noreferrer"},f=g('<br><h2 id="大总结" tabindex="-1"><a class="header-anchor" href="#大总结" aria-hidden="true">#</a> 大总结</h2><h3 id="从输入-url-到页面加载的全过程" tabindex="-1"><a class="header-anchor" href="#从输入-url-到页面加载的全过程" aria-hidden="true">#</a> 从输入 URL 到页面加载的全过程</h3><div class="img" align="center"><img src="'+u+'"><p> URL 到页面加载 </p></div><ol><li>首先在浏览器中输入 <code>URL</code></li><li><strong>查找缓存</strong>：浏览器先查看浏览器缓存-系统缓存-路由缓存中是否有该地址页面，如果有则显示页面内容。如果没有则进行下一步 <ul><li><strong>浏览器缓存</strong>：浏览器会记录 <code>DNS</code> 一段时间，因此，只是第一个地方解析 <code>DNS</code> 请求；</li><li><strong>操作系统缓存</strong>：如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统， 获取操作系统的记录(保存最近的 <code>DNS</code> 查询缓存)；</li><li>r：如果上述两个步骤均不能成功获取 <code>DNS</code> 记录，继续搜索路由器缓存；</li><li><code>ISP</code> 缓存：若上述均失败，继续向 <code>ISP</code> 搜索</li></ul></li><li><strong><code>DNS</code> 域名解析</strong>：浏览器向 <code>DNS</code> 服务器发起请求，解析该 <code>URL</code> 中的域名对应的 <code>IP</code> 地址。<code>DNS</code> 服务器是基于 <code>UDP</code> 的，因此会用到 <code>UDP</code> 协议</li><li><strong>建立 <code>TCP</code> 连接</strong>：解析出 <code>IP</code> 地址后，根据 <code>IP</code> 地址和默认 <code>80</code> 端口，和服务器建立 <code>TCP</code> 连接</li><li><strong>发起 <code>HTTP</code> 请求</strong>：浏览器发起读取文件的 <code>HTTP</code> 请求，，该请求报文作为 <code>TCP</code> 三次握手的第三次数据发送给服务器</li><li><strong>服务器响应请求并返回结果</strong>：服务器对浏览器请求做出响应，并把对应的 <code>html</code> 文件发送给浏览器</li><li><strong>关闭 <code>TCP</code> 连接</strong>：通过四次挥手释放 <code>TCP</code> 连接</li><li><strong>浏览器渲染</strong>：客户端（浏览器）解析 <code>HTML</code> 内容并渲染出来，浏览器接收到数据包后的解析流程为： <ul><li><strong>构建 <code>DOM</code> 树</strong>：词法分析然后解析成 <code>DOM</code> 树（<code>dom tree</code>），是由 <code>dom</code> 元素及属性节点组成，树的根是 <code>document</code> 对象</li><li><strong>构建 <code>CSS</code> 规则树</strong>：生成 <code>CSS</code> 规则树（<code>CSS Rule Tree</code>）</li><li><strong>构建 <code>render</code> 树</strong>：<code>Web</code> 浏览器将 <code>DOM</code> 和 <code>CSSOM</code> 结合，并构建出渲染树（<code>render tree</code>）</li><li><strong>布局（<code>Layout</code>）</strong>：计算出每个节点在屏幕中的位置</li><li><strong>绘制（<code>Painting</code>）</strong>：即遍历 <code>render</code> 树，并使用 <code>UI</code> 后端层绘制每个节点</li></ul></li><li><strong><code>JS</code> 引擎解析</strong>过程：调用 <code>JS</code> 引擎执行 <code>JS</code> 代码（JS 的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等） <ul><li><strong>创建 <code>window</code> 对象</strong>：<code>window</code> 对象也叫全局执行环境，当页面产生时就被创建，所有的全局变量和函数都属于 <code>window</code> 的属性和方法，而 <code>DOM Tree</code> 也会映射在 <code>window</code> 的 <code>doucment</code> 对象上。当关闭网页或者关闭浏览器时，全局执行环境会被销毁</li><li><strong>加载文件</strong>：完成 <code>js</code> 引擎分析它的语法与词法是否合法，如果合法进入预编译</li><li><strong>预编译</strong>：在预编译的过程中，浏览器会寻找全局变量声明，把它作为 <code>window</code> 的属性加入到 <code>window</code> 对象中，并给变量赋值为 <code>undefined</code>；   寻找全局函数声明，把它作为 <code>window</code> 的方法加入到 <code>window</code> 对象中，并将函数体赋值给他（匿名函数是不参与预编译的，因为它是变量）   而变量提升作为不合理的地方在 <code>ES6</code> 中已经解决了，函数提升还存在</li><li><strong>解释执行</strong>：执行到变量就赋值，如果变量没有被定义，也就没有被预编译直接赋值，在 <code>ES5</code> 非严格模式下这个变量会成为 <code>window</code> 的一个属性，也就是成为全局变量   <code>string、int</code> 这样的值就是直接把值放在变量的存储空间里，<code>object</code> 对象就是把指针指向变量的存储空间   函数执行，就将函数的环境推入一个环境的栈中，执行完成后再弹出，控制权交还给之前的环境。<strong>JS 作用域</strong> 其实就是这样的执行流机制实现的</li></ul></li></ol>',5);function P(T,C){const c=l("RouterLink"),t=l("ExternalLinkIcon");return r(),s("div",null,[S,e("ul",null,[e("li",null,[h,e("ul",null,[e("li",null,[o(c,{to:"/CSBase/Nets/Summary/"},{default:n(()=>[d("概述 —— 整个计算机网络的体系结构")]),_:1})]),e("li",null,[o(c,{to:"/CSBase/Nets/Application/"},{default:n(()=>[d("应用层 —— HTTP 到 DNS")]),_:1})]),e("li",null,[o(c,{to:"/CSBase/Nets/Transport/"},{default:n(()=>[d("传输层 —— UDP 到 TCP")]),_:1})]),e("li",null,[o(c,{to:"/CSBase/Nets/Internet/"},{default:n(()=>[d("网络层 —— IP 与 路由")]),_:1})])]),a(" - [链路层与局域网](Link.md) "),e("ul",null,[e("li",null,[o(c,{to:"/CSBase/Nets/Physical/"},{default:n(()=>[d("物理层与服务器")]),_:1})])])]),e("li",null,[w,e("ul",null,[e("li",null,[e("a",p,[d("湖科大计算机网络"),o(t)])]),e("li",null,[e("a",m,[d("cswiki.top"),o(t)])])])])]),f])}const D=i(_,[["render",P],["__file","index.html.vue"]]);export{D as default};