const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    // host: '192.168.43.209',
    host: '172.16.79.17',
    port: 8080,
  }
})
