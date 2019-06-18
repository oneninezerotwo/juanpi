<template>
  <div class="app">
    <header id="head" class="head" style="display: none;">
      <div class="fixtop">
        <span id="t-find">
          <a class="btn btn-left" href="javascript:window.history.go(-1)">
            <span class="iconfont icon-fanhui"></span>
          </a>
        </span>
        <span id="t-index">全部分类</span>
        <span id="t-user"></span>
      </div>
    </header>

    <div class="cate-list">
      <!--搜索栏-->
      <div id="search-box">
        <a href="//m.juanpi.com/keywords">
          <div class="box-search">
            <input
              type="search"
              id="keyword"
              name="keyword"
              x-webkit-speech
              placeholder="搜索商品"
              autocomplete="off"
              value
              disabled
            >
          </div>
          <button id="search-submit" type="submit">
            <img
              src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&amp;sv=449ce9ee"
            >
          </button>
        </a>
      </div>
      <!--左边栏-->

      <div class="list-left" style="height: 646.875px;">
        <ul
          class="list-title"
          style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
        >
          <li
            v-for="(s,index) in list"
            :key="index"
            :cate_id="s.cate_id"
            :data-bc="s.data_bc"
            v-text="s.text"
            @click="tab(index),getProductInfoData(s.rul)"
            :class="{color_red:index===curlrd}"
          ></li>
        </ul>
      </div>

      <!--右边栏-->

      <div class="list-right" style="height: 646.875px;">
        <router-link to="datails" id="wraper">
          <div
            class="third-cate"
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <div
              class="cate-second"
              style="width: 81.6px;"
              v-for="(p,index) in ProductInfoData"
              :key="index"
            >
              <a
                href="//m.juanpi.com/cate/59"
                cid="59"
                class="bc"
                data-bc="1_243_1_59"
                style="background: none;"
              >
                <img :src="p.img" class="cate-img lazy loaded">
                <span v-text="p.text"></span>
              </a>
              <!-- <div class="icon-new icon" v-if="p.ioc = ''"></div> -->
            </div>

            <div class="cate-bottom"></div>
          </div>
        </router-link>
      </div>
      <div style="clear: both;"></div>
    </div>
    <input type="hidden" value class="pf" name="pf">
    <input type="hidden" value class="area" name="area">
    <input type="hidden" value class="bi" name="bi">
    <input
      type="hidden"
      value="&amp;select=2_1&amp;page=%24%7Bpage%7D&amp;msort=%24%7Bmsort%7D"
      class="mapi_query"
      name="mapi_query"
    >
  </div>
</template>

<script>
import { close } from "fs";
export default {
  name: "sort",
  data() {
    return {
      ProductInfoData: [],
      list: [
        {
          text: "女装",
          cate_id: "243",
          data_bc: "1_243",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        },
        {
          text: "男装",
          cate_id: "244",
          data_bc: "2_244",
          rul:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort2"
        },
        {
          text: "母婴",
          cate_id: "245",
          data_bc: "3_245",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        },
        {
          text: "鞋子",
          cate_id: "2340",
          data_bc: "4_2340",
          rul:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort2"
        },
        {
          text: "箱包",
          cate_id: "36",
          data_bc: "5_36",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        },
        {
          text: "屠家百货",
          cate_id: "37",
          data_bc: "6_37",
          rul:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort2"
        },
        {
          text: "家电数码",
          cate_id: "38",
          data_bc: "7_38",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        },
        {
          text: "内衣配饰",
          cate_id: "39",
          data_bc: "8_39",
          rul:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort2"
        },
        {
          text: "美妆",
          cate_id: "40",
          data_bc: "9_40",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        },
        {
          text: "运动户外",
          cate_id: "41",
          data_bc: "10_41",
          rul:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort2"
        },
        {
          text: "美食",
          cate_id: "42",
          data_bc: "11_42",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        },
        {
          text: "车品文娱",
          cate_id: "43",
          data_bc: "12_43",
          rul:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort2"
        },
        {
          text: "通讯旅游",
          cate_id: "2310",
          data_bc: "13_2310",
          url:
            "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort"
        }
      ],
      curlrd: 0
    };
  },
  created() {
    this.getProductInfoData();
  },
  methods: {
    async getProductInfoData(url) {
      let id = url
        ? url
        : "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/sort";
      const data = await this.$ajax(id);
      console.log(data);
      // console.log(data.data.data.data);
      this.ProductInfoData = data.data.data;
      console.log(this.ProductInfoData);
    },
    tab(index) {
      this.curlrd = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "UTF-8";
#foot,
#foot h2,
.foot-nav,
.foot-nav a {
  position: relative;
}

#foot h2,
.foot-nav a {
  display: inline-block;
}

.foot-copyright {
  display: block;
}

#foot,
#foot h2 {
  background: #fff;
}

#foot,
.foot-nav a {
  text-align: center;
}

.foot-copyright {
  content: "";
  overflow: hidden;
}

blockquote,
body,
button,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

html {
  font-size: 312.5%;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}

body {
  background-color: #f4f4f8;
  color: #666;
  height: 100%;
  font-family: PingFang-SC-Regular, Helvetica Neue, Helvetica,
    Droid Sans Fallback, microsoft yahei, sans-serif;
}

body * {
  max-height: 9000rem;
}

fieldset,
img {
  border: 0;
}

address,
cite,
dfn,
em,
i,
var {
  font-style: normal;
}

a {
  color: #666;
}

a,
a:active,
a:hover {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}

:focus {
  outline: 0 none;
}

dl,
li,
ol,
ul {
  list-style: none;
}

li,
li:active,
ul {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input::-webkit-input-placeholder {
  color: #999;
}

input:-moz-placeholder,
input::-moz-placeholder {
  color: #999;
}

input:-ms-input-placeholder {
  color: #999;
}

input {
  -webkit-appearance: none;
}

.clear {
  clear: both;
}

.clear:after,
.clear:before {
  clear: both;
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.alert_fullbg {
  display: none;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 200;
  filter: alpha(opacity=50);
  opacity: 0.5;
  background-color: #000;
}

.main {
  max-width: 16rem;
  min-width: 8rem;
  position: relative;
}

.app,
.main {
  background: #f4f4f8;
  margin: 0 auto;
  width: 100%;
}

.app {
  position: absolute;
}

#head {
  height: 44px;
  width: 100%;
  max-width: 16rem;
  min-width: 8rem;
  overflow: inherit;
  position: relative;
  z-index: 199;
  border-bottom: 1px solid #dedede;
}

[data-dpr="2"] #head {
  height: 88px;
}

[data-dpr="3"] #head {
  height: 132px;
}

#head.logo {
  display: block;
  margin: 0 auto;
}

#head .logo img {
  height: 24px;
}

[data-dpr="2"] #head .logo img {
  height: 48px;
}

[data-dpr="3"] #head .logo img {
  height: 72px;
}

.fixtop {
  height: 44px;
  background: #fff;
  z-index: 999;
  position: absolute;
  width: 100%;
}

[data-dpr="2"] .fixtop {
  height: 88px;
}

[data-dpr="3"] .fixtop {
  height: 132px;
}

.fixtop span {
  display: block;
}

#classify {
  padding-top: 10px;
  padding-left: 12px;
  float: left;
}

[data-dpr="2"] #classify {
  padding-top: 20px;
}

[data-dpr="3"] #classify {
  padding-top: 30px;
}

[data-dpr="2"] #classify {
  padding-left: 24px;
}

[data-dpr="3"] #classify {
  padding-left: 36px;
}

#t-find {
  padding-top: 10px;
  padding-left: 12px;
  float: left;
}

[data-dpr="2"] #t-find {
  padding-top: 20px;
}

