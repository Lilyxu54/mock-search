/*
 * @Author: your name
 * @Date: 2019-12-03 16:04:38
 * @LastEditTime: 2019-12-03 16:10:28
 * @LastEditors: Please set LastEditors
 * @Description: In Usezzzr Settings Edit
 * @FilePath: \mock\vue.config.js
 */
// 【vue.config.js】
const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = {
  devServer: {
    before(app) {
　　　　// 注意，此处引用的是自定义的接口文件
      apiMocker(app, path.resolve('./mocker/index.js'), {
        proxy: {
          '/repos/*': 'https://api.github.com/',
        },
        changeHost: true,
      })
    }
  }
}