import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { hopeTheme } from 'vuepress-theme-hope';

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Fish's Notes",
  description: '基于 Vuepress 的笔记 blog',
  base: '/Notes/',

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

    logo: '/1.png',
    darkmode: 'toggle',
    themeColor: {
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f',
    },
  }),

  bundler: viteBundler({
    viteOptions: {
      build: {
        outDir: '../Notes_Dist',
      },
    },
  }),
});
