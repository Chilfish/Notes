---
title: CSS | Scss
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

- **外链：**
  - [HTML](HTML.md)
  - [Scss 教程](https://juejin.cn/post/7055101823442485255)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [CSS](#css)
  - [文本字体](#文本字体)
  - [单位](#单位)
  - [background 背景](#background-背景)
  - [图片](#图片)
  - [盒子](#盒子)
  - [列表](#列表)
  - [选择器](#选择器)
    - [组合选择与继承](#组合选择与继承)
    - [伪类](#伪类)
    - [伪元素](#伪元素)
  - [布局方式](#布局方式)
    - [flex 弹性](#flex-弹性)
    - [grid 网格](#grid-网格)
    - [float 浮动](#float-浮动)
    - [position 定位](#position-定位)
    - [column 多列布局](#column-多列布局)
  - [transition 过渡](#transition-过渡)
    - [可过渡的样式](#可过渡的样式)
    - [过渡函数](#过渡函数)
  - [animation 动画](#animation-动画)
    - [关键帧 @keyframes name](#关键帧-keyframes-name)
- [Scss](#scss)
  - [基础](#基础)
  - [继承 复用与导入](#继承-复用与导入)
  - [语句](#语句)

<!-- /code_chunk_output -->

## CSS

### 文本字体

- `line-height`，行间距，默认 1.2 ，当行间距等于盒子高度时，就可以使文字**垂直居中**
- `font-weight: bold | hight`，字重(粗细)
- `font-size`，字体大小，默认 16px, 最小是 12px
- `font-family: "fangsong";`，字体样式
- `text-decoration`，下划线类型
- `text-indent` ： 第一行文字缩进长度
- `text-shadow` 设置文本阴影
- `text-transform` 控制元素中的字母**大小写**规则
  - `none` 无转换
  - `capitalize` 将每个单词的第一个字母大写
  - `uppercase` 将所有字母大写
  - `lowercase` 将所有字母小写
  - `ful-width` 全角
- `write-mode` 文字书写方向

<div class="img" align="center"><img src="./img/CSS_write_mode.png"/><p>
  书写方向
</p></div>

- `white-space`：对文本的**换行操作**进行控制
  - 默认值是 `normal`，设置文本到达父元素的边界就自动换行
  - `nowrap` 设置文本不换行，意思是文本到达边界依然会继续的由左向右平铺
- `word-break` 属性可以控制**单词或字符进行换行**，默认值为 `normal`，使浏览器遵循默认的换行规则
  - `word-break:break-all`：强制换行，允许**在单词内部换行**，如果只写一个因为单词但是太长，用了这个属性就会强制把单词断开
  - `word-break:keep-all`：只允许在半角空格或连字符处换行
- `text-overflow`：规定当文本**溢出**时的情况：
  - `clip` 将文本裁剪
  - `ellipsis` 显示**省略符号**来代表被修剪的文本
  - `string` 使用给定的**字符串**来代表被修剪的文本
- `word-spacing` 设置单词间距
- `letter-spacing` 设置字母间距
- `color`，字体颜色值
- **对齐：**
  - ` vertical-align: middle | baseline | top | ...`： 仅对设置 **内联元素** 的**上下对齐方式**。在父元素设置此样式时，会对 `inline-block` 和 `inline` 类型的**子元素**都有用，这个样式一般用做图片和文字的对齐
  - - `text-align: left | right | center | justify (文字向两侧对齐)` , 文字的**水平对齐方式**

<br>

### 单位

<div class="h5">绝对长度：</div>

- 绝对长度单位是固定的，用任何一个绝对长度表示的长度都将恰好显示为这个尺寸
- 不建议在屏幕上使用绝对长度单位，因为屏幕尺寸变化很大。但是，如果已知输出介质，则可以使用它们，例如用于打印布局（print layout）

<div class="tableBox">

<span></span>
| 单位 | 描述 |
| :--- | :--------- |
| `cm` | 厘米 |
| `mm` | 毫米 |
| `in` | 英寸 (1in = 96px = 2.54cm) |
| `px` | 像素 (1px = 1/96th of 1in) |
| `pt` | 点 (1pt = 1/72 of 1in) |

</div>

- **像素（px）** 是相对于观看设备的。对于低 dpi 的设备，1px 是显示器的一个设备像素（点）。对于打印机和高分辨率屏幕，1px 表示多个设备像素

<div class="h5">相对长度：</div>

- 相对长度单位规定相对于另一个长度属性的长度。相对长度单位在不同渲染介质之间缩放表现得更好

<div class="tableBox">

<span></span>
| 单位 | 描述 |
| :----- | :--- |
| `em` | 相对于元素的字体大小（font-size）（2em 表示当前字体大小的 2 倍） |
| `ex` | 相对于当前字体的 x-height(极少使用) |
| `ch` | 相对于 "0"（零）的宽度 |
| `rem` | 相对于根元素的字体大小（font-size） |
| `vw` | 相对于视口\*宽度的 1% |
| `vh` | 相对于视口\*高度的 1% |
| `vmin` | 相对于视口\*较小尺寸的 1％ |
| `vmax` | 相对于视口\*较大尺寸的 1％ |
| `%` | 相对于父元素 |

</div>

- 视口（Viewport）= 浏览器窗口的尺寸。如果视口宽 50 里面，则 1vw = 0.5cm

<br>

### background 背景

简写：`background: color | image | origin | position | repeat | size | attachment`

- **`size`：**
  - `contain`：是缩放以填充盒子，并会 `repeat`
  - `cover`：是剪裁以填充盒子
  - 若为具体数值：百分比或长宽(拉伸), 则 `repeat` 填充盒子
- **`attachment`：**
  - `scroll`：随整体滚动而不随图片内容
  - `fixed`：不随任何滚动
  - `local`：随图片内容而滚动

<br>

### 图片

- `opacity` , 透明度
- `object-fit` , 调整内容长宽比 属性可接受如下值：
  - `fill` - 默认值。调整替换后的内容大小，以填充元素的内容框。如有必要，将拉伸或挤压物体以适应该对象
  - `contain` - 缩放替换后的内容以保持其纵横比，同时将其放入元素的内容框
  - `cover` - 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应
  - `none` - 不对替换的内容调整大小
  - `scale-down` - 调整内容大小就像没有指定内容或包含内容一样（将导致较小的具体对象尺寸）

<br>

### 盒子

- **边框 `border`：** `border` 属性是一个复合属性，可以按照 `border-width` | `border-style` | `border-color` 的顺序设置边框
- `border-radius` , 圆角半径
- `margin` , 外边距
  - 当只指定一个值时，该值会统一应用到**全部四个边**的外边距上
  - 指定两个值时，第一个值会应用于**上边和下边**的外边距，第二个值应用于**左边和右边**
  - 指定三个值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的外边距
  - 指定四个值时，依次（**顺时针方向**）作为上边，右边，下边，和左边的外边距
  - 也可以单是 `margin-right`来指定
  - **居中**则是 `margin`的`left`和`right`为 **`auto`**，且同时元素的**宽是确定**的
- `padding` , 内边距
- `height`、`width` , 宽高
- 但是，如图 完整的框是指 长：`width + 2\*(margin + padding + border)`

<div class="img" align="center"><img src="./img/CSS_border.png"/><p>
  Border
</p></div>

- 而用了 **`box-sizing: border-box;`** 后，边距不影响宽度了（放全局）

<br>

### 列表

<div class="h5"><code>list-style-type</code></div>

- `none`：不使用项目符号
- `disc`：实心圆
- `circle`：空心圆
- `square`：实心方块
- `decimal`：阿拉伯数字
- `lower-alpha`：小写英文字母
- `upper-alpha`：大写英文字母
- `lower-roman`：小写罗马数字
- `upper-roman`：大写罗马数字

**`list-style-image`：** 属性用来设置对象的列表项是否**图像**作为项目符号

- `url()`：指定图片的域名
- `none`：不指定图片符号

**`list-style-position`：** 属性用来设置对象的列表序号的位置

- `outside`：默认值,让列表符号与文字分离开
- `inside`：使得列表序号在文本内，可以通过控制文本来控制

<br>

### 选择器

#### 组合选择与继承

- **优先级：** 内联 > ID 选择器 > 类选择器 > 标签选择器
- `.class1.class2` ，同时包含这两个 class 的元素
- `div p {xxx}` ，是指以`div`父项的所有**子孙项**`p`的样式都受 xxx 影响
- `div>p {}` ，只有`div`的直接**子项**`p`才算，而孙项的`p`不受影响：`in html： <div><span><p>`
- `div+p{}` ，拥有**共同父项**的`div`和`p`（兄弟项），且`p`位于`div`下的**第一项**，`p`的样式才受影响；这时`div`的**子项**`p`不受影响
- `div~p{}` ，所有与`div`互为兄弟关系的`p`都受样式影响
- 但还有 **属性选择器**：
  - `input[type="text"] {}` ：类型为 `input` 且是`text`的样式受影响
  - 自定义属性：如 `<div data-123="texts"></div>` `->` `div[data-123] {}`
  - 指定 <br>
    <table><tbody><tr><th >选择器</th><th>例子</th><th>例子描述</th></tr><tr><td><code>[<i>attribute</i>]</code></td><td>[target]</td><td>选择带有target属性的所有元素。</td></tr><tr><td><code>[<i>attribute</i>=<i>value</i>]</code></td><td>[target=_blank]</td><td>选择带有target="_blank"属性的所有元素。</td></tr><tr><td><code>[<i>attribute</i>~=<i>value</i>]</code></td><td>[title~=flower]</td><td>选择title属性包含单词"flower"的所有元素。</td></tr><tr><td><code>[<i>attribute</i>|=<i>value</i>]</code></td><td>[lang|=en]</td><td>选择lang属性值以"en"开头的所有元素。</td></tr><tr><td><code>[<i>attribute</i>^=<i>value</i>]</code></td><td>a[href^="https"]</td><td>选择其src属性值以"https"开头的每个&lt;a&gt;元素。</td></tr><tr><td><code>[<i>attribute</i>$=<i>value</i>]</code></td><td>a[href$=".pdf"]</td><td>选择其src属性以".pdf"结尾的所有&lt;a&gt;元素。</td></tr><tr><td><code >[<i>attribute</i>*=<i>value</i>]</code></td><td>a[href*="abc"]</td><td>选择其href属性值中包含"abc"子串的每个&lt;a&gt;元素。</td></tr></tbody></table>

<br>

#### 伪类

<div class="h5">状态：</div>

- `:link` 超链接点击之前
- `:visited` 链接被访问过之后
  但 `a`标签涵盖了`link`、`visited`的状态
- `:hover` “悬停”：鼠标放到标签上的时候
- `:active` “激活”： 鼠标点击标签，但是不松手时
- `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）

<div class="h5">指定元素：</div>
 
- `:not` 一个否定伪类，用于匹配不符合参数选择器的元素
- `:first-child` 匹配元素的第一个子元素
- `:last-child` 匹配元素的最后一个子元素
- `:first-of-type` 表示一组兄弟元素中其类型的第一个元素
- `:last-of-type` 表示一组兄弟元素中其类型的最后一个元素
- `:nth-child` 根据元素的位置匹配一个或者多个元素，它接受一个 an+b 形式的参数
- `:nth-last-child` 与`:nth-child` 相似，不同之处在于它从最后一个子元素开始计数
- `:nth-of-type` 与 `nth-child` 相似，不同之处在于它是只匹配特定类型的元素
- `:nth-last-type` 与 `nth-of-type` 相似，不同之处在于它是从最后一个子元素开始计数的
- `:only-child` 当元素是其父元素中唯一的子元素时，`:only-child` 匹配该元素
- `:only-of-type` 当元素是其父元素中唯一特定类型的子元素时，`:only-child` 匹配该元素
- `:target` 当 url 带有瞄名称，指向文档内某个具体的元素时`:target` 匹配该元素

<div class="h5">表单：</div>

- `:checked` 匹配被选中的 `input` 元素，这个 `input` 元素包裹 `radio` 和 `checkbox`.
- `:default` 匹配默认选中的元素
- `:disabled` 匹配禁用的表单元素
- `:empty` 匹配没有子元素的元素，如果元素中含有文本节点，html 元素或者一个空格，则`:empty` 不能匹配这个元素
- `:enabled` 匹配没有设置 disabled 属性的表单元素
- `:in-range` 匹配在指定区域内元素，
- `:out-of-range` 匹配不在指定区域内的元素
- `:indetermimate` 当某组中的单选框或复选框还没有选取状态时，匹配该组中所有的单选框或复选框
- `:valid` 匹配条件验证正确的表单元素
- `:invalid` 匹配提交验证错误的表单元素
- `:optional` `:required` 匹配设置有无设置 `required` 属性的表单元素
- `:read-only` 匹配设置了只读属性的元素
- `:read-write` 匹配处于编辑状态的元素
- `:placeholder-shown` 当 `input` 设置了 `placeholder` 后，在用户输入前生效

<div class="h5">其他：</div>

- `:fullscreen` 全屏时触发

<br>

#### 伪元素

- `::first-letter` 选择每个元素的第一个字母
- `::first-line` 选择每个元素的第一行
- `::first-child` 选择器匹配属于任意元素的第一个**子元素**
- `::before` 在每个元素之前插入内容
- `::after` 在每个元素之后插入内容
- `::selection` 用户选中的部分

> Ref: [伪类与伪元素](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)

<br>

### 布局方式

#### flex 弹性

<div class="h5">定义：</div>

基于一维的布局。只要给`flex`元素的父元素声明 `display： flex` ，默认地所有子元素就会排成一行，且自动分配小大以充分展示元素的内容。所以是，**在父元素定义 `flex`，然后再在子元素再定义下列属性**

<div class="h5">子元素的分布：</div>

- `flex-direction`：默认为`row` 水平排列，`column`为竖直排列。`flex-wrap`：溢出时自动换行换行
  - 可以将两个属性 `flex-direction` 和 `flex-wrap` 组合为简写属性 `flex-flow`。第一个指定的值为 `flex-direction` ，第二个指定的值为 `flex-wrap`.
- `flex-grow`：元素放大比例。值为 0 或 正整数(按比例分配多余的空间)
- `flex-shrink`：元素缩小比例。值为 1 或 0；
- `flex-basic`：设置子元素初始化大小，给上面两个属性分配多余空间之前，计算项目是否有多余空间，默认值为 auto,即项目本身的大小
- （可简写：`flex: grow shrink basic`）

<div class="h5">子元素对齐方式：</div>

要先定义父元素的长宽，子元素才会对齐

- **`justify-content`** ： 属性用来使元素在**主轴**方向上对齐，主轴方向是通过`flex-direction` 设置的方向。初始值是`flex-start`
  - 可分为：`center`、`flex-start`、`flex-end`、`stretch(在轴上撑满整个父元素)`、`space-around`(元素之间的距离相等)、`space-between`(元素左右的空间相等、**贴边**)
- **`align-items`**： 属性可以使元素在**交叉轴**方向对齐。初始值为`stretch`
  - 可分为：`center`、`flex-start`、`flex-end`、`stretch`、`baseline(基于文本内容基线)`
- **`align-content`**：当容器内为**多行元素**时的对齐方式，把每一行当做整体来对齐，同 items
- **`align-self`**：单独的对齐方式

<div class="h5">另一种居中对齐：</div>

必须定义宽高才能 `auto`

```css {.line-numbers}
.par {
  width: xx;
  height: xx;
  display: flex;
}
.child {
  width: xx;
  height: xx;
  margin: auto;
}
```

<br>

#### grid 网格

<br>

#### float 浮动

创建：`float: left | right | none (默认值) | inherit (继承父元素的浮动属性)`

清除：`clear: left | right | both`

<br>

#### position 定位

<div class="h5">定位的属性：</div>

- `static` : **默认**的定位方式，没有特别的地方
- `relative` : **相对定位**，不添加偏移量则与 `static` 没差
- `absolute` : **绝对定位**，往上冒泡地找定位方式**不是 `static`**的祖先(父)元素，并相对于该元素绝对定位
- `fixed` : 相对于浏览器窗口固定
- `sticky` : **粘性定位**，当元素(滚动条)移动到预设位置时固定

<div class="img" align="center"><img src="./img/CSS_position.png"/><p>
  position
</p></div>

<br>

#### column 多列布局

- `column-count: number`：列数
- `column-gap: number`：列间间隔
- `column-rule: style color`：间隔样式，同`border`
- `column-width: number`：列宽

> Ref: [flex 与 grid 区别](https://juejin.cn/post/6940627375537258527#heading-9) 、 [CSS flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

<br>

### transition 过渡

- `transition-property` 指定使用过渡效果的 css 属性
- `transition-duration` 设置过渡动画持续时间
- `transition-timing-function` 设置动画的时间函数
  - `liner` ：匀速
  - `ease-in`：减速
  - `ease-out`：加速
  - `ease-in-out`：先加速再减速
  - `cubic-bezier`：三次贝塞尔曲线，[可以定制](http://cubic-bezier.com)
- `transition-delay` 设置动画的延迟时间
- 简写：`transition: 属性 持续 函数 延迟`
- transition 的优点在于简单易用，但是它有几个很大的局限
  1. 需要事件触发，所以没法在网页加载时自动发生
  2. 是一次性的，不能重复发生，除非一再触发
  3. 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
  4. 规则，只能定义一个属性的变化，不能涉及多个属性

> Ref： [深入理解 transition](https://www.cnblogs.com/xiaohuochai/p/5347930.html)

<br>

#### 可过渡的样式

- 颜色: `color` `border-color` `outline-color`
- 位置: `position` `left` `right` `top` `bottom`
- 长度:
  - `height` `width`
  - `border-width` `margin` `padding` `outline-width`
  - `font-size` `line-height` `text-indent` `vertical-align`
  - `border-spacing` `letter-spacing` `word-spacing`
- 数字: `opacity` `visibility` `z-index` `font-weight` `zoom`
- 组合: `text-shadow` `transform` `box-shadow` `clip`
- 其他: `gradient`

<br>

#### 过渡函数

- `scale(value)` : 用于修改元素的大小。可以通过向量形式定义的缩放值来放大或缩小元素，同时可以在不同的方向设置不同的缩放值

<br>

### animation 动画

- `animation-name`：none 为默认值，将没有任何动画效果，其可以用来覆盖任何动画
- `animation-duration`：默认值为 0，意味着动画周期为 0，也就是没有任何动画效果
- `animation-timing-function`：与 `transition-timing-function` 一样
- `animation-delay`：在开始执行动画时需要等待的时间
- `animation-iteration-count`：定义动画的播放次数，默认为 1，如果为 `infinite`，则无限次循环播放
- `animation-direction`：动画播放方向
  - 默认为 `normal`，每次循环都是向前播放，（0-100）
  - 另一个值为 `alternate`，动画播放为偶数次则向前播放，如果为基数词就反方向播放
- `animation-state`：动画播放状态
  - 默认为 `running`，播放
  - `paused`，暂停
- `animation-fill-mode`：定义动画开始之前和结束之后发生的操作.
  - 默认值为 `none`，动画结束时回到动画没开始时的状态
  - `forwards`，动画结束后继续应用最后关键帧的位置，即保存在结束状态
  - `backwards`，让动画回到第一帧的状态
  - `both`：轮流应用 `forwards` 和 `backwards` 规则
- 简写： `animation: duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name`

<br>

#### 关键帧 @keyframes name

在 animation 申明 name 后，再另写关键帧动画样式

<br>

## Scss

### 基础

<div class="h5">编译：</div>

- 安装 `live Sass Compile` 插件，再点底栏的 `watch sass`。 `settings.json` 的配置：

  ```json {.line-numbers}
  {
    "liveSassCompile.settings.formats": [
      {
        "format": "compact", //可定制的出口 CSS样式
        // - expanded：缩进成css样式
        // - nested：按Scss的嵌套层次缩进
        // - compact：按分类缩进，以空行为界
        // - compressed：完全缩进成一行
        "extensionName": ".min.css", //编译后缀名
        "savePath": "/css" //编译保存的路径，以当前工作区为根目录
      }
    ],
    // 排除编译的路径
    "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"]
  }
  ```

  > 而且不编译单行注释， `compressed` 不编译多行注释，`/*! xxx */` 强制编译

<div class="h5">变量：</div>

```scss {.line-numbers}
$primary_color: #243e59;
$name: 'fish';
// 使用
.#{$name} {
  color: $primary_color;
}
// 编译成：
.fish {
  color: #243e59;
}
```

**模板字符串：** `#{$var}`：在字符串里套变量

**嵌套选择：** 像 `html` 那样的嵌套结构。而缩略属性也能写：

```scss {.line-numbers}
html {
  font: {
    size: 16px;
    decoration: none;
    family: 'Lato', sans-serif;
  }
}
// 等同于
html {
  font-size: 16px;
  font-family: 'xxxx';
}
```

**父级选择器：** 也就是将 当前的属性名替换成 `&`

```scss {.line-numbers}
.fish {
  color: #654321;
  &:hover {
    color: #123456;
  }
}
//编译成：
.fish {
  color: #654321;
}
.fish:hover {
  color: #123456;
}
```

<br>

### 继承 复用与导入

- **`@mixin`：** 类比于函数，还可以传入参数。按顺序传入或指定参数名
  ```scss {.line-numbers}
  // 默认参数为0
  @mixin absolute($top: 0, $right: 0) {
    position: absolute;
    top: $top;
    right: $right;
  }
  .fish {
    @include absolute(20px, 30px); // absolute();
  }
  ```
  `@mixin` 是可以重复使用的一组 css 声明，有助于减少重复代码，只需声明一次，就可在文件中引用。混合指令可以包含所有的 css 规则，绝大部分 scss 规则，可以传递参数，输出多样化的样式
- **`@extend`：** 继承样式： `@extend .fish;`
- **`@import`：** scss 拓展了 `@import` 的功能，允许其导入 scss 或 sass 文件。被导入的文件将合并编译到同一个 css 文件中，被导入的文件中所包含的变量或者混合指令 (`mixin`) 都可以在导入的文件中使用
- **`@Partials`：** 忽略编译的文件，在文件名前加一个下划线。主要是用来定义**公共样式**的，专门用于被其他的 scss 文件 import 进行使用的
- **`@function`：** 主要用于计算，带返回值 `@return`

**也就是：** `@function` 用来计算，`@mixin` 用来封装样式，`@import` 用来抽离他们为一个模块

<br>

### 语句

<div class="h5">@if</div>

`@if` 语法和 js 类似，基本格式是`@if...@else if...@else`

```scss {.line-numbers}
.fish {
  @if ($a > 20) {
    color: #123;
  } @else if ($a < 20) {
    color: #234;
  } @else {
    color: #233;
  }
}
```

<div class="h5">@for</div>

for 在条件范围内重复操作，这个指令包含两种格式： `@for $var from <start> through | to <end>;`

两者区别在于 `through` 与 `to` 的含义：

- 使用 `through` 时，条件范围：`[start, end]`
- 使用 `to` 时条件范围：`[start, end)`
- `$var` 可以是任何变量，比如`$i`，`<start>` 和 `<end>` 必须是整数值

```scss {.line-numbers}
@for $i from 1 to 3 {
  .fish span:nth-child(#{$i}) {
    width: 20 * ($i - 1) + px;
  }
}
```

<div class="h5">@each</div>

类似于 `foreach`

```scss {.line-numbers}
$num_list: 1 3 4;
@each $ele in $num_list {
  .p#{$ele} {
    height: $ele * $ele;
  }
}
```

<div class="h5">@while：</div>

```scss {.line-numbers}
$column: 12;
@while $column>0 {
  .col-sm-#{$column} {
    width: $column / 12 * 100%;
  }
  $column: $column - 1;
}
```
