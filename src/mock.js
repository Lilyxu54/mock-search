/*
 * @Author: your name
 * @Date: 2019-12-03 15:54:15
 * @LastEditTime: 2019-12-04 10:20:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mock\src\mock.js
 */

//引入mock模块
import Mock from 'mockjs';

Mock.mock('/login', { //输出数据
    'name': '@name', //随机生成姓名
    //还可以自定义其他数据
});
Mock.mock('/list', { //输出数据
    'name': '@name', //随机生成姓名
    'age|10-20': 10
    //还可以自定义其他数据
});
Mock.mock('/json', { 
     "data":{
    "deviceList":[
       {"name":"设备一","date":"2019-03-24","adress":"深圳","type":"电动"},
       {"name":"设备二","date":"2019-03-24","adress":"上海","type":"汽油"},
       {"name":"设备三","date":"2019-03-24","adress":"北京","type":"电动"},
       {"name":"设备四","date":"2019-03-24","adress":"广州","type":"汽油"}
    ]
  }
});