import{_ as e,V as n,W as l,$ as t,Z as s,a1 as r,a0 as a}from"./framework-94985248.js";const i="/assets/IP_0-349dd15f.png",c="/assets/ip_addr-b81eaf5f.png",p={},o=s("p",null,[s("br"),s("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),d=s("ul",null,[s("li",null,[s("a",{href:"#%E6%A6%82%E8%BF%B0"},"概述")]),s("li",null,[s("a",{href:"#ip-%E5%9C%B0%E5%9D%80"},"IP 地址"),s("ul",null,[s("li",null,[s("a",{href:"#%E6%A6%82%E8%BF%B0-1"},"概述")]),s("li",null,[s("a",{href:"#ip-%E5%9C%B0%E5%9D%80%E7%9A%84%E5%88%86%E7%B1%BB"},"IP 地址的分类")])])])],-1),h=r('<br><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>IP 协议是整个 <code>TCP/IP 协议族</code> 的核心，也是构成互联网的基础，位于 TCP/IP 模型的网络层。用于屏蔽下层物理网络的差异，为上层提供统一的 IP 数据报</p><div class="h5">无连接的投递服务</div><p>发送端可于任何时候自由发送数据，而接收端永远不知道自己会在何时从哪里接收到数据。每个 IP 数据报独立处理和传输，一台主机发出的数据报序列，可能会走不同的路径， 甚至有可能其中的一部分数据报会在传输过程中丢失</p><div class="h5">不可靠的投递服务</div><p>IP 协议本身不保证 IP 数据报投递的结果。 在传输的过程中，IP 数据报可能会丢失、重复、延迟和乱序等， IP 协议不对内容作任何检测，也不将这些结果通知收发双方</p><p>IP 数据报的丢失，通过路由器发 <strong>ICMP 报文</strong> 告知； 必要时，由高层实体（如 TCP）负责差错恢复动作</p><div class="h5">尽力投递服务</div><p>每个数据链路上会规定一个最大传输单元 MTU，如果 IP 数据报的长度超过 MTU，那么网络层就会把这些报文分割成一个一个的小组（分组）进行传送，以适应具体的传输网络</p><br><h2 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址" aria-hidden="true">#</a> IP 地址</h2><h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3><p>IP 地址是 IP 协议中非常重要的内容，IP 数据报中含有 <strong>收/发方的 IP 地址</strong></p><p>那就是给因特网上的<strong>每台设备都规定了其全世界唯一的地址</strong>，叫做 “IP 地址”。正是由于有了 IP 地址，才保证了用户在连网的计算机上操作时，能够高效而且方便地从千千万万台计算机中选出自己所需的对象来</p><p>IP 地址就好像<strong>电话号码</strong>（地址码）：有了某人的电话号码，你就能与他通话了。同样，有了某台主机的 IP 地址，你就能与这台主机通信了</p><div align="center"><img width="70%" src="'+i+'"><p> IP 的作用就是在复杂的网络环境中将数据包发送给指定的主机 </p></div><br>',18),m=s("p",null,[a("按照 TCP/IP 协议规定，IP 地址用二进制来表示，每个 IP 地址长 32 比特，也就是 4 个字节（这里说的是 IPV4 地址长 "),s("strong",null,"32 比特 / 4 字节"),a("，而 IPV6 地址占 "),s("strong",null,"128 比特 / 16 字节"),a("）。那么，IPV4 地址的最大值就是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"32")]),s("mo",null,"="),s("mn",null,"42"),s("mo",{separator:"true"},","),s("mn",null,"9496"),s("mo",{separator:"true"},","),s("mn",null,"7296")]),s("annotation",{encoding:"application/x-tex"},"2^{32} = 42,9496,7296")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"32")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"42"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"9496"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"7296")])])]),a(" ，也就是说：最多给大约 43 亿台接入互联网的设备配置其独一无二的 IPV4 地址，但在 2011 年 2 月 3 日，IPV4 就宣布耗尽了")],-1),u=s("p",null,"一个采用二进制形式的 IP 地址是一串很长的数字，人们处理起来也太费劲了。为了方便人们的使用，IP 地址习惯性地被写成十进制的形式，使用 “.” 分开不同的字节。这种表示法叫做点分十进制表示法，这显然比一连串二进制地 1 和 0 容易记忆得多。举个例子：",-1),P=s("div",{align:"center"},[s("img",{width:"70%",src:c}),s("p",null," IP 地址的表示方式 ")],-1),I=s("br",null,null,-1),g=s("h3",{id:"ip-地址的分类",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ip-地址的分类","aria-hidden":"true"},"#"),a(" IP 地址的分类")],-1);function _(f,v){return n(),l("div",null,[o,t(' @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} '),t(" code_chunk_output "),d,t(" /code_chunk_output "),h,m,u,P,I,g])}const b=e(p,[["render",_],["__file","IP.html.vue"]]);export{b as default};
