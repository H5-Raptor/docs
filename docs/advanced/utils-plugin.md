# utils 与 plugin
在前面的章节中提到`按钮组件`的点击触发调用`openUrl 插件`的`openUrl`方法打开页面，
为什么不在`按钮组件`中引入业务`utils`公共方法库中的`openUrl`方法而要单独提炼出插件？

这是因为如果`按钮组件`中引入了`openUrl`方法，则约束了组件的按钮点击功能只能是打开页面，而如果按钮点击时仅对外`emit`一个消息，
至于最终触发了什么逻辑，完全由用户配置，那么按钮点击的功能将是千变万化的。

我们可以把`插件`看作是**动态的、可插拔的 utils**

如果只是纯粹的一个逻辑计算，依旧以 utils 编写，如果是影响了业务逻辑，改变用户体验等动作，建议以插件身份沉淀。
比如：
```js
// 一个存粹的计算，用插件沉淀，比如表单提交后，点击后，没有任何意义
```
```js
// 一个打开窗口，以插件沉淀，它改变了用户体验
```