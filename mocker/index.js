/*
 * @Author: your name
 * @Date: 2019-12-03 16:04:12
 * @LastEditTime: 2019-12-04 10:26:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mock\src\mocker\index.js
 */
// 使用 require 引入json文件，可以直接访问数据
// const appData = require('./data.json')
const appData = require('./data.json')

const proxy = {
    'GET /api/login': {
        success: appData.login.success,
        message: appData.login.message
    },
    'GET /api/list': [{
            id: 1,
            username: 'kenny',
            sex: 6
        },
        {
            id: 2,
            username: 'kenny',
            sex: 6
        }
    ],
    'POST /api/post': (req, res) => {
        res.send({
            status: 'error',
            code: 403
        });
    },
    'DELETE /api/remove': (req, res) => {
        res.send({
            status: 'ok',
            message: '删除成功！'
        });
    }
}
module.exports = proxy