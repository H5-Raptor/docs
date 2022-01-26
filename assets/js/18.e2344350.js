(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{636:function(t,n,s){"use strict";s.r(n);var a=s(83),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义代码"}},[t._v("#")]),t._v(" 自定义代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"/docs/image/code.png",alt:"edit-code"}})]),t._v(" "),s("p",[t._v("Raptor 支持页面自定义代码以满足特殊场景下的需要，它足够简介，扩展了几个常见风格的 API，它足够强大，打通了与组件的通信渠道。")]),t._v(" "),s("h2",{attrs:{id:"getcomponentbyid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentbyid"}},[t._v("#")]),t._v(" getComponentById")]),t._v(" "),s("p",[t._v("Raptor 对 document 对象扩展了 getComponentById 属性，这是一个函数，参数是页面组件的 hashId，返回该组件的事件包装对象。\n该对象具备以下属性：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("on")]),t._v("：用于消息监听。")]),t._v(" "),s("li",[s("code",[t._v("once")]),t._v("：用于消息监听，仅一次。")]),t._v(" "),s("li",[s("code",[t._v("off")]),t._v("：用于移除监听。")]),t._v(" "),s("li",[s("code",[t._v("target")]),t._v("：指向组件实例。")])]),t._v(" "),s("p",[t._v("假如，页面有一个"),s("code",[t._v("头图组件")]),t._v("和一个"),s("code",[t._v("openUrl")]),t._v("插件（对外提供了"),s("code",[t._v("openUrl")]),t._v("方法），由于某些原因，头图组件被点击的时候没有主动"),s("code",[t._v("emit")]),t._v("，\n导致无法通过配置达到点击"),s("code",[t._v("头图组件")]),t._v("时触发"),s("code",[t._v("openUrl 插件")]),t._v("执行"),s("code",[t._v("openUrl")]),t._v("方法。")]),t._v(" "),s("p",[t._v("借助自定义代码，我们可以监听"),s("code",[t._v("头图组件")]),t._v("的 DOM 原生点击事件，在回调中通过 Raptor 扩展 API 找到"),s("code",[t._v("openUrl")]),t._v("插件，\n然后调用其"),s("code",[t._v("openUrl")]),t._v("方法。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x98 是头图组件在页面的 hashId")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x98'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y87 是 openUrl 插件在页面的 hashId")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComponentById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y87'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);