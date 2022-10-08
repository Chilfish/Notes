---
title: 只是一些没地方放的 Temp 码
date: 2020-06-20
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>
 
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
 
<!-- code_chunk_output -->

- [C++](#c)
  - [欢迎各位滚动屏的莅临指导](#欢迎各位滚动屏的莅临指导)
- [JavaScript](#javascript)
  - [UP 的新动态](#up-的新动态)
  - [浏览器 UA](#浏览器-ua)
  - [表格排序](#表格排序)
  - [模糊查询](#模糊查询)
  - [获取系统 IPV4](#获取系统-ipv4)
  - [大眼仔，你坏事干净！](#大眼仔你坏事干净)
- [TypeScript](#typescript)
- [Python](#python)

<!-- /code_chunk_output -->

## C++

### 欢迎各位滚动屏的莅临指导

```cpp {.line-numbers}
void welcome()
{
    string cont = "Welcome all leaders to guide us!   ";
    int len = cont.length();
    while (true)
    {
        Sleep(200);
        system("cls");
        cout << cont;
        cont = cont.substr(1, len) + cont[0];
    }
}
```

## JavaScript

### UP 的新动态

> 超早期写的，但 B 站的 class 一直在变......

```js {.line-numbers}
var upname = document.getElementsByClassName('bili-dyn-title'),
  up = new Set();

upname.forEach((element) => {
  up.add(element.innerText);
});

console.log('共有', up.size, '位 up 主更新了动态。分别是：');
up.forEach((element) => {
  console.log(element);
});
```

### 浏览器 UA

> 下次再改成 ES6 好了

```js {.line-numbers}
class getVersion {
  constructor() {
    this.versions = (() => {
      const u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1,
        weixin: u.indexOf('MicroMessenger') > -1,
        presto: u.indexOf('Presto') > -1,
        webKit: u.indexOf('AppleWebKit') > -1,
        chrome: u.indexOf('Chrome') > -1,
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        iPhone: u.indexOf('iPhone') > -1,
        iPad: u.indexOf('iPad') > -1,
      };
    })();

    this.browserVersion = () => {
      let UA = '';
      if (this.versions.weixin) {
        UA = '微信';
      } else if (this.versions.android) {
        UA = '安卓';
      } else if (
        this.versions.ios ||
        this.versions.iPhone ||
        this.versions.iPad
      ) {
        UA = '苹果';
      } else if (this.versions.chrome) {
        UA = '谷歌';
      } else if (this.versions.trident) {
        UA = 'IE';
      } else if (this.versions.gecko) {
        UA = '火狐';
      } else {
        UA = '其他';
      }
      alert('浏览器 UA 为' + UA);
    };
  }
}

const version = new getVersion();
version.browserVersion();
```

### 表格排序

> 感觉不如......

```js {.line-numbers}
const sort_table = () => {
  const thead = document.querySelector('thead'),
    tbody = document.querySelector('tbody'),
    rows_array = Array.from(tbody.rows);

  const cmp = (col) => {
    return (rowA, rowB) => {
      let a = rowA.cells[col].innerHTML,
        b = rowB.cells[col].innerHTML,
        A = Number(rowA.cells[0].innerHTML), //相同则按第一列排序
        B = Number(rowB.cells[0].innerHTML);

      if (!isNaN(a)) {
        a = Number(a);
        b = Number(b);
        return a === b ? A - B : a - b; //数字
      } else return a === b ? A - B : a > b; //字符串
    };
  };

  thead.addEventListener('click', (e) => {
    if (e.target.tagName === 'TH') {
      rows_array.sort(cmp(e.target.cellIndex));
      tbody.append(...rows_array);
    }
  });
};
```

### 模糊查询

```js {.line-numbers}
function fuzzyFind(str, list) {
  const reg = new RegExp('(.*)(' + str.split('').join(')(.*)(') + ')(.*)');
  let ans = [];
  list.forEach((ele) => {
    if (reg.test(ele)) ans.push(ele);
  });
  return ans;
}
```

### 获取系统 IPV4

```js {.line-numbers}
function getIPV4() {
  const os = require('os'),
    ips = Object.values(os.networkInterfaces())[0];
  return ips.find((ele) => ele.family === 'IPv4').address;
}
```

### 大眼仔，你坏事干净！

> 但并不能总是成功诶......

```js {.line-numbers}
const axios = require('axios'),
  fs = require('fs'),
  path = require('path');

async function getImg(postUrl) {
  const baseURL = 'https://weibo.com/ajax/statuses/show?id=',
    url = baseURL + postUrl.match(/(?<=\d+\/)\w+/gm)[0],
    ansUrl = [];

  await axios.get(url).then((res) => {
    const imgs = res.data.pic_infos;
    for (const [key, value] of Object.entries(./imgs)) {
      ansUrl.push(
        value.large.url.replace(/wx(\d)/gm, `ww$1`).replace(/orj960/gm, `large`)
      );
    }
  });
  return new Promise((resolve, rejects) => {
    resolve(ansUrl);
  });
}

async function downloadImg(url, filePath, fileName) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
  const writer = fs.createWriteStream(path.resolve(filePath, fileName));

  await axios({
    url,
    methods: 'get',
    responseType: 'stream',
  }).then((res) => {
    res.data.pipe(writer);
  });
}

const weibo = 'https://weibo.com/6069191706/LBBROtrFz';

getImg(weibo).then((res) => {
  res.forEach((ele, index) => {
    downloadImg(ele, './Web/img/blockImg/', `${index}.jpg`);
  });
});
```

## TypeScript

## Python
