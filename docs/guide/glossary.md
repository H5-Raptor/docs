# 名词解释
在了解 Raptor 之前有必要先了解基本概念，以便于更好的理解 Raptor。

## 业务组
Raptor 定位集团级的组件化中台，各业务侧可自行创建业务组，用户创建 H5 都需要归属在某个业务组之下。

### 组员
用户第一次登录后会得到一个账号，业务组创建者或管理者可添加用户进组，该用户便是该业务组组员。

### 组件类型
组件由开发者发布到组件市场，此时组件没有类型。业务组可管理本组的组件类型列表，比如设定：`头图`、`按钮`，
注册组件时将其归档到本组的某个组件类型下。

::: tip
开发者不是特殊角色，任意用户都可以发布组件。<br/>
多个业务组如果注册了同一个组件，它们可以有着完全不一样的组件类型名称。
:::

### 主题色
业务所运营的产品往往都有固定的品牌色风格，业务组可以事先编辑好一批主题色以供编辑 H5 时使用，实现快速为页面配色。
这样的主题色我们可以称之为`静态主题色`。

#### 动态图片主题色
如果运营的 H5 不是自身品牌，比如合作厂商，此时需要适配对方品牌色，如果按`静态主题色`方式处理，会导致业务组出现一批复用率很低
的主题色。这个时候，可以使用`动态图片主题色`，只需要上传一张图片，便会自动得到相适应的一套主题色。

::: tip
比`主题色`更复杂的是`主题`，此处暂不做交代。
:::

### 编译模板
一套 webpack 编译、打包配置，包含 index.html。

::: tip
不强求 webpack ，编译模板提供 build 指令即可。
:::

## 组件
组件作为中台的基础，也是唯一的实体要素，它由开发者发布（按版本迭代）至中台的组件市场，再由业务组管理者（按版本）注册进业务组，
随后业务组用户在编辑 H5 时便可以选择该组件（该版本）。

广义上的组件包含`UI组件`和`插件`，和 UI 相关的组件往往与前端框架相关，他们耦合框架，约束了技术栈，框架不同的业务组无法共享之。
::: tip
组件发布在中台组件市场，所有业务组都可以注册之，但 UI 组件耦合框架，跨技术栈的业务组即使注册了也无法在页面正常渲染。
:::

### UI组件
带有 UI 展示，往往依赖前端框架。

::: tip
要注意的是，不是与 DOM 或 UI 相关就一定无法跨框架使用，要看组件的逻辑怎样，如果是单纯的 JS 脚本操作 DOM 做一些特别的事情，
可以用插件来沉淀它。
:::

### 布局组件
`布局组件`是 UI 组件中较为特殊的，也叫`容器组件`，它可以接受其他组件成为自己的子组件。比如常见的`轮播图组件`，在 Raptor 中可以
设计为`轮播布局组件` + `头图`组件，当我们为之插入`视频`，便形成了`轮播视频组件`的效果，能极大的提升组件复用率。

`布局组件`最大的价值在于它突破了移动端的约束，使得我们可以轻松实现到 PC 端的组件化页面搭建。
我们可以把 PC 页面看作一个大框框，这框内还可能有其他局部的小框框，这里的每个框框都可以用`布局组件`沉淀，PC 页面由一个大的
`布局组件`嵌套着其他的小`布局组件`，最后嵌入实体内容组件，以构成 PC 端界面。
![布局组件](/docs/image/components.png)

### 插件
往往和 UI 无关，是纯粹的 JS 逻辑，可以将之编写为插件。

插件因为不耦合前端框架，可以做到跨框架使用，多个业务组可以共同使用他人开发的插件。

::: tip
插件脱离了前端框架，但并不意味着它从此和 UI 组件完全隔离，插件仍旧可以做到和 UI 组件通信即插件可以做到跨框架的通信。<br/>
另外，建议所有业务组都设定一个`插件`类型的组件，因为插件和组件并没有特殊的区分，都在组件市场供注册。
:::

## H5
H5 的本质是`多个组件及其之间关系的描述`，当这个`描述`粒度足够大的时候，它就是一个 H5 页面，能代表完整的运营需求。

预览阶段，H5 并不是实体，仅为存在于数据库中的一段配置，直到发布时做编译，才能成为真正的实体。

### H5 模板
当我们经常编辑某一类场景时，我们可以编辑一个基础的 H5，将之存档为`模板`，后续基于此`模板`复制出新的 H5，
能极大的提升同类型场景的编辑效率。

::: tip
我们也可以直接复制某个 H5 ，做到快速迭代编辑。`H5 模板`一定程度上只是`语法糖`。
:::

### 复合组件
`复合组件`并不是真的组件，它与`H5`并没有本质上的区别。

我们知道 H5 的本质是`多个组件及其之间关系的描述`，当这个描述粒度非常小的时候，小到仅仅描述了某种功能，
比如上文提到的`轮播布局组件` + `头图组件`，此时可以将之存档为`复合组件`供其他业务场景快速复用`轮播图`效果。