[data-dpr="3"] #t-find {
  padding-top: 30px;
}

[data-dpr="2"] #t-find {
  padding-left: 24px;
}

#index,
[data-dpr="3"] #t-find {
  padding-left: 36px;
}

#index {
  text-align: center;
  cursor: default;
  width: 100%;
  position: absolute;
  padding-right: 36px;
  z-index: -1;
  box-sizing: border-box;
}

[data-dpr="2"] #index {
  padding-left: 72px;
}

[data-dpr="3"] #index {
  padding-left: 108px;
}

[data-dpr="2"] #index {
  padding-right: 72px;
}

[data-dpr="3"] #index {
  padding-right: 108px;
}

#index .logo {
  display: block;
  margin-top: 10px;
  width: 100%;
}

[data-dpr="2"] #index .logo {
  margin-top: 20px;
}

[data-dpr="3"] #index .logo {
  margin-top: 30px;
}

#t-index {
  text-align: center;
  cursor: default;
  width: 100%;
  text-indent: 5%;
  position: absolute;
  padding-left: 36px;
  padding-right: 36px;
  z-index: -1;
  box-sizing: border-box;
  color: #333;
  font-size: 18px;
  line-height: 44px;
  height: 44px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

[data-dpr="2"] #t-index {
  padding-left: 72px;
}

[data-dpr="3"] #t-index {
  padding-left: 108px;
}

[data-dpr="2"] #t-index {
  padding-right: 72px;
}

[data-dpr="3"] #t-index {
  padding-right: 108px;
}

[data-dpr="2"] #t-index {
  font-size: 36px;
}

[data-dpr="3"] #t-index {
  font-size: 54px;
}

[data-dpr="2"] #t-index {
  line-height: 88px;
}

[data-dpr="3"] #t-index {
  line-height: 132px;
}

[data-dpr="2"] #t-index {
  height: 88px;
}

[data-dpr="3"] #t-index {
  height: 132px;
}

#user {
  padding-top: 10px;
  padding-right: 12px;
  float: right;
}

[data-dpr="2"] #user {
  padding-top: 20px;
}

[data-dpr="3"] #user {
  padding-top: 30px;
}

[data-dpr="2"] #user {
  padding-right: 24px;
}

[data-dpr="3"] #user {
  padding-right: 36px;
}

#t-user {
  padding-top: 10px;
  float: right;
}

[data-dpr="2"] #t-user {
  padding-top: 20px;
}

[data-dpr="3"] #t-user {
  padding-top: 30px;
}

#t-user a {
  color: #333;
  display: block;
  width: 36px;
  height: 24px;
  line-height: 22px;
  font-size: 14px;
  text-align: center;
  margin-right: 11px;
}

[data-dpr="2"] #t-user a {
  width: 71px;
}

[data-dpr="3"] #t-user a {
  width: 107px;
}

[data-dpr="2"] #t-user a {
  height: 48px;
}

[data-dpr="3"] #t-user a {
  height: 72px;
}

[data-dpr="2"] #t-user a {
  line-height: 44px;
}

[data-dpr="3"] #t-user a {
  line-height: 66px;
}

[data-dpr="2"] #t-user a {
  font-size: 28px;
}

[data-dpr="3"] #t-user a {
  font-size: 42px;
}

[data-dpr="2"] #t-user a {
  margin-right: 22px;
}

[data-dpr="3"] #t-user a {
  margin-right: 33px;
}

.btn {
  background-size: cover;
  display: inline-block;
  height: 0;
  overflow: hidden;
  text-decoration: none;
  width: 24px;
  height: 24px;
}

[data-dpr="2"] .btn {
  width: 48px;
}

[data-dpr="3"] .btn {
  width: 72px;
}

[data-dpr="2"] .btn {
  height: 48px;
}

[data-dpr="3"] .btn {
  height: 72px;
}

#head .btn {
  vertical-align: top;
}

#head .btn .iconfont {
  font-size: 24px;
}

[data-dpr="2"] #head .btn .iconfont {
  font-size: 48px;
}

[data-dpr="3"] #head .btn .iconfont {
  font-size: 72px;
}
/* 
.btn-type {
    background: url(/jpwebapp_v1/images_v1/head/btn-type.png?20160412) no-repeat scroll 0 0;
    background-size: contain
}

.btn-sign {
    background: url(/jpwebapp_v1/images_v1/head/btn-sign.png?20160812) no-repeat scroll 0 0;
    background-size: contain
}

.btn-back {
    background: url(/jpwebapp_v1/images_v1/head/btn-back.png?20160412) no-repeat scroll 0 0;
    background-size: contain
} */

#foot {
  margin-top: 10px;
  width: 100%;
  height: 4.55rem;
}

[data-dpr="2"] #foot {
  margin-top: 20px;
}

[data-dpr="3"] #foot {
  margin-top: 30px;
}

.foot-copyright {
  background: #ebebeb;
  height: 1px;
  width: 90%;
  margin: 0 auto;
  font-size: 0;
  line-height: 1px;
}

.foot-nav {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  line-height: 0.625rem;
}

.foot-nav a {
  color: #666;
  font-size: 0.55rem;
  line-height: 0.625rem;
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
  margin: 0 auto 1rem;
  height: 1px;
  font-size: 0;
}

#foot h2 {
  font-size: 0.5rem;
  height: 0.6rem;
  line-height: 0.6rem;
  top: -0.875rem;
  color: #bbb;
  padding: 0 0.2rem;
  font-weight: 400;
}

.go-app-new {
  background: hsla(0, 0%, 100%, 0.7);
  z-index: 99999;
  width: 100%;
  height: 0;
  transition: all 0.2s linear 0s;
}

.go-app-new img {
  width: 100%;
  vertical-align: middle;
  max-width: 16rem;
}

.go-app-new a {
  display: block;
  position: relative;
}

.go-app-new .closed {
  top: 0;
  right: 0;
  width: 1.25rem;
  height: 1.25rem;
}

.go-app-new .btn1,
.go-app-new .closed {
  display: block;
  position: absolute;
  z-index: 10;
  cursor: pointer;
}

.go-app-new .btn1 {
  top: 23%;
  left: 19%;
  width: 36%;
  height: 55%;
}

.go-app-new .btn2 {
  display: block;
  position: absolute;
  top: 23%;
  left: 59.6%;
  width: 36%;
  height: 55%;
  z-index: 10;
  cursor: pointer;
}

.goods-list .goods-a,
.img-thumbnail {
  position: relative;
  /* background: #fafafa url(/jpwebapp_v1/images_v1/wapblank.png) no-repeat 50%; */
  background-size: 310px;
}

.goods-list .goods-a img,
.img-thumbnail img {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s linear;
}

.goods-list .goods-a img.loaded,
.img-thumbnail img.loaded {
  opacity: 1;
}

@keyframes lazyload-appear {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.bg-thumbnail {
  position: relative;
  transition: 0.5s linear;
}

.bg-thumbnail:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fafafa url(/jpwebapp_v1/images_v1/wapblank.png) no-repeat 50%;
  background-size: 310px;
}

.bg-thumbnail.loaded {
  animation: 0.5s linear lazyload-appear;
}

.bg-thumbnail.loaded:before {
  opacity: 0;
}

#goods {
  height: 100%;
  width: 100%;
  overflow: hidden;
  min-height: 20rem;
}

.goods-list {
  width: 16.25rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.goods-list .goods-a {
  display: block;
  position: relative;
}

.goods-list .goods-a .placeholder {
  padding-bottom: 100%;
}

.goods-list .goods-a img.goods-a-corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.8rem;
  height: 1.8rem;
  z-index: 2;
}

.goods-list a:hover {
  text-decoration: none;
}

