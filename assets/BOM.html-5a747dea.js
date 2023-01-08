import{_ as c,V as i,W as l,$ as n,X as s,Y as u,a0 as a,Z as t,a1 as r,F as p}from"./framework-cf51392c.js";const d={},k=n("p",null,[n("br"),n("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),m={href:"https://www.jianshu.com/p/7c796f4ff810",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/f5409202a835",target:"_blank",rel:"noopener noreferrer"},b=n("ul",null,[n("li",null,[n("a",{href:"#window-%E5%AF%B9%E8%B1%A1"},"window 对象"),n("ul",null,[n("li",null,[n("a",{href:"#settimeout"},"setTimeout")])])])],-1),h=r(`<h2 id="window-对象" tabindex="-1"><a class="header-anchor" href="#window-对象" aria-hidden="true">#</a> window 对象</h2><h3 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout</h3><p><code>setTimeout</code> 会先将回调函数放到等待队列中，等待区域内其他主程序执行完毕后，按时间顺序先进先出执行回调函数。本质上是作用域的问题</p><p><strong>定义</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>fun<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// arg 为每次 delay 后传给 fun 的参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="h5">例：</div><ul><li><p>拆分结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">timer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>let</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>带第三参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    i
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="h5">返回值：</div><p><code>timeoutID</code>。是一个正整数，表示定时器的编号。这个值可以传递给 <code>clearTimeout()</code>来取消该定时器</p><div class="h5">取消定时：</div><p><code>clearTimeout(timeoutID)</code>。该 ID 值为 <code>setTimeout()</code> 的返回值</p>`,11);function f(_,w){const o=p("RouterLink"),e=p("ExternalLinkIcon");return i(),l("div",null,[k,n("ul",null,[n("li",null,[s(o,{to:"/FrontEnd/JavaScript/"},{default:u(()=>[a("JavaScript.md")]),_:1})]),n("li",null,[n("a",m,[a("window 对象"),s(e)])]),n("li",null,[n("a",v,[a("图解：window 与 BOM 的关系"),s(e)])])]),t(' @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} '),t(" code_chunk_output "),b,t(" /code_chunk_output "),h])}const j=c(d,[["render",f],["__file","BOM.html.vue"]]);export{j as default};