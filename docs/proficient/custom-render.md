# 自定义渲染
业务组可以拥抱`以组件为基础单位`的方案，在此基础之上借助 Raptor 提供的渲染模块自定义一些逻辑，比如遍历页面的组件配置修改其中某些项、
插入某些项等。了解页面的配置结构有助于更好的掌握自定义渲染的能力。

页面配置数据的结构示例如下：
```json
[
  {
    "desc": "单个按钮",
    "jsUrl": "https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/raptor/assets/7d9b9fcc51bb4c6dafa9f7220e9e9b5e.js",
    "props": {
      "isDisable": false,
      "borderRadius": 22
    },
    "slots": null,
    "author": "柔道",
    "events": {
      "click": [
        {
          "d36": "setVisibility",
          "async": "serial",
          "await": 3000,
          "target": "d36",
          "payload": "1"
        },
        {
          "d36": "setVisibility",
          "async": "serial",
          "await": "0",
          "target": "d36",
          "payload": "0"
        }
      ],
      "dblClick": []
    },
    "extend": null,
    "hashId": "v56",
    "version": "1.0.0",
    "versionId": 72,
    "componentId": "43",
    "dependencies": "{}",
    "generalProps": {
      "margin": "0 0.267rem 0.4rem 0.267rem",
      "zIndex": 0,
      "opacity": 1,
      "padding": "0.4rem 0.267rem 0.4rem 0.267rem",
      "position": "",
      "borderRadius": "0.267rem",
      "dateTimeRange": [],
      "positionValue": [
        0,
        0
      ]
    },
    "componentName": "single-button"
  },
  {
    "desc": "空div、toast弹窗容器",
    "jsUrl": "https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/raptor/assets/1ea6182a8497415a885593d2a88c408b.js",
    "props": {
      "isPopUp": true,
      "isShowByEdit": false
    },
    "slots": "childs",
    "author": "柔道",
    "events": {},
    "extend": null,
    "hashId": "d36",
    "version": "1.0.1",
    "versionId": 76,
    "componentId": "47",
    "dependencies": "{}",
    "generalProps": {
      "margin": "0 0.267rem 0.4rem 0.267rem",
      "zIndex": 0,
      "opacity": 1,
      "padding": "0.4rem 0.267rem 0.4rem 0.267rem",
      "position": "",
      "borderRadius": "0.267rem",
      "dateTimeRange": [],
      "positionValue": [
        0,
        0
      ]
    },
    "componentName": "div-container"
  },
  {
    "slot": "childs",
    "hashId": "l62",
    "version": "1.0.0",
    "parentId": "d36",
    "componentId": -1,
    "virtualType": 0,
    "componentName": "virtual"
  },
  {
    "desc": "文本组件，带标题、内容",
    "jsUrl": "https://raptor-1254302757.cos.ap-guangzhou.myqcloud.com/raptor/assets/c3cdbec6e51942ff91001ac36bb1c82e.js",
    "slots": null,
    "author": "柔道",
    "extend": null,
    "hashId": "e11",
    "version": "1.0.0",
    "parentId": "l62",
    "versionId": 70,
    "componentId": "41",
    "dependencies": "{}",
    "componentName": "title-content"
  }
]
```

除此之外，业务组也可以拥抱`以素材库为基础单位`的方案，了解实现过程，请翻阅↓。
