import{_ as i,V as c,W as t,$ as a,Z as e,a0 as o,X as s,a1 as l,D as d}from"./framework-94985248.js";const r="/assets/JQuery-0-d1aabd8f.png",p="/assets/JQuery-1-220c04b8.png",u="/assets/JQuery-2-b2b10a58.png",h="/assets/JQuery-3-78b9f9b1.png",v="/assets/JQuery-4-2b67dc4a.png",m="/assets/JQuery-5-5247a226.png",g="/assets/JQuery-6-78296c1a.png",f={},_=e("p",null,[e("br"),e("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),b=l('<ul><li><a href="#%E5%87%BD%E6%95%B0%E5%85%A5%E5%8F%A3">函数入口</a></li><li><a href="#%E9%80%89%E6%8B%A9%E5%99%A8">选择器</a><ul><li><a href="#%E8%BF%87%E6%BB%A4%E5%99%A8">过滤器</a></li><li><a href="#%E6%96%B9%E6%B3%95">方法</a></li></ul></li><li><a href="#%E8%8A%82%E7%82%B9">节点</a><ul><li><a href="#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C">节点操作</a></li><li><a href="#attr-%E5%B1%9E%E6%80%A7">attr 属性</a></li><li><a href="#css-%E6%A0%B7%E5%BC%8F">CSS 样式</a></li><li><a href="#%E4%BA%8B%E4%BB%B6">事件</a></li><li><a href="#%E5%8F%96%E5%80%BC">取值</a></li></ul></li><li><a href="#%E5%8A%A8%E7%94%BB">动画</a></li><li><a href="#ajax">Ajax</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ul>',1),k=l(`<h2 id="函数入口" tabindex="-1"><a class="header-anchor" href="#函数入口" aria-hidden="true">#</a> 函数入口</h2><p><code>window.onload()</code> 方法是等到页面中所有元素加载完毕之后，才执行，即 <code>javascript</code> 此时才可以访问网页中的任何元素。而 jQuery 使用 <code>$(document).ready()</code> 方法，可以在 DOM 载入就绪时就对其进行操纵并调用执行它所绑定的函数。也就是说在 jQ 中，不需要等待所有图片加载完再执行</p><p>但是就会有个问题，当获取图片宽高的时候，可能获取不到。不过 jQ 中单独提出了一个页面加载的方法——<code>load()</code> 方法，如果这个处理函数绑定给 <code>window</code> 对象则会在所有内容加载完毕之后触发，且不会被覆盖：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，等同于 js 中的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行代码</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><p>返回 JQuery 对象。基本与 css 一样，也催生出了 <code>document.querySelector(All)</code> 同时，它基本不用写循环，因为 JQuery 是隐式循环，源码本身就已经实现循环了</p><h3 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h3><div class="h5">基本过滤器</div><p><img src="`+r+'" alt=""></p><div class="h5">内容过滤器：</div><p><img src="'+p+'" alt=""></p><div class="h5">属性过滤器</div><p><img src="'+u+'" alt=""></p><div class="h5">表单过滤器</div><p><img src="'+h+'" alt=""></p><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><div class="h5">选择器方法</div><p><img src="'+v+'" alt=""></p><h2 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h2><h3 id="节点操作" tabindex="-1"><a class="header-anchor" href="#节点操作" aria-hidden="true">#</a> 节点操作</h3><ul><li><p><strong>添加节点</strong><img src="'+m+'" alt=""></p></li><li><p><strong>删除节点</strong></p><ol><li><code>remove()</code>：完全删除节点</li><li><code>detach()</code>：删除，但事件绑定还在</li><li><code>empty()</code>：相当于只是 <code>innerHTML = &quot;&quot;;</code></li></ol></li><li><p><strong>克隆节点</strong><code>clone()</code>：默认浅拷贝，加参数 true 则深拷贝</p></li><li><p><strong>替换节点：</strong><code>replaceWith()</code></p></li><li><p><strong>包裹节点：</strong><img src="'+g+'" alt=""></p></li></ul><h3 id="attr-属性" tabindex="-1"><a class="header-anchor" href="#attr-属性" aria-hidden="true">#</a> attr 属性</h3><ul><li><code>$().attr(name | val)</code>：单参数时为获取，双参数为设置。设置多值时，参数为 json 对象</li><li><code>$().removeAttr()</code>：删除属性值，多值时空格间隔</li><li>而：对于 <code>checked、selected、disabled</code> 这类 boolean 类型的属性来说，不能用 attr 方法，只能用 <code>prop</code> 方法</li><li><code>$().addClass(val)</code> | <code>$().removeClass(val)</code> ：只 添加 | 删除 而不是替换掉</li><li><code>$().toggleClass(val)</code>：切换 —— 存在则删除，不在则添加</li><li><code>$().is(val)</code>：判断元素是否包含某一属性</li></ul><h3 id="css-样式" tabindex="-1"><a class="header-anchor" href="#css-样式" aria-hidden="true">#</a> CSS 样式</h3><ul><li><code>$().css(name | val)</code>：单属性名为获取，双参数为设置。设置多值时，参数为 json 对象</li></ul><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><ul><li><strong>事件监听：</strong><ul><li><code>$().on(event, fun)</code>：类同与原生的 <code>ele.onevent = fun</code></li></ul></li><li><strong>事件绑定：</strong> <code>$().event(fun)</code>：</li><li><strong>事件合成：</strong> <code>$().hover(enter, leaver)</code>，鼠标进入时触发 enter 函数，</li><li><strong>阻止冒泡：</strong> <code>fun(e){stopPropagation();}</code></li><li><strong>事件属性：</strong><ul><li><code>e.which</code>：获取点击的按键码(鼠标: e.button，键盘: e.code)</li><li><code>e.metaKey</code>：获取 Ctrl 键</li></ul></li><li><strong>移除事件：</strong> <code>$().unbind(event)</code></li></ul><h3 id="取值" tabindex="-1"><a class="header-anchor" href="#取值" aria-hidden="true">#</a> 取值</h3><ul><li><code>$().html()</code>：相当于 innerHTML，带参数则为设置</li><li><code>$().text()</code>：相当于 innerText，带参数则为设置</li><li><code>$().val()</code>：相当于 value，带参数则为设置</li></ul><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><ul><li><strong>显示 | 隐藏：</strong><ul><li><code>$().show(val)</code> | <code>$().hide(val)</code>：带参数则 淡入淡出地改变宽高和不透明度，val 为 毫秒</li><li><code>$().fadeIn()</code> | <code>$().fadeout()</code>：只改透明度的淡入淡出</li><li><code>slideUp()</code> 方法和 <code>slideDown()</code> 方法只会改变元素的高度，如果一个元素的 di<code>splay 属性值为“none”，调用 </code>slideDown()<code> 方法的时候元素由上至下延伸显示。</code>slideUp()` 正好相反，元素将由下到上缩短隐藏</li></ul></li><li><strong>自定义：</strong> <code>$().animate(params, speed, way, callback)</code><ul><li><code>params</code>：一个包含样式和值的 json 对象，比如<code>{p1:&quot;val1&quot;,p2:&quot;val2&quot;,...}</code>；</li><li><code>speed</code>：动画执行速度(可选)，默认 400；</li><li><code>way</code>：表示过度使用哪种缓动函数(默认 <code>swing</code>，jQ 内部还支持一个 <code>linear</code>)</li><li><code>callback</code>：在动画执行完之后，执行的函数(可选)</li></ul></li></ul><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',35),E={href:"https://segmentfault.com/a/1190000013677113",target:"_blank",rel:"noopener noreferrer"},x={href:"https://segmentfault.com/a/1190000013677253",target:"_blank",rel:"noopener noreferrer"};function B(y,$){const n=d("ExternalLinkIcon");return c(),t("div",null,[_,a(' @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} '),a(" code_chunk_output "),b,a(" /code_chunk_output "),k,e("blockquote",null,[e("ol",null,[e("li",null,[e("a",E,[o("JQuery 入门[1] _思否"),s(n)])]),e("li",null,[e("a",x,[o("JQuery 入门[2] _思否"),s(n)])])])])])}const w=i(f,[["render",B],["__file","JQuery.html.vue"]]);export{w as default};