.goods-list .goods-a .buy-over {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
  overflow: hidden;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 3rem;
  background: rgba(0, 0, 0, 0.65);
  text-align: center;
  color: #fff;
  font-size: 0.7rem;
  border: 0.05rem solid hsla(0, 0%, 100%, 0.7);
  font-family: 微软雅黑;
}

.goods-list .goods-a .shop_logo {
  position: absolute;
  bottom: -0.625rem;
  right: 0.4rem;
  width: 2.5rem;
  height: 1.25rem;
  border: 1px solid #ebebeb;
  border-width: 1px;
  background-color: #fff;
}

[data-dpr="2"] .goods-list .goods-a .shop_logo {
  border-width: 1px;
}

[data-dpr="3"] .goods-list .goods-a .shop_logo {
  border-width: 2px;
}

.goods-list .goods-a .buy-little {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 10px;
  width: 52px;
  height: 17px;
  line-height: 17px;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  text-align: center;
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
  font-size: 20px;
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
  font-size: 30px;
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
  width: 104px;
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
  width: 156px;
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
  height: 34px;
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
  height: 51px;
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
  line-height: 34px;
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
  line-height: 51px;
}

.goods-list li {
  width: 8.1rem;
  margin-top: 0.1rem;
}

.goods-list li,
.goods-list li.kw1 {
  float: left;
  position: relative;
  background: #fff;
}

.goods-list li.kw1 {
  width: 16rem;
  height: 6.6rem;
}

.goods-list li.kw2 {
  float: left;
  width: 8rem;
  position: relative;
  margin-right: 0.2rem;
  background: none;
  overflow: hidden;
}

.goods-list li img {
  width: 8rem;
  height: 8rem;
  position: relative;
  display: inherit;
}

.goods-list li .actinfo {
  position: absolute;
  bottom: 0;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  width: 96%;
  color: #fff;
  padding-left: 4%;
  background-color: rgba(0, 0, 0, 0.45);
}

[data-dpr="2"] .goods-list li .actinfo {
  height: 40px;
}

[data-dpr="3"] .goods-list li .actinfo {
  height: 60px;
}

[data-dpr="2"] .goods-list li .actinfo {
  font-size: 24px;
}

[data-dpr="3"] .goods-list li .actinfo {
  font-size: 36px;
}

[data-dpr="2"] .goods-list li .actinfo {
  line-height: 40px;
}

[data-dpr="3"] .goods-list li .actinfo {
  line-height: 60px;
}

.goods-list li h3 {
  margin-top: 2px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 300;
  color: #333;
  background: hsla(0, 0%, 100%, 0.8);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  margin-left: 8px;
  height: 20px;
  line-height: 27px;
}

[data-dpr="2"] .goods-list li h3 {
  margin-top: 4px;
}

[data-dpr="3"] .goods-list li h3 {
  margin-top: 6px;
}

[data-dpr="2"] .goods-list li h3 {
  margin-bottom: 6px;
}

[data-dpr="3"] .goods-list li h3 {
  margin-bottom: 9px;
}

[data-dpr="2"] .goods-list li h3 {
  font-size: 24px;
}

[data-dpr="3"] .goods-list li h3 {
  font-size: 36px;
}

[data-dpr="2"] .goods-list li h3 {
  margin-left: 16px;
}

[data-dpr="3"] .goods-list li h3 {
  margin-left: 24px;
}

[data-dpr="2"] .goods-list li h3 {
  height: 40px;
}

[data-dpr="3"] .goods-list li h3 {
  height: 60px;
}

[data-dpr="2"] .goods-list li h3 {
  line-height: 54px;
}

[data-dpr="3"] .goods-list li h3 {
  line-height: 81px;
}

.goods-list li h3.long {
  width: 96%;
}

.goods-list li h3.short {
  width: 100%;
  box-sizing: border-box;
  padding-right: 62px;
}

[data-dpr="2"] .goods-list li h3.short {
  padding-right: 124px;
}

[data-dpr="3"] .goods-list li h3.short {
  padding-right: 186px;
}

.goods-list li h3 .zhifa {
  color: #ff464e;
  border: 1px solid #ff464e;
  font-size: 11px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 5px;
  line-height: 11px;
  border-width: 1px;
}

[data-dpr="2"] .goods-list li h3 .zhifa {
  font-size: 22px;
}

[data-dpr="3"] .goods-list li h3 .zhifa {
  font-size: 33px;
}

[data-dpr="2"] .goods-list li h3 .zhifa {
  padding-left: 10px;
}

[data-dpr="3"] .goods-list li h3 .zhifa {
  padding-left: 15px;
}

[data-dpr="2"] .goods-list li h3 .zhifa {
  padding-right: 10px;
}

[data-dpr="3"] .goods-list li h3 .zhifa {
  padding-right: 15px;
}

[data-dpr="2"] .goods-list li h3 .zhifa {
  margin-right: 10px;
}

[data-dpr="3"] .goods-list li h3 .zhifa {
  margin-right: 15px;
}

[data-dpr="2"] .goods-list li h3 .zhifa {
  line-height: 22px;
}

[data-dpr="3"] .goods-list li h3 .zhifa {
  line-height: 33px;
}

[data-dpr="2"] .goods-list li h3 .zhifa {
  border-width: 1px;
}

[data-dpr="3"] .goods-list li h3 .zhifa {
  border-width: 2px;
}

.goods-list li h3 em {
  margin-left: 2px;
  margin-right: 2px;
  color: #ccc;
}

[data-dpr="2"] .goods-list li h3 em {
  margin-left: 3px;
}

[data-dpr="3"] .goods-list li h3 em {
  margin-left: 5px;
}

[data-dpr="2"] .goods-list li h3 em {
  margin-right: 3px;
}

[data-dpr="3"] .goods-list li h3 em {
  margin-right: 5px;
}

.goods-list li h3 span.juan {
  color: #ff464e;
}

.only-time {
  position: absolute;
  color: #bbb;
  font-size: 11px;
  text-align: right;
  right: 0;
  line-height: 1.1;
  bottom: 2px;
}

[data-dpr="2"] .only-time {
  font-size: 22px;
}

[data-dpr="3"] .only-time {
  font-size: 33px;
}

[data-dpr="2"] .only-time {
  bottom: 4px;
}

[data-dpr="3"] .only-time {
  bottom: 6px;
}

.only-time.brand-only-time {
  bottom: -18px;
}

[data-dpr="2"] .only-time.brand-only-time {
  bottom: -36px;
}

[data-dpr="3"] .only-time.brand-only-time {
  bottom: -54px;
}

.list-price {
  width: 92%;
  position: relative;
  bottom: 0;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 0;
  line-height: 24px;
  height: 24px;
}

[data-dpr="2"] .list-price {
  margin-left: 16px;
}

[data-dpr="3"] .list-price {
  margin-left: 24px;
}

[data-dpr="2"] .list-price {
  margin-right: 16px;
}

[data-dpr="3"] .list-price {
  margin-right: 24px;
}

[data-dpr="2"] .list-price,
[data-dpr="3"] .list-price {
  margin-top: 0;
}

[data-dpr="2"] .list-price {
  line-height: 48px;
}

[data-dpr="3"] .list-price {
  line-height: 72px;
}

[data-dpr="2"] .list-price {
  height: 48px;
}

[data-dpr="3"] .list-price {
  height: 72px;
}

.normal-list .list-price {
  margin-left: 0;
}

.list-price.special {
  color: #333;
}

.list-price .global-goods {
  color: #60e;
}

.price-new {
  font-size: 15px;
  color: #ff464e;
  margin-right: 4px;
}

[data-dpr="2"] .price-new {
  font-size: 30px;
}

[data-dpr="3"] .price-new {
  font-size: 45px;
}

[data-dpr="2"] .price-new {
  margin-right: 8px;
}

