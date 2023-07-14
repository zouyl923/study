# 全局事件总线 $bus
+ 作用：可以兄弟组件之间传递数据
+ vue2中使用$bus
+ vue3中没有$bus需要基于[mitt](https://www.npmjs.com/package/mitt)插件。

# mitt 
+ 安装
``` bash
npm install --save mitt
```
+ 使用：先创建bus.ts文件，然后其他地方引入$bus
``` bash
import mitt from 'mitt'
const $bus = mitt()
export default $bus;
```

# 使用$bus
+ $bus.on 监听兄弟组件传过来的值
+ $bus.emit 主动给兄弟组件传值
+ 子组件Child1
``` html
<template>
    <div class="son">
        <h2>我是子组件1</h2>
    </div>
</template>
```
``` js
<script lang="ts" setup>
import $bus from './bus.ts'
//组合式API函数
import { onMounted } from 'vue'
//组件挂载完毕的时候，当前组件绑定一个事件，接收兄弟组件传递的数据
onMounted((){
    //接收兄弟组件传值
    //第一个参数：为事件类型。第二个参数：事件回调
    $bus.on("car",(car)=>{
        console.log(car)
    })
})
</script>
```

+ 子组件Child2
``` html
<template>
    <div class="son">
        <h2>我是子组件2</h2>
        <button @click="handler">给兄弟组件传值</button>
    </div>
</template>
```
``` js
<script lang="ts" setup>
import $bus from './bus.js'
const handler = ()=>{
    //给兄弟组件传值
    $bus.emit('car',{car:'法拉利'})
}
</script>
```