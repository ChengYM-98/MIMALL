<template>
    <div>
      
        <!-- 标签名称根据下面的引入来的 -->
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
export default {
    name:'order',
    data() {
        return {
            title:'',
            tip:'',
        }
    },
    components:{
        NavFooter,
        ServiceBar
    },
    
 
}
</script>