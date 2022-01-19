# 多框架支持
有别于讲`素材库`概念的中台，Raptor采用了全新的架构来支持各种前端框架，且极易扩展。

![编辑-预览架构](/raptor-docs/image/edit-preview.png =500x350)

在编辑页，不管是组件列表区域的加入组件操作，还是组件属性编辑面板，亦或是父子关系操作。
任何区域的操作带来数据的变动，都将通过集中的postMessage通道传递给所属组的预览页（iframe内嵌）。

预览页将动态加载组件的UMD包及其所有依赖（以及依赖的依赖），基于requirejs。
再根据框架的渲染API、结合父子关系、通信关系等渲染页面。

## 预览核心
和框架无关的是，预览页有很多相同的处理逻辑，比如加载组件UMD包。
raptor拆分了`预览核心`，不同框架的预览通过`预览核心`提供的机制，从而使得编写更加简单。

以Vue2的渲染为例：
```js
import initRenderCore, {asyncRequire} from '../../raptor-render-core/src/'
import createEvent from "./utils/createEvent";
import {getComponentStyle} from '../../raptor-render-core/src/utils'

(async() => {
  // 独立页面的预览页初始化即得到完整的数据
  // 初始化完成后，编辑页可能已经拉取到amdConfig配置
  const appData = await initRenderCore(async(appData) => {
    // 此handle函数的执行，可能会早于下方异步获取到Vue。
    // 内嵌在编辑页中的预览页初始化只得到基础key结构，过程会不停的下发最新数据

    APP_DATA.treeData = appData.treeData;
    APP_DATA.themeColor = appData.themeColor;
    APP_DATA.componentModule = appData.componentModule;
  });
  // 这里的appData是一个持续性被修改且通过initRenderCore下发的对象，
  // 所以创建响应式对象前需要基于它的结构先创建一个全新副本
  const APP_DATA = JSON.parse(JSON.stringify(appData))
  APP_DATA.componentModule = appData.componentModule;
  const [Vue] = await asyncRequire(['vue']);

  new Vue({
    el: '#raptor-app',
    data() {
      return APP_DATA;
    },
    render(h) {
      const renderVue2 = (h, treeData, isRoot) => {
        if (treeData && treeData.length) {
          return h(
            'transition-group',
            {
              class: isRoot ? `raptor-app` : '',
              attrs: {
                name: 'slide-fade',
                tag: 'div'
              },
              style: {
                background: isRoot ? APP_DATA.themeColor.a1 : null,
              }
            },
            treeData.map((item) => {
              let children = null;

              if (item.children) {
                if (item.children[0].componentName.toUpperCase() === 'VIRTUAL') {
                  children = item.children.map(child => h('div', {
                    key: child.hashId,
                    slot: child.slot
                  }, [child.children && renderVue2(h, child.children)]));
                } else {
                  children = renderVue2(h, item.children);
                }
              }

              return h(
                APP_DATA.componentModule[`${item.componentName}-${item.version}`],
                {
                  ref: item.hashId,
                  slot: item.slot,
                  class: 'component-item',
                  key: item.hashId,
                  on: {
                    ...createEvent(this, item.events)
                  },
                  props: { ...item.props, raptorTheme: APP_DATA.themeColor },
                  style: {
                    background: APP_DATA.themeColor.a2,
                    ...getComponentStyle(item)
                  },
                  attrs: {
                    'data-component': item.componentName,
                    id: item.hashId
                  }
                },
                children
              );
            })
          );
        }

        return h('h1', ['无组件']);
      }
      return renderVue2(h, this.treeData, true);
    }
  });

})().catch(console.error);

```

正是因为有了预览核心和预览页的分离，使得Vue2、Vue3、React的预览支持，都分别用了不到`200`行代码。

::: tip
raptor定位可开源、可独立部署的组件中台。部署后，集团内诸多业务组可共建、完善平台内的组件。
:::
