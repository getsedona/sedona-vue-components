const path = require("path");

module.exports = {
  defaultExample: false,
  pagePerSection: true,
  title: "Sedona Vue Components",
  usageMode: "expand",
  require: [path.join(__dirname, "src/assets/less/index.less"), path.join(__dirname, "router-mock.js")],
  styles: {
    Logo: {
      logo: {
        color: "#fff",
        fontSize: 24
      }
    }
  },
  template: {
    head: {
      links: [
        {
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
          rel: "stylesheet"
        }
      ]
    }
  },
  serverPort: 3000,
  editorConfig: {
    theme: "xq-light"
  },
  theme: {
    fontFamily: {
      monospace: ["Menlo", "Consolas", '"Liberation Mono"', "monospace"]
    },
    color: {
      link: "#fff",
      sidebarBackground: "#009688"
    },
    sidebarWidth: 250,
    maxWidth: "none"
  },
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md"
    },
    {
      name: "Layout",
      description: "Layout description",
      content: "docs/layout.md",
      components: ["src/components/Page/Page.ts"],
      sectionDepth: 1,
      sections: [
        {
          name: "Grid",
          content: "docs/grid.md"
        }
      ]
    },
    {
      name: "UI Components",
      content: "docs/ui.md",
      components: ["./src/components/**/[A-Z]*.vue", "./src/components/**/[A-Z]*.js"],
      sectionDepth: 1,
      ignore: "src/components/Page/Page.ts"
    }
  ]
};
