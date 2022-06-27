const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const pageTitle = '管理系统'
const port = process.env.port || process.env.npm_config_port || 8285
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // before: require('./mock/index.ts')
  },
  configureWebpack: {
    name: pageTitle,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