[data-dpr="3"] .price-new {
  margin-right: 12px;
}

.global .price-new {
  color: #60e;
}

.list-price .coupon-info {
  position: absolute;
  bottom: 0;
  font-size: 13px;
  color: #ff464e;
  width: 63%;
  display: inline-block;
  line-height: 15px;
  line-height: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

[data-dpr="2"] .list-price .coupon-info {
  font-size: 26px;
}

[data-dpr="3"] .list-price .coupon-info {
  font-size: 39px;
}

[data-dpr="2"] .list-price .coupon-info {
  line-height: 30px;
}

[data-dpr="3"] .list-price .coupon-info {
  line-height: 45px;
}

[data-dpr="2"] .list-price .coupon-info {
  line-height: 28px;
}

[data-dpr="3"] .list-price .coupon-info {
  line-height: 42px;
}

.del {
  color: #bbb;
  text-decoration: line-through;
  font-size: 11px;
  vertical-align: 1px;
}

[data-dpr="2"] .del {
  font-size: 22px;
}

[data-dpr="3"] .del {
  font-size: 33px;
}

[data-dpr="2"] .del {
  vertical-align: 2px;
}

[data-dpr="3"] .del {
  vertical-align: 3px;
}

.price-new i {
  font-size: 15px;
}

[data-dpr="2"] .price-new i {
  font-size: 30px;
}

[data-dpr="3"] .price-new i {
  font-size: 45px;
}

.good-btn {
  position: absolute;
  color: #fff;
  font-size: 10px;
  text-align: right;
  right: 0;
  line-height: 1.1;
  bottom: 7px;
}

[data-dpr="2"] .good-btn {
  font-size: 20px;
}

[data-dpr="3"] .good-btn {
  font-size: 30px;
}

[data-dpr="2"] .good-btn {
  bottom: 14px;
}

[data-dpr="3"] .good-btn {
  bottom: 21px;
}

.goods-list li .good-btn img {
  height: 12px;
  width: auto;
  float: left;
  margin-right: 3px;
}

.good-btn.start {
  color: #6db110;
}

.good-btn.end {
  color: #999;
}

.buy .good-btn {
  color: #ff464e;
}

.end .good-btn,
.start .good-btn {
  color: #999;
}

.list-price .pintuan_icon {
  display: inline-block;
  height: 11px;
  line-height: 11px;
  padding: 2px;
  padding-bottom: 1px;
  vertical-align: middle;
  font-size: 10px;
  background-color: #ff464e;
  color: #fff;
  margin-left: 0;
  margin-right: 0.25rem;
}

[data-dpr="2"] .list-price .pintuan_icon {
  height: 22px;
}

[data-dpr="3"] .list-price .pintuan_icon {
  height: 33px;
}

[data-dpr="2"] .list-price .pintuan_icon {
  line-height: 22px;
}

[data-dpr="3"] .list-price .pintuan_icon {
  line-height: 33px;
}

[data-dpr="2"] .list-price .pintuan_icon {
  padding: 3px;
}

[data-dpr="3"] .list-price .pintuan_icon {
  padding: 5px;
}

[data-dpr="2"] .list-price .pintuan_icon {
  padding-bottom: 2px;
}

[data-dpr="3"] .list-price .pintuan_icon {
  padding-bottom: 3px;
}

[data-dpr="2"] .list-price .pintuan_icon {
  font-size: 20px;
}

[data-dpr="3"] .list-price .pintuan_icon {
  font-size: 30px;
}

.paging {
  width: 100%;
  text-align: center;
  margin: 4.2rem 0;
  clear: both;
}

.paging img {
  width: 6rem;
}

.h5kw .list-price {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}

.h5kw .coupon-info,
.h5kw h3 {
  width: 100%;
  text-align: center;
}

.h5kw h3 {
  margin-left: 0 !important;
}

.h5kw .kw_title {
  display: inline-block;
  max-width: 132px;
  background-color: transparent;
  height: 20px;
  line-height: 20px;
  vertical-align: top;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

[data-dpr="2"] .h5kw .kw_title {
  max-width: 264px;
}

[data-dpr="3"] .h5kw .kw_title {
  max-width: 396px;
}

[data-dpr="2"] .h5kw .kw_title {
  height: 40px;
}

[data-dpr="3"] .h5kw .kw_title {
  height: 60px;
}

[data-dpr="2"] .h5kw .kw_title {
  line-height: 40px;
}

[data-dpr="3"] .h5kw .kw_title {
  line-height: 60px;
}

.h5kw .only-time {
  position: static;
  bottom: auto;
  right: auto;
  display: inline-block;
  vertical-align: top;
  height: 20px;
  line-height: 20px;
}

[data-dpr="2"] .h5kw .only-time {
  height: 40px;
}

[data-dpr="3"] .h5kw .only-time {
  height: 60px;
}

[data-dpr="2"] .h5kw .only-time {
  line-height: 40px;
}

[data-dpr="3"] .h5kw .only-time {
  line-height: 60px;
}

.new-goods {
  width: 16rem;
  line-height: 1.4;
  font-size: 0;
  color: #3b3b3b;
  margin-bottom: 0.5rem;
  background-color: #fff;
  box-sizing: border-box;
}

.new-goods * {
  box-sizing: inherit;
}

.new-goods p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.new-goods img {
  width: 100%;
  height: 100%;
}

.new-goods-ad-img {
  display: block;
  height: auto;
  min-height: 5rem;
}

.new-goods-a {
  display: block;
}

.new-goods-header {
  position: relative;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
}

.new-goods-header:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 1.8rem;
  width: 0;
}

.new-goods-header div {
  font-size: 0.6rem;
  display: inline-block;
  vertical-align: middle;
}

.new-goods-header p {
  width: 11.25rem;
}

.new-goods-header__img {
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  border: 0.025rem solid #ebebeb;
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
}

.new-goods-header__title {
  font-size: 0.7rem;
}

.new-goods-header__right {
  position: absolute;
  top: 0.5rem;
  right: 0.6rem;
  height: 1.8rem;
}

.new-goods-header__right:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 0;
}

.new-goods-header__right:after {
  content: "";
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.05rem;
  border-right: 0.05rem solid #999;
  border-top: 0.05rem solid #999;
  transform: rotate(45deg);
}

.new-goods-header__right:after,
.new-goods-header__right img,
.new-goods-header__right span {
  display: inline-block;
  vertical-align: middle;
}

.new-goods-header__right img {
  width: auto;
  height: 1.5rem;
}

.new-goods-item {
  display: inline-block;
  width: 8rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-bottom: 0.6rem;
  border-right: 0.05rem solid #ebebeb;
  font-size: 0.6rem;
  cursor: pointer;
}

.new-goods-item__img {
  width: 6.75rem;
  height: 6.75rem;
  margin-bottom: 0.4rem;
}

.new-goods-item__img img.new-goods-item__img__corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.8rem;
  height: 1.8rem;
  z-index: 2;
}

.new-goods-item span {
  color: #ff464e;
  font-size: 0.75rem;
}

.new-goods-item del {
  padding-left: 0.3rem;
  font-size: 0.55rem;
}

.new-goods-tag {
  display: inline-block;
  line-height: 0.65rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin-right: 0.2rem;
  font-size: 0.55rem;
  color: #ff464e;
  border: 0.025rem solid #ff464e;
}

.new-goods .flag {
  width: 0.75rem;
  height: 0.5rem;
  margin-right: 0.2rem;
}

.new-goods .gray-txt {
  color: #999;
}

.vip_mark {
  padding: 0.05rem 0.1rem;
  background: #2f3345;
  color: #ffe8ab;
  border: 1px solid transparent;
  border-radius: 1px;
  font-size: 0.45rem;
  margin-left: 0.375rem;
  vertical-align: top;
}

