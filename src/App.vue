<template>
  <div id="app">
    <!-- 视图嵌套其他组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      res:{}
    }
  },
  mounted() {
    //本地加载请求静态文件json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    //通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    //本地集成mockjs实现数据mock
     this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  },
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
