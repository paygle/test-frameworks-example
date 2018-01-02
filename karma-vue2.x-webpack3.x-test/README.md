# karma-test 使用说明

> karma test vue2 in webpack3.x

## 不需要引入可直接使用的（第三库）全局变量
$或jQuery、Vue、Vuex、VueRouter、ELEMENT、echarts、XLSX、pako
## 构建与安装

``` bash
# 安装依赖
npm install

# 运行开发环境 localhost:8080
npm run dev

# 构建发布文件
npm run build

# 运行已经构建目录中打包完成将发布的文件
npm run product

# 构建发布文件及打包分析报告分析
npm run build --report

# 运行单元测试
npm run unit

# 运行浏览器端到端测试
npm run e2e

# 运行所有测试
npm test
```
