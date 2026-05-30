// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jihadul Akbar',
  tagline: 'Dosen STMIK Lombok',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jihadul4kbar.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jihadul4kbar', // Usually your GitHub org/user name.
  projectName: 'jihadul4kbar.github.io', // Usually your repo name.
  deploymentBranch: 'master',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      id: {
        label: 'Indonesia',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jihadul4kbar/jihadul4kbar.github.io/tree/source/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jihadul4kbar/jihadul4kbar.github.io/tree/source/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jihadul Akbar',
        logo: {
          alt: 'JA',
          src: 'img/logo.png',
        },
        items: [
          {to: '/#fokus', label: 'Fokus', position: 'right'},
          {to: '/#riset', label: 'Penelitian', position: 'right'},
          {to: '/#proyek', label: 'Proyek', position: 'right'},
          {to: '/#pembicara', label: 'Pembicara', position: 'right'},
          {to: '/docs/intro', label: 'Buku', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/resume', label: 'Riwayat', position: 'right'},
          {to: '/#kontak', label: 'Kontak', position: 'right'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/jihadul4kbar',
            'aria-label': 'GitHub',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Jihadul Akbar — STMIK Lombok`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
