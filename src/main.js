import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from  'vue-lazyload'
import App from './App.vue'

// import env from './env'

//mock开关
const mock = false;
if(mock){
  //import预编译加载  require执行时加载
  require('./mock/api')
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';//接口代理
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  //成功
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){//未登录
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});

//将axios挂载到原型
Vue.use(VueAxios,axios);

Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
