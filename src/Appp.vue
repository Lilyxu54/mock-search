<!--
 * @Author: your name
 * @Date: 2019-12-03 15:37:45
 * @LastEditTime: 2019-12-04 17:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mock\src\Appp.vue
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
        <p>{{list.provinceName+''+list.cityName+''+list.areaName}}</p> -->
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
// import mock from './mock'
export default {
  name: "HelloWorld",
  data() {
    return {
      family: false,
      search: "",
      searchData: [],
      cc:[],
      
    };
  },
  created: function() {
    this.family = false;
    this.inintData();

  },
  methods: {
    inintData() {
        axios.get('/json').then((res)=>{
      console.log(res.data.data.deviceList)
      this.cc = res.data.data.deviceList
    //  console.log(this.cc)
        this.searchData = this.cc;
      this.family = false;
    })
    
    },
    search1() {
      let search = this.search.trim();
    //  console.log(this.cc)
   this.searchData = this.cc.filter(function(product) {
        // console.log("过滤", product);
        let searchField = {
          adress: product.adress,
          date: product.date,
          name: product.name,
          type: product.type,
        };
        // return Object.keys(searchField).some(function(key) {
        
        return Object.keys(searchField).some(function(key) {
         // console.log(product[key]);
          var s =product[key].indexOf(search.trim()) != -1;
          return s;
        });
      });
      if (this.search.trim() == "") {
        this.family = false;
        console.log("00");
      } else {
        this.family = true;
      }
    },
    submitFun() {
        this.searchData = this.cc.filter(function(product) {
          // console.log("过滤", product);
          let searchField = {
          adress: product.adress,
          date: product.date,
          name: product.name,
          type: product.type,
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