.vip-wrapper {
  margin: 0.15rem 0 -0.7rem;
}

.app-other {
  background: #fff;
  margin: 0 auto;
  position: absolute;
  width: 80%;
  min-height: 15rem;
  z-index: 202;
  top: 0;
  left: -80%;
  display: block;
  visibility: hidden;
  transition: all 0.3s linear 0s;
}

.app-other .slide-con {
  position: relative;
}

.app-other p {
  position: absolute;
  bottom: 8%;
  left: 50%;
  width: 180px;
  margin-left: -90px;
  text-align: center;
  color: #333;
  text-decoration: underline;
}

[data-dpr="2"] .app-other p {
  width: 360px;
}

[data-dpr="3"] .app-other p {
  width: 540px;
}

[data-dpr="2"] .app-other p {
  margin-left: -180px;
}

[data-dpr="3"] .app-other p {
  margin-left: -270px;
}

.app-other p a {
  float: left;
  font-size: 12px;
  color: #333;
  text-decoration: none;
}

[data-dpr="2"] .app-other p a {
  font-size: 24px;
}

[data-dpr="3"] .app-other p a {
  font-size: 36px;
}

.app-other p a em {
  width: 24px;
  height: 24px;
  display: inline-block;
}

[data-dpr="2"] .app-other p a em {
  width: 48px;
}

[data-dpr="3"] .app-other p a em {
  width: 72px;
}

[data-dpr="2"] .app-other p a em {
  height: 48px;
}

[data-dpr="3"] .app-other p a em {
  height: 72px;
}

/* .app-other p a em.icon-user {
    background: url(../../../images_v1/icon/icon-user.png?161112) no-repeat;
    background-size: cover
}

.app-other p a em.icon-about {
    background: url(../../../images_v1/icon/icon-about.png?161112) no-repeat;
    background-size: cover
} */

.app-other p a:last-child {
  float: right;
}

.app-other p a:hover {
  color: #f66;
}
/* 
.app-other p a:hover em.icon-user {
    background: url(../../../images_v1/icon/icon-user-active.png?161112) no-repeat;
    background-size: cover
}

.app-other p a:hover em.icon-about {
    background: url(../../../images_v1/icon/icon-about-active.png?161112) no-repeat;
    background-size: cover
} */

.app-other ul li {
  height: auto;
  line-height: 26px;
  line-height: 24px;
  padding-top: 11px;
  padding-bottom: 11px;
}

[data-dpr="2"] .app-other ul li {
  line-height: 48px;
}

[data-dpr="3"] .app-other ul li {
  line-height: 72px;
}

[data-dpr="2"] .app-other ul li {
  padding-top: 22px;
}

[data-dpr="3"] .app-other ul li {
  padding-top: 33px;
}

[data-dpr="2"] .app-other ul li {
  padding-bottom: 22px;
}

[data-dpr="3"] .app-other ul li {
  padding-bottom: 33px;
}

.app-other ul li.normal {
  border-left-color: #fff;
  border-left-style: solid;
  border-left-width: 4px;
  cursor: pointer;
}

[data-dpr="2"] .app-other ul li.normal {
  border-left-width: 7px;
}

[data-dpr="3"] .app-other ul li.normal {
  border-left-width: 11px;
}

.app-other ul li.normal a {
  display: block;
  font-size: 15px;
}

[data-dpr="2"] .app-other ul li.normal a {
  font-size: 30px;
}

[data-dpr="3"] .app-other ul li.normal a {
  font-size: 45px;
}

.app-other ul li.normal em {
  display: block;
  float: left;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-left: 15px;
}

[data-dpr="2"] .app-other ul li.normal em {
  width: 48px;
}

[data-dpr="3"] .app-other ul li.normal em {
  width: 72px;
}

[data-dpr="2"] .app-other ul li.normal em {
  height: 48px;
}

[data-dpr="3"] .app-other ul li.normal em {
  height: 72px;
}

[data-dpr="2"] .app-other ul li.normal em {
  margin-right: 32px;
}

[data-dpr="3"] .app-other ul li.normal em {
  margin-right: 48px;
}

[data-dpr="2"] .app-other ul li.normal em {
  margin-left: 29px;
}

[data-dpr="3"] .app-other ul li.normal em {
  margin-left: 44px;
}

/* .app-other ul li.normal em.home {
    background: url(../../../images_v1/icon/icon-home.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal em.fushi {
    background: url(../../../images_v1/icon/icon-fushi.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal em.jujia {
    background: url(../../../images_v1/icon/icon-jujia.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal em.muying {
    background: url(../../../images_v1/icon/icon-muying.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal em.meishi {
    background: url(../../../images_v1/icon/icon-meishi.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal em.meizhuang {
    background: url(../../../images_v1/icon/icon-meizhuang.png?161112) no-repeat;
    background-size: cover
} */

.app-other ul li.normal.active {
  background: #f0f0f0;
  border-left-color: #ff464e;
  border-left-style: solid;
  border-left-width: 4px;
}

[data-dpr="2"] .app-other ul li.normal.active {
  border-left-width: 7px;
}

[data-dpr="3"] .app-other ul li.normal.active {
  border-left-width: 11px;
}

.app-other ul li.normal.active a {
  color: #ff464e;
}

/* .app-other ul li.normal.active em.home {
    background: url(../../../images_v1/icon/icon-home-active.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal.active em.fushi {
    background: url(../../../images_v1/icon/icon-fushi-active.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal.active em.jujia {
    background: url(../../../images_v1/icon/icon-jujia-active.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal.active em.muying {
    background: url(../../../images_v1/icon/icon-muying-active.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal.active em.meishi {
    background: url(../../../images_v1/icon/icon-meishi-active.png?161112) no-repeat;
    background-size: cover
}

.app-other ul li.normal.active em.meizhuang {
    background: url(../../../images_v1/icon/icon-meizhuang-active.png?161112) no-repeat;
    background-size: cover
} */

.app-other ul li.search {
  margin-left: 12px;
  margin-right: 12px;
  border-bottom: 1px solid #ebebeb;
}

[data-dpr="2"] .app-other ul li.search {
  margin-left: 24px;
}

[data-dpr="3"] .app-other ul li.search {
  margin-left: 36px;
}

[data-dpr="2"] .app-other ul li.search {
  margin-right: 24px;
}

[data-dpr="3"] .app-other ul li.search {
  margin-right: 36px;
}

.box-search {
  width: 92%;
  position: relative;
  margin-left: 6px;
  height: 24px;
  line-height: 24px;
  padding: 0;
  vertical-align: middle;
  background-color: #fff;
  color: #999;
  float: left;
}

[data-dpr="2"] .box-search {
  margin-left: 12px;
}

[data-dpr="3"] .box-search {
  margin-left: 18px;
}

[data-dpr="2"] .box-search {
  height: 48px;
}

[data-dpr="3"] .box-search {
  height: 72px;
}

[data-dpr="2"] .box-search {
  line-height: 48px;
}

[data-dpr="3"] .box-search {
  line-height: 72px;
}

.box-search input {
  font: -webkit-small-control;
  font-size: 16px;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  border: none;
  outline-style: none;
  word-break: normal;
  vertical-align: middle;
  height: 24px;
  line-height: 24px;
  margin-left: 25px;
  color: #666;
  position: absolute;
}

[data-dpr="2"] .box-search input {
  font-size: 32px;
}

[data-dpr="3"] .box-search input {
  font-size: 48px;
}

[data-dpr="2"] .box-search input {
  height: 48px;
}

[data-dpr="3"] .box-search input {
  height: 72px;
}

[data-dpr="2"] .box-search input {
  line-height: 48px;
}

[data-dpr="3"] .box-search input {
  line-height: 72px;
}

