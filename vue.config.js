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
  pluginOptions: {
    'postcss-pxtorem': {
      rootValue: 192,  //结果为：设计稿元素尺寸/10，
      propList: ['*'],
      exclude: function (file) { console.log(file) 
        return file.indexOf('screen') === -1; }//判断哪个文件需要px转换rem
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/var.scss";`
      }
    }
  }
};