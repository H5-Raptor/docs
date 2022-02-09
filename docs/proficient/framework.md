# 多框架支持
`多框架支持`的能力来源于多个方面的技术方案及架构设计共同作用所产生的。

## 编辑页通信
数据的中立，只含描述

## 预览模块拆分

## 组件嵌套

## 组件通信


在编辑页，不管是组件列表区域的加入组件操作，还是组件属性编辑面板，亦或是父子关系操作。
任何区域的操作带来数据的变动，都将通过集中的postMessage通道传递给所属组的预览页（iframe内嵌）。

预览页将动态加载组件的UMD包及其所有依赖（以及依赖的依赖），基于requirejs。
再根据框架的渲染API、结合父子关系、通信关系等渲染页面。

## 预览核心
和框架无关的是，预览页有很多相同的处理逻辑，比如加载组件UMD包。
raptor拆分了`预览核心`，不同框架的预览通过`预览核心`提供的机制，从而使得编写更加简单。

正是因为有了预览核心和预览页的分离，使得Vue2、Vue3、React的预览支持，都分别用了不到`200`行代码。

::: tip
raptor定位可开源、可独立部署的组件中台。部署后，集团内诸多业务组可共建、完善平台内的组件。
:::