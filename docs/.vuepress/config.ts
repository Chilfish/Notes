import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Fish's Notes",
  description: '基于 Vuepress 的笔记 blog',
  base: '/Notes/',

  head: [
    ['link', { rel: 'icon', href: '/Notes/logo.png' }],
    ['link', { rel: 'modulepreload', href: '/Notes/scripts/export-helper.js' }],
  ],
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tex: true,
        imageMark: true,
        imageSize: true,
        footnote: true,
      },
      copyCode: {},
      activeHeaderLinks: false,
    },

    sidebar: 'heading',
    navbar: [],

    darkmode: 'toggle',
    themeColor: {
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f',
    },
  }),
});
