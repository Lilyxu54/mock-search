<!--
这个是这三个中最完整的一个搜索功能
我模拟了数据,直接调接口即可

 -->
 
<template>
  <div class="safetyInfo">
    <el-input placeholder="请输入详细地址/门牌号/" v-model="search" @input="submitFun" ref="searchInput"></el-input>
    <el-button @click="search1">搜索</el-button>
    <ul v-show="family" v-for="(list,index) in searchData" :key="index">
      <li>
        <span>{{list.adress}}</span>
        <span>{{list.date}}</span>
        <span>{{list.name}}</span>
        <span>{{list.type}}</span>
        <!-- <span>{{list.ascriptionPhone}}</span>
        <p>{{list.provinceName+''+list.cityName+''+list.areaName}}</p>-->
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
// import mock from './mock'
export default {
  name: "HelloWorld",
  data() {
    return {
      family: false,
      search: "", //输入框内容
      searchData: [], //接口的数据
      trueDate: [] //真是渲染的数据
    };
  },
  created: function() {
    // 调用接口渲染数据
    this.inintData();
  },
  methods: {
    inintData() {
      // 调用接口渲染数据
      axios.get("/json").then(res => {
        console.log(res.data.data.deviceList);
        // 后台的接口接收到这个数据里进行渲染
        this.trueDate = res.data.data.deviceList;
        console.log(this.trueDate);
        //  把所有从后台传过来的数据赋值给一个变量
        this.searchData = this.trueDate;
      });
    },
    search1() {
      // 获取输入框的内容并去除两边空格
      let search = this.search.trim();
      //这里解释一下这两个变量
      // searchData 过滤完的数据
      // products 过滤全部的数据
      this.searchData = this.trueDate.filter(function(product) {
        // console.log("过滤", product);
        let searchField = {
          //这是过滤所有的数据
          adress: product.adress,
          date: product.date,
          name: product.name,
          type: product.type
        };
        // return Object.keys(searchField).some(function(key) {
        // 判断对象(searchField)里的key是否满足条件,满足条件返回数据
        return Object.keys(searchField).some(function(key) {
          // console.log(product[key]);
          var num = product[key].indexOf(search.trim()) != -1;
          return num;
        });
      });
      // console.log(this.trueDate);
      // console.log(this.searchData);
      // 当输入框为空的时就隐藏所有数据,反之显示数据
      if (this.search.trim() == "") {
        this.family = false;
        console.log("00");
      } else {
        this.family = true;
      }
    },
    submitFun() {
      this.searchData = this.trueDate.filter(function(product) {
        // console.log("过滤", product);
        let searchField = {
          adress: product.adress,
          date: product.date,
          name: product.name,
          type: product.type
        };
      });
      if (this.search.trim() == "") {
        this.family = false;
        console.log("00");
      } else {
        this.family = true;
      }
    }
  }
};
</script>

