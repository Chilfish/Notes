import{_ as c,V as i,W as l,$ as n,X as a,Y as r,a0 as s,a1 as t,F as p}from"./framework-cf51392c.js";const u="/assets/CartDemo_0-cb4c5fc4.png",d="/assets/CartDemo_1-d768cf23.png",k="/assets/CartDemo_2-7e70e3a3.png",v={},m=n("p",null,[n("br"),n("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),h={href:"https://github.com/Organic-Fish/FishCode/tree/master/Web/vue/ts-vite/src",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),g={href:"https://juejin.cn/post/6918672538646102029#heading-0",target:"_blank",rel:"noopener noreferrer"},f=t('<p>内容还是经典的购物车，功能是点击添加到购物车，还能增添添加的数目，虽然还没算总价钱</p><h3 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h3><ul><li>Vue 3.2</li><li>Vue-router 4.0</li><li>Vuex 4.0 //看了眼，觉得还是学 pinia 好点.？</li><li>Vite 2.9</li><li>Typescript 4.5</li></ul><h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3><div class="img" align="center"><img src="'+u+`"><p> 预览图 </p></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p>这里使用 <code>pnpm</code> 会比较的方便，它不会重复下载之前下载过的包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> create @vitejs/app <span class="token punctuation">[</span>appName<span class="token punctuation">]</span> <span class="token parameter variable">--template</span> vue-ts
<span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>appName<span class="token punctuation">]</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后把 自带的 <code>helloWorld</code> 删掉，添加目录：</p><h3 id="完善目录结构" tabindex="-1"><a class="header-anchor" href="#完善目录结构" aria-hidden="true">#</a> 完善目录结构</h3><ul><li>添加文件：</li></ul><div class="img" align="center"><img src="`+d+'"><p> 文件树 </p></div>',13),_=t(`<li>修改 <code>tsconfig.json</code>，添加以下配置，才能在 <code>Typescript</code> 的 <code>import</code> 中省略后缀名，直接是：<code>import xx from &quot;src/api&quot;</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
<span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;./src/&quot;</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),x=n("code",null,"vite.config.ts",-1),y={href:"https://github.com/Organic-Fish/FishCode/blob/master/Web/vue/ts-vite/vite.config.ts",target:"_blank",rel:"noopener noreferrer"},w={href:"https://cn.vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},q=t('<div class="img" align="center"><img src="'+k+`"><p> vite.config.ts </p></div><h2 id="添加路由" tabindex="-1"><a class="header-anchor" href="#添加路由" aria-hidden="true">#</a> 添加路由</h2><ul><li><p>  </p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 <code>main.ts</code> 中挂载路由</p></li><li><p>编辑路由出口 <code>router/index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;pages/Products/index.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Home<span class="token punctuation">,</span> <span class="token comment">// 默认主界面</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/shopping&#39;</span><span class="token punctuation">,</span> <span class="token comment">// domain/shopping</span>
    name<span class="token operator">:</span> <span class="token string">&#39;shopping&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;pages/ShoppingCart/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 引用自pages</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>&lt;template&gt;</code> 中显示路由界面： <code>&lt;router-view /&gt;</code></p></li></ul><h2 id="添加-vuex" tabindex="-1"><a class="header-anchor" href="#添加-vuex" aria-hidden="true">#</a> 添加 Vuex</h2><ul><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> vuex@next <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="添加-api" tabindex="-1"><a class="header-anchor" href="#添加-api" aria-hidden="true">#</a> 添加 Api</h2><p>可以先用 <code>Json</code> 来代替 <code>Api</code></p><ul><li><p>先定义 Api 的类型：<code>interface/index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>再去 <code>api/data.ts</code> 按类型构造数据类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Product <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;src/interface&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> data<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>api/index.ts</code> 中请求 api</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> data <span class="token keyword">from</span> <span class="token string">&#39;./data&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Product <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/interface&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 异步 get Products list</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiGetProducts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 模拟请求</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="界面设计" tabindex="-1"><a class="header-anchor" href="#界面设计" aria-hidden="true">#</a> 界面设计</h2><ul><li><code>App.vue</code> 顶栏 <code>nav-bar</code> 用于界面的跳转 | 然后再在 <code>.body</code> 里展示数据<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav-bar</span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav-bar</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="vue3-语法" tabindex="-1"><a class="header-anchor" href="#vue3-语法" aria-hidden="true">#</a> Vue3 语法</h2><p>感觉学得多也比较重要的还是 vue3 本身的语法</p><h3 id="products-vue" tabindex="-1"><a class="header-anchor" href="#products-vue" aria-hidden="true">#</a> Products.vue</h3>`,13),V=n("li",null,[s("循环输出数据不多说，用 "),n("code",null,"v-if"),s(" 判断数据加载的完成来呈现数据与 "),n("code",null,"loading.gif")],-1),j=n("code",null,"<script setup>",-1),C={href:"https://juejin.cn/post/7078865301856583717",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"shopping-vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shopping-vue","aria-hidden":"true"},"#"),s(" Shopping.vue")],-1),R=n("h2",{id:"vuex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),s(" Vuex")],-1);function F(N,W){const o=p("RouterLink"),e=p("ExternalLinkIcon");return i(),l("div",null,[m,n("ul",null,[n("li",null,[a(o,{to:"/FrontEnd/Vue/"},{default:r(()=>[s("Vue.md")]),_:1})]),n("li",null,[n("a",h,[s("demo 源码"),a(e)])])]),b,n("p",null,[s("主要是搭建 demo 项目时踩得亿些坑，仿造着 "),n("a",g,[s("掘金"),a(e)]),s(" 的这一篇文章开始边尝试边学习 vue3")]),f,n("ul",null,[_,n("li",null,[s("修改 "),x,s("，添加别名等设置 "),n("a",y,[s("demo 中的 vite.config.ts"),a(e)]),s("。参考 "),n("a",w,[s("vite 官方的配置文件"),a(e)])])]),q,n("ul",null,[V,n("li",null,[s("主要地使用 "),j,s(" 来减少代码量，但感觉这样函数式编程的思想变得尤为重要，不然整体上的逻辑反而会乱 参考："),n("a",C,[s("掘金_setup 语法糖"),a(e)])])]),P,R])}const S=c(v,[["render",F],["__file","ShoppingCart.demo.html.vue"]]);export{S as default};