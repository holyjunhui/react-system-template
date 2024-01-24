## Environment Prepare

Install `node_modules`:

```bash
pnpm install
```

debug
react-script version, craco version, carco-less version have some bugs fix this [https://github.com/DocSpring/craco-less/issues/92](https://github.com/DocSpring/craco-less/issues/92)

```bash
pnpm run start
```

### Build project

```bash
pnpm run build

```

### Check code style

You can also use script to auto fix some lint error:

```bash
pnpm run lint
```

## 前端发布文档

环境准备 安装node版本v18.18.2， 安装完毕， 使用node --v 查看版本是否安装完毕，

- 执行 `pnpm install` 安装依赖
- pnpm run build 项目打包 (打包后根目录会创建一个名为build文件夹，用于发布线上Nginx)
- 再拷贝到服务器对应的目录下（前端服务静态页面存放目录）

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

## git commit

提交信息语法

```
type(scope?): subject 换行 body 换行 footer
```

示例：

```
chore: run tests on travis ci

feat(blog): add comment section
```

```
'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
'feat', // 新功能
'fix', // 修补bug
'docs', // 文档修改
'style', // 代码格式修改, 注意不是 css 修改
'refactor', // 重构
'perf', // 优化相关，比如提升性能、体验
'test', // 测试用例修改
'revert', // 代码回滚
'ci', // 持续集成修改
'config', // 配置修改
'chore', // 其他改动
```

## api 生成

`npm run api`

## bugs

如果出现 `Delete '␍' prettier/prettier` 错误
请使用 gitlab `git config --global core.autocrlf false`
[解决`␍` prettier](https://blog.csdn.net/LPLIFE/article/details/105655178)
