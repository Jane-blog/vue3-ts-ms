# vue3-ts-ms
> 一个管理端模板解决方案，基于vue-cli、vue3(setup-script)、ts、element-plus，以composition api风格编写。

## 简介

项目的基础版本出自于源于花裤衩大佬的[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)。
*ms -> management system 管理系统

*开发中……

## 项目功能
```
-- 登录 / 登出
-- 主功能操作台
-- 多环境操作
  - dev
  - build
  - lint
```
## 项目目录结构
```
vue3-ts-ms
mock 虚拟接口数据
src 开发目录
├─api 接口模块
│
├─assets 静态资源模块
│  ├─css 公共样式
│  └─images 公共图片
│ 
├─components 通用组件
│  ├─svgIcon 图标组件
│ 
├─global 全局自定义指令
│ 
├─icon 图标库
|
├─layout 控制台
│ 
├─router 动态路由文件
|
├─service 网络请求文件
│ 
├─store 状态管理文件
│ 
├─utils 工具模块
│  ├─auth 用户权限
│  ├─validate 验证
│
├─views 视图模块


```
## 构建步骤

```
# 克隆项目到本地
git clone https://github.com/Jane-blog/vue3-ts-ms.git
# 进入项目文件
cd vue3-ts-ms
# 安装项目依赖
npm install \ yarn
# 构建开发环境
npm run dev
# 构建生产环境
npm run build
# 代码格式检查并自动修复
npm run lint
```
## 代码提交
```
# 查看代码状态
git status
# 添加代码缓存
git add .
# 提交缓存代码
npm run commit
# 代码推送
git push
```

## 浏览器支持

注意：vue3不在支持IE浏览器
Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| Edge | last 2 versions | last 2 versions | last 2 versions |

## 版本

MIT license.

Copyright (c) 2022-present  Jane
