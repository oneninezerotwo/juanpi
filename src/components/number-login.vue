<template>
    <div class="number">
        <div>
            <input type="tel" placeholder="请输入手机号/邮箱/用户名" v-model="username">
        </div>
        <div>
            <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="shade" v-show="show">
            <div class="wrong">
                {{wrongtext}}
            </div>
        </div>
        <a id="btn_quick_login" class="sub codeBtn disable-btn" rel="nofollow" @click="numlogin">登  录</a>
    </div>
</template>

<script>
import {getCookie,setCookie,delCookie} from "../cookie.js";
export default {
    data(){
        return{
            username:'',
            password:'',
            arr:[],
            i:'',
            a:'',
            wrongtext:'',
            show:0
        }
    },
    methods:{
        numlogin(){
            if(this.username && this.password){
                this.arr = document.cookie.split('; ')
                this.i = this.username+'='+this.password
                this.a = this.arr.indexOf(this.i)
                if(this.a >= 0){
                    this.$router.push({ path:'/mine',query:{username:this.username}})
                }else{
                    this.wrongtext = '账号密码不正确'
                    this.show = !0
                    setTimeout(()=>{
                        this.show = 0
                    },2500)
                }
            }else{
                this.wrongtext = '账号密码不能为空'
                this.show = !0
                setTimeout(()=>{
                    this.show = 0
                },2500)
            }
        }
    }
}
</script>

<style>
.number input {
    height: 48px;
    width: 100%;
    border: 0;
    font-size: 14px;
    outline: none;
}
.number div{
    border-bottom: 1px solid #ebebeb;
    position: relative;
}
a {
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-moz-user-focus: none;
}
#btn_quick_login{
    display: block;
    background: #dbdbdb;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    margin-top: 25px;
    text-align: center;
    color: #fff;
}
.number .shade{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 9999;
}
.number .shade .wrong{
    width: 200px;
    padding: 10px 0;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    background: #dbdbdb;
    color: #222;
    align-items: center;
    text-align: center;
    font-size: 18px;
}
</style>
