<template>
    <div id="mine">
        <header id="mine-header">
            <div class="userTop">
				<a id="t-goback" href="javascript:window.history.go(-1)">
                    <span class="return fl"  @click="$router.back(-1)"><img src="../img/return.png" alt=""></span>
                </a>
                <span class="quit fr" @click="quit">退出</span>
				<span id="t-index">个人中心</span>
			</div>
            <div class="user-login" v-show="!this.$route.query.username">
                <a href="javascript:;" @click="goto('register')">注册</a>
                <i class="line"></i>
                <a href="#" @click="goto('login')">登录</a>
            </div>

            <div class="user" v-show="this.$route.query.username">
                <div class="head_img">
                    <a href="javascript:;">
                        <img src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&amp;type=11&amp;height=80&amp;width=80%7Ciopcmd=convert&amp;Q=88&amp;dst=jpg">
                    </a>	
                </div>
                <div class="message">
                    <p class="tel">{{this.$route.query.username}}</p>
                    <div class="message_detal">
                        <span>我的账户</span>
                    </div>	
                </div>
            </div>
        </header>

        <div class="userBox">
            <a href="//m.juanpi.com/order" class="user-item-horizontal">
                <span>我的订单</span>
                <span class="label">全部订单</span>
            </a>
        </div>
        <div class="userItem">
            <!-- 新增横菜单 -->
            <a href="javascript:;">
                <em class="iconfont icon-daifukuan"><img src="../img/mine (1).png" alt=""></em><span class="text">待付款</span></a>
            <a href="javascript:;">
                <em class="iconfont icon-daichengtuan"><img src="../img/mine (2).png" alt=""></em><span class="text">待成团</span></a>
            <a href="javascript:;">
                <em class="iconfont icon-daishouhuo"><img src="../img/mine (3).png" alt=""></em><span class="text">待收货</span></a>
            <a href="javascript:;">
                <em class="iconfont icon-tuikuanshouhou"><img src="../img/mine (4).png" alt=""></em><span class="text">退款/售后</span></a>
        </div>

        <div class="userItems">
            <a href="javascript:;">
                <span>我的优惠券</span>
            </a>
            <a href="javascript:;">
                <span>我的收藏</span>
            </a>
            <a href="javascript:;">
                <span>我的拼团</span>
            </a>
            <a href="javascript:;">
                <span>我的免单券</span>
                <span class="label fr">0张</span>
            </a>
            <a href="javascript:;">
                <span>我的优惠券</span>
                <span class="label fr">新用户免费领 1000元</span>
            </a>
        </div>

        <div class="userItems">
            <a href="javascript:;">
                <span>客服中心</span>
            </a>
            <a href="javascript:;">
                <span>关于卷皮</span>
            </a>
        </div>

        <div id="foot">
            <div class="foot-nav">
                <a href="javascript:;">返回首页</a>
                <a href="javascript:;" class="joa_load_app">客户端</a>
                <a href="javascript:;" id="pcJuanpi">电脑版</a>
            </div>
            <div class="cut-line"></div>
            <h2>copyright © 武汉奇米网络科技有限公司</h2><!-- 2015卷皮折扣 -->
        </div>
    </div>
</template>

<script>
import {getCookie,setCookie,delCookie} from "../cookie.js";
export default {
    methods: {
        goto(i) {
            if (i == "register") {
                this.$router.push({ path: "/register" });
            } else if (i == "login") {
                this.$router.push({ path: "/login" });
            }
        },
        quit(){
            this.$route.query.username = ''
            console.log(this.$route.query.username)
        }
    }
};
</script>

<style scope>
a {
  text-decoration: none;
  color: #666;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
#mine {
  background: #f4f4f8;
  margin: 0 auto;
  width: 100%;
}
#mine-header {
  height: 144px;
  background: #ff464e;
  background-image: url(../img/user_center_bg.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
  border-bottom: none;
}
.userTop {
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  padding: 0 10px;
}
#t-goback img{
    width: 18px;
}
#t-index {
  font-size: 18px;
  padding-left: 44px;
  padding-right: 44px;
}
.user-login {
  position: relative;
  font-size: 0;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.user-login a {
  font-size: 20px;
  padding-left: 48px;
  padding-right: 48px;
  color: #fff;
}
.user-login .line {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 2px;
  background-color: #fff;
  transform: translate(-50%, -50%);
}
.user-item-horizontal {
  display: block;
  position: relative;
  height: 48px;
  line-height: 48px;
  padding: 0 0.59733rem 0 0.768rem;
  font-size: 15px;
  background-color: #fff;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
}
.user-item-horizontal .label {
  float: right;
  color: #999999;
}
.userItem {
  padding-top: 15px;
  padding-bottom: 12px;
  font-size: 0;
  background-color: #fff;
}
.userItem a {
  position: relative;
  display: inline-block;
  width: 25%;
  font-size: 12px;
  color: #666;
  text-align: center;
  vertical-align: top;
}
.userItem .iconfont {
  display: block;
  margin: 0 auto;
  margin-bottom: 6px;
  font-size: 28px;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.userItem .iconfont img {
  width: 28px;
}
.userItems {
  margin-top: 10px;
}
.userItems a {
  display: block;
  position: relative;
  height: 48px;
  line-height: 48px;
  padding: 0 14px 15px;
  font-size: 15px;
  background-color: #fff;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
}
.userItems a:after {
  content: "";
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 0;
  height: 2px;
  background-color: #ebebeb;
  transform: scaleY(0.5);
}
.userItems a .label {
  color: #999;
  font-size: 14px;
}
#foot {
    margin-top: 10px;
    width: 100%;
    /* height: 3.88267rem; */
    background: #fff;
    text-align: center;
    position: relative;
}
.foot-nav {
    padding-top: 25px;
    padding-bottom: 25px;
    line-height: 25px;
}
.foot-nav a {
    display: inline-block;
    color: #666;
    font-size: 12px;
    line-height: 12px;
    margin: 0 auto;
    width: 31%;
    border-right: 1px solid #ebebeb;
}
.foot-nav a:last-child {
    border-right: none;
}
#foot .cut-line {
    width: 90%;
    border-bottom: 1px solid #ebebeb;
    margin: 0 auto 42.5px;
    height: 1px;
    font-size: 0;
}
#foot h2 {
    position: absolute;
    font-size: 10px;
    height: 25px;
    line-height: 25px;
    top: 62px;
    left: 89px;
    color: #bbb;
    padding: 0 8px;
    font-weight: 400;
    background: #fff;
}
#mine-header .user {
    display: block;
    color: #fff;
    margin: 23px 0 25px 5px;
    overflow: hidden;
}
.head_img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
    margin-left: .768rem;
    border: 2px solid #fff;
    overflow: hidden;
}
.head_img img {
    width: 100%;
    height: auto;
}
.message{
    width: auto;
    float: left;
    margin-left: 20px;
}
.message .message_detal {
    width: 100%;
    height: 20px;
    margin-top: 10px;
    padding-right: 5px;
}
.message .message_detal span {
    position: relative;
    display: block;
    float: left;
    margin: 0;
    font-size: 12px;
    height: 15px;
    line-height: 15px;
    background: #f3414a;
    border: 1px solid #ff8282;
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 15px;
    margin-right: 5px;
    color: #fff;
}

</style>

