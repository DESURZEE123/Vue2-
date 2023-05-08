// vue.config.js
module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    // 自定义端口号
    port: 8080
  },
  // lintOnSave: false
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  }
}