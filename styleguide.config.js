const path = require('path')
const package = require('./package.json')

module.exports = {
  defaultExample: false,
  pagePerSection: true,
  title: 'Sedona Vue Components',
  version: `v${package.version}`,
  usageMode: 'expand',
  require: [
    path.join(__dirname, 'src/assets/less/index.less'),
    path.join(__dirname, 'router-mock.js'),
  ],
  styles: {
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 24,
      },
    },
  },
  template: {
    head: {
      links: [
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
          rel: 'stylesheet',
        },
      ],
    },
  },
  serverPort: 3000,
  theme: {
    fontFamily: {
      monospace: ['Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
    },
    color: {
      link: '#fff',
      sidebarBackground: '#009688',
    },
    sidebarWidth: 250,
    maxWidth: '1000px',
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Layout',
      description: 'Layout description',
      content: 'docs/layout.md',
      components: ['./src/components/Page/Page.js', './src/components/Scene/Scene.js'],
      sectionDepth: 1,
      sections: [
        {
          name: 'Grid',
          description: 'Grid layout component ',
          components: ['./src/components/Grid/Grid.js', './src/components/Grid/GridItem.js'],
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: ['./src/components/**/[A-Z]*.vue', './src/components/**/[A-Z]*.js'],
      sectionDepth: 1,
      ignore: [
        './src/components/Page/Page.js',
        './src/components/Grid/Grid.js',
        './src/components/Grid/GridItem.js',
        './src/components/Scene/Scene.js',
      ],
    },
  ],
}
