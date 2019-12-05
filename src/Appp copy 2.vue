 <!-- 
 后台的json数据写在了data里面,也就是写了一份假数据
 完成了搜索功能,有一些细节可以跟着自己的需求进行更改
 我写了两个函数: 
  1. 当点击的时候返回结果
  2. 当触发的时候直接返回解决
 默认先启动的是app.vue页面
  -->
<template>
  <div class="safetyInfo">
    <el-input placeholder="请输入详细地址/门牌号/" v-model="search" @input="submitFun" ref="searchInput"></el-input>
    <el-button @click="search1">搜索</el-button>
    <ul v-show="family" v-for="(list,index) in searchData" :key="index">
      <li>
        <span>{{list.phoneName}}</span>
        <span>{{list.ascriptionPhone}}</span>
        <p>{{list.provinceName+''+list.cityName+''+list.areaName}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      family: false,
      search: "", //输入框内容
      searchData: "", //渲染的数据
      //假数据
      products: [
        //假数据
        {
          addressId: "6554536248428871691",
          address: "e通世界南区",
          provinceCode: "310000",
          provinceName: "上海",
          cityCode: "310100",
          cityName: "上海市",
          areaCode: "310118",
          areaName: "青浦区",
          creater: "system@yimidida",
          createTime: "2019-07-15T10:00:39Z",
          isDelete: 1,
          isDefault: 1,
          ascriptionPhone: "17000000000",
          phoneName: "张三",
          customerCode: "WXKY11500216249",
          channelType: 1,
          modifier: "system@yimidida",
          modifierTime: "2019-07-15T02:02:05Z",
          recordVersion: 0
        },
        {
          addressId: "6554536248428871691",
          address: "e通世界南区",
          provinceCode: "310000",
          provinceName: "上海",
          cityCode: "310100",
          cityName: "上海市",
          areaCode: "310118",
          areaName: "青浦区",
          creater: "system@yimidida",
          createTime: "2019-07-15T10:00:39Z",
          isDelete: 1,
          isDefault: 1,
          ascriptionPhone: "18000000000",
          phoneName: "李四",
          customerCode: "WXKY11500216249",
          channelType: 1,
          modifier: "system@yimidida",
          modifierTime: "2019-07-15T02:02:05Z",
          recordVersion: 0
        },
        {
          addressId: "6554536248428871691",
          address: "e通世界南区",
          provinceCode: "310000",
          provinceName: "上海",
          cityCode: "310100",
          cityName: "上海市",
          areaCode: "310118",
          areaName: "青浦区",
          creater: "system@yimidida",
          createTime: "2019-07-15T10:00:39Z",
          isDelete: 1,
          isDefault: 1,
          ascriptionPhone: "18000000000",
          phoneName: "王麻子",
          customerCode: "WXKY11500216249",
          channelType: 1,
          modifier: "system@yimidida",
          modifierTime: "2019-07-15T02:02:05Z",
          recordVersion: 0
        }
      ]
    };
  },
  created: function() {
    // 调用
    this.inintData();
  },
  methods: {
    inintData() {
      // 模仿了和后台交互,后台的接口接收到这个数据里进行渲染
      this.searchData = this.products;
    },
    search1() {
       // 获取当前输入框内容
      let search = this.search;
      // searchData 过滤完的数据
      // products 过滤全部的数据
      this.searchData = this.products.filter(function(product) {
        // console.log("过滤", product);
          // 过滤这两条数据
        let searchField = {
          phoneName: product.phoneName,
          ascriptionPhone: product.ascriptionPhone
        };
              // 判断对象(searchField)里的key是否满足条件,满足条件返回数据
        return Object.keys(searchField).some(function(key) {
          // console.log("key值", key);
          var num =product[key].indexOf(search.trim()) > -1;
          return num;
        });
      });
      // 当输入框为空的时就隐藏所有数据,反之显示数据
      if (this.search == "") {
        this.family = false;
      } else {
        this.family = true;
      }
    },
    submitFun() {
      let search = this.search;
      this.searchData = this.products.filter(function(product) {
        // console.log("过滤", product);
        let searchField = {
          phoneName: product.phoneName,
          ascriptionPhone: product.ascriptionPhone
        };

        return Object.keys(searchField).some(function(key) {
          // console.log("key值", key);
             var s =  String(product[key]).toLowerCase().indexOf(search.trim())> -1
          return s;
        });
      });
      // 当输入框为空的时就隐藏所有数据,反之显示数据
      if (this.search == "") {
        this.family = false;
      } else {
        this.family = true;
      }
    }
  }
};
</script>

