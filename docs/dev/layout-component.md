# 布局组件
布局组件也叫容器组件，但布局二字会更加直观的凸显设计布局组件的目的。

`组件嵌套`与`组件通信`是组件高复用的前提条件，`组件嵌套`功能避免了设计重型`业务组件`，极大的减少`大粒度组件`存在。

## 编写布局组件
有人说，你想成为什么样的人不在于别人评价，而在于自我定位。

同样适用于布局组件，拿Vue来说，你把组件当做布局组件，在组件中直接使用slot（Vue中用来接收子组件的插槽），你开发的就是布局组件。

### tab分栏组件Vue版
以下是一个最多支持4栏的tab分栏组件，拥有4个插槽位。插槽必须命名，为了统一，哪怕只有一个插槽也必须命名插槽位。
```Vue
<template>
  <div class="tab-container">
    <ul class="tab-list"
        :style="getTabGroupStyle()">
      <li
          class="tab-item"
          v-for="(item, index) in tabNum"
          :key="index"
          :style="getTabStyle(index)"
          @click="clickTab(index)">{{ raptorLang.tabTxt[index] }}</li>
    </ul>

    <div
        class="tab-content"
        v-show="activeIndex === 0">
      <slot name="0"></slot>
    </div>
    <div
        class="tab-content"
        v-show="activeIndex === 1">
      <slot name="1"></slot>
    </div>
    <div
        class="tab-content"
        v-show="activeIndex === 2">
      <slot name="2"></slot>
    </div>
    <div
        class="tab-content"
        v-show="activeIndex === 3">
      <slot name="3"></slot>
    </div>
  </div>
</template>
```

### tab分栏组件React版
React通过props.children接收子组件，同样必须命名`插槽位`。children是一个key=>children子组件列表的集合。
```jsx
function App(props) {
  const {
    children = {},
  } = props;
  const [activeIndex, setActiveIndex] = useState(0)
  const childrenName = ['one', 'two', 'three', 'four', 'five']

  return (
    <div className="tab-container">
      <ul className="tab-list"
        style={getTabGroupStyle()}>
        {
          (new Array(tabNum)).fill(0).map((item, index) => {
            return (
              <li
                className="tab-item"
                key={index}
                style={getTabStyle(index)}
                onClick={e => clickTab(index)}>
                  {raptorLang.tabTxt[index] }
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
## 申明布局组件
组件在注册时，slot字段用来申明、标记布局组件，值是逗号拼接的插槽位名字。如`one,two,three`

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