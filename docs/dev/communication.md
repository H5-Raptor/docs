# 组件通信
![组件通信](/raptor-docs/image/communication.jpg =1000x350)

# 组件通信-主动-发射
一个巴掌拍不响，组件的通信有主动发起方就有被动执行(接收)方。

在组件内部某些交互监听、数据监听、业务逻辑的特殊时刻等，通过emit(`${emitName}`, ${data})
完成发射。由于不同框架内置的能力不同，下面以Vue和React阐述。

## Vue3 emit
emit是Vue自支持的能力，但Vue3和Vue2略有不同。
我们以tab分栏组件部分代码为例，点击tab时对外emit通知。
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

## Vue2 emit
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
## React emit
由于React没有emit系统，但React极其灵活，我们约定一个名为`emit`的props，组件都会收到这个参数。
```jsx
function App(props, ref) {
  const {
    children = {},
    emit
  } = props;
  const [activeIndex, setActiveIndex] = useState(0)
  const childrenName = ['one', 'two', 'three', 'four', 'five']

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

::: warning 提示
这里的tab组件设计成既可发射emit通信，又可接收通信做action。
:::

## 组件通信-被动-动作
组件通信的action方，需要提供相关方法对外供调用。

## Vue action
参考Vue3/Vue2 emit示例代码。

## React action
由于React有function（无状态）和class组件之分，由于无状态组件没有实例，
想让外界调用到组件的方法，需要使用HOOK中的useImperativeHandle，

可查阅 [call-child-method-from-parent](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)

写法参考React emit中的代码示例。

::: warning 提示
作为业务组内第一个了解本中台的你，强烈建议将使用文档完整过目一遍。
:::
