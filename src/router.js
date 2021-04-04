import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'



//加载路由插件
Vue.use(Router);
//导出
export default new Router({
    routes: [
        {
            path: '/',
            // base:'',
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
                    component: () => import('./pages/product.vue'),
                },{
                     //动态定义路由
                     path: '/detail/:id',
                     name: 'detail',
                     component: () => import('./pages/detail.vue'),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue')
        },{
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            //order地址下的子路由都是凭借副路由的，不需要加/
            children:[
                {
                    path: 'list',
                    name: 'order-list',
                    component: () => import('./pages/orderList.vue')
                },{
                    path: 'confirm',
                    name: 'order-confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () => import('./pages/orderPay.vue')
                },{
                    path: 'alipay',
                    name: 'alipay',
                    component: () => import('./pages/alipay.vue')
                }
            ]
        }
    ]
})