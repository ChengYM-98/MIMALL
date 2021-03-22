<template>
    <div>
        order
        <!-- 标签名称根据下面的引入来的 -->
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'order',
    components:{
        OrderHeader,
        NavFooter,
    }
 
}
</script>