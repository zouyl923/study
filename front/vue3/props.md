
# 组件通讯-父传子

## props 作用
    + 可以实现父子组件通讯
    + props 数据是只读的

## Props 声明
+ 在使用 ```<script setup>``` 的单文件组件中，props 可以使用```defineProps()``` 宏来声明：
    ```ts
    <script lang="ts" setup>
    const props = defineProps(['foo'])
    console.log(props.foo)
    </script>
    ```

+ 在没有使用```<script setup>``` 的组件中，prop 可以使用```props``` 选项来声明：
    ```js
    export default {
        props: ['foo'],
        setup(props) {
            // setup() 接收 props 作为第一个参数
            console.log(props.foo)
        }
    }
    ```

## demo 
+ 父组件
    ```vue
    <template>
        <div class="father">
            <h2>我是父组件</h2>
            <Child info="父给子的消息" money="父给子的零花钱"></Child>
        </div>
    </template>
    ```
    ```ts
    <script lang="ts" setup>
    import Child from "./Child.vue"
    </script>
    ```

+ 子组件
    ```vue
    <template>
        <div class="son">
            <h2>我是子组件</h2>
            <p>{{props.info}}</p>
            <p>{{props.money}}</p>
            <!-- props可以省略前面的名字 -->
            <p>{{info}}</p>
            <p>{{money}}</p>

            <button @click="updateProps()">修改props数据</button>
        </div>
    </template>
    ```
    ```ts
    <script lang="ts" setup>
    //需要使用defineProps方法去接受父子卷传递过来的数据
    //defineProps 是vue3提供的方法，不需要引入可以直接使用
    let props = defineProps(['info','money'])//数组对象都行
    const updateProps = ()=>{
        // props.money+=10; 或出错 props：只读的，不能修改
    }
    </script>
    ```