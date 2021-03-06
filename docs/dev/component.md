# 组件
以编写一个`Banner 组件`为例，它被设计成极简 Banner 组件，支持用户配置一张图片，效果示例如下。

![开发示例图](/docs/image/dev-1.png)

下面是 Vue 版本源码，组件的图片来源于外界传入的参数（图片地址），这个外界或者说参数图片来源一个可交互的编辑面板，
组件编辑面板的设计是组件能力伸缩适应多业务场景的主要依据，那么这个编辑面板怎么实现？

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
      default: 'https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/raptor/assets/d6d5ca76-f2d0-42eb-8de9-0201a3eee070.jpg'
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
如果组件的编辑面板交给组件开发者一并提供，导致开发成本不说，组件编辑面板的 UI 和交互风格将混乱不堪，体验极差。
能不能通过某种`声明`的方式来做到 UI 和交互的统一？

能，答案是`动态表单`，可搜索`JSON Schema`了解更多，这里不做过多解释。使用`JSON Schema`来描述表单，极简 Banner 组件
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

