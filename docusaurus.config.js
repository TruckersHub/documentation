// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TruckersHub Documentation',
  tagline: 'The Future of Virtual Trucking',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://truckershub.in',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // path: 'docs',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'gateway',
  //       path: 'gateway',
  //       routeBasePath: 'gateway',
  //       sidebarPath: './sidebars.js'
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/banner.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'TruckersHub Logo',
          src: 'img/brand.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gateway',
            label: 'Gateway',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'webhooks',
            label: 'Webhooks',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'discord',
            label: 'Discord',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'typedefs',
            label: 'Type Defs',
            position: 'left',
          },
          // { to: '/gateway', sidebarId: "gateway", label: 'Websocket', position: 'left' },
          {
            href: 'https://github.com/TruckersHub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API',
                to: '/api/',
              },
              {
                label: 'Websocket',
                to: '/gateway/',
              },
              {
                label: 'Webhooks',
                to: '/webhooks/',
              },
              {
                label: 'Discord',
                to: '/discord/',
              },
              {
                label: 'TypeDefs',
                to: '/typedefs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.truckershub.in/',
              },
              {
                label: 'Discord',
                href: 'https://discord.truckershub.in/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'TruckersHub',
                to: 'https://truckershub.in/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TruckersHub',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023-${new Date().getFullYear()} TruckersHub.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
