# 定义
+ 全局注册组件方便使用

# 使用
+ 在@component目录下创建目录global。并创建index.ts文件。然后复制下面代码
```ts
//@component/global/index.ts
//引入组件
import SvgIcon from "./SvgIcon.vue"
// ... 引入n个组件
//全局组件对象，必须强定义类型{ [key: string]: any }，否则会提示报错
const allComponent: { [key: string]: any } = { SvgIcon };
export default {
    //必须使用install方法
    install(app: any) {
        //注册全局组件
        Object.keys(allComponent).forEach(key => {
            app.component(key, allComponent[key])
        })
    }
};
```
+ 在main.ts中加入
```ts
import globalComponent from '@/components/global'
//...
//use全局组件
app.use(globalComponent)
```