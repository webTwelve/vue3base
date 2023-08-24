## 注意：

已自动导入Vue、Vue-router组合式API和Element-plus组件库，直接使用即可~~

## 安装步骤

```tex
git clone https://github.com/webTwelve/vue3base.git      // 把模板下载到本地
npm install -g yarn
yarn       // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 npm

// 运行
yarn run dev

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
yarn run build
```

## 我不会用 yarn~

点这里:https://www.5axxw.com/wiki/content/ys3l9j

## commit 提交规范

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |
