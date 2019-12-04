<!--
 * @Author: your name
 * @Date: 2019-12-03 15:37:45
 * @LastEditTime: 2019-12-04 10:46:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mock\src\App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <div>
        <button @click="login">login</button>
        <button @click="list">list</button>
        <button @click="post">post</button>
        <button @click="remove">remove</button>
      </div>
    </div>
    <div class="bright-index">
      <div class="search-box">
        <input type="text" v-model="keyword" class="input" placeholder="请输入搜索内容, 提示:搜索设备" />
        <button class="btn" @click="search">搜索</button>
      </div>
      <div class="content-box">
        <div class="content-card" v-for="(item ,index) in resultList" :key="index">
          设备名称:
          <span v-html="item.name"></span>
          <span>
            日期:
            <span v-html="item.date"></span>
          </span>
          <span>
            地址:
            <span v-html="item.adress"></span>
          </span>
          <span>
            类型:
            <span v-html="item.type"></span>
          </span>
        </div>
        <h2 v-if="isShowTip">没有搜索到匹配结果</h2>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import mock from "./mock";
import axios from "axios";
import mocler from "../mocker/index";
export default {
  data() {
    return {
      keyword: "", //与输入框绑定的变量
      deviceList: [], // 调用json文件获取的全部数据
      resultList: [], //真正展示的数据，也就是筛选后的数据
      isShowTip: false //当搜索不到数据时为true
    };
  },
  //首先得到数据，在created里面使用axios
  created() {
    // axios.get('json').then((res) =>{})
    axios.get("/json").then(res => {
      //将json文件中的数据赋值给data里面的deviceList
      this.deviceList = res.data.data.deviceList;
    });
  },
  methods: {
    search() {
      if (this.keyword == "") {
        //如果没有输入内容，不让往下执行
        return;
      }
      this.resultList = []; //每次搜索对结果数组做初始化
      this.deviceList.forEach(item => {
        //把初始数据进行遍历
        /**
      下面是把初始数据中的每一条数据的四个字段分别去和输入的内容进行匹配，
      如果某一字段中包含输入的内容，就往resultList中加
    **/
        if (
          item.name.indexOf(this.keyword) > -1 ||
          item.date.indexOf(this.keyword) > -1 ||
          item.adress.indexOf(this.keyword) > -1 ||
          item.type.indexOf(this.keyword) > -1
        ) {
          this.resultList.push(item);
        }
      });
      if (this.resultList.length == 0) {
        //如果没有匹配结果，就显示提示信息
        this.isShowTip = true;
      }
      //将得到的每一条数据中的每一个字段进行处理,brightKeyword就是变高亮的方法
      this.resultList.map(item => {
        //遍历
        item.name = this.brightKeyword(item.name);
        item.date = this.brightKeyword(item.date);
        item.adress = this.brightKeyword(item.adress);
        item.type = this.brightKeyword(item.type);
      }); //到这里search方法结束
    },
    // ---------------------------------
    brightKeyword(val) {
      let keyword = this.keyword; //获取输入框输入的内容
      if (val.indexOf(keyword) !== -1) {
        //判断这个字段中是否包含keyword
        //如果包含的话，就把这个字段中的那一部分进行替换成html字符
        return val.replace(keyword, `<font color='#42cccc'>${keyword}</font>`);
      } else {
        return val;
      }
    },
    login() {
      // axios.post("/login").then(res => {
      //   if (res.data) {
      //     console.log(res.data);
      //     // alert(res.data.name);
      //   }
      // });
      axios.get("/json").then(res => {
        console.log(res.data.data.deviceList);
      });
    },

    list() {
      axios.post("/list").then(res => {
        if (res.data) {
          console.log(res.data);
          // alert(res.data.name + "," + res.data.age);
        }
      });
    },
    // post() {
    //   axios.post("/api/post").then(response => {
    //     if (response.data) {
    //       console.log(response.data);
    //       alert(response.data.status + "," + response.data.code);
    //     }
    //   });
    // },

    // remove() {
    //   axios.delete("/api/remove").then(response => {
    //     if (response.data) {
    //       console.log(response.data);
    //       alert(response.data.status + "," + response.data.message);
    //     }
    //   });
    // }
    post() {
      axios.post("/api/post").then(res => {
         console.log(res.data);
        if (res.data) {
          console.log(res.data);
          // alert(res.data.status + "," + res.data.code);
        }
      });
    },

    remove() {
      axios.delete("/api/remove").then(res => {
        if (res.data) {
          console.log(res.data);
          // alert(res.data.status + "," + res.data.message);
        }
      });
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
