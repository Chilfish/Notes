import { navbar } from 'vuepress-theme-hope';

export const navbarConfig = navbar([
  {
    text: '编程语言',
    icon: 'code',
    link: '/Language/',
  },
  {
    text: '算法',
    icon: 'ability',
    prefix: '/Algorithm/',
    children: [
      {
        text: '首页',
        icon: 'home',
        link: '',
      },
      {
        text: '数据结构',
        icon: 'diagram',
        link: 'DataStructure/',
      },
      {
        text: '排序算法',
        icon: 'sort',
        link: 'Sort',
      },
    ],
  },
  {
    text: '前端',
    icon: 'html',
    prefix: '/FrontEnd/',
    children: [
      {
        text: '目录',
        icon: 'filter',
        link: '',
      },
      {
        text: 'JavaScript',
        icon: 'javascript',
        link: 'JavaScript/',
      },
      {
        text: 'Node.js',
        icon: 'nodeJS',
        link: 'Node.js/',
      },
      {
        text: 'TypeScript',
        icon: 'typescript',
        link: 'TypeScript/',
      },
      {
        text: 'Vue.js',
        icon: 'vue',
        link: 'Vue/',
      },
    ],
  },
  {
    text: '其他一些',
    icon: 'article',
    prefix: '/balabala/',
    children: [
      {
        text: '目录',
        icon: 'filter',
        link: '',
      },
      {
        text: 'DailySurfing',
        icon: 'launch',
        link: 'DailySurfing/',
      },
      {
        text: '其他一些知识',
        icon: 'engine',
        link: 'not_JustCode',
      },
      {
        text: '临时堆砌的码',
        icon: 'template',
        link: 'TempCoder',
      },
    ],
  },
  {
    text: '计算机基础',
    icon: 'computer',
    prefix: '/CSBase/',
    children: [
      {
        text: '目录',
        icon: 'filter',
        link: '',
      },
      {
        text: '计算机网络',
        icon: 'network',
        link: 'Nets/',
      },
      {
        text: '操作系统',
        icon: 'OS',
        link: 'OS/',
      },
    ],
  },
]);
