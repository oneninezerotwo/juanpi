<template>
    <div class="register">
        <header id="register-header">
            <div class="fixtop">
                <a href="javascript:history.go(-1);" id="t-find" class="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&amp;sv=449ce9ee"></a>
                <span id="t-index">注册</span>
            </div>
        </header>
        <div class="main">
            <p class="reg-notice">请确保你的手机畅通，用于接收验证码短信</p>
            <form class="rediter-form">
                <div>
                    <input type="tel" pattern="[0-9]*" placeholder="请输入账号" v-model="username">
                    <em class="input-close" @click="delusername" v-show="username"  id="input-close1"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee"></em>
                </div>
                <div>
                    <input type="password" placeholder="请输入验密码" v-model="password">
                    <em class="input-close" @click="delpassword" v-show="password" id="input-close2"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee"></em>
                </div>
            </form>
        <a id="btn-code" href="javascript:;" class="codeBtn disable-btn" @click="register">注册</a>
        </div>
    </div>
</template>

<script>
import {getCookie,setCookie,delCookie} from "../cookie.js";
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods: {
        delusername(){
            this.username = ''
        },
        delpassword(){
            this.password = ''
        },
        register(){
            if(this.username && this.password){
                 setCookie(this.username,this.password);
                 this.$router.push({ path:'/login',query:{username:this.username}})
            }
        }
    },
}
</script>

<style scope>
.register{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
}
#register-header{
    height: 44px;
    width: 100%;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede;
}
.fixtop{
    height: 44px;
    background: #fff;
    z-index: 999;
    position: absolute;
    width: 100%;
}
#t-find {
    width: 25px;
    height: 25px;
    padding: 10px;
    left: 0;
    top: 0;
    float: left;
}
#t-find img {
    width: 100%;
    height: 100%;
}
#t-index {
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    display: block;
    text-align: center
}
.main {
    padding-left: 12px;
    padding-right: 12px;
}
.main .reg-notice {
    font-size: 12px;
    margin-top: 28px;
    margin-bottom: 20px;
    line-height: 15px;
    text-align: center;
    color: #999;
}
.main .rediter-form div{
    border-bottom: 1px solid #ebebeb;
    position: relative;
}
.main .rediter-form input{
    height: 48px;
    width: 100%;
    border: 0;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
}
.input-close{
    position: absolute;
    top: 0;
    right: 20px;
    width: 25px;
    height: 48px;
}
.input-close img{
    margin-top: 12px;
    width: 100%;
}
#btn-code{
    background: #dbdbdb;
    margin-top: 25px;
    font-size: 18px;
    line-height: 48px;
    height: 48px;
    display: block;
    text-align: center;
    color: #fff;
}
</style>
