# 定义
+ 对于我们的commit信息，也是有统一规范的，不能随便写，要让每个人都按照统一的标准来执行，我们可以利用
commitlint来实现。

# 安装
+ 安装包
```bash
pnpm add @commitlint/cli @commitlint/config-conventional -D
```

# 使用
+ 添加配置文件。新建commitlint.config.cjs，然后添加下面代码
```js
    /**
     * "off"或者0:关闭规则
     * "warn"或1:开启规则抛出警告
     * "error"或2:开启规则抛出错误
     */
    module.exports = {
        extends: ['@commitlint/config-conventional'],
        rules: {
            'type-enum': [
                2,
                'always',
                [
                    'feat', // 新增功能、页面
                    'update', // 更新：普通更新
                    'fix', // 修补bug
                    'docs', // 修改文档、注释
                    'style', // 格式：不影响代码运行的变动、空格、格式化等等
                    'refactor', // 代码重构，未新增任何功能和修复任何bug
                    'perf', // 优化：提升性能、用户体验等
                    'test', // 测试用例：包括单元测试、集成测试
                    'chore', // 其他不修改src或测试文件的更改
                    'revert', // 回滚到上一个版本
                    'ci', // 对CI/CD配置文件和脚本的更改
                    'build', // 改变构建流程，新增依赖库、工具等（例如:修改webpack）
                ],
            ],
            'type-case': [0],
            'type-empty': [0],
            'scope-empty': [0],
            'scope-case': [0],
            'subject-full-stop': [0, 'never'],
            'subject-case': [0, 'never'],
            'header-max-length': [0, 'always', 108], // header上最大108字符
        },
    };
```
+ 在package.json中配置自定义命令
```js
"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
},
```
+ 配置husky
```bash
npx husky add .husky/commit-msg   
```
+ 会在.husky下面生成commit-msg文件
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
# 添加 执行自定义命令commitlint 校检commit信息
pnpm run commitlint
```
+ 之后commit信息必须带有前缀：
```wiki
'feat', // 新增功能、页面
'update', // 更新：普通更新
'fix', // 修补bug
'docs', // 修改文档、注释
'style', // 格式：不影响代码运行的变动、空格、格式化等等
'refactor', // 代码重构，未新增任何功能和修复任何bug
'perf', // 优化：提升性能、用户体验等
'test', // 测试用例：包括单元测试、集成测试
'chore', // 其他不修改src或测试文件的更改
'revert', // 回滚到上一个版本
'ci', // 对CI/CD配置文件和脚本的更改
'build', // 改变构建流程，新增依赖库、工具等（例如:修改webpack）
```
+ 示例：
```bash
git commit -m 'feat:新增页面'
git commit -m 'update:更新页面'
```