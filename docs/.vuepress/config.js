/**
 * User: raojianbing
 * Date: 2021/3/27 9:27 下午
 */

const path = require('path');

module.exports = {
  title: "H5-Raptor",
  description: "H5 页面组件化搭建中台",
  dest: path.join(process.cwd(), 'dist'),
  serviceWorker: true,
  displayAllHeaders: true,
  base: "/docs/",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    linkify: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
  themeConfig: {
    nav: [
      { text: "使用指南", link: "/guide/" },
      { text: "H5-Raptor", link: 'http://www.h5raptor.com' },
      {
        text: 'GitHub',
        link: 'https://github.com/h5-raptor/docs'
      }
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    logo: '/logo.png',
    sidebar: [
      {
        title: "使用指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/guide/",
          "/guide/glossary",
          "/guide/preparation",
          "/guide/quick-start",
          "/guide/group-manage",
          "/guide/component-manage",
          "/guide/other-usage",
        ]
      },
      {
        title: "开发指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/dev/",
          "/dev/component",
          "/dev/JSON-Schema",
          "/dev/layout-component",
          "/dev/communication",
          "/dev/i18n",
          "/dev/theme-color",
          "/dev/publish",
          "/dev/plugin",
        ]
      },
      {
        title: "命令式开发环境", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/dev/command",
        ]
      },
      {
        title: "设计指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/design/",
          "/design/px",
          "/design/theme-color",
        ]
      },
      {
        title: "深入理解", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/proficient/component-base",
          "/proficient/framework",
        ]
      },
      {
        title: "高阶指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/advanced/",
        ]
      },
      {
        title: "常见问题", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          "/question/",
          "/question/build",
        ]
      },
    ]
  }
}
