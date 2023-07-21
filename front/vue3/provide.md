# 组件通讯-provide&inject

## provide()
+ 提供一个值，可以被后代组件注入。
+ provide() 接受两个参数：第一个参数是要注入的 key，可以是一个字符串或者一个 symbol，第二个参数是要注入的值。
+ 当使用 TypeScript 时，key 可以是一个被类型断言为 InjectionKey 的 symbol。InjectionKey 是一个 Vue 提供的工具类型，继承自 Symbol，可以用来同步 provide() 和 inject() 之间值的类型。
+ 与注册生命周期钩子的 API 类似，provide() 必须在组件的 setup() 阶段同步调用。
    ```ts
    <script setup>
    import { ref, provide } from 'vue'
    import { fooSymbol } from './injectionSymbols'
    // 提供静态值
    provide('foo', 'bar')
    // 提供响应式的值
    const count = ref(0)
    provide('count', count)
    // 提供时将 Symbol 作为 key
    provide(fooSymbol, count)
    </script>
    ```

## inject()
+ 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值。
    ```ts
    <script setup>
    import { inject } from 'vue'
    import { fooSymbol } from './injectionSymbols'
    // 注入值的默认方式
    const foo = inject('foo')
    // 注入响应式的值
    const count = inject('count')
    // 通过 Symbol 类型的 key 注入
    const foo2 = inject(fooSymbol)
    // 注入一个值，若为空则使用提供的默认值
    const bar = inject('foo', 'default value')
    // 注入一个值，若为空则使用提供的工厂函数
    const baz = inject('foo', () => new Map())
    // 注入时为了表明提供的默认值是个函数，需要传入第三个参数
    const fn = inject('function', () => {}, false)
    </script>
    ```