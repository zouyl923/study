# 组件通讯-v-model

## v-model
+ 作用1：数据双向绑定，收集表单数据
+ 作用2：在组件身上使用，可以实现父传子数据同步业务

## 组件使用v-model
+ 相当于给子组件传递props[modelValue]
+ 相当于给父组件绑定自定义事件update:modelValue,并且把子组件传的值，赋给当前值
+ 好处：可以省略父组件写自定义方法，代码更加简洁
+ 父组件
    ```vue
    <template>
        <div class="father">
            <h2>我是父组件</h2>
            <p>钱数:{{money}}</p>
            <!-- v-model在组件上使用 -->
            <!-- 相当于给子组件传递props[modelValue] -->
            <!-- 相当于给父组件绑定自定义事件update:modelValue,并且把子组件传的值赋给当前值money -->
            <Child1 v-model="money"></Child1>
            <!-- 相当于下面 父传子 + 子传父 -->
            <Child1 :modelValue="money" @update:modelValue="handler"></Child1>
            <!-- 绑定多个参数 -->
            <!-- 相当于给子组件传递props[pageNo,pageSize] -->
            <!-- 相当于给父组件绑定自定义事件update:pageNo、update:pageSize,并且把子组件传的值赋给当前值pageNo,pageSize -->
            <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child1>
        </div>
    </template>
    ```
    ```ts
    <script lang="ts" setup>
    import Child1 from './Child1'
    import {ref} from 'vue'
    const money = ref(1000)
    //多个绑定
    const pageNo = ref(1)
    const pageSize = ref(100)
    </script>
    ```
+ 子组件Child
    ```vue
    <template>
        <div class="son">
            <h2>我是子组件</h2>
            <p>{money}</p>
            <button @click="handler">给父组件传值</button>
        </div>
    </template>
    ```
    ```ts
    <script lang="ts" setup>
    let props = defineProps(["money","pageNo","pageSize"])
    let $emit = defineEmits(["update:money","update:pageNo","update:pageSize"])
    const handler = ()=>{
        //给父组件传值
        $emit('update:money',props.money + 1000)
        $emit('update:pageNo',props.pageNo + 1)
        $emit('update:pageSize',props.pageSize + 100)
    }
    </script>
    ```