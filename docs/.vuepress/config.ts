import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Fish's Notes",
  description: '基于 Vuepress 的笔记 blog',
  base: '/Notes/',

  head: [['link', { rel: 'icon', href: '/Notes/logo.png' }]],
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tex: true,
        footnote: true,
      },
      copyCode: {},
      activeHeaderLinks: false,
    },

    repo: 'Organic-Fish/Notes',
    repoDisplay: true,
    repoLabel: 'GitHub',

    sidebar: 'heading',
    navbar: [],
    logo: '/logo.png',

    darkmode: 'toggle',
    themeColor: {
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f',
    },
  }),
});
