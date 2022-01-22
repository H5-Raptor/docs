# 业务接入
如果是初次接入，需要
1. 建立业务组。
2. 为组注册需要的组件。

之后才可以建立 H5。 如果已经接入，则绕过该步骤。

![使用流程](/docs/image/liu-cheng.png)

## 业务组管理
业务的开始伴随业务组的建立及其相关配置管理。

![新建组](/docs/image/new-group.png)

### 组基本信息
![组基本信息](/docs/image/group-base.png)

### 组成员
![新增组员](/docs/image/new-member.png)

### 组件类型
![新建组件类型](/docs/image/new-type.png)

### 主题色
![新建主题色](/docs/image/new-theme.png)

### 编译模板
![新建编译模板](/docs/image/new-template.png)

::: tip
当前官网不提供新建业务组操作，主要因为编译模板有较大`发挥空间`，恶意用户可能会尝试各种攻击方式。害人之心不可有，防人之心不可无。
:::

开发者发布组件到中台组件市场，可注册组件指定版本到业务组中。

产品、运营等用户新建H5，挑选需要的组件、插件并编辑其相关属性，配置组件间通信数据和父子关系。

用户的使用流程如下：

## 组件管理
Raptor 特性之一就是`以组件为基础单位按版本迭代管理`，组件的每一个版本都是独立的个体。
为业务组注册组件是一个长期过程，任何组件版本更新并验证无误后，都需要再次注册该版本。

### 发布组件
发布或更新组件有 2 种渠道。
1. 平台表单提交。
![新建编译模板](/docs/image/new-component.png)

2. Open Api 提交。接口地址`http://www.h5raptor.com/api/components`，`post`请求，header 头带上`token`，`body`结构如下：
```json
{
  "componentName": "",
  "desc": "",
  "version": "1.0.0",
  "config": {},
  "slots": "...",
  "readme": "",
  "dependencies": {},
  "jsUrl": "",
  "esmUrl": "",
  "cssUrl": "",
  "langJson": {},
  "cover": ""
}
```
登录后在个人头像的二级菜单点击可获取 token。
![token](/docs/image/token.png)

### 注册组件
组件发布在组件市场，只有将组件注册到业务组下，才能在该组编辑 H5 时挑选该组件（该版本）。
![组件注册](/docs/image/register.png)
