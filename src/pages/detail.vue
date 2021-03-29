<template>
    <div class="detail">
        <div class="header" :class="{'slide':isFixed}">
            <div class="container">
                <div class="left">
                    <p>小米123456</p><span>|</span>小米8<span>|</span>小米8SE
                </div>
                <div class="right">
                    <p>概述<span>|</span>参数<span>|</span>用户评价</p>
                </div>
            </div>
        </div>
        <div class="container">
            <template>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                </swiper>
            </template>
            <div class="detail-slide">
                <h1>{{product.name}}</h1>
                <p>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED屏</p>
                <h2>小米自营</h2>
                <h3>{{product.price}}元 <span>2999元</span></h3>
                <!-- 收货地址 -->
                <div class="address">
                    <div class="address-img">
                        <img src="/imgs/detail/icon-loc.png" alt="">
                        <h4>北京 北京市 朝阳区 安定门街道</h4>  <span>修改</span>
                    </div>
                    
                    <p>有现货</p>
                </div>
                <div class="de-edition">
                    <p>选择版本</p>
                    <div class="edition-con">
                        <div :class="{'checked':version==1}" @click="version=1">
                            6GB+64GB 全网通  <span>{{product.price}}元</span> 
                        </div>
                        <div :class="{'checked':version==2}" @click="version=2">
                            4GB+64GB 移动4G  <span>1049元</span> 
                        </div>
                    </div>
                    
                </div>
                <div class="de-color">
                    <p>选择颜色</p>
                    <div>
                        <span>深空灰</span> 
                    </div>
                </div>
                <div class="de-price">
                    <div class="de-price-h">
                        {{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色
                        <p>{{product.price}}</p>
                        <p>1699</p>
                    </div>
                    <div class="de-price-f">
                        总计：{{product.price}}元
                    </div>
                </div>
                <div class="de-btn">
                    <div class="btn btn-huge" @click="addCart()">加入购物车</div>
                </div>

            </div>
        </div>
        <div class="price-des"></div>

    </div>
</template>


<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/button.scss";




.detail{
    .header{
        position: relative;
        height: 70px;
        border-top: 1px solid #e5e5e5;
        background-color: #ffffff;
        
        &.slide{
           position: fixed;
           top:0;
           width: 100%;
           z-index: 10;
        }
        .container{
             display: flex;
             justify-content: space-between;
             font-size: 12px;
            font-weight: bold;
            color: #666666;
            line-height: 60px;
             .left{
                 p{
                    display: inline-block;
                    font-size: 18px;
                    color: #333333;
                 }
             }
             span{
                 display: inline-block;
                 margin: 0 10px;
             }
        }
        
    }
    .container{
        display: flex;
        justify-content: space-between;
            .swiper-container{
                height: 870px;
                width: 586px;

            }
            img{
                height: 486px;
                margin: 90px auto auto 50px;

            }
            .swiper-button-prev,.swiper-button-next{
                top:38%;
            }
            .swiper-pagination-bullets{
                bottom: 300px
            }
        
        .detail-slide{
            margin-left: 20px;
            width: 650px;
            height: 870px;
            font-weight: bold;
            h1{
                margin-top: 30px;
                margin-bottom: 16px;
                color: #333333;
                font-size: 28px;
            }
            p{
                margin-bottom:  6px;
                font-size: 14px;
                color: #999999;
            }
            h2{
                margin-bottom: 14px;
                font-size: 16px;
                color: #FF6700;
            }
            h3{
                font-size: 20px;
                color: #FF6700;
                padding-bottom: 25px;
                border-bottom: 1px solid #E5E5E5;
                span{
                    font-size: 14px;
                    color: #999999;
                    text-decoration: line-through;
                }
            }
            // 收货地址
            .address{
                margin-bottom: 30px;
                margin-top: 28px;
                height: 108px;
                background: #FAFAFA;
                border: 1px solid #E5E5E5;
                p{
                    font-size: 14px;
                    font-weight: bold;
                    color: #FF6700;
                    margin-left: 65px;
                    margin-top: -20px;
                }
                .address-img{
                    height: 74px;
                    img{
                        display: inline-block;
                        width: 20px;
                        height: 22px;
                        margin-top: -3px;
                        margin-left: 34px;
                        vertical-align: middle;
                    }
                    h4{
                        display: inline-block;
                        font-size: 14px;
                        font-weight: bold;
                    color: #666666;
                    line-height: 74px;
                    margin-left: 10px;
                    }
                }
                
            }
            .de-edition{
                p{
                    font-size: 18px;
                    font-weight: bold;
                    color: #333333;
                    margin-top: 30px;
                    margin-bottom: 20px;
                }
                .edition-con{
                    display: flex;
                    justify-content: space-between;
                     .checked{
                        color: #FF6700;
                        border: 1px solid #FF6600;
                        }
                    div{
                        cursor: pointer;
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        font-size: 16px;
                        font-weight: bold;
                        color: #333333;
                            border: 1px solid #E5E5E5;
                        
                       
                        span{
                            color: #666666;
                        }
                    }
                }
            }
            .de-color{
                p{
                    font-size: 18px;
                    font-weight: bold;
                    color: #333333;
                    margin-top: 30px;
                    margin-bottom: 20px;
                }
                div{
                        cursor:pointer;
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        font-size: 16px;
                        font-weight: bold;
                        color: #FF6700;
                        border: 1px solid #FF6600;
                        span{
                            &::before{
                                content: '';
                                display: inline-block;
                                height: 16px;
                                width: 14px;
                                margin: -3px 9px;
                                background-color: #666666;
                            }
                        }
                        

                }
            }
            .de-price{
height: 108px;
background: #FAFAFA;
                margin-top: 30px;
                margin-bottom: 20px;
                padding-left: 30px;
                .de-price-h{
                    height: 56px;
                    line-height: 56px;
                    p{
                        float: right;
                        margin-right: 10px;
                        &:first-child{
                            text-decoration: underline;
                        }
                    }

                }
                .de-price-f{
font-size: 24px;
font-weight: bold;
color: #FF6600;
                }
                
                
            }
         
        }
    }
}
    
</style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';


export default {
    name:'detail',
    data() {
        return {
            id:this.$route.params.id,
            version:1,//
            isFixed:false,
            product:{},

            swiperOptions: {
                autoplay:true,
                loop:true,
                effect : 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                //分页器
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
    },
    mounted() {
        window.addEventListener('scroll',this.initHeight);
        this.getProductInfo();

    },
    methods: {
        getProductInfo(){
            this.axios.get(`/products/${this.id}`).then((res)=>{
                this.product = res;
            })
        },
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152? true : false;
        },
        addCart(){
            this.axios.post('/carts',{
                productId:this.id,
                selected:true,
            }).then((res={cartProductVoList:0})=>{
                
                this.$store.dispatch('saveCartCount',res.cartTotalQuantity);

                this.$router.push('/cart');
            })
        }
    },

    components: {
    Swiper,
    SwiperSlide
  },
  
}
</script>