# 组件通信-被动-动作
组件通信的action方，需要提供相关方法对外供调用。

## Vue action
参考Vue3/Vue2 emit示例代码。

## React action
由于React有function（无状态）和class组件之分，由于无状态组件没有实例，
想让外界调用到组件的方法，需要使用HOOK中的useImperativeHandle，

可查阅 [call-child-method-from-parent](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle) 

写法参考React emit中的代码示例。

::: warning 提示
作为业务组内第一个了解本中台的你，强烈建议将使用文档完整过目一遍。
:::