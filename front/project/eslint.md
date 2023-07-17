
# 定义
+ 校检代码是否合法，使代码更加健壮.
+ [官方文档](https://nodejs.cn/eslint/)

# 安装
```bash
npm install eslint -D
#或者
pnpm install eslint -D
```

# 初始化生成配置
```bash
npx eslint --init
```
+ 根据提示安装，会生成.eslintrc.cjs配置文件

# 配置规则
+ 安装依赖
```bash
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node Qbabel/eslint-parser
```
+ 配置规则:在.eslintrc.cjs中加入rules
```json
/**
    * 限制规则
    * off 或者 0 => 关闭规则
    * warn 或者 1 => 打开的规则作为警告（不影响代码执行）
    * error 或者 2 => 规则作为一个错误（代码不能执行，界面错误）
    */
"rules": {
    //eslint 参考配置：@see(https://eslint.org/docs/latest/rules/)
    "no-var": "error",//要求使用let or const 不是 var
    "no-multiple-empty-lines": ["warn", { max: 1 }],//不允许使用多个空行
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unexpected-multiline": "error",//禁止多余的空行
    "no-useless-escape": "off",//禁止不需要的转义字符

    //typescript 参考配置：@see(https://typescript-eslint.io/rules/)
    "@typescript-eslint/no-unused-vars": "error",//禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error",//禁止使用ts-ignore
    "@typescript-eslint/no-explicit-any": "off",//禁止使用any类型
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/,no-namespace": "off",//禁止使用自定义TypeScript模块
    "@typescript-eslint/semi": "off",

    //eslint-plugin-vue @see(https://eslint.vuejs.org/rules/)
    "vue/multi-word-component-names": "off",//要求组件名称始终为"-"链接的单词
    "vue/script-setup-uses-vars": "error",//防止<script setup>使用的变量<template></template>
    "vue/no-mutating-props": "off",//不允许组件prop的改变
    "vue/attribute-hyphenation": "off",//对模板中的自定义组件强制执行属性命名样
}
```
+ 配置忽略：在.eslintignore文件中加入忽略的文件
```bash
dist
node_modules
```

+ 配置检测命令：在package.json中加入执行命令
```json
 "scripts": {   
    "lint": "eslint src",
    "fix": "eslint src --fix"
},
```