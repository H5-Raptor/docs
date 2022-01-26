# 自定义代码
![edit-code](/docs/image/code.png)

Raptor 支持页面自定义代码以满足特殊场景下的需要，它足够简介，扩展了几个常见风格的 API，它足够强大，打通了与组件的通信渠道。

## getComponentById
Raptor 对 document 对象扩展了 getComponentById 属性，这是一个函数，参数是页面组件的 hashId，返回该组件的事件包装对象。
该对象具备以下属性：
1. `on`：用于消息监听。
2. `once`：用于消息监听，仅一次。
3. `off`：用于移除监听。
4. `target`：指向组件实例。

假如，页面有一个`头图组件`和一个`openUrl`插件（对外提供了`openUrl`方法），由于某些原因，头图组件被点击的时候没有主动`emit`，
导致无法通过配置达到点击`头图组件`时触发`openUrl 插件`执行`openUrl`方法。

借助自定义代码，我们可以监听`头图组件`的 DOM 原生点击事件，在回调中通过 Raptor 扩展 API 找到`openUrl`插件，
然后调用其`openUrl`方法。

```js
// x98 是头图组件在页面的 hashId
document.getElementById('x98').addEventListener('click', function (){
  // y87 是 openUrl 插件在页面的 hashId
  document.getComponentById('y87').target.openUrl('https://www.baidu.com');
});
```
