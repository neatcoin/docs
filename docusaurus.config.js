module.exports = {
  title: 'Neatcoin',
  tagline: 'A dedicated blockchain for experimenting things.',
  url: 'https://neatcoin.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'neatcoin',
  projectName: 'neatcoin.org',
  themeConfig: {
    navbar: {
      title: 'Neatcoin',
      logo: {
        alt: 'Neatcoin logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'laws/',
          activeBasePath: 'laws',
          label: 'Laws',
          position: 'left',
        },
        {
          href: 'https://wallet.neatcoin.org',
          label: 'Wallet',
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
              label: 'Mimblewimble',
              to: 'docs/mimblewimble',
            },
            {
              label: 'Nomo',
              to: 'docs/nomo',
            },
            {
              label: 'Outmove',
              to: 'docs/outmove',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/neatcoin',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/neatcoin/',
            },
            {
              label: 'Keybase',
              href: 'https://keybase.io/team/neatcoin',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/BVUETyTn3D',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/neatcoin/neatcoin',
            },
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#neatcoin:matrix.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Neatcoin contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/neatcoin/neatcoin.org/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./docs/sidebars.js'),
        editUrl:
          'https://github.com/neatcoin/neatcoin.org/edit/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'laws',
        path: 'laws',
        routeBasePath: 'laws',
        sidebarPath: require.resolve('./laws/sidebars.js'),
        editUrl:
          'https://github.com/neatcoin/neatcoin.org/edit/master/',
      },
    ]
  ],
};
