const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false, //关闭eslint检查
  devServer: {
    https: true, //開發環境時使用 HTTPS
  },
  publicPath: './', // API網址
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/sass/main.scss";`
      }
    }
  }
})