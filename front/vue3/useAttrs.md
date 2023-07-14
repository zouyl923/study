# useAttrs
+ 作用：获取组件的属性
+ 使用：方便封装自定义组件
+ 优先级：props>useAttrs，如果props接收了属性，useAttrs()就获取不到此属性

# demo
+ 父组件
``` html
<template>
    <div class="father">
        <h2>我是父组件</h2>
        <TestButton type="primary" size="small"></TestButton>
    </div>
</template>
```
``` js
<script lang="ts" setup>
import TestButton from './TestButton'
</script>
```

+ 子组件TestButton
``` html
<template>
    <div class="son">
        <!-- 基于v-bind绑定所有属性 -->
        <div :="$attrs">按钮</div>
        <!-- 单个绑定属性 -->
        <div :type="$attrs.type" :size="$attrs.size">按钮</div>
    </div>
</template>
```
``` js
<script lang="ts" setup>
import { useAttrs } from "vue";
let $attrs = useAttrs();
console.log($attrs)
</script>
```