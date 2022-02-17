(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{654:function(t,s,a){"use strict";a.r(s);var r=a(83),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"业务接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务接入"}},[t._v("#")]),t._v(" 业务接入")]),t._v(" "),a("p",[t._v("如果业务是初次接入，需要建立并配置业务组，之后才可以建立 H5。如果已经接入，则绕过该步骤。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/image/liu-cheng.png",alt:"使用流程"}})]),t._v(" "),a("h2",{attrs:{id:"业务组管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务组管理"}},[t._v("#")]),t._v(" 业务组管理")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("小组管理")]),t._v("页面点击【新建组】，填写表单后提交，系统会创建新的小组并设置创建者为组长权限，\n需要继续完善以下配置才可体验到完整的页面搭建流程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/image/new-group.png",alt:"新建组"}})]),t._v(" "),a("h3",{attrs:{id:"组基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组基本信息"}},[t._v("#")]),t._v(" 组基本信息")]),t._v(" "),a("p",[t._v("由开发者配置，其中")]),t._v(" "),a("ol",[a("li",[t._v("AMD 配置：用于预览页，组件的第三方依赖 path 配置。")]),t._v(" "),a("li",[t._v("文件上传接口：本组下所有文件类的上传都将转发到该接口，授权串用于业务侧接口鉴权。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/image/group-base.png",alt:"组基本信息"}})]),t._v(" "),a("h3",{attrs:{id:"组成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组成员"}},[t._v("#")]),t._v(" 组成员")]),t._v(" "),a("p",[t._v("用户第一次登录时，系统会为之新增账号，组长权限用户可以拉其他用户进组。\n"),a("img",{attrs:{src:"/docs/image/new-member.png",alt:"新增组员"}})]),t._v(" "),a("h3",{attrs:{id:"组件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件类型"}},[t._v("#")]),t._v(" 组件类型")]),t._v(" "),a("p",[t._v("组件发布到组件市场时是无类型的，业务组可以管理自己的组件类型，注册组件时将组件挂载到某个类型下。\n"),a("img",{attrs:{src:"/docs/image/new-type.png",alt:"新建组件类型"}})]),t._v(" "),a("h3",{attrs:{id:"主题色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题色"}},[t._v("#")]),t._v(" 主题色")]),t._v(" "),a("p",[t._v("主题色一般由设计师管理或给出色值，了解更多请看设计指南。\n"),a("img",{attrs:{src:"/docs/image/new-theme.png",alt:"新建主题色"}})]),t._v(" "),a("h3",{attrs:{id:"编译模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译模板"}},[t._v("#")]),t._v(" 编译模板")]),t._v(" "),a("p",[t._v("由开发者提供，了解更多请看高阶指南。\n"),a("img",{attrs:{src:"/docs/image/new-template.png",alt:"新建编译模板"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当前官网不提供新建业务组操作，主要因为编译模板有较大"),a("code",[t._v("发挥空间")]),t._v("，恶意用户可能会尝试各种攻击方式。害人之心不可有，防人之心不可无。")])]),t._v(" "),a("p",[t._v("开发者发布组件到中台组件市场，可注册组件指定版本到业务组中。")]),t._v(" "),a("p",[t._v("产品、运营等用户新建H5，挑选需要的组件、插件并编辑其相关属性，配置组件间通信数据和父子关系。")]),t._v(" "),a("p",[t._v("用户的使用流程如下：")]),t._v(" "),a("h2",{attrs:{id:"组件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件管理"}},[t._v("#")]),t._v(" 组件管理")]),t._v(" "),a("p",[t._v("Raptor 特性之一就是"),a("code",[t._v("以组件为基础单位按版本迭代管理")]),t._v("，组件的每一个版本都是独立的个体。\n为业务组注册组件是一个长期过程，任何组件版本更新并验证无误后，都需要再次注册该版本。")]),t._v(" "),a("h3",{attrs:{id:"发布组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布组件"}},[t._v("#")]),t._v(" 发布组件")]),t._v(" "),a("p",[t._v("发布或更新组件有 2 种渠道。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("表单提交。\n"),a("img",{attrs:{src:"/docs/image/new-component.png",alt:"新建编译模板"}})])]),t._v(" "),a("li",[a("p",[t._v("Open Api 提交。接口地址"),a("code",[t._v("http://www.h5raptor.com/api/components")]),t._v("，"),a("code",[t._v("post")]),t._v("请求，header 头带上"),a("code",[t._v("token")]),t._v("，"),a("code",[t._v("body")]),t._v("结构如下：")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"componentName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"slots"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"readme"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"esmUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cssUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"langJson"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cover"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("登录后在个人头像的二级菜单点击可获取 token。\n"),a("img",{attrs:{src:"/docs/image/token.png",alt:"token"}})]),t._v(" "),a("h3",{attrs:{id:"注册组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册组件"}},[t._v("#")]),t._v(" 注册组件")]),t._v(" "),a("p",[t._v("组件发布在组件市场，只有将组件注册到业务组下，才能在该组编辑 H5 时挑选该组件（该版本）。\n"),a("img",{attrs:{src:"/docs/image/register.png",alt:"组件注册"}})]),t._v(" "),a("p",[t._v("完成以上操作，便可以体验完整的搭建 H5 流程。")])])}),[],!1,null,null,null);s.default=n.exports}}]);