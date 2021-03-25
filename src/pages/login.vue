<template>
    <div class="login">
        <div class="login-header">
            <div class="container">
                <img src="/imgs/login-logo.png" alt="">
            </div>
        </div>
        <div class="login-box">
            <div class="container">
                <div class="login-form">
                    <div class="login-form-header">
                        <p>账号登录</p>
                        <span>|</span>
                        <p>扫码登录</p>
                    </div>
                    <div class="login-form-center">
                        <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                        <input type="password"  placeholder="密码" v-model="password">
                        <button class="login-btn" @click="login">登录</button>
                        <ul>
                            <li>  
                                <a href="javascript:;" @click="register">手机短信登录/注册</a>
                            </li>

                            <li> 
                                <a href="">立即注册</a> 
                                <span>|</span> 
                                <a href="">忘记密码？</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>

        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from './../components/NavFooter'
export default {
    name:'login',
    components:{
        NavFooter,
    },
    data(){
        return{
            username:'',
            password:'',
            userId:'',
        }
    },
    methods: {
        login(){
            // let username = this.username;
            let {username,password} = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                this.$cookie.set('userId',res.id,{expires:'1M'});

                this.$store.dispatch('saveUserName',res.username);
                // todo 保存用户名
                this.$router.push('/index');
            })
        },
        register(){
            this.axios.post('/user/register',{
                username:'ming',
                password:'123456',
                emall:'cym.98@qq.com'
            }).then(()=>{
                alert('注册成功！')
            })
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
    .login{
        width: 100%;
        .login-header{
            
        }.container{
            position: relative;
        }
        .login-box{
            background: url('/imgs/login-bg.jpg') no-repeat center;
            height: 576px;
            .login-form{
                position: absolute;
                top: 37px;
                right: 0;
                width: 410px;
                height: 510px;
                background-color: #ffffff;
                .login-form-header{
                    display: flex;
                    justify-content: space-between;
                    height: 100px;
                    p{
                        
                        margin-left:70px;
                        padding-top: 20px;
                        font-size: 23px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        color: #FF6600;
                        line-height: 60px;
                        &:last-child{
                            margin-right: 70px;
                            margin-left: 0px;
                            color: #666666;
                        }
                    }
                    span{
                        margin: 33px 20px;
                        font-size: 25px;
                        color:  #D7D7D7;

                    }
                }
                .login-form-center{
                    width: 348px;
                    height: 380px;
                    margin: 0 auto;
                    input{
                        width: 328px;
                        height: 50px;
                        margin: 10px 0;
                        border: 1px solid #E5E5E5;
                        padding-left: 18px;
                        font-size: 14px;
                    }
                    .login-btn{
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        background-color: $colorA;
                        color: $colorG;
                        border: none;
                        cursor: pointer;
                        font-size: 16px;
                        margin-bottom: 14px;
                        margin-top: 20px;
                        
                    }
                    ul{
                        display: flex;
                        justify-content: space-between;
                        span{
                            margin: 0 5px;
                            color: #e6e6e6;                        
                        }
                        li{
                            &:first-child{
                                a{ color: #FF6600; }    
                            }
                            &:last-child{
                                a{ color: #999999;}
                            }
                        }
                                       
                    }
                }
            }
        }
        .footer{
            background-color: #ffffff;
            border:none;
        }
    }
</style>