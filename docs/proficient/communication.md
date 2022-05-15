# 组件/插件间通信
组件不是孤岛，不同功能的组件、插件可以在其关键时机对外发布消息，运营者可配置该消息触发其他组件的某些行为。

## 发布-订阅
考虑到多框架技术栈的组件以及纯 JS 脚本的插件之间通信，很容易想到`发布-订阅`。

```js
// A 抽奖组件，对外提供抽奖 API
function draw() {
  console.log('3，抽奖>>>>');
};
events.on('draw', function(){
  console.log('2，收到消息，准备抽奖>>>>');
  draw();
});
```
其他组件触发调用抽奖方法只需通过发布抽奖消息。
```js
// B 按钮组件，发布 draw 消息
function onClick() {
  console.log('1，发布抽奖消息>>>>');
  events.emit('draw');
};
```

纯粹的`发布-订阅`后果是：**凡是有通信往来的组件集体耦合**。试想，如果`B 按钮组件`想触发`分享组件`分享，是不是`分享组件`继续
订阅`draw`消息？而如果`留资表单组件`提交完也想触发分享，是不是也得发布`draw`消息？这太扯了！

注意，组件化场景的通信特色也即基本要求是：需要让可视化配置的数据介入进来。

## Raptor 通信实现
下图展示了`组件 A`和`组件 B`的通信过程

![通信](/docs/image/event.png)

event 中心接收组件的通信配置，为此包装 emit 方法传入组件，该过程中组件以自订阅、自发布方式，订阅的 handle 方法中借助 ref 组件
集合中心，找到通信的【被调方】。

之所以用自订阅、自发布方式，目的是打通与自定义代码的连接。

#### 通信代码示例
以 React 按钮组件为例，组件点击时 emit 消息，也对外提供设置按钮文案的方案。

需要注意的是，通信的主调方只需要 `emit`，被调方只需保证方法能被外界访问到，React 函数组件需要使用 `useImperativeHandle`。
```jsx
// 截取部分代码
function App(props) {
  const {
    emit
  } = props;
  useImperativeHandle(ref, () => ({
    setButtonText
  }));

  const clickHandle = () => {
    if (disabled) return;
    emit('click');
  }

  return (
    <div className="single-button" style={style}>
      <a
        className="primary-button"
        disabled={disabled}
        onClick={clickHandle}
        style={getStyle()}
      >
        {text || raptorLang.buttonText}
      </a>
    </div>
  )
}
```

#### 缺点分析
Raptor 组件通信方案于组件开发来说，主调方 `emit`，被调方只需保证其方法能被外界调用，看似被调方简单，实际上方案耦合了框架的 ref 机制，
且对于开发来讲，该通信方案不易理解。

## 更好的设计
删掉和框架耦合的 ref API，通信的被调方改为使用订阅风格 `on(key, fn)` (背后要合成 key)，主调方背后的 handle 方法查本次 emit(key) 的通信配置，找到被调方组件 id，
继续 emit(合成key)。

![通信](/docs/image/event2.png)

相比于 Raptor 现在的实现，本通信方案更加简单、美观、易理解。
