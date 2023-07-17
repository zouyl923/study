# 定义 
+ git 提交之前的验证钩子
+ 可以在commit之前，执行自定义操作，例如：代码格式化

# 安装husky
```bash
pnpm install -D husky
```
# 使用
+ 执行
```bash
npx husky-init
```
+ 会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行。例如：
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
# 提交之前 自定义命令执行
# 代码格式化(prettier)
pnpm run format
```
+ 在package.json中添加自定义命令format(基于prettier,参考prettier命令)
```js
"scripts": {
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json}\"",
},
```
+ 之后每次commit之前，都会格式化代码。