/*
 * @Author: your name
 * @Date: 2020-11-12 20:00:50
 * @LastEditTime: 2020-11-12 20:41:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\vue.config.js
 */
var px2rem = require('postcss-px2rem');
module.exports = {
    css: {
      loaderOptions: { 
        postcss: {
          plugins: [px2rem({remUnit: 200})]
        }
      }
    }
  }