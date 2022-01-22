# 插件
插件的设计来源于`没有 UI 的组件`，纯粹的 JS 脚本，无需依赖前端框架，此时提炼出 JS 逻辑部分，这样可以做到跨框架复用。
虽然不依赖前端框架了，但丝毫不影响插件与组件间的通信能力。

## 编写插件
插件是一个函数，通过函数的`isPlugin`属性申明插件身份。
```js
export default function myPlugin({ props }) {

  const openUrlSchema = (url) => {
    const iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.src = url;
    document.body.appendChild(iframe);
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 500)
  }
  const openUrlHttp = (url) => {
    window.open(url);
  }
  const openUrl = (url) => {
    const trimUrl = url.trim();
    if (/^[a-zA-Z]+:\/\//.test(trimUrl) && !trimUrl.startsWith('http')) {
      openUrlSchema(trimUrl);
    } else {
      openUrlHttp(trimUrl)
    }
  }

  if (props.isImmediate && props.url && props.url.trim()) {
    openUrl(props.url)
  }

  return {
    openUrl
  }
}

myPlugin.isPlugin = true;
```
## 插件的编辑面板
插件同组件一样，也可以有自己的编辑面板，写法同组件完全一致，发布过程也无差别。
```json
{
  "title": "组件编辑",
  "type": "object",
  "required": [],
  "properties": {
    "isImmediate": {
      "title": "是否立即执行打开？",
      "type": "boolean",
      "default": "false"
    },
    "url": {
      "type": "string",
      "title": "需要立即打开的URL",
      "ui:hidden": "{{rootFormData.isImmediate === false}}",
      "description": "支持http和url schema协议地址"
    }
  },
  "events": {
    "action": {
      "openUrl": {
        "title": "打开URL"
      }
    }
  }
}
```
