<template>
    <div class="product">
        <product-param :title="product.name">
            <template v-slot:buy>
               <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="pro-bg-header">
            <h1>{{product.name}}</h1>
            <h2>{{product.subtitle}}</h2>
            <p>全球首款双频 GPS<span>|</span>骁龙845<span>|</span>AI 变焦双摄<span>|</span>红外人脸识别</p>
            <h3>￥<span>{{product.price}}</span></h3>
            <del>￥<span>2999</span></del>
        </div>
        <div class="pro-bg-body">
        </div>
        <div class="pro-bg-footer"></div>
        <div class="pro-swiper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide>
                    <img src="/imgs/product/gallery-2.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/imgs/product/gallery-3.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/imgs/product/gallery-4.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/imgs/product/gallery-5.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/imgs/product/gallery-6.jpg" alt="">
                </swiper-slide>
                <!-- 分页器 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="swiper-text">小米8 AI变焦双摄拍摄</div>
        </div>
        <div class="item-video">
            <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg" @click="showSlide=true"></div>
            <div class="video-box">
                <div class="overlay" v-if="showSlide"></div>
                <div class="video" :class="{'slide':showSlide}">
                    <span class="icon-close" @click="showSlide=false"></span>
                    <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                </div>
            </div>
      </div>
    </div>
</template>
<script>
import ProductParam from '../components/ProductParam'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'product',
    components:{
        ProductParam,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            showSlide:false,//控制动画效果
            product:{}, //商品信息

            swiperOptions: {
                autoplay: true,
                loop: true,
                effect: "coverflow",
                coverflowEffect: {
                rotate: 30,
                stretch: 550,
                depth: 100,
                modifier: 2,
                slideShadows: false,
            },
                pagination: {
                    el: '.swiper-pagination',
                     clickable: true,
                },
                // Some Swiper option/callback...
                }
            }
    },
    mounted() {
        this.getProductInfo();
    },
    methods: {
        getProductInfo(){
            // $router是路由跳转    $route是获取参数
            let id = this.$route.params.id;
            this.axios.get(`/products/${id}`).then((res)=>{
                this.product = res;
            })
        },
        buy(){
            let id = this.$route.params.id;
            this.$router.push(`/detail/${id}`);
        }
    },
    computed: {
        swiper() {
             return this.$refs.mySwiper.$swiper
        }
    },
   
    
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';

    .product{
        .pro-bg-header{
            @include bgImg(100%,718px,'/imgs/product/product-bg-1.png',cover);
            line-height: 1em;
            text-align: center;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: bold;
            h1{
                line-height: 1em;
                font-size: 80px;
                margin-top: 55px;
                color: #333333;
            }
            h2{
                margin-top:  13px;
                line-height: 1em;
                font-size: 24px;               
                color: #333333;     

            }
            p{
                font-weight: normal;
                margin-top: 21px;
                font-size: 16px;
                line-height: 1em;
                color: #333333;
                span{
                    margin: 0 15px;
                }
            }
            h3{
                display: inline-block;
                font-size: 30px;
                font-weight: bold;
                color: #333333;
                line-height: 75px;
                margin-right: 11px;
                margin-top: 25px;
                span{
                    font-size: 38px;
                }
            }
            del{
                display: inline-block;
                font-size: 20px;
                font-weight: bold;
                color: #333333;
                line-height: 50px;
                span{
                    font-size: 26px;
                 }

            }
        }
        .pro-bg-body{
            margin: 38px auto 45px auto;
            @include bgImg(1226px,397px,'/imgs/product/product-bg-2.png');
            display:block;
        }
        .pro-bg-footer{
            @include bgImg(100%,638px,'/imgs/product/product-bg-3.png',cover)
        }
        .pro-swiper{
            height: 450px;
            width: 1903px;
            margin: 0 auto;
            margin-top: 38px;
            text-align: center;
            img{
                height: 356px;
                width: 625px;
            }
        }
        .swiper-text{
            width: 186px;
            height: 18px;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            line-height: 42px;
            margin: 0 auto;

        }
        .item-video{
            height: 1044px;
            width: 1903px;
            margin: 0 auto;
            text-align: center;
            color: #FFFFFF;
            background-color: #070708;
            padding-top: 82px;
            h2{
                font-size: 60px;
                font-weight: bold;
                line-height: 80px;
                margin-bottom: 47px;
            }
            p{
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 58px;
            }
            .video-bg{
                background:url('/imgs/product/gallery-1.png') no-repeat center;
                background-size:cover;
                width:1226px;
                height:540px;
                margin:0 auto 120px;
                cursor:pointer;
            }
            .video-box{
                .overlay{
                    @include position(fixed);
                    background-color: #333333;
                    opacity: .5;
                    z-index: 10;
                }
                .video{
                    position: fixed;
                    top:-50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    z-index: 10;
                    width: 1000px;
                    height: 536px;
                    opacity: 0;
                    transition: all .6s;
                    &.slide{
                        top:50%;
                        opacity: 1;
                    }
                    .icon-close{
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        cursor: pointer;
                        @include bgImg(20px,20px,'/imgs/icon-close.png');
                    }
                    video{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    }
                }
            }
        }
    }
</style>