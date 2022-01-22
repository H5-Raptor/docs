# 布局组件
布局组件也叫容器组件，主要用于组件嵌套场所，`组件嵌套`与`组件通信`是组件高复用的前提条件，
`组件嵌套`功能避免了设计`重型业务组件`，极大的减少`大粒度组件`存在。

::: tip
`布局组件`另一个价值体现在`布局`能力上，实现 PC 端页面的组件化搭建。
:::

## 编写布局组件
以`Tabs 组件`为例，设计一个可调整 Tab 数量且最多支持 4 栏的 Tabs 组件，其拥有 4 个插槽位。JSON Schema ↓
```json
{
  "title": "组件编辑",
  "type": "object",
  "required": [],
  "properties": {
    "tabNum": {
      "title": "tab 个数",
      "type": "integer",
      "minimum": 2,
      "maximum": 4,
      "default": 3
    }
  }
}
```

### Tabs 组件 Vue 版
插槽必须命名，哪怕只有一个，这里只展示部分源码 ↓
```Vue
<template>
  <div class="tab-container">
    <ul class="tab-list">
      <li
          class="tab-item"
          v-for="(item, index) in tabNum"
          :key="index"
          @click="clickTab(index)"
      >
        {{ index }}
      </li>
    </ul>
    <div class="tab-content" v-show="activeIndex === 0">
      <slot name="one"></slot>
    </div>
    <div class="tab-content" v-show="activeIndex === 1">
      <slot name="two"></slot>
    </div>
    <div class="tab-content" v-show="activeIndex === 2">
      <slot name="three"></slot>
    </div>
    <div class="tab-content" v-show="activeIndex === 3">
      <slot name="four"></slot>
    </div>
  </div>
</template>
```

### Tabs 组件 React 版
React 没有 slot 概念，设计为通过 props.children 接收子组件，children 是一个 key => children 子组件列表的集合。
```jsx
function App(props) {
  const {
    children = {},
    tabNum,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0)
  const childrenName = ['one', 'two', 'three', 'four']

  return (
    <div className="tab-container">
      <ul className="tab-list">
        {
          (new Array(tabNum)).fill(0).map((item, index) => {
            return (
              <li
                className="tab-item"
                key={index}
                onClick={e => clickTab(index)}>
                  {index}
              </li>
            )
          })
        }
      </ul>
      <div className="tab-content">
        {
          children && children[childrenName[activeIndex]]
        }
      </div>
    </div>
  )
}
```
## 布局组件 JSON-Schema
布局组件为何能接受到子组件，子组件又是怎样被编辑进去？

在发布组件时，`slot`字段用来申明布局组件的`插槽`位信息，值是以逗号拼接的插槽位名字，如`one,two,three`或者`...`
![slot字段](/docs/image/slot.png)

当编辑组件时，结构操作区会自动展开其插槽位，为`添加子组件`提供了交互解决方案。
![slot tres结构](/docs/image/slot-tree.png)

## 布局组件的妙用
1. 弹窗布局组件
> 需要弹窗的携带内容的组件，并不需要编写弹窗相关逻辑、样式。实现一个弹窗布局组件，将内容组件塞入充当子组件即可。
>结合组件通信，大大提升组件复用度。
2. tab分栏布局组件
3. PC端H5布局组件
> 比如开发页面级布局组件，分头、侧边、内容、底部等插槽区，甚至可再塞入区域布局组件，然后再往更细的区域填充普通内容组件。即完成PC端H5的配置。

## 动态列表容器位
不是所有的布局组件，其容器位都是固定不变的，比如轮播布局组件。

我们不必要开发轮播图组件，而是通过轮播布局组件+头图组件，即可完成轮播图效果，且轮播布局组件可视需求加入其它组件填充，充分利用轮播交互效果。

轮播布局组件，其容器位/插槽位是不确定的，直到被使用在H5中才能确定且还可能随时修改数量。

### 组件注册
动态列表容器位的组件，其slots的值应为 `...` ，当添加该类组件到H5中，其编辑面板中，`组件配置`->`通用配置` 内可编辑容器位数量。
其他操作同布局组件。

### 组件开发
静态容器位，组件通过明确的名称接收传递而来的子组件。

动态列表容器位，组件接收到的是一个数组，每项都是插入该容器位的子组件列表。

同样，以上例 tab 布局组件为例，改slot为component动态渲染子组件，children是一个子组件列表。
```html
<component v-if="children && children.length" :is="children[activeIndex]" />
```

::: warning 提示
布局组件提升了组件复用度，同时延伸到PC端H5配置。<br/>
布局组件的容器位个数不一定固定，比如轮播布局组件、滑屏H5组件。
:::
