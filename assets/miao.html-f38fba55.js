import{_ as p,V as o,W as c,$ as t,Z as s,a0 as n,X as e,a1 as l,D as i}from"./framework-94985248.js";const u="/assets/miao_1-1dc2210d.png",r="/assets/miao_2-09bf274d.png",m="/assets/miao_3-d4a80f7d.png",k={},d=s("p",null,[s("br"),s("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),h=s("ul",null,[s("li",null,[s("a",{href:"#%E5%91%A8%E6%9C%9F%E5%BE%AA%E7%8E%AF"},"周期循环")]),s("li",null,[s("a",{href:"#%E6%8B%BC%E6%8E%A5%E6%95%B0%E5%AD%97%E5%8F%96%E6%A8%A1"},"拼接数字取模")]),s("li",null,[s("a",{href:"#%E5%B9%82%E8%BF%90%E7%AE%97-%E5%BF%AB%E9%80%9F%E5%B9%82%E6%80%9D%E6%83%B3"},"幂运算 快速幂思想")])],-1),g=s("br",null,null,-1),v=s("h2",{id:"周期循环",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#周期循环","aria-hidden":"true"},"#"),n(" 周期循环")],-1),b={href:"https://ac.nowcoder.com/acm/contest/22672/B",target:"_blank",rel:"noopener noreferrer"},y=l('<li><p><img src="'+u+`" alt=""><br></p></li><li><p><strong>AC 码</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ll n<span class="token punctuation">,</span> quan<span class="token punctuation">,</span> yu<span class="token punctuation">;</span>
    ll a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>   <span class="token comment">//实际上余数就只有0 1 4 三种情况</span>
    ll num<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">//余数的周期是4 ： 1 4 1 0</span>

    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    quan <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">,</span> yu <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">4</span><span class="token punctuation">;</span>
    a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> quan<span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> quan <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> quan<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>ll i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> yu<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token comment">//周期之外</span>
        a<span class="token punctuation">[</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>

    ll hv <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> hv <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>ll i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),x=s("br",null,null,-1),w=s("h2",{id:"拼接数字取模",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#拼接数字取模","aria-hidden":"true"},"#"),n(" 拼接数字取模")],-1),_={href:"https://ac.nowcoder.com/acm/contest/23846/D",target:"_blank",rel:"noopener noreferrer"},f=l('<li><p><img src="'+r+`" alt=""><br></p></li><li><p><strong>AC 码</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> n<span class="token punctuation">,</span> t<span class="token punctuation">;</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>cin <span class="token operator">&gt;&gt;</span> t<span class="token punctuation">;</span> t<span class="token operator">--</span><span class="token punctuation">;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            x <span class="token operator">=</span> <span class="token function">stoi</span><span class="token punctuation">(</span><span class="token function">to_string</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">7</span><span class="token punctuation">;</span>
            ans <span class="token operator">+=</span> <span class="token operator">!</span>x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cout <span class="token operator">&lt;&lt;</span> ans <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),M=s("br",null,null,-1),E=s("h2",{id:"幂运算-快速幂思想",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#幂运算-快速幂思想","aria-hidden":"true"},"#"),n(" 幂运算 快速幂思想")],-1),z={href:"https://ac.nowcoder.com/acm/contest/30532/D",target:"_blank",rel:"noopener noreferrer"},B=s("li",null,[s("p",null,[s("img",{src:m,alt:""}),s("br")])],-1),A=s("li",null,[s("p",null,[s("strong",null,"题解")]),s("p",null,[n("  观察到，将序列 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"B")]),s("annotation",{encoding:"application/x-tex"},"B")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B")])])]),n(" 的 "),s("strong",null,"下标 + 1"),n(" 以 "),s("strong",null,"二进制"),n(" 列出后：")]),s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"0001"),s("th",{style:{"text-align":"center"}},"0010"),s("th",{style:{"text-align":"center"}},"0011"),s("th",{style:{"text-align":"center"}},"0100"),s("th",{style:{"text-align":"center"}},"0101"),s("th",{style:{"text-align":"center"}},"0110"),s("th",{style:{"text-align":"center"}},"0111")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"center"}},"1"),s("td",{style:{"text-align":"center"}},"3"),s("td",{style:{"text-align":"center"}},"4"),s("td",{style:{"text-align":"center"}},"9"),s("td",{style:{"text-align":"center"}},"10"),s("td",{style:{"text-align":"center"}},"12"),s("td",{style:{"text-align":"center"}},"13")])])]),s("p",null,[n("3 的幂次数的下标为 "),s("code",null,"0001"),n("， "),s("code",null,"0010"),n("， "),s("code",null,"0100"),n("， "),s("code",null,"1000"),n("   不难得出：类比二进制或快速幂的方法，将幂次数相加即为 "),s("strong",null,"二进制数为 1 的幂数相加")]),s("ul",null,[s("li",null,[s("strong",null,"快速幂:"),s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"8"),s("th",{style:{"text-align":"center"}},"4"),s("th",{style:{"text-align":"center"}},"2"),s("th",{style:{"text-align":"center"}},"1")])])])]),s("li",null,[s("strong",null,"幂次和："),s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mstyle",{mathcolor:"#cc0000"},[s("mtext",null,"\\k")]),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"\\k^3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.204em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord text",style:{color:"#cc0000"}},[s("span",{class:"mord",style:{color:"#cc0000"}},"\\k")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.954em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])])])])])]),s("th",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"k"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"k^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])]),s("th",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"k"),s("mn",null,"1")])]),s("annotation",{encoding:"application/x-tex"},"k^1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])])])])])]),s("th",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"k"),s("mn",null,"0")])]),s("annotation",{encoding:"application/x-tex"},"k^0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])])])])])])])])])])])])])])]),s("p",null,[n("  例如：当 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",null,"="),s("mn",null,"5"),s("mo",{separator:"true"},","),s("mi",null,"k"),s("mo",null,"="),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"},"n = 5, k = 3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3")])])]),n(" 时， "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),n(" 的 "),s("strong",null,"二进制"),n(" 为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0101")]),s("annotation",{encoding:"application/x-tex"},"0101")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0101")])])]),n(" ，即为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"3"),s("mn",null,"2")]),s("mo",null,"+"),s("msup",null,[s("mn",null,"3"),s("mn",null,"0")]),s("mo",null,"="),s("mn",null,"10")]),s("annotation",{encoding:"application/x-tex"},"3^2 + 3^0 = 10")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"3"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"3"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"10")])])])])],-1),L=l(`<br><ul><li><p><strong>AC 码</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">const</span> <span class="token keyword">int</span> mod <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ll n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> t <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> k<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span>ans <span class="token operator">+=</span> t<span class="token punctuation">)</span> <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">(</span>t <span class="token operator">*=</span> k<span class="token punctuation">)</span> <span class="token operator">%=</span> mod<span class="token punctuation">,</span> n <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function q(C,F){const a=i("ExternalLinkIcon");return o(),c("div",null,[d,t(' @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} '),t(" code_chunk_output "),h,t(" /code_chunk_output "),g,v,s("ul",null,[s("li",null,[s("p",null,[s("strong",null,[s("a",b,[n("题目链接"),e(a)])])])]),y]),x,w,s("ul",null,[s("li",null,[s("p",null,[s("strong",null,[s("a",_,[n("题目链接"),e(a)])])])]),f]),M,E,s("ul",null,[s("li",null,[s("p",null,[s("strong",null,[s("a",z,[n("题目链接"),e(a)])])])]),B,A]),L])}const D=p(k,[["render",q],["__file","miao.html.vue"]]);export{D as default};
