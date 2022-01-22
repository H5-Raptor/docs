# 编写组件
以编写一个`Banner 组件`为例，我们把它设计成极简 Banner 组件，支持用户配置一张图片，效果示例如下。

![开发示例图](/docs/image/dev-1.png)

这是它的 Vue 版本源码 ↓，从中可以看到它的图片来源外界传入，这个外界是一个可交互的编辑面板，
这种设计是组件能力伸缩适应多业务场景的主要依据，那么这个面板怎么实现？

```vue
<template>
  <div class="simple-banner">
      <img class="banner" :src="imageSource" />
  </div>
</template>

<script>
export default {
  name: 'simple-banner',
  props: {
    imageSource: {
      type: String,
      default: 'http://imgcache.qq.com/music/common/upload/t_k_competition/3674849.jpg'
    },
  }
};
</script>

<style lang="scss" scoped>
.banner{
  display: block;
  width: 100%;
  margin: 0;
}
</style>
```
如果交给组件开发者一并提供，导致开发成本不说，组件编辑面板的 UI 和交互风格将混乱不堪，体验极差。我们能不能通过某种`声明`的方式来做到 UI 和交互的统一？

能，答案是`动态表单`，可搜索`JSON Schema`了解更多，这里不做过多解释。用`JSON Schema`来描述表单，我们的极简 Banner 组件
编辑面板便可描述为 ↓
```json
{
  "title": "组件编辑",
  "type": "object",
  "properties": {
    "imageSource": {
      "title": "图片",
      "type": "string",
      "ui:widget": "JsonSchemaImageWidget",
      "default": "http://imgcache.qq.com/music/common/upload/t_k_competition/3674849.jpg"
    }
  }
}
```

