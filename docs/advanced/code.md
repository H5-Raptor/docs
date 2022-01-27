# 自定义代码
![edit-code](/docs/image/code.png)

Raptor 支持页面自定义代码以满足特殊场景下的需要，它足够简洁，仅扩展了几个常见风格的 API，它又足够强大，打通了与组件的通信渠道。

## getComponentById
Raptor 对 document 对象扩展了 getComponentById 属性，这是一个函数，参数是页面组件的 hashId，返回该组件的事件包装对象。
该对象具备以下属性：
1. `on`：用于消息监听。
2. `once`：用于消息监听，仅一次。
3. `off`：用于移除监听。
4. `target`：指向组件实例。

#### 示例 1
页面有一个`头图组件`和一个`openUrl 插件`（对外提供了`openUrl`方法），需求是**点击`头图组件`时调用`openUrl 插件`打开新页面**，
但由于设计`头图组件`功能时并没考虑被点击的时候主动`emit`，以致无法借助通信配置实现该需求。

借助自定义代码，我们可以监听`头图组件`的 DOM 原生点击事件，在回调中通过扩展 API 调用`openUrl 插件`的`openUrl`方法。

```js
// x98 是头图组件在页面的 hashId
document.getElementById('x98').addEventListener('click', function (){
  // y87 是 openUrl 插件在页面的 hashId
  document.getComponentById('y87').target.openUrl('https://www.baidu.com');
});
```

#### 示例 2
一个用于微博的页面，`按钮组件`被点击时需要判断是否在微博端内，在则调用`抽奖插件`抽奖，否则调用`弹窗组件`提示"请在微博打开"。
抽奖失败和成功都需要弹窗提示。

各组件介绍如下：
1. `按钮组件`被点击时有调用`emit('click')`。
2. `抽奖插件`提供了`goDraw`抽奖方法，抽奖成功时调用`emit('success')`，失败时调用`emit('fail')`。
3. `弹窗组件`提供了`setVisible`切换显示方法。

```js
// 监听按钮组件的点击事件（h56 是按钮组件在页面的 hashId）
document.getComponentById('h56').on('click', function() {
  if (navigator.userAgent.includes('weibo')) {
    // 微博端内发起抽奖（p78 是抽奖插件在页面的 hashId）
    document.getComponentById('p78').target.goDraw('kdj4-kdju-3s4q');
  } else {
    // 非端内弹窗提示（p78 是弹窗组件在页面的 hashId）
    document.getComponentById('p78').target.setVisible(true);
  }
});

document.getComponentById('p78').on('success', function() {
  // 端内弹窗提示中奖（x90 是弹窗组件在页面的 hashId，一个组件可以在页面复用多次，hashId 不同）
  document.getComponentById('x90').target.setVisible(true);
});
document.getComponentById('p78').on('fail', function() {
  // 端内弹窗提示未中奖（w34 是弹窗组件在页面的 hashId，一个组件可以在页面复用多次，hashId 不同）
  document.getComponentById('w34').target.setVisible(true);
});
```

#### 示例 3
页面内已配置点击`按钮组件`调用`openUrl 插件`打开指定页面，现需要增加点击`头图组件`时触发同样的逻辑，
但由于设计`头图组件`功能时并没考虑被点击的时候主动`emit`，以致无法借助通信配置实现该需求。

我们可以像示例 1 一样处理，但由于`按钮组件`已经配置好了跳转的页面数据，自定义代码当中没必要再次出现该配置。

<img src="/docs/image/openurl-event.png" width="500px" />

直接在自定义代码中触发按钮组件的 emit('click')即可。
```js
// x98 是头图组件在页面的 hashId
document.getElementById('x98').addEventListener('click', function (){
  // document.getComponentById('y87').target.openUrl('http://www.h5raptor.com');
  // 直接触发按钮组件的 emit('click')即可。（i74 是按钮组件在页面的 hashId）
  document.getComponentById('i74').emit('click');
});
```

#### 组件 readme
自定义代码可能需要查看组件的说明文档，有 2 种方式查看组件 readme

1. 组件列表文档按钮。
2. 编辑页组件列表悬浮遮罩的`眼睛`图标

![show-readme](/docs/image/show-readme.png)

::: tip
组件的 hashId 将渲染给组件最外层 DOM 标签上的 id 属性，由于组件可能在页面内被多次使用，开发切记最好不要在组件内给标签使用 id。
:::
