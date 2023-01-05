import{_ as h,V as i,W as t,$ as a,Z as e,a0 as p,a1 as r}from"./framework-94985248.js";const d={},l=e("h1",{id:"p2p",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#p2p","aria-hidden":"true"},"#"),p(" P2P")],-1),n=e("blockquote",null,[e("p",null,"转载备份自 http://www.360doc.com/content/14/0305/17/8285430_357987074.shtml")],-1),s=e("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录",-1),P=r('<ul><li><a href="#p2p">P2P</a><ul><li><a href="#p2p-%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86">P2P 技术原理</a></li><li><a href="#%E5%AF%B9%E7%AD%89%E7%BD%91%E7%BB%9C%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84">对等网络的基本结构</a><ul><li><a href="#%E9%9B%86%E4%B8%AD%E5%BC%8F%E5%AF%B9%E7%AD%89%E7%BD%91%E7%BB%9Cnapster-qq">集中式对等网络（Napster QQ）</a></li><li><a href="#%E6%97%A0%E7%BB%93%E6%9E%84%E5%88%86%E5%B8%83%E5%BC%8F%E7%BD%91%E7%BB%9Cgnutella">无结构分布式网络（Gnutella）</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%8C%96%E5%88%86%E5%B8%83%E5%BC%8F%E7%BD%91%E7%BB%9C%E7%AC%AC%E4%B8%89%E4%BB%A3-p2p-pastry-tapestry-chord-can">结构化分布式网络（第三代 P2P Pastry Tapestry Chord CAN）</a><ul><li><a href="#dht-%E7%BB%93%E6%9E%84">DHT 结构</a></li><li><a href="#%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84">树形结构</a></li><li><a href="#%E7%BD%91%E7%8A%B6%E7%BB%93%E6%9E%84">网状结构</a></li></ul></li></ul></li><li><a href="#p2p-%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8">P2P 技术应用</a><ul><li><a href="#%E5%88%86%E5%B8%83%E5%BC%8F%E7%A7%91%E5%AD%A6%E8%AE%A1%E7%AE%97">分布式科学计算</a></li><li><a href="#%E6%96%87%E4%BB%B6%E5%85%B1%E4%BA%AB">文件共享</a></li><li><a href="#%E6%B5%81%E5%AA%92%E4%BD%93%E7%9B%B4%E6%92%AD">流媒体直播</a></li><li><a href="#ip-%E5%B1%82%E8%AF%AD%E9%9F%B3%E9%80%9A%E4%BF%A1">IP 层语音通信</a></li><li><a href="#%E5%85%B8%E5%9E%8B-p2p-%E5%BA%94%E7%94%A8%E7%9A%84%E6%9C%BA%E5%88%B6%E5%88%86%E6%9E%90">典型 P2P 应用的机制分析</a><ul><li><a href="#bittorrent">BitTorrent</a></li><li><a href="#emule">eMule</a></li><li><a href="#%E8%BF%85%E9%9B%B7">迅雷</a></li><li><a href="#pplive">PPLive</a></li><li><a href="#skype">Skype</a></li></ul></li></ul></li><li><a href="#p2p-%E8%BF%90%E8%90%A5%E6%A8%A1%E5%BC%8F">P2P 运营模式</a><ul><li><a href="#skype-%E6%A8%A1%E5%BC%8F">Skype 模式</a></li><li><a href="#%E5%B9%BF%E5%91%8A%E6%A8%A1%E5%BC%8F">广告模式</a></li><li><a href="#popular-power-%E5%92%8C-data-synapse-%E6%A8%A1%E5%BC%8F">Popular Power 和 Data Synapse 模式</a></li><li><a href="#lightshare-%E6%A8%A1%E5%BC%8F">Lightshare 模式</a></li></ul></li></ul></li></ul>',1),o=r('<h2 id="p2p-技术原理" tabindex="-1"><a class="header-anchor" href="#p2p-技术原理" aria-hidden="true">#</a> P2P 技术原理</h2><p>什么是对等网络(P2P)技术？P2P 技术属于覆盖层网络(Overlay Network)的范畴，是相对于客户机/服务器(C/S)模式来说的一种网络信息交换方式</p><p>在 C/S 模式中，数据的分发采用专门的服务器，多个客户端都从此服务器获取数据。这种模式的优点是：数据的一致性容易控制，系统也容易管理。但是此种模式的缺点是：因为服务器的个数只有一个(即便有多个也非常有限)，系统容易出现单一失效点；单一服务器面对众多的客户端，由于 CPU 能力、内存大小、网络带宽的限制，可同时服务的客户端非常有限，可扩展性差</p><p>P2P 技术正是为了解决这些问题而提出来的一种对等网络结构。在 P2P 网络中，每个节点既可以从其他节点得到服务，也可以向其他节点提供服务。这样，庞大的终端资源被利用起来，一举解决了 C/S 模式中的两个弊端</p><h2 id="对等网络的基本结构" tabindex="-1"><a class="header-anchor" href="#对等网络的基本结构" aria-hidden="true">#</a> 对等网络的基本结构</h2><h3 id="集中式对等网络-napster-qq" tabindex="-1"><a class="header-anchor" href="#集中式对等网络-napster-qq" aria-hidden="true">#</a> 集中式对等网络（Napster QQ）</h3><p>集中式对等网络基于中央目录服务器，为网络中各节目提供目录查询服务，传输内容无需再经过中央服务器。这种网络，结构比较简单，中央服务器的负担大大降低。但由于仍存在中央节点，容易形成传输瓶颈，扩展性也比较差，不适合大型网络。但由于目录集中管理，对于小型网络的管理和控制上倒是一种可选择方案</p><h3 id="无结构分布式网络-gnutella" tabindex="-1"><a class="header-anchor" href="#无结构分布式网络-gnutella" aria-hidden="true">#</a> 无结构分布式网络（Gnutella）</h3><p>无结构分布式网络与集中式的最显著区别在于，它没有中央服务器，所有结点通过与相邻节点间的通信，接入整个网络。在无结构的网络中，节点采用一种查询包的机制来搜索需要的资源。具体的方式为，某节点将包含查询内容的查询包发送到与之相邻的节点，该查询包以扩散的方式在网络中蔓延，由于这样的方式如果不加节制，会造成消息泛滥，因此一般会设置一个适当的生存时间（TTL），在查询的过程中递减，当 TTL 值为 0 时，将不再继续发送</p><p>这种无结构的方式，组织方式比较松散，节点的加入与离开比较自由，当查询热门内容时，很容易就能找到，但如果需求的内容比较冷门，较小的 TTL 不容易找到，而较大的 TTL 值又容易引起较大的查询流量，尤其当网络范围扩展到一定规模时，即使限制的 TTL 值较小，仍然会引起流量的剧增。但当网络中存在一些拥有丰富资源的所谓的类服务器节点时，可显著提高查询的效率</p><h3 id="结构化分布式网络-第三代-p2p-pastry-tapestry-chord-can" tabindex="-1"><a class="header-anchor" href="#结构化分布式网络-第三代-p2p-pastry-tapestry-chord-can" aria-hidden="true">#</a> 结构化分布式网络（第三代 P2P Pastry Tapestry Chord CAN）</h3><p>结构化分布式网络，是近几年基于分布式哈希表（Distributed Hash Table）技术的研究成果。它的基本思想是将网络中所有的资源整理成一张巨大的表，表内包含资源的关键字和所存放结点的地址，然后将这张表分割后分别存储到网络中的每一结点中去。当用户在网络中搜索相应的资源时，它将能发现存储与关键词对应的哈希表内容所存放的结点，在该结点中存储了包含所需资源的结点地址，然后发起搜索的结点根据这些地址信息，与对应结点连接并传输资源。这是一种技术上比较先进的对等网络，它具有高度结构化，高可扩展性，结点的加入与离开比较自由。这种方式适合比较大型的网络</p><p>P2P 网络有 3 种比较流行的组织结构，被应用在不同的 P2P 应用中</p><h4 id="dht-结构" tabindex="-1"><a class="header-anchor" href="#dht-结构" aria-hidden="true">#</a> DHT 结构</h4><p>分布式哈希表(DHT)[1]是一种功能强大的工具，它的提出引起了学术界一股研究 DHT 的热潮。虽然 DHT 具有各种各样的实现方式，但是具有共同的特征，即都是一个环行拓扑结构，在这个结构里每个节点具有一个唯一的节点标识(ID)，节点 ID 是一个 128 位的哈希值。每个节点都在路由表里保存了其他前驱、后继节点的 ID。如图 1(a)所示。通过这些路由信息，可以方便地找到其他节点。这种结构多用于文件共享和作为底层结构用于流媒体传输[2]</p><h4 id="树形结构" tabindex="-1"><a class="header-anchor" href="#树形结构" aria-hidden="true">#</a> 树形结构</h4><p>P2P 网络树形结构如图 1(b)所示。在这种结构中，所有的节点都被组织在一棵树中，树根只有子节点，树叶只有父节点，其他节点既有子节点也有父节点。信息的流向沿着树枝流动。最初的树形结构多用于 P2P 流媒体直播[3-4]</p><h4 id="网状结构" tabindex="-1"><a class="header-anchor" href="#网状结构" aria-hidden="true">#</a> 网状结构</h4><p>网状结构如图 1(c)所示，又叫无结构。顾名思义，这种结构中，所有的节点无规则地连在一起，没有稳定的关系，没有父子关系。网状结构[5]为 P2P 提供了最大的容忍性、动态适应性，在流媒体直播和点播应用中取得了极大的成功。当网络变得很大时，常常会引入超级节点的概念，超级节点可以和任何一种以上结构结合起来组成新的结构，如 KaZaA[6]</p><h2 id="p2p-技术应用" tabindex="-1"><a class="header-anchor" href="#p2p-技术应用" aria-hidden="true">#</a> P2P 技术应用</h2><h3 id="分布式科学计算" tabindex="-1"><a class="header-anchor" href="#分布式科学计算" aria-hidden="true">#</a> 分布式科学计算</h3><p>P2P 技术可以使得众多终端的 CPU 资源联合起来，服务于一个共同的计算。这种计算一般是计算量巨大、数据极多、耗时很长的科学计算。在每次计算过程中，任务(包括逻辑与数据等)被划分成多个片，被分配到参与科学计算的 P2P 节点机器上。在不影响原有计算机使用的前提下，人们利用分散的 CPU 资源完成计算任务，并将结果返回给一个或多个服务器，将众多结果进行整合，以得到最终结果</p><h3 id="文件共享" tabindex="-1"><a class="header-anchor" href="#文件共享" aria-hidden="true">#</a> 文件共享</h3><p>BitTorrent 是一种无结构的网络协议。除了 BitTorrent 之外，还有不少著名的无结构化的 P2P 文件共享协议，典型的有 Gnutella[8]和 KaZaA[6]</p><h3 id="流媒体直播" tabindex="-1"><a class="header-anchor" href="#流媒体直播" aria-hidden="true">#</a> 流媒体直播</h3><h3 id="ip-层语音通信" tabindex="-1"><a class="header-anchor" href="#ip-层语音通信" aria-hidden="true">#</a> IP 层语音通信</h3><p>Skype 采取类似 KaZaA 的拓扑结构，在网络中选取一些超级节点。在通信双方直连效果不好时，一些合适的超级节点则担当起其中转节点的角色，为通信双方创建中转连接，并转发相应的语音通信包</p><h3 id="典型-p2p-应用的机制分析" tabindex="-1"><a class="header-anchor" href="#典型-p2p-应用的机制分析" aria-hidden="true">#</a> 典型 P2P 应用的机制分析</h3><h4 id="bittorrent" tabindex="-1"><a class="header-anchor" href="#bittorrent" aria-hidden="true">#</a> BitTorrent</h4><p>BitTorrent 软件用户首先从 Web 服务器上获得下载文件的种子文件，种子文件中包含下载文件名及数据部分的哈希值，还包含一个或者多个的索引(Tracker)服务器地址。它的工作过程如下：客户端向索引服务器发一个超文本传输协议(HTTP)的 GET 请求，并把它自己的私有信息和下载文件的哈希值放在 GET 的参数中；索引服务器根据请求的哈希值查找内部的数据字典，随机地返回正在下载该文件的一组节点，客户端连接这些节点，下载需要的文件片段</p><p>因此可以将索引服务器的文件下载过程简单地分成两个部分：与索引服务器通信的 HTTP，与其他客户端通信并传输数据的协议，我们称为 BitTorrent 对等协议。BitTorrent 软件的工作原理如图 4 所示。BitTorrent 协议也处在不断变化中，可以通过数据报协议(UDP)和 DHT 的方法获得可用的传输节点信息，而不是仅仅通过原有的 HTTP，这种方法使得 BitTorrent 应用更加灵活，提高 BitTorrent 用户的下载体验</p><h4 id="emule" tabindex="-1"><a class="header-anchor" href="#emule" aria-hidden="true">#</a> eMule</h4><p>eMule 软件基于 eDonkey 协议改进后的协议，同时兼容 eDonkey 协议。每个 eMule 客户端都预先设置好了一个服务器列表和一个本地共享文件列表，客户端通过 TCP 连接到 eMule 服务器进行登录，得到想要的文件的信息以及可用的客户端的信息。一个客户端可以从多个其他的 EMule 客户端下载同一个文件，并从不同的客户端取得不同的数据片段。eMule 同时扩展了 eDonkey 的能力，允许客户端之间互相交换关于服务器、其他客户端和文件的信息</p><p>eMule 服务器不保存任何文件，它只是文件位置信息的中心索引。eMule 客户端一启动就会自动使用传输控制协议 (TCP)连接到 eMule 服务器上。服务器给客户端提供一个客户端标识(ID)，它仅在客户端服务器连接的生命周期内有效。连接建立后，客户端把其共享的文件列表发送给服务器。服务器将这个列表保存在内部数据库内。eMule 客户端也会发送请求下载列表。连接建立以后，eMule 服务器给客户端返回一个列表，包括哪些客户端可以提供请求文件的下载。然后，客户端再和它们主动建立连接下载文件</p><p>eMule 基本原理与 BitTorrent 类似，客户端通过索引服务器获得文件下载信息。eMule 同时允许客户端之间传递服务器信息，BitTorrent 只能通过索引服务器或者 DHT 获得。eMule 共享的是整个文件目录，而 BitTorrent 只共享下载任务，这使得 BitTorrent 更适合分发热门文件，eMule 倾向于一般热门文件的下载</p><h4 id="迅雷" tabindex="-1"><a class="header-anchor" href="#迅雷" aria-hidden="true">#</a> 迅雷</h4><p>迅雷是一款新型的基于多资源多线程技术的下载软件，迅雷拥有比目前用户常用的下载软件快 7 ～ 10 倍的下载速度。迅雷的技术主要分成两个部分，一部分是对现有 Internet 下载资源的搜索和整合，将现有 Internet 上的下载资源进行校验，将相同校验值的统一资源定位(URL)信息进行聚合。当用户点击某个下载连接时，迅雷服务器按照一定的策略返回该 URL 信息所在聚合的子集，并将该用户的信息返回给迅雷服务器</p><p>另一部分是迅雷客户端通过多资源多线程下载所需要的文件，提高下载速率。迅雷高速稳定下载的根本原因在于同时整合多个稳定服务器的资源实现多资源多线程的数据传输。多资源多线程技术使得迅雷在不降低用户体验的前提下，对服务器资源进行均衡，有效降低了服务器负载</p><p>每个用户在网上下载的文件都会在迅雷的服务器中进行数据记录，如有其他用户再下载同样的文件，迅雷的服务器会在它的数据库中搜索曾经下载过这些文件的用户，服务器再连接这些用户，通过用户已下载文件中的记录进行判断，如用户下载文件中仍存在此文件(文件如改名或改变保存位置则无效)，用户将在不知不觉中扮演下载中间服务角色，上传文件</p><h4 id="pplive" tabindex="-1"><a class="header-anchor" href="#pplive" aria-hidden="true">#</a> PPLive</h4><p>PPLive 软件的工作机制和 BitTorrent 十分类似，PPLive 将视频文件分成大小相等的片段，第三方提供播放的视频源，用户启矾 PPLive 以后，从 PPLive 服务器获得频道的列表，用户点击感兴趣的频道，然后从其他节点获得数据文件，使用流媒体实时传输协议(RTP)和实时传输控制协议 (RTCP)进行数据的传输和控制。将数据下载到本地主机后，开放本地端口作为视频服务器，PPLive 的客户端播放器连接此端口，任何同一个局域网内的用户都可以通过连接这个地址收看到点播的节目</p><h4 id="skype" tabindex="-1"><a class="header-anchor" href="#skype" aria-hidden="true">#</a> Skype</h4><p>Skype 是网络语音沟通工具。它可以提供免费高清晰的语音对话，也可以用来拨打国内国际长途，还具备即时通讯所需的其他功能，比如文件传输、文字聊天等。Skype 是在 KaZaA 的基础上开发的，就像 KaZaA 一样，Skype 本身也是基于覆盖层的 P2P 网络，在它里面有两种类型的节点：普通节点和超级节点。普通节点是能传输语音和消息的一个功能实体；超级节点则类似于普通节点的网络网关，所有的普通节点必须与超级节点连接，并向 Skype 的登陆服务器注册它自己来加入 Skype 网络。Skype 的登陆服务器上存有用户名和密码，并且授权特定的用户加入 Skype 网络，图 7 所示为 Skype 的体系结构 [18]</p><p>Skype 的另一个突出特点就是能够穿越地址转换设备和防火墙。Skype 能够在最小传输带宽 32 kb/s 的网络上提供高质量的语音。Skype 是使用 P2P 语音服务的代表。由于其具有超清晰语音质量、极强的穿透防火墙能力、免费多方通话以及高保密性等优点，成为互联网上使用最多的 P2P 应用之一</p><h2 id="p2p-运营模式" tabindex="-1"><a class="header-anchor" href="#p2p-运营模式" aria-hidden="true">#</a> P2P 运营模式</h2><p>目前主要 P2P 业务的运营模式主要有以下几种：</p><h3 id="skype-模式" tabindex="-1"><a class="header-anchor" href="#skype-模式" aria-hidden="true">#</a> Skype 模式</h3><p>Skype 是互联网上最流行的 P2P VoIP 系统。目前 Skype 采取的模式是基本服务免费(如网内话音通话)，而增值服务收费，收费的服务包括： SkypeOut：通过 Skype 软件呼叫固网或移动网电话 SkypeIn：为用户提供一个真实的电话号码，用户可在世界上任何地方通过该号码接听电话 SkypeZone 服务：全球 18000 个无线局域网(WLAN)热点，使用电脑或 WLAN 电话接入 增值应用服务：语音邮箱、Skype 话机、铃声/图片下载等</p><h3 id="广告模式" tabindex="-1"><a class="header-anchor" href="#广告模式" aria-hidden="true">#</a> 广告模式</h3><p>这是 P2P 服务采用的最为广泛的赢利模式，也是互联网业务的主要赢利模式。从早期的 Napster，到最近比较流行的 P2P 流媒体业务，如 PPlive、UUsee 等，都主要采用这种模式，至少是以这种模式为主 由于 P2P 应用系统对于服务端的资源需求较少，整个 P2P 运营系统的成本较低，因此，这种模式在相当一段时间内是主流的赢利模式</p><h3 id="popular-power-和-data-synapse-模式" tabindex="-1"><a class="header-anchor" href="#popular-power-和-data-synapse-模式" aria-hidden="true">#</a> Popular Power 和 Data Synapse 模式</h3><p>Popular Power[1]公司大量收集处于工作间隙的 PC 的闲置计算能力，通过集群技术产生超级计算能力，供高强度计算工作和大型研究项目使用。在 Popular Power 的模式中，用户被要求在他们的 PC 上安装一个特制的屏幕保护程序。当屏保运行时，Popular Power 就会向这些用户的 PC 分配工作负载。用户每月将收到一定数额的报酬作为对他们的闲置计算资源的使用费。我们可以把 Popular Power 模式称为“商贩模式”——通过贩卖个人计算机的闲置资源来获取利润</p><p>DataSynapse 公司赢利的方法是“网格计算”，它把成千上万台计算机连接起来，利用它们的闲散资源组成一个虚拟的超级计算机。表面上看，DataSynapse 模式和 Popular Power 模式并没有什么不同——都是在贩卖空闲的计算机资源</p><p>但是 DataSynapse 将“网格计算”构建在合作企业之间的内部网 (Intranet)上，而不是互联网(Internet)上。这样，一方面，可以解决互联网的带宽狭窄、安全性较差的问题；另一方面把目标用户定位在企业用户中，有较大的赢利把握</p><h3 id="lightshare-模式" tabindex="-1"><a class="header-anchor" href="#lightshare-模式" aria-hidden="true">#</a> Lightshare 模式</h3><p>Lightshare 的赢利方法是在 P2P 网络上开展电子商务。用户可以在 P2P 网络上购买或出售商品。用户可以搜寻待售商品信息或者列出自己欲售商品的信息。待售的商品保留在出售者的计算机里，但中心服务器上动态地保存该商品的相关信息，以供其他用户查询。在 Lightshare 开展的服务中，初期的交易商品只包括数字文件，但是以后将逐渐扩展到其他领域。这种赢利模式目前存在着管理、计费、安全等方面的困难</p>',56);function E(c,u){return i(),t("div",null,[l,n,s,a(' @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} '),a(" code_chunk_output "),P,a(" /code_chunk_output "),o])}const A=h(d,[["render",E],["__file","P2P_backup.html.vue"]]);export{A as default};
