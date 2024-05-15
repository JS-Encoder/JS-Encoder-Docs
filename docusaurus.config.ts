import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JS-Encoder Documentation',
  tagline: '本文档将详细介绍 JS-Encoder 的各种功能以便用户能够快速了解及上手使用它。',
  favicon: 'img/favicon.ico',
  url: 'https://www.jsencoder.cn',
  baseUrl: '/',
  organizationName: 'JS-Encoder',
  projectName: 'JS-Encoder',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'cmn-Hans-CN',
    locales: ['cmn-Hans-CN'],
    localeConfigs: {
      'zh-Hans': {
        label: 'Chinese',
        htmlLang: 'zh_CN',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    },
  ],
  stylesheets: [
    { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Roboto+Mono:ital@0;1&display=swap' },
  ],
  scripts: [],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'JS-Encoder Docs',
      logo: {
        alt: 'JS-Encoder Docs',
        src: 'img/logo.svg',
        width: 20,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/JS-Encoder/JS-Encoder',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} JS-Encoder Docs, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.palenight,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
