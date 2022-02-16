# utils 与 plugin
在前面的章节中提到`按钮组件`的点击触发调用`openUrl 插件`的`openUrl`方法打开页面，
为什么不在`按钮组件`中引入业务`utils`公共方法库中的`openUrl`方法而要单独提炼出插件？

## 功效不同
这是因为如果`按钮组件`中引入了`openUrl`方法，则约束了组件的按钮点击功能只能是打开页面，而如果按钮点击时仅对外`emit`一个消息，
至于最终触发了什么逻辑，完全由用户配置决定，那么按钮点击的功能将是千变万化的。

## 如何选取
设计组件的时候怎么判定是用`utils`来沉淀还是独立出`插件`？

如果少了这个方法会导致组件的基本功能无法完成，那么就以`utils`沉淀，将其打包进组件包体。如果是可动态衔接的功能，就独立出`插件`，
可以把`插件`看作是**动态的、可插拔的 utils**。

我们设计组件的时候不要把组件的粒度做到太大，即便是遇到需求：按钮点击打开页面，我们仍可以拆分出`按钮`组件和`openUrl`插件，
其中`openUrl`插件示例如下。

```js
// openUrl 插件的基本方法，少了它不行，来源 utils 公共方法库。
import { openUrl } from '@utils/open';

/**
 * 插件对外开放编辑：1，是否立即执行 openUrl。2，页面地址。
 * @param {boolean} props.isImmediate
 * @param {string} props.url
 */
export default function myPlugin({ props }) {

  if (props.isImmediate && props.url?.trim()) {
    openUrl(props.url)
  }

  // 返回 openUrl 方法供其他组件触发执行
  return {
    openUrl
  }
}

myPlugin.isPlugin = true;
```
