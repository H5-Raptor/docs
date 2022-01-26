# 组件通信
![组件通信](/docs/image/communication.jpg =1000x350)

组件化搭建页面时，页面并不简单的像乐高积木一样堆叠，各组件之间还有跨越空间上的消息往来，这个过程称之为组件通信。
比如点击按钮组件时，触发表单组件提交，表单提交成功后，触发抽奖券发放。

## 主调方与被调方
主动发起通信的一方称之为`主调方`，其通信对象称之为`被调方`。
`主调方`组件在其关键时机通过调用`emit`发起，下面以 Tabs 组件为例。

#### Vue3
```js
export default {
  name: 'simple-tab',
  emits: ['clickTab'],
  setup(props, {emit}) {
    const activeIndex = ref(0);

    const setActive = (index) => {
      activeIndex.value = +index || 0;
    }
    const clickTab = (index) => {
      emit('clickTab', {index})
      setActive(index)
    }

    return {
      activeIndex,
      setActive,
      clickTab,
    }
  },
};
```

#### Vue2
```js
export default {
  name: 'vue2-simple-tab',
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    handleBtnClick(index) {
      this.$emit('clickTab');
      this.setActive(index);
    },
    setActive(index) {
      this.activeIndex = index || 0;
    }
  }
};
```
#### React
React 没有 emit 系统，Raptor 会为组件传递名为`emit`的 props。

```jsx
function App(props, ref) {
  const {
    children = {},
    emit
  } = props;
  const [activeIndex, setActiveIndex] = useState(0)

  const clickTab = (index) => {
    emit('clickTab', {index})
    setActiveIndex(index);
  }
  useImperativeHandle(ref, () => ({
    setActive(index) {
      setActiveIndex(index);
    }
  }));

  return (
    <div className="tab-container">
      { /* 略 */ }
    </div>
  )
}

export default App
```

::: tip
以上 Tabs 组件既可作为主调方（内部有调用 emit）又能做被调方（对外提供了组件内部方法）。
:::

## 通信声明
组件调用 emit 以及对外提供方法供调用，表明组件具备通信的能力，同时，组件还需要为可视化搭建页面提供通信声明，
声明的目的是提供可视化交互配置，以便用户能够配置组件的通信数据。

```json
{
  "title": "Tabs 组件编辑",
  "type": "object",
  "required": [],
  "properties": {},
  "events": {
    "emit": {
      "clickTab": {
        "title": "点击tab标签"
      }
    },
    "action": {
      "setActive": {
        "title": "切换显示tab标签"
      }
    }
  }
}
```

## React 说明
由于 React 有 Function（无状态）和 Class 组件之分，由于无状态组件没有实例，
想让外界调用到组件的方法，需要使用 Hooks 中的 useImperativeHandle，

可查阅 [call-child-method-from-parent](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)
