/**
 * User: raojianbing
 * Date: 2021/3/27 9:27 下午
 */

const path = require('path');

module.exports = {
  title: "H5-Raptor",
  description: "组件化、可视化H5搭建平台",
  dest: path.join(process.cwd(), 'raptor-docs'),
  serviceWorker: true,
  displayAllHeaders: true,
  base: "/raptor-docs/",
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
      { text: "JSON Scheme可视化配置", link: "https://form.lljj.me/v3/#/demo?type=Simple&ui=VueAntForm" },
      { text: "可视化操作平台", link: "" } // 内部链接 以docs为根目录
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    logo: '/logo.png',
    sidebar: [
      {
        title: "使用指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          {
            title: "平台介绍", // 必要的
            path: "/guide/", // 可选的, 应该是一个绝对路径
          },
          {
            title: "基础使用", // 必要的
            path: "/guide/basic-usage", // 可选的, 应该是一个绝对路径
          }
        ]
      },
      {
        title: "开发指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          {
            title: "介绍", // 必要的
            path: "/dev/", // 可选的, 应该是一个绝对路径
          }
        ]
      }
    ]
  }
}
