# 自定义事件
+ 在子组件标签上面使用 @xxx="handler"
+ 作用：实现子组件给父组件传递数据
+ 使用vue3自带defineEmits方法触发自定义事件，或者vue2自带的this.$emit方法触发自定义事件

# demo
+ 父组件
``` html
<template>
    <div class="father">
        <h2>我是父组件</h2>
        <!-- vue2：@click 这种写法为自定义事件 -->
        <!-- vue3：@click 这种写法为dom原生事件 -->
        <!-- vue3：原生的dom事件不管事放在标签身上、组件标签身上都是原生的dom事件 -->
        <Event1 @click="handler1"></Event1>
        <!-- @xxx 绑定自定义事件，实现子组件给父组件传递数据 -->
        <Event2 @xxx="handler2"></Event2>
    </div>
</template>
```
``` js
<script lang="ts" setup>
import Event1 from "./Event1.vue"
import Event2 from "./Event2.vue"
//事件回调1
const handler1 = (event)=>{
    //event为事件对象
    console.log(event)
}
//事件回调2
const handler2 = (param1)=>{
    console.log(param1)
}
</script>
```

+ 子组件Event1
``` html
<template>
    <div class="son">
        <h2>我是子组件1</h2>
    </div>
</template>
```

+ 子组件Event2
``` html
<template>
    <div class="son">
        <h2>我是子组件2</h2>
        <button @click="handler">点击触发自定义事件xx</button>
    </div>
</template>
```
``` js
<script lang="ts" setup>
//使用用defineEmits方法触发自定义事件
//defineEmits不需要引入，是vue3自带方法
let $emit = defineEmits(['xxx'])
const handler = ()=>{
    //第一个参数：时间名称，第二个参数之后都输参数
    $emit('xxx',param1)
}
</script>
```