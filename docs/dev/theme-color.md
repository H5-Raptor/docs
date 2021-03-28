# 主题色
实现主题色的本意是可快速得到一套贴合本H5需求的色系，或者我们叫皮肤。

但却不需要每个组件去开放编辑一大堆属性编辑，带来组件开发者麻烦，编辑者麻烦。

## 主题色结构
一套主题色是一批key=>value的集合，每一个key，从视觉的角度来看，有其专门的用处。
比如keyA，用于页面背景色，keyB用于主按钮背景色，keyF用于一级标题色...

```json5
{
    "a1": [
        "#52C1FF"
    ],
    "a2": [
        "#F6F9FC"
    ],
    "a3": [
        "#D0E3FF"
    ],
    "a4": [
        "#2D80FF"
    ],
    "a5": [
        "#FE748A"
    ],
    "a6": [
        "#000000"
    ],
    "a7": [
        "#FFFFFF"
    ],
    "a8": [
        "#9668CF"
    ],
    "b1": [
        "#016FFF"
    ],
    "b2": [
        "#FE748A"
    ],
    "b3": [
        "#B7B7B7"
    ],
    "b4": [
        "#FE748A"
    ],
    "b5": [
        "#3484FF"
    ],
    "b6": [
        "#208FFF"
    ],
    "c1": [
        "#FE748A"
    ],
    "c2": [
        "#0277FB"
    ],
    "c3": [
        "#79B4F6"
    ],
    "c4": [
        "#60ABFF"
    ],
    "c5": [
        "#FFFFFF"
    ],
    "c6": [
        "#FFFFFF"
    ],
    "d1": [
        "#9ABFD5"
    ],
    "f1": [
        "#DE4E04"
    ]
}
```
## 接入主题色
每个组件会接收到一个名为`raptorTheme`的props，组件中该如何使用这些key（或者叫色系占位符），请参考：
https://docs.qq.com/sheet/DVG1vZkxNelZwcWd2?tab=BB08J2
```js
// tab组件的激活按钮主题色
const activeStyle = {
    color: props.raptorTheme.c5,
    background: props.raptorTheme.b2
};
```

::: warning 提示
定义一套主题色务必由专业的设计师把控，以免出现：主按钮背景色、主按钮字体色太靠近，而导致视觉不明显从而影响其主按钮的角色。
:::