[data-dpr="2"] .box-search input {
  margin-left: 50px;
}

[data-dpr="3"] .box-search input {
  margin-left: 75px;
}

.box-search input:focus {
  outline-offset: -2px;
}

.box-search .del {
  display: none;
  position: absolute;
  right: 8px;
  top: 6px;
  line-height: normal;
}

[data-dpr="2"] .box-search .del {
  right: 15px;
}

[data-dpr="3"] .box-search .del {
  right: 23px;
}

[data-dpr="2"] .box-search .del {
  top: 12px;
}

[data-dpr="3"] .box-search .del {
  top: 18px;
}

.box-search .del img {
  height: 12px;
}

[data-dpr="2"] .box-search .del img {
  height: 24px;
}

[data-dpr="3"] .box-search .del img {
  height: 36px;
}

#search-box {
  position: relative;
  height: auto;
  overflow: hidden;
}

#search-box button {
  display: block;
  position: absolute;
  top: 0;
  left: 6px;
  border: 0 none;
  background: none;
  cursor: pointer;
}

[data-dpr="2"] #search-box button {
  left: 12px;
}

[data-dpr="3"] #search-box button {
  left: 18px;
}

#search-box button img {
  height: 24px;
  vertical-align: middle;
}

[data-dpr="2"] #search-box button img {
  height: 48px;
}

[data-dpr="3"] #search-box button img {
  height: 72px;
}

.normal_loading {
  display: none;
  position: fixed;
  text-align: center;
  top: 30%;
  max-width: 16rem;
  width: 100%;
  z-index: 201;
}

.normal_loading .box {
  background: #fff;
  border-radius: 0.4rem;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  padding: 5% 8%;
  position: relative;
  width: 30%;
}

.normal_loading .box.other {
  background: none;
}

.normal_loading .box .txt {
  font-size: 0.6rem;
  margin-top: 0.6rem;
  color: #999;
}

.normal_loading .box .loading {
  width: 100%;
  height: auto;
  position: relative;
  height: 3.75rem;
}

.normal_loading .box .shade {
  background: #000;
  border-radius: 50%;
  height: 0.3rem;
  opacity: 0.1;
  width: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -0.8rem;
}

.normal_loading .box .stars {
  position: absolute;
  top: 0.8rem;
  left: 50%;
  margin-left: -0.9rem;
}

.normal_loading .box .loading.show .stars {
  animation: like_poof 0.7s linear infinite forwards;
}

@keyframes like_poof {
  0% {
    top: 36px;
    transform: rotate(0deg);
  }

  25% {
    top: 0;
    transform: rotate(0deg);
  }

  50% {
    top: 0;
    transform: rotate(72deg);
  }

  75% {
    transform: rotate(72deg);
  }

  to {
    top: 36px;
    transform: rotate(72deg);
  }
}

.normal_loading .box .loading.show .shade {
  animation: like_poof_other 0.7s linear infinite forwards;
}

@keyframes like_poof_other {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(0.5);
  }

  75% {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

.normal_loading .box .loading2 {
  width: 3.1rem;
  height: 3.1rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 0.25rem;
}

.normal_loading .box .loading2 img {
  display: block;
  width: 100%;
  height: 100%;
}

.normal_loading .box .loading2 .circle-rotating {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  animation: circle_rotating 0.7s linear infinite forwards;
}

.normal_loading .box .loading2 .circle-rotating-new {
  position: absolute;
  width: 70%;
  height: 70%;
  left: 15%;
  top: 15%;
  border-radius: 50%;
  border: solid hsla(0, 0%, 100%, 0.8);
  border-width: 2px;
  box-sizing: border-box;
  border-top-color: #ff464e;
  border-right-color: #ff464e;
  animation: circle_rotating 0.7s linear infinite forwards;
}

[data-dpr="2"] .normal_loading .box .loading2 .circle-rotating-new {
  border-width: 4px;
}

[data-dpr="3"] .normal_loading .box .loading2 .circle-rotating-new {
  border-width: 6px;
}

@keyframes circle_rotating {
  0% {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}

.more {
  text-align: center;
  padding: 2% 0;
}

.more,
.more a {
  font-size: 0.6rem;
}

.more a {
  color: #333;
  padding: 0 0.5rem;
}

.more a img {
  vertical-align: -0.05rem;
  height: 0.5rem;
  margin: 0 auto;
  margin-left: 0.1rem;
}

.toast_alert {
  position: fixed;
  top: 45%;
  width: 100%;
  z-index: 2000;
}

.toast_alert .box {
  background: rgba(0, 0, 0, 0.75);
  padding: 0.5rem;
  width: 8rem;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  font-size: 0.7rem;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}

.alert_fullbg_other {
  display: none;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 200;
  filter: alpha(opacity=0);
  opacity: 0;
  background-color: #000;
}

.slide-box {
  display: none;
  position: fixed;
  bottom: 0.5rem;
  right: 4%;
  margin-left: 34%;
  z-index: 300;
}

.slide-box a {
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  text-align: center;
  display: block;
  margin-bottom: 0.05rem;
  background: #fff;
  border: 1px solid #ebebeb;
}

.slide-box a img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.4rem;
}

#shortcut {
  padding: 0.4rem;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  bottom: 0.5rem;
  left: 4%;
  z-index: 302;
  border-radius: 3px;
}

[data-dpr="2"] #shortcut {
  border-radius: 6px;
}

[data-dpr="3"] #shortcut {
  border-radius: 9px;
}

#shortcut a {
  display: block;
  position: relative;
  height: 23px;
}

[data-dpr="2"] #shortcut a {
  height: 46px;
}

[data-dpr="3"] #shortcut a {
  height: 69px;
}

#shortcut a img {
  height: 23px;
  width: 23px;
  float: left;
}

[data-dpr="2"] #shortcut a img {
  height: 46px;
}

[data-dpr="3"] #shortcut a img {
  height: 69px;
}

[data-dpr="2"] #shortcut a img {
  width: 46px;
}

[data-dpr="3"] #shortcut a img {
  width: 69px;
}

#shortcut a.bag-enter em {
  width: 15px;
  height: 15px;
  line-height: 15px;
  border-radius: 0.625rem;
  background: #ff464e;
  text-align: center;
  color: #fff;
  font-size: 10px;
  position: absolute;
  top: -5px;
  left: 15px;
  display: none;
}

[data-dpr="2"] #shortcut a.bag-enter em {
  width: 30px;
}

[data-dpr="3"] #shortcut a.bag-enter em {
  width: 45px;
}

[data-dpr="2"] #shortcut a.bag-enter em {
  height: 30px;
}

[data-dpr="3"] #shortcut a.bag-enter em {
  height: 45px;
}

[data-dpr="2"] #shortcut a.bag-enter em {
  line-height: 30px;
}

[data-dpr="3"] #shortcut a.bag-enter em {
  line-height: 45px;
}

[data-dpr="2"] #shortcut a.bag-enter em {
  font-size: 20px;
}

[data-dpr="3"] #shortcut a.bag-enter em {
  font-size: 30px;
}

[data-dpr="2"] #shortcut a.bag-enter em {
  top: -10px;
}

[data-dpr="3"] #shortcut a.bag-enter em {
  top: -15px;
}

[data-dpr="2"] #shortcut a.bag-enter em {
  left: 30px;
}

[data-dpr="3"] #shortcut a.bag-enter em {
  left: 45px;
}

#shortcut a.bag-enter .time-out {
  color: #fff;
  font-size: 10px;
  vertical-align: middle;
  display: none;
  margin: 0 0 0 0.5rem;
  height: 23px;
  line-height: 24px;
  min-width: 25px;
  float: left;
}

[data-dpr="2"] #shortcut a.bag-enter .time-out {
  font-size: 20px;
}

