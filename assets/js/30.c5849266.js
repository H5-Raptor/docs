(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{648:function(t,a,s){"use strict";s.r(a);var v=s(83),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("Raptor 并不约束组件开发环境，业务组可以充分定制，组件和平台的关联始于"),s("code",[t._v("组件发布")]),t._v("：把组件编译后的 UMD 和 ESM 文件提交（发布）到中台。")]),t._v(" "),s("p",[t._v("业务完全自定义组件开发环境可以分两步。")]),t._v(" "),s("ol",[s("li",[t._v("先实现组件本地 dev 以验证组件自身逻辑完整性。")]),t._v(" "),s("li",[t._v("再实现组件编辑面板展开及实时编辑，完全模拟中台编辑时交互体验。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("自定义组件开发环境以第一步为目标即可，\n后续可能推出本地开发脚手架用来衔接业务自定义开发环境和 Raptor 可视化编辑时以保证组件本地开发体验。")])]),t._v(" "),s("h2",{attrs:{id:"组件发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件发布"}},[t._v("#")]),t._v(" 组件发布")]),t._v(" "),s("p",[t._v("通过 Web 表单形式发布组件比较麻烦，更加推荐业务侧使用 Open API 方式发布，封装命令式发布组件的方式。\n而通过该形式发布组件，需要在请求头中增加"),s("code",[t._v("token")]),t._v("以便通过鉴权，个人"),s("code",[t._v("token")]),t._v("获取方式已在上文提及。")]),t._v(" "),s("h2",{attrs:{id:"组件编译要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件编译要求"}},[t._v("#")]),t._v(" 组件编译要求")]),t._v(" "),s("p",[t._v("业务侧编译组件时需要注意以下要求：")]),t._v(" "),s("ol",[s("li",[t._v("提供 umd、esm 编译文件。因为预览页是 AMD 环境，需要 UMD 包来渲染。")]),t._v(" "),s("li",[t._v("组件 npm 依赖不打包。组件依赖需要在业务组 AMD 环境配置依赖 path，在页面发布时组件依赖会被打包进应用。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("组件不打包其依赖，参考 webpack 或 rollup 的 external 配置。")])]),t._v(" "),s("h2",{attrs:{id:"业务组-amd-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务组-amd-配置"}},[t._v("#")]),t._v(" 业务组 AMD 配置")]),t._v(" "),s("p",[t._v("由于组件不打包其依赖，那么 AMD 的预览环境需要做依赖包配置，使用方式可查阅 requirejs。")])])}),[],!1,null,null,null);a.default=_.exports}}]);