## alice-ui

用我的名字造轮子，纪念一下啦～～


- 安装

```
yarn global add create-vite-app@1.18.0
npm i -g create-vite-app@1.18.0
```

- 路由

    - 安装

    - 使用
- typescript

- 安装`sass`和使用`typescript`

- 完成大致的页面布局，包括topnav,aside

- 页面自适应

```
@media (max-width:500px){

}
```

- v-model的变化

- 知识点

    - 默认所有属性都是绑定在根元素上

    - 使用inheritAttrs:false取消默认绑定的属性

    - 使用$attrs或者context.attrs获取所有属性

    - props和context的区别

        1. props需要先声明，context.attrs不需要声明
        2. props不包含事件

    - slot插槽

        具名插槽

        ```
        v-slot:slotName


        <slot name="slotName"/>
        ```
    - teleport将代码放到指定的节点下

         ```
         <teleport to='body'></teleport>
         ```

完成进度如下：

- switch组件

- button组件

