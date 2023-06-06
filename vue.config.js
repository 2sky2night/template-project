module.exports = {
  //基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true
  },
  // 第三方插件配置
  pluginOptions: {},
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/var.scss";`
      }
    }
  }
};