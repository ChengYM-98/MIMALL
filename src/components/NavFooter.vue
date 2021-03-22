<template>
    <div class="footer">
       <div class="footer-logo">
           <img src="/imgs/logo-footer.png" alt="">
           <p>小米商城</p>
       </div>
       <div class="footer-link">
           <a href="http://47.99.135.108/2021/NetEase/" target="_blank">网易严选</a><span>|</span>
           <a href="http://47.99.135.108/2021/ej/" target="_blank">E洁家政</a><span>|</span>
           <a href="http://47.99.135.108/2021/2048/" target="_blank">2048小游戏</a><span>|</span>
           <a href="https://github.com/ChengYM-98" target="_blank">Github地址:https://github.com/ChengYM-98</a>
       </div>
       <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width:53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color: #FF6600;
            }
        }
    }
</style>