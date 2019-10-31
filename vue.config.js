module.exports = {
  publicPath: './',
  outputDir: 'docs',
  assetsDir: './',
  productionSourceMap: false,
  devServer: {
    proxy: {  // 配置跨域代理
      '/api': {
        target: 'http://192.168.0.103:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 表示将 '/api' 替换为'http://192.168.0.103:3000/'
        }
      }
    }
  }
}