[data-dpr="3"] #shortcut a.bag-enter .time-out {
  font-size: 30px;
}

[data-dpr="2"] #shortcut a.bag-enter .time-out {
  height: 46px;
}

[data-dpr="3"] #shortcut a.bag-enter .time-out {
  height: 69px;
}

[data-dpr="2"] #shortcut a.bag-enter .time-out {
  line-height: 48px;
}

[data-dpr="3"] #shortcut a.bag-enter .time-out {
  line-height: 72px;
}

[data-dpr="2"] #shortcut a.bag-enter .time-out {
  min-width: 50px;
}

[data-dpr="3"] #shortcut a.bag-enter .time-out {
  min-width: 75px;
}

/* @font-face {
    font-family: iconfont;
    src: url(/jpwebapp_v1/iconfont/iconfont.eot?t=14893730732761sss);
    src: url(/jpwebapp_v1/iconfont/iconfont.eot?t=14893730732761sss#iefix) format("embedded-opentype"),url(/jpwebapp_v1/iconfont/iconfont.woff?t=14893730732761sss) format("woff"),url(/jpwebapp_v1/iconfont/iconfont.ttf?t=14893730732761sss) format("truetype"),url(/jpwebapp_v1/iconfont/iconfont.svg?t=14893730732761sss#iconfont) format("svg")
} */

.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dingdan:before {
  content: "\e60a";
}

.icon-fanhui:before {
  content: "\e60b";
}

.icon-fenlei:before {
  content: "\e60c";
}

.icon-fenxiang:before {
  content: "\e60d";
}

.icon-gengduo:before {
  content: "\e60e";
}

.icon-gouwuche:before {
  content: "\e60f";
}

.icon-guanbi:before {
  content: "\e610";
}

.icon-xiaoxi:before {
  content: "\e611";
}

.icon-shoucang:before {
  content: "\e612";
}

.icon-zhuye:before {
  content: "\e613";
}

.icon-daifukuan:before {
  content: "\e614";
}

.icon-daishouhuo:before {
  content: "\e615";
}

.icon-daifahuo:before {
  content: "\e616";
}

.icon-dianpu:before {
  content: "\e617";
}

.icon-dingwei:before {
  content: "\e618";
}

.icon-shanchu:before {
  content: "\e619";
}

.icon-liebiaojiantou:before {
  content: "\e61a";
}

.icon-tianjia:before {
  content: "\e61b";
}

.icon-sousuofenlei:before {
  content: "\e61c";
}

.icon-tuikuanshouhou:before {
  content: "\e61d";
}

.icon-bianji:before {
  content: "\e61e";
}

.icon-wuliu:before {
  content: "\e61f";
}

.icon-yishoucang:before {
  content: "\e620";
}

.icon-yixuanzhong:before {
  content: "\e621";
}

.icon-weixuanzhong:before {
  content: "\e622";
}

.icon-daichengtuan:before {
  content: "\e623";
}

.icon-zhifaicon:before {
  content: "\e624";
}

.icon-yixuanzhong1:before {
  content: "\e625";
}

.icon-zhekou:before {
  content: "\e626";
}

.icon-kefu:before {
  content: "\e627";
}

.icon-biyan:before {
  content: "\e628";
}

.icon-zhengyan:before {
  content: "\e629";
}

.icon-sousuo:before {
  content: "\e62a";
}

.icon-shanchu_:before {
  content: "\e62b";
}

.icon-jianpan_shanchu:before {
  content: "\e62c";
}

.icon-dunpai:before {
  content: "\e62d";
}

.icon-jiageshengxu:before {
  content: "\e62e";
}

.icon-shaixuan:before {
  content: "\e62f";
}

.icon-jiagejiangxu:before {
  content: "\e630";
}

.icon-jiarushoucang:before {
  content: "\e631";
}

.icon-jiarugouwuche:before {
  content: "\e632";
}

.top-menu {
  width: 100%;
  max-width: 16rem;
  min-width: 8rem;
  background: #fff;
  line-height: 1;
}

.top-menu.top-type1 {
  height: 49px;
}

[data-dpr="2"] .top-menu.top-type1 {
  height: 98px;
}

[data-dpr="3"] .top-menu.top-type1 {
  height: 147px;
}

.top-menu.top-type2 {
  height: 38px;
}

[data-dpr="2"] .top-menu.top-type2 {
  height: 76px;
}

[data-dpr="3"] .top-menu.top-type2 {
  height: 114px;
}

.top-menu.top-type3 {
  height: 49px;
}

[data-dpr="2"] .top-menu.top-type3 {
  height: 98px;
}

[data-dpr="3"] .top-menu.top-type3 {
  height: 147px;
}

.top-menu .top-menu-box {
  width: 100%;
  overflow: auto;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  background: #fff;
  position: static;
  top: 0;
  z-index: 400;
  max-width: 16rem;
  min-width: 8rem;
}

