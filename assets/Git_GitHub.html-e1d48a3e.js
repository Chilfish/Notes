import{_ as d,V as o,W as c,$ as i,Z as e,a0 as t,X as r,a1 as a,D as l}from"./framework-94985248.js";const s="/assets/Git_add-8f17a6cc.png",h={},g=e("p",null,[e("br"),e("p",{style:{"font-size":"32px","font-weight":"bold"}},"目录")],-1),u=a('<ul><li><a href="#git-config">Git config</a></li><li><a href="#git-%E5%88%9D%E5%A7%8B%E5%8C%96">Git 初始化</a><ul><li><a href="#git-init">git init</a></li><li><a href="#git-clone">git clone</a></li></ul></li><li><a href="#%E7%BC%96%E8%BE%91%E5%88%B0%E6%8F%90%E4%BA%A4">编辑到提交</a><ul><li><a href="#git-addrestore">git add/restore</a></li><li><a href="#git-remote">git remote</a></li></ul></li><li><a href="#%E5%88%86%E6%94%AF%E4%B8%8E%E6%A0%87%E7%AD%BE%E7%AE%A1%E7%90%86">分支与标签管理</a></li><li><a href="#%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2">提交历史</a></li><li><a href="#%E6%8E%A8%E9%80%81%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93">推送到远程仓库</a></li><li><a href="#%E5%90%88%E5%B9%B6%E4%B8%8E%E9%87%8D%E7%BD%AE">合并与重置</a></li></ul>',1),p=a(`<h2 id="git-config" tabindex="-1"><a class="header-anchor" href="#git-config" aria-hidden="true">#</a> Git config</h2><p>使用 git config 命令尽心 git 的配置，常用命令如下：</p><div class="tableBox"><p><span></span></p><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>git config --list</code></td><td style="text-align:center;">打印出当前环境的 git 配置信息，接 <code>--global</code> 可以打印全局配置</td></tr><tr><td style="text-align:center;"><code>git config user.name fish</code></td><td style="text-align:center;">git 配置 <code>username</code> 为 <code>fish</code>,可后接<code>--global</code></td></tr><tr><td style="text-align:center;"><code>git config user.email xxx@gxx.com</code></td><td style="text-align:center;">git 配置 <code>email</code> 为 <code>xxx@gxx.com</code>，可后接 <code>--global</code></td></tr><tr><td style="text-align:center;"><code>git config --global core.autocrlf false</code></td><td style="text-align:center;">windows 总提示 <code>CR/LF</code> 的警告，设置后可去除</td></tr><tr><td style="text-align:center;"><code>git config --global credential.helper store </code></td><td style="text-align:center;">终端环境保存 <code>https</code> 的密钥，避免每次都要密码</td></tr><tr><td style="text-align:center;"><code>git config --global core.quotepath false</code></td><td style="text-align:center;">用来解决 <em>git status</em> 显示中文乱码的问题 <br> <code>git-bash</code>，找到<code>选项-&gt;文本-&gt;本地 Locale</code> <br> 设置为 <code>zh_CN</code>，而旁边的字符集选框选为 <code>UTF-8</code></td></tr></tbody></table></div><p>当然，除了命令行配置，还可以直接编辑文件 <code>~/.gitconfig</code> 文件，但是请清楚修改的具体含义，避免出现 git 后续使用的不必要的错误</p><h2 id="git-初始化" tabindex="-1"><a class="header-anchor" href="#git-初始化" aria-hidden="true">#</a> Git 初始化</h2><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3><p>如果不依赖任何远端仓库，而是自行本地新建仓库并初始化，使用 <code>git init</code> 即可。示例如下，创建一个名为 MyGitRepo 的仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> MyGitRepo
<span class="token builtin class-name">cd</span> MyGitRepo
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>git init</code> 执行后，执行 <code>ls -a</code> 可以看到多了一个 <code>.git</code> 文件夹，这就是 git 的主干文件了</p><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><p>然而大多数时候，我们并不需要自己新建，而是需要从远端 Git 仓库获取已经有的仓库。通常的流程大都是，先在例如 GitHub 的平台上新建仓库，再克隆这个仓库来开发</p><p>假如现在想克隆本仓库 https://github.com/Organic-Fish/Notes.git ，则在命令行执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Organic-Fish/Notes.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完成后便多了个 <code>Notes</code>（仓库名）的文件夹 (如果因为网络失败，则可能需要 git 加速，或者代理加速了)</p>`,14),b=e("p",null,"如果因为网络的原因，clone 的速度太慢，或者报错。有 2 种方法可以尝试：",-1),f=e("li",null,[e("strong",null,"Github 的镜像站进行加速："),t(" 只需要把 "),e("code",null,"https://github.com"),t(" 替换成 "),e("code",null,"https://hub.fastgit.org"),t(" 即可")],-1),m=e("strong",null,"Dev-SideCar",-1),x={href:"https://github.com/docmirror/dev-sidecar",target:"_blank",rel:"noopener noreferrer"},E=a('<h2 id="编辑到提交" tabindex="-1"><a class="header-anchor" href="#编辑到提交" aria-hidden="true">#</a> 编辑到提交</h2><h3 id="git-add-restore" tabindex="-1"><a class="header-anchor" href="#git-add-restore" aria-hidden="true">#</a> git add/restore</h3><p>Git 操作一个新文件的流程为：工作区(也就是本地文件)–&gt; 暂存区(staged) –&gt; 仓库，如下图所示：</p><div align="center"><img width="60%" src="'+s+'"><p> Git 新增文件流程 </p></div><br><p>在完成开发后，</p><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h3><h2 id="分支与标签管理" tabindex="-1"><a class="header-anchor" href="#分支与标签管理" aria-hidden="true">#</a> 分支与标签管理</h2><h2 id="提交历史" tabindex="-1"><a class="header-anchor" href="#提交历史" aria-hidden="true">#</a> 提交历史</h2><h2 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h2><h2 id="合并与重置" tabindex="-1"><a class="header-anchor" href="#合并与重置" aria-hidden="true">#</a> 合并与重置</h2>',11);function _(v,B){const n=l("ExternalLinkIcon");return o(),c("div",null,[g,i(' @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} '),i(" code_chunk_output "),u,i(" /code_chunk_output "),p,e("blockquote",null,[b,e("ul",null,[f,e("li",null,[t("Git 加速工具 "),m,t("，地址："),e("a",x,[t("Dev-SideCar"),r(n)]),t("(鸡生蛋生鸡了\\doge)")])])]),E,i(' - **git 的一些：**\n  - `git remote`： 查看是否有远程仓库\n    没有远程仓库   `git remote add [远程仓库名] [远程地址]`： 配置远程仓库\n  - `git clone [url]`：克隆项目 / `git pull` 拉取最新代码\n  - `git status`：本地仓库状态\n  - `git add.` ：提交到暂存区中\n  - `git commit -m \'描述\'`： 提交到本地仓库中\n  - `git push [远程仓库名] [分支名]`： 提交到远程仓库\n- **分支：**\n  - `git branch`：列出本地的所有分支，当前所在分支以 "\\*" 标出\n  - `git branch -v`：列出本地的所有分支并显示最后一次提交，当前所在分支以 "\\*" 标出\n  - `git branch -b [新分支名]`： 创建新的分支，在新分支上修改代码\n  - `git branch -d [分支名]`： 删除之前修改代码的分支,删之前先 `branch` 查看\n  - `git branch -m [<原分支名称>] <新的分支名称>`：修改分支名\n  - `git checkout [分支名]`： 切换到指定的分支\n  - `git checkout -b [分支名]`： 将当前分支复制到新的分支进行开发。等同于 `git branch` 和 `git checkout` 两个命令合并\n  - `git merge [分支名]`： 把修改代码的分支合并到当前分支\n- 提交代码前先更新远程的代码，但如果当前分支修改了代码没有提交，更新下来的代码可能会导致与当前未提交的代码冲突或被覆盖。所以： `git stash`：放弃当前更改 ')])}const G=d(h,[["render",_],["__file","Git_GitHub.html.vue"]]);export{G as default};