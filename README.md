# vue3-ms-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目目录结构，src开发目录
|— — assets
  |— —  images（公共图片）
|— — styles（公共css）	
|— — common （公共js文件）
	|— —  const.js （公共常量）	
  |— —  utils.js    （公共方法）
|— — components  （公共组件）
	|— — common （常用公共子组件，抽出的完全的公共组件，其他项目也可使用的组件）
	|— — content    （公共的，针对当前项目的业务子组件）
|— — network （网络请求文件）
|— — router （路由文件）
|— — store  （状态管理文件）
|— — views   （视图文件—大的视图）