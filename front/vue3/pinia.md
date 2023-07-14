# pinia
+ 集中式管理状态容器。可以实现任意组件之间的通讯！！！
+ 核心概念：state,actions,getters
+ [vue-pinia文档地址](https://pinia.vuejs.org/)

# vuex
+ 集中式管理状态容器。可以实现任意组件之间的通讯！！！
+ 核心概念：state,actions,getters,modules,mutations

# 安装pinia
```bash
npm install pinia
```
+ 先创建pinia大仓库

```js
// 创建大仓库
import { createPinia } from 'pinia'
// createPinia方法可以用于创建大仓库
let store = createPinia()
// 对外暴露
export default store;
```
+ 然后在main.ts(入口文件),注册pinia大仓库。

```js
//main.ts 引入pinia仓库
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
//引入pinia
import store from './store/index.ts'
app.use(store);
```

# pinia 选择式
```js
// 创建文件/store/modules/info.ts
//定义info小仓库
import { defineStore } from "pinia";
//第一个参数：小仓库名称，第二个参数：小仓库配置对象
//defineStore方法会返回一个函数，函数作用就是让组件可以获取到仓库数据
let useInfoStore = defineStore("info", {
    //存储数据：state
    state() {
        return {
            count: 99
        }
    },
    //操作数据
    actions: {
        updateCount() {
            this.count++
        }
    },
    //完全等同于 store 的 state 的计算值，并赋值新的属性
    getters: {
        // 自动推断出返回类型是一个 number
        doubleCount(state):number {
            //会自动给state新增doubleCount属性。外部可以使用state.doubleCount属性
            return state.count * 2
        },
        // 返回类型**必须**明确设置
        doublePlusOne(): number {
            // 整个 store 的 自动补全和类型标注
            return this.doubleCount + 1
        },
    }
})
//对外暴露方法
export default useInfoStore;
```
+ 使用仓库的值

```js
<script setup lang="ts">
import useInfoStore from "../store/modules/info.ts";
let infoStore = useInfoStore();
//获取pinia仓库的值
console.log(infoStore.count);
//修改pinia仓库的值：方式1
infoStore.count = 100;
//修改pinia仓库的值：方式2
infoStore.updateCount();
//修改pinia仓库的值：方式3
infoStore.$patch({
    count: 10
});
</script>
```

# pinia 组合式
```js
//定义todo小仓库
import { defineStore } from "pinia";
import { ref } from "vue";
//第一个参数：小仓库名称，第二个参数：必须使用箭头函数()=>
//defineStore方法会返回一个函数，函数作用就是让组件可以获取到仓库数据
let useGameStore = defineStore("game", () => {
    let game = ref([
        { id: 1, title: "吃饭" },
        { id: 2, title: "喝水" }
    ])
    const updateGame = () => {
        game.value.push({ id: 3, title: "划水" })
    }
    let count = ref(1)
    return {
        game,
        count,
        updateGame
    };
})
//对外暴露方法
export default useGameStore;
```
+ 使用仓库的值

```js
<script setup lang="ts">
import useGameStore from "../store/modules/game.ts";
let gameStore = gameStore();
//获取pinia仓库的值
console.log(gameStore.count);
//修改pinia仓库的值：方式1
infoStore.count = 100;
//修改pinia仓库的值：方式2
infoStore.updateGame();
</script>
```