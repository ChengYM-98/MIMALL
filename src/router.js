import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderList from './pages/orderList'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'
import Login from './pages/login'



//加载路由插件
Vue.use(Router);
//导出
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            //重定向到index
            redirect:'/index',
            //home地址下的子路由都是绝对地址，需要加/
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },{
                    //动态定义路由
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },{
                     //动态定义路由
                     path: '/detail/:id',
                     name: 'detail',
                     component: Detail,
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },{
            path: '/order',
            name: 'order',
            component: Order,
            //order地址下的子路由都是凭借副路由的，不需要加/
            children:[
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },{
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },{
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        }
    ]
})