.top-menu.top-type1 .top-menu-box {
  height: 49px;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box {
  height: 98px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box {
  height: 147px;
}

.top-menu.top-type2 .top-menu-box {
  height: 38px;
}

[data-dpr="2"] .top-menu.top-type2 .top-menu-box {
  height: 76px;
}

[data-dpr="3"] .top-menu.top-type2 .top-menu-box {
  height: 114px;
}

.top-menu.top-type3 .top-menu-box {
  height: 49px;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box {
  height: 98px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box {
  height: 147px;
}

.top-menu .top-menu-box.fixed {
  position: fixed;
}

.top-menu .top-menu-box nav {
  white-space: nowrap;
  overflow: auto;
  overflow-y: hidden;
}

.top-menu.top-type1 .top-menu-box nav a {
  height: 49px;
  font-size: 12px;
  text-align: center;
  color: #333;
  display: inline-block;
  white-space: nowrap;
  width: 20%;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a {
  height: 98px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a {
  height: 147px;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a {
  font-size: 24px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a {
  font-size: 36px;
}

.top-menu.top-type1 .top-menu-box nav a .bg-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  margin-top: 13px;
  margin-bottom: 13px;
  display: block;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  width: 48px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  width: 72px;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  height: 48px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  height: 72px;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  margin-top: 25px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  margin-top: 38px;
}

[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  margin-bottom: 25px;
}

[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
  margin-bottom: 38px;
}

.top-menu.top-type2 .top-menu-box nav {
  background: #fff;
  height: 38px;
}

[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav {
  height: 76px;
}

[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav {
  height: 114px;
}

.top-menu.top-type2 .top-menu-box nav a {
  line-height: 38px;
  height: 38px;
  display: inline-block;
  font-size: 14px;
  text-align: center;
  color: #333;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0 0.25rem;
  margin: 0 0.35rem;
  background: #fff;
}

[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav a {
  line-height: 76px;
}

[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav a {
  line-height: 114px;
}

[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav a {
  height: 76px;
}

[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav a {
  height: 114px;
}

[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav a {
  font-size: 28px;
}

[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav a {
  font-size: 42px;
}

.top-menu.top-type3 .top-menu-box nav a {
  height: 49px;
  font-size: 12px;
  text-align: center;
  color: #333;
  display: inline-block;
  white-space: nowrap;
  width: 20%;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a {
  height: 98px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a {
  height: 147px;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a {
  font-size: 24px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a {
  font-size: 36px;
}

.top-menu.top-type3 .top-menu-box nav a .bg-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  width: 48px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  width: 72px;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  height: 48px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  height: 72px;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  margin-top: 10px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  margin-top: 15px;
}

[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  margin-bottom: 10px;
}

[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
  margin-bottom: 15px;
}

.bottom-menu {
  position: fixed;
  width: 100%;
  max-width: 16rem;
  min-width: 8rem;
  line-height: 1;
  background-color: #fff;
  bottom: 0;
  z-index: 400;
  background-size: 100% 100%;
  border-top: 1px solid #ebebeb;
}

.bottom-menu nav a {
  height: 49px;
  float: left;
  font-size: 10px;
  text-align: center;
  color: #333;
  display: block;
}

[data-dpr="2"] .bottom-menu nav a {
  height: 98px;
}

[data-dpr="3"] .bottom-menu nav a {
  height: 147px;
}

[data-dpr="2"] .bottom-menu nav a {
  font-size: 20px;
}

[data-dpr="3"] .bottom-menu nav a {
  font-size: 30px;
}

.bottom-menu nav a.type1 .bg-icon {
  height: 100%;
  margin: 0 auto;
  display: block;
}

.bottom-menu nav a.type2 {
  line-height: 49px;
}

[data-dpr="2"] .bottom-menu nav a.type2 {
  line-height: 98px;
}

[data-dpr="3"] .bottom-menu nav a.type2 {
  line-height: 147px;
}

.bottom-menu nav a.type3 .bg-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
}

[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
  width: 48px;
}

[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
  width: 72px;
}

[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
  height: 48px;
}

[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
  height: 72px;
}

[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
  margin-top: 10px;
}

[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
  margin-top: 15px;
}

[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
  margin-bottom: 10px;
}

[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
  margin-bottom: 15px;
}

.more {
  margin-bottom: 0.55rem;
}

.bg-icon.all-img {
  height: 38px;
  vertical-align: bottom;
}

[data-dpr="2"] .bg-icon.all-img {
  height: 76px;
}

[data-dpr="3"] .bg-icon.all-img {
  height: 114px;
}

body {
  background-color: #fff;
}

input::-webkit-search-cancel-button {
  display: none;
}

.cate-list {
  font-size: 15px;
  color: #333;
  text-align: center;
  background-color: #fff;
}

[data-dpr="2"] .cate-list {
  font-size: 30px;
}

[data-dpr="3"] .cate-list {
  font-size: 45px;
}

.cate-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  text-indent: 15px;
  padding-bottom: 49px;
}

[data-dpr="2"] .cate-list ul {
  text-indent: 30px;
}

[data-dpr="3"] .cate-list ul {
  text-indent: 45px;
}

[data-dpr="2"] .cate-list ul {
  padding-bottom: 98px;
}

[data-dpr="3"] .cate-list ul {
  padding-bottom: 147px;
}

.cate-list ul li {
  height: 45px;
  line-height: 45px;
  position: relative;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;
  border-left: 4px solid #f9f9f9;
}

[data-dpr="2"] .cate-list ul li {
  height: 90px;
}

[data-dpr="3"] .cate-list ul li {
  height: 135px;
}

[data-dpr="2"] .cate-list ul li {
  line-height: 90px;
}

[data-dpr="3"] .cate-list ul li {
  line-height: 135px;
}

.ishot {
  position: absolute;
  top: 16px;
  right: 4%;
  width: 11px;
}

[data-dpr="2"] .ishot {
  top: 31px;
}

[data-dpr="3"] .ishot {
  top: 47px;
}

[data-dpr="2"] .ishot {
  width: 21px;
}

[data-dpr="3"] .ishot {
  width: 32px;
}

.list-left {
  float: left;
  width: 25%;
  background: #f9f9f9;
  overflow: hidden;
  font-size: 14px;
}

[data-dpr="2"] .list-left {
  font-size: 28px;
}

[data-dpr="3"] .list-left {
  font-size: 42px;
}

.list-right {
  float: left;
  width: 71%;
  font-size: 12px;
  padding-left: 4%;
}

[data-dpr="2"] .list-right {
  font-size: 24px;
}

[data-dpr="3"] .list-right {
  font-size: 36px;
}

.list-right .cate-second span {
  color: #333;
}

.cate-second {
  height: 4rem;
  padding: 0 5%;
  box-sizing: border-box;
  position: relative;
}

.cate-second .icon {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 10px;
  top: -8px;
  text-align: center;
  border-radius: 50%;
  right: 0;
  color: #fff;
}

[data-dpr="2"] .cate-second .icon {
  width: 60px;
}

[data-dpr="3"] .cate-second .icon {
  width: 90px;
}

[data-dpr="2"] .cate-second .icon {
  height: 60px;
}

[data-dpr="3"] .cate-second .icon {
  height: 90px;
}

[data-dpr="2"] .cate-second .icon {
  line-height: 60px;
}

[data-dpr="3"] .cate-second .icon {
  line-height: 90px;
}

[data-dpr="2"] .cate-second .icon {
  font-size: 20px;
}

[data-dpr="3"] .cate-second .icon {
  font-size: 30px;
}

[data-dpr="2"] .cate-second .icon {
  top: -16px;
}

[data-dpr="3"] .cate-second .icon {
  top: -24px;
}

.cate-second .icon-new {
  background: #5698f3;
}

.cate-second .icon-hot {
  background: #ff464e;
}

.cate-second .icon-rec {
  background: #f5a623;
}

.cate-second span {
  line-height: 20px;
}

[data-dpr="2"] .cate-second span {
  line-height: 40px;
}

[data-dpr="3"] .cate-second span {
  line-height: 60px;
}

.cate-img {
  width: 100%;
}

.hide {
  display: none;
}

.cate-list ul li.color_red {
  color: #ff464e;
  border-left: 4px solid #ff464e;
  background-color: #fff;
}

.colors-red {
  color: #ff464e;
}

#wraper {
  height: 100%;
  width: 100%;
  text-align: left;
  overflow: hidden;
  padding-bottom: 49px;
}

[data-dpr="2"] #wraper {
  padding-bottom: 98px;
}

[data-dpr="3"] #wraper {
  padding-bottom: 147px;
}

.third-cate {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-bottom: 49px;
}

[data-dpr="2"] .third-cate {
  margin-top: 20px;
}

[data-dpr="3"] .third-cate {
  margin-top: 30px;
}

[data-dpr="2"] .third-cate {
  padding-bottom: 98px;
}

[data-dpr="3"] .third-cate {
  padding-bottom: 147px;
}

.cate-bottom {
  height: 30px;
  width: 100%;
  display: inline-block;
}

[data-dpr="2"] .cate-bottom {
  height: 60px;
}

[data-dpr="3"] .cate-bottom {
  height: 90px;
}

.third-cate .cate-second {
  display: inline-block;
  text-align: center;
}

.app {
  background-color: transparent;
}

#search-box {
  margin: 0.5rem;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #fff;
  padding: 0.125rem 0;
}

#search-box button {
  top: 0.125rem;
}

.box-search {
  width: 98%;
}

.box-search input {
  margin-left: 30px;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  color: #999;
  font-size: 13px;
  width: 90%;
  left: 0;
  background-color: transparent;
}

[data-dpr="2"] .box-search input {
  margin-left: 60px;
}

[data-dpr="3"] .box-search input {
  margin-left: 90px;
}

[data-dpr="2"] .box-search input {
  font-size: 26px;
}

[data-dpr="3"] .box-search input {
  font-size: 39px;
}

.error_bolck {
  min-height: 27rem;
}

.error {
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-top: 100px;
}

[data-dpr="2"] .error {
  font-size: 32px;
}

[data-dpr="3"] .error {
  font-size: 48px;
}

[data-dpr="2"] .error {
  margin-top: 200px;
}

[data-dpr="3"] .error {
  margin-top: 300px;
}

.error p {
  margin-top: 30px;
}

[data-dpr="2"] .error p {
  margin-top: 60px;
}

[data-dpr="3"] .error p {
  margin-top: 90px;
}

/*# sourceMappingURL=../../maps/page/m/cate_group.css.map */
</style>
