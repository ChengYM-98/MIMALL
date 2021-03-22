<template>
    <div>
        cart
        <!-- cart分别加载 -->
        <order-header></order-header>
        
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'cart',
    components:{
        OrderHeader,
        NavFooter,
    }
    
  
}
</script>