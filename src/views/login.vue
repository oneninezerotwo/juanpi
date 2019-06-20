<template>
    <div id="login">
        <a href="#" class="login-top"><img src="../img/go_load_new.png" alt=""></a>
        <div id="head">
            <div class="fixtop">
                <a id="t-find" href="javascript:history.go(-1);" class="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&amp;sv=449ce9ee"></a>
                <span id="t-index">登录</span>
                <a id="t-user" href="/register" class="free-reg" rel="nofollow" target="_parent">注册</a>
            </div>
        </div>
        <div class="main">
           <div class="nav">
                <router-link to="/number-login">卷皮账号登陆</router-link>
                <router-link to="/phone-login">手机快捷登录</router-link>
           </div>
           <div>
               <router-view></router-view>
           </div>
           
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
    
}
</script>

<style scope>
a {
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	/* -webkit-user-select: none; */
	-moz-user-focus: none;
    /* -moz-user-select: none; */
}
#login{
    background: #f4f4f8;
    margin: 0 auto;
    width: 100%;
}
.login-top{
    display: block;
    /* text-emphasis: none; */
    width: 100%;
}
.login-top img{
    width: 100%;
}
#head {
    height: 44px;
    width: 100%;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede;
    color: #fff;
}
#head .fixtop {
    height: 44px;
    background: #fff;
    z-index: 999;
    position: absolute;
    width: 100%;
    background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
}
#head #t-find {
    width: 25px;
    height: 25px;
    padding: 10px;
    left: 0;
    top: 0;
}
#head #t-index {
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    margin-top: 0;
}
#head #t-user{
    position: absolute;
    right: 0;
    top: 0;
    line-height: 44px;
    padding-top: 0;
    font-size: 14px;
    padding-right: 14px;
    color: #fff;
}
.main{
    background: #fff;
}
.nav a{
    display: inline-block;
    line-height: 44px;
    font-size: 14px;
    width: 50%;
    text-align: center;
}
.router-link-active{
  color: #ff464e;
  border-bottom: 2px solid #ff464e;
}

</style>
