import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';

import { navbarConfig } from './navBar';

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Fish's Notes",
  description: '基于 Vuepress 的笔记 blog',
  // base: '/Notes/',

  head: [
    ['link', { rel: 'icon', href: 'https://notes.organicfish.top/logo.png' }],
  ],
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },
  // dest: 'dist/Notes/',
  dest: 'out/dist',
  cache: 'out/cache',
  temp: 'out/temp',

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        tex: true,
        footnote: true,
        container: true,
      },
      copyCode: {},
      activeHeaderLinks: false,
      comment: {},
    },

    iconAssets: 'iconfont',

    repo: 'Organic-Fish/Notes',
    repoDisplay: true,
    repoLabel: 'GitHub',
    docsDir: './docs/',

    displayFooter: true,
    sidebar: 'heading',
    headerDepth: 3,
    navbar: navbarConfig,
    // navbarAutoHide: 'always',

    // toc: false,
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
