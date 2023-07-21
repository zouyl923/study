# 定义
+ 制造假数据，搭建假接口
+ 测试接口

# 安装
+ 安装包
```bash
pnpm install -D vite-plugin-mock mockjs  
```
+ 配置vite.config.ts
```ts
viteMockServe: {
    localEnabled: mode === 'serve'
},
```