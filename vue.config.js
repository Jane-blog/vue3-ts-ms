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
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    name: pageTitle,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@components': resolve('src/components')
      }
    }
  },
  chainWebpack: (config) => {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons/svg')) // 需要处理svg的目录（可自定义）
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        // 指定symbolId格式
        symbolId: 'icon-[name]'
      })
  }
}
