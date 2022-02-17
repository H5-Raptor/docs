# 进阶操作

## 组件嵌套
容器组件可以嵌套其他组件，其中动态列表插槽位的组件可以在组件编辑面板中调整插槽位个数，我们以`tab`页签组件为例。
<video width="740px" controls="controls" src="https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/website/video/slot.mp4" />

## 组件通信
组件在适当的时机可以`emit`消息，用户可配置收到该消息时去执行其他组件的内部方法。
<video width="740px" controls="controls" src="https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/website/video/event.mp4" />

## 复合组件
`复合组件`并不需要开发，本质上还是一个页面，只是粒度比较小。一个`轮播布局`组件加多个`头图`组件组合的单元可存档为`复合组件`，
以便其他页面需要用到`轮播图`时可以复用，减轻同类场景重复配置的负担。

<video width="740px" controls="controls" src="https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/website/video/fuhe.mp4" />

::: tip
`复合组件`、`H5 模板`、`H5 页面`三者本质上是一样的
:::

## 自定义代码


