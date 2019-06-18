<template>
    <section class="goods" id="goods">
            <ul class="goods-list clear" id="goods_block" style="display: flex;">

                
    <li v-for="(g,index) in goods" :key="index" data_jstype="shop" gid="_goods_id_" data-event="商品流" data-zgjson="{&quot;\u5546\u54c1id&quot;:&quot;14832580&quot;,&quot;\u5546\u54c1\u540d\u79f0&quot;:&quot;V\u9886\u683c\u5b50\u4e2d\u957f\u6b3e\u8fde\u8863\u88d9&quot;,&quot;\u5751\u4f4d\u7c7b\u578b&quot;:&quot;\u5546\u54c1&quot;,&quot;\u4e00\u7ea7\u7c7b\u76eeid&quot;:&quot;685&quot;,&quot;\u4e8c\u7ea7\u7c7b\u76eeid&quot;:&quot;709&quot;,&quot;\u4e09\u7ea7\u7c7b\u76eeid&quot;:&quot;928&quot;,&quot;\u5546\u54c1\u5355\u4ef7&quot;:&quot;169.00&quot;,&quot;\u5546\u54c1\u6d41\u7c7b\u578b&quot;:&quot;\u666e\u901a\u5546\u54c1\u6d41&quot;}">
        <a class="goods-a" href="https://web.juanpi.com/pintuan/shop/173204754" data-value="goods#1_1" cprice="169" style="background: none;">
            
            <div class="placeholder"></div> 
            <img class="lazy loaded" :src="g.picurl" alt="V领格子中长款连衣裙">
			
            
        </a>

        <a href="https://web.juanpi.com/pintuan/shop/173204754" id="click_js" target="_blank" data-value="goods#1_1">
            <div class="list-price buy ">
                <span class="price-new " v-text="g.cprice"><i>¥</i>169</span><i class="del" v-text="g.oprice">¥899</i>
                <span class="only-time"></span>
            </div>
            
            <h3 class="long" v-text="g.title"> V领格子中长款连衣裙</h3>
        </a>
    </li>

</ul>

    <div class="more" id="page-next" style="display: none;">
        <a href="javascript:;">
            点此查看更多
            <img src="//jp.juancdn.com/jpwebapp/images/icon/more.png?ts=2019022511127111014-1&amp;sv=449ce9ee">
        </a>
    </div>
    <div class="more" id="page-loading" style="display: none;">
        <span>
            正在努力加载中
            <img style="height: 5px;" src="//jp.juancdn.com/jpwebapp/images/icon/goods_loading.gif?ts=2019022511127111014-1&amp;sv=449ce9ee"></span>
    </div>
    <!--专题页面 店铺入口-->
            <a href="//m.juanpi.com/store/" class="bc" data-bc="[&quot;trackEvent&quot;, &quot;temai&quot;, &quot;click_branddetails_all&quot;,&quot;json&quot;,&quot;&quot;]">
            <div id="store_inter" style="display: none;" class="store_inter">
                查看全部商品
                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/cur_.png?fb42cba4-1&amp;sv=449ce9ee">
            </div>
        </a>
    
    <div class="more" id="page-no-next" style="display: none;">
        <span>亲，已经到底了</span>
    </div>

</section>
</template>
<script>
export default {
  name: "goods",
  data(){
      return{
          goods:[]
      }
  },
  created(){
      this.getGoods();
  },
  methods:{
      async getGoods(url) {
      let id = url
        ? url
        : "https://www.easy-mock.com/mock/5cf63f9ec9239312105f670f/example/goods";
      const data = await this.$ajax(id);
      console.log(data);
      // console.log(data.data.data.list);
      this.goods =data.data.data.list;
      console.log(this.goods);
    },
    tab(index) {
      this.curlrd = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "UTF-8";#foot,#foot h2,.foot-nav,.foot-nav a {
    position: relative
}

#foot h2,.foot-nav a {
    display: inline-block
}

.foot-copyright {
    display: block
}

#foot,#foot h2 {
    background: #fff
}

#foot,.foot-nav a {
    text-align: center
}

.foot-copyright {
    content: "";
    overflow: hidden
}

blockquote,body,button,code,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,legend,li,ol,p,pre,td,textarea,th,ul {
    margin: 0;
    padding: 0
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary {
    display: block
}

audio,canvas,progress,video {
    display: inline-block;
    vertical-align: baseline
}

html {
    font-size: 312.5%;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none
}

body {
    background-color: #f4f4f8;
    color: #666;
    height: 100%;
    font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif
}

body * {
    max-height: 9000rem
}

fieldset,img {
    border: 0
}

address,cite,dfn,em,i,var {
    font-style: normal
}

a {
    color: #666
}

a,a:active,a:hover {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    text-decoration: none
}

:focus {
    outline: 0 none
}

dl,li,ol,ul {
    list-style: none
}

li,li:active,ul {
    -webkit-tap-highlight-color: rgba(0,0,0,0)
}

input::-webkit-input-placeholder {
    color: #999
}

input:-moz-placeholder,input::-moz-placeholder {
    color: #999
}

input:-ms-input-placeholder {
    color: #999
}

input {
    -webkit-appearance: none
}

.clear {
    clear: both
}

.clear:after,.clear:before {
    clear: both;
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    visibility: hidden
}

.fl {
    float: left
}

.fr {
    float: right
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
    opacity: .5;
    background-color: #000
}

.main {
    max-width: 16rem;
    min-width: 8rem;
    position: relative
}

.app,.main {
    background: #f4f4f8;
    margin: 0 auto;
    width: 100%
}

.app {
    position: absolute
}

#head {
    height: 44px;
    width: 100%;
    max-width: 16rem;
    min-width: 8rem;
    overflow: inherit;
    position: relative;
    z-index: 199;
    border-bottom: 1px solid #dedede
}

[data-dpr="2"] #head {
    height: 88px
}

[data-dpr="3"] #head {
    height: 132px
}

#head.logo {
    display: block;
    margin: 0 auto
}

#head .logo img {
    height: 24px
}

[data-dpr="2"] #head .logo img {
    height: 48px
}

[data-dpr="3"] #head .logo img {
    height: 72px
}

.fixtop {
    height: 44px;
    background: #fff;
    z-index: 999;
    position: absolute;
    width: 100%
}

[data-dpr="2"] .fixtop {
    height: 88px
}

[data-dpr="3"] .fixtop {
    height: 132px
}

.fixtop span {
    display: block
}

#classify {
    padding-top: 10px;
    padding-left: 12px;
    float: left
}

[data-dpr="2"] #classify {
    padding-top: 20px
}

[data-dpr="3"] #classify {
    padding-top: 30px
}

[data-dpr="2"] #classify {
    padding-left: 24px
}

[data-dpr="3"] #classify {
    padding-left: 36px
}

#t-find {
    padding-top: 10px;
    padding-left: 12px;
    float: left
}

[data-dpr="2"] #t-find {
    padding-top: 20px
}

[data-dpr="3"] #t-find {
    padding-top: 30px
}

[data-dpr="2"] #t-find {
    padding-left: 24px
}

#index,[data-dpr="3"] #t-find {
    padding-left: 36px
}

#index {
    text-align: center;
    cursor: default;
    width: 100%;
    position: absolute;
    padding-right: 36px;
    z-index: -1;
    box-sizing: border-box
}

[data-dpr="2"] #index {
    padding-left: 72px
}

[data-dpr="3"] #index {
    padding-left: 108px
}

[data-dpr="2"] #index {
    padding-right: 72px
}

[data-dpr="3"] #index {
    padding-right: 108px
}

#index .logo {
    display: block;
    margin-top: 10px;
    width: 100%
}

[data-dpr="2"] #index .logo {
    margin-top: 20px
}

[data-dpr="3"] #index .logo {
    margin-top: 30px
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
    white-space: nowrap
}

[data-dpr="2"] #t-index {
    padding-left: 72px
}

[data-dpr="3"] #t-index {
    padding-left: 108px
}

[data-dpr="2"] #t-index {
    padding-right: 72px
}

[data-dpr="3"] #t-index {
    padding-right: 108px
}

[data-dpr="2"] #t-index {
    font-size: 36px
}

[data-dpr="3"] #t-index {
    font-size: 54px
}

[data-dpr="2"] #t-index {
    line-height: 88px
}

[data-dpr="3"] #t-index {
    line-height: 132px
}

[data-dpr="2"] #t-index {
    height: 88px
}

[data-dpr="3"] #t-index {
    height: 132px
}

#user {
    padding-top: 10px;
    padding-right: 12px;
    float: right
}

[data-dpr="2"] #user {
    padding-top: 20px
}

[data-dpr="3"] #user {
    padding-top: 30px
}

[data-dpr="2"] #user {
    padding-right: 24px
}

[data-dpr="3"] #user {
    padding-right: 36px
}

#t-user {
    padding-top: 10px;
    float: right
}

[data-dpr="2"] #t-user {
    padding-top: 20px
}

[data-dpr="3"] #t-user {
    padding-top: 30px
}

#t-user a {
    color: #333;
    display: block;
    width: 36px;
    height: 24px;
    line-height: 22px;
    font-size: 14px;
    text-align: center;
    margin-right: 11px
}

[data-dpr="2"] #t-user a {
    width: 71px
}

[data-dpr="3"] #t-user a {
    width: 107px
}

[data-dpr="2"] #t-user a {
    height: 48px
}

[data-dpr="3"] #t-user a {
    height: 72px
}

[data-dpr="2"] #t-user a {
    line-height: 44px
}

[data-dpr="3"] #t-user a {
    line-height: 66px
}

[data-dpr="2"] #t-user a {
    font-size: 28px
}

[data-dpr="3"] #t-user a {
    font-size: 42px
}

[data-dpr="2"] #t-user a {
    margin-right: 22px
}

[data-dpr="3"] #t-user a {
    margin-right: 33px
}

.btn {
    background-size: cover;
    display: inline-block;
    height: 0;
    overflow: hidden;
    text-decoration: none;
    width: 24px;
    height: 24px
}

[data-dpr="2"] .btn {
    width: 48px
}

[data-dpr="3"] .btn {
    width: 72px
}

[data-dpr="2"] .btn {
    height: 48px
}

[data-dpr="3"] .btn {
    height: 72px
}

#head .btn {
    vertical-align: top
}

#head .btn .iconfont {
    font-size: 24px
}

[data-dpr="2"] #head .btn .iconfont {
    font-size: 48px
}

[data-dpr="3"] #head .btn .iconfont {
    font-size: 72px
}

/* .btn-type {
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
    height: 4.55rem
}

[data-dpr="2"] #foot {
    margin-top: 20px
}

[data-dpr="3"] #foot {
    margin-top: 30px
}

.foot-copyright {
    background: #ebebeb;
    height: 1px;
    width: 90%;
    margin: 0 auto;
    font-size: 0;
    line-height: 1px
}

.foot-nav {
    padding-top: .625rem;
    padding-bottom: .625rem;
    line-height: .625rem
}

.foot-nav a {
    color: #666;
    font-size: .55rem;
    line-height: .625rem;
    margin: 0 auto;
    width: 31%;
    border-right: 1px solid #ebebeb
}

.foot-nav a:last-child {
    border-right: none
}

#foot .cut-line {
    width: 90%;
    border-bottom: 1px solid #ebebeb;
    margin: 0 auto 1rem;
    height: 1px;
    font-size: 0
}

#foot h2 {
    font-size: .5rem;
    height: .6rem;
    line-height: .6rem;
    top: -.875rem;
    color: #bbb;
    padding: 0 .2rem;
    font-weight: 400
}

.goods-list .goods-a,.img-thumbnail {
    position: relative;
    /* background: #fafafa url(/jpwebapp_v1/images_v1/wapblank.png) no-repeat 50%; */
    background-size: 310px
}

.goods-list .goods-a img,.img-thumbnail img {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity .5s linear
}

.goods-list .goods-a img.loaded,.img-thumbnail img.loaded {
    opacity: 1
}

@keyframes lazyload-appear {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.bg-thumbnail {
    position: relative;
    transition: .5s linear
}

.bg-thumbnail:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background: #fafafa url(/jpwebapp_v1/images_v1/wapblank.png) no-repeat 50%; */
    background-size: 310px
}

.bg-thumbnail.loaded {
    animation: .5s linear lazyload-appear
}

.bg-thumbnail.loaded:before {
    opacity: 0
}

#goods {
    height: 100%;
    width: 100%;
    overflow: hidden;
    min-height: 20rem
}

.goods-list {
    width: 16.25rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.goods-list .goods-a {
    display: block;
    position: relative
}

.goods-list .goods-a .placeholder {
    padding-bottom: 100%
}

.goods-list .goods-a img.goods-a-corner {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.8rem;
    height: 1.8rem;
    z-index: 2
}

.goods-list a:hover {
    text-decoration: none
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
    background: rgba(0,0,0,.65);
    text-align: center;
    color: #fff;
    font-size: .7rem;
    border: .05rem solid hsla(0,0%,100%,.7);
    font-family: 微软雅黑
}

.goods-list .goods-a .shop_logo {
    position: absolute;
    bottom: -.625rem;
    right: .4rem;
    width: 2.5rem;
    height: 1.25rem;
    border: 1px solid #ebebeb;
    border-width: 1px;
    background-color: #fff
}

[data-dpr="2"] .goods-list .goods-a .shop_logo {
    border-width: 1px
}

[data-dpr="3"] .goods-list .goods-a .shop_logo {
    border-width: 2px
}

.goods-list .goods-a .buy-little {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 10px;
    width: 52px;
    height: 17px;
    line-height: 17px;
    background: rgba(0,0,0,.65);
    color: #fff;
    text-align: center
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
    font-size: 20px
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
    font-size: 30px
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
    width: 104px
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
    width: 156px
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
    height: 34px
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
    height: 51px
}

[data-dpr="2"] .goods-list .goods-a .buy-little {
    line-height: 34px
}

[data-dpr="3"] .goods-list .goods-a .buy-little {
    line-height: 51px
}

.goods-list li {
    width: 8.1rem;
    margin-top: .1rem
}

.goods-list li,.goods-list li.kw1 {
    float: left;
    position: relative;
    background: #fff
}

.goods-list li.kw1 {
    width: 16rem;
    height: 6.6rem
}

.goods-list li.kw2 {
    float: left;
    width: 8rem;
    position: relative;
    margin-right: .2rem;
    background: none;
    overflow: hidden
}

.goods-list li img {
    width: 8rem;
    height: 8rem;
    position: relative;
    display: inherit
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
    background-color: rgba(0,0,0,.45)
}

[data-dpr="2"] .goods-list li .actinfo {
    height: 40px
}

[data-dpr="3"] .goods-list li .actinfo {
    height: 60px
}

[data-dpr="2"] .goods-list li .actinfo {
    font-size: 24px
}

[data-dpr="3"] .goods-list li .actinfo {
    font-size: 36px
}

[data-dpr="2"] .goods-list li .actinfo {
    line-height: 40px
}

[data-dpr="3"] .goods-list li .actinfo {
    line-height: 60px
}

.goods-list li h3 {
    margin-top: 2px;
    margin-bottom: 3px;
    font-size: 12px;
    font-weight: 300;
    color: #333;
    background: hsla(0,0%,100%,.8);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    margin-left: 8px;
    height: 20px;
    line-height: 27px
}

[data-dpr="2"] .goods-list li h3 {
    margin-top: 4px
}

[data-dpr="3"] .goods-list li h3 {
    margin-top: 6px
}

[data-dpr="2"] .goods-list li h3 {
    margin-bottom: 6px
}

[data-dpr="3"] .goods-list li h3 {
    margin-bottom: 9px
}

[data-dpr="2"] .goods-list li h3 {
    font-size: 24px
}

[data-dpr="3"] .goods-list li h3 {
    font-size: 36px
}

[data-dpr="2"] .goods-list li h3 {
    margin-left: 16px
}

[data-dpr="3"] .goods-list li h3 {
    margin-left: 24px
}

[data-dpr="2"] .goods-list li h3 {
    height: 40px
}

[data-dpr="3"] .goods-list li h3 {
    height: 60px
}

[data-dpr="2"] .goods-list li h3 {
    line-height: 54px
}

[data-dpr="3"] .goods-list li h3 {
    line-height: 81px
}

.goods-list li h3.long {
    width: 96%
}

.goods-list li h3.short {
    width: 100%;
    box-sizing: border-box;
    padding-right: 62px
}

[data-dpr="2"] .goods-list li h3.short {
    padding-right: 124px
}

[data-dpr="3"] .goods-list li h3.short {
    padding-right: 186px
}

.goods-list li h3 .zhifa {
    color: #ff464e;
    border: 1px solid #ff464e;
    font-size: 11px;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 5px;
    line-height: 11px;
    border-width: 1px
}

[data-dpr="2"] .goods-list li h3 .zhifa {
    font-size: 22px
}

[data-dpr="3"] .goods-list li h3 .zhifa {
    font-size: 33px
}

[data-dpr="2"] .goods-list li h3 .zhifa {
    padding-left: 10px
}

[data-dpr="3"] .goods-list li h3 .zhifa {
    padding-left: 15px
}

[data-dpr="2"] .goods-list li h3 .zhifa {
    padding-right: 10px
}

[data-dpr="3"] .goods-list li h3 .zhifa {
    padding-right: 15px
}

[data-dpr="2"] .goods-list li h3 .zhifa {
    margin-right: 10px
}

[data-dpr="3"] .goods-list li h3 .zhifa {
    margin-right: 15px
}

[data-dpr="2"] .goods-list li h3 .zhifa {
    line-height: 22px
}

[data-dpr="3"] .goods-list li h3 .zhifa {
    line-height: 33px
}

[data-dpr="2"] .goods-list li h3 .zhifa {
    border-width: 1px
}

[data-dpr="3"] .goods-list li h3 .zhifa {
    border-width: 2px
}

.goods-list li h3 em {
    margin-left: 2px;
    margin-right: 2px;
    color: #ccc
}

[data-dpr="2"] .goods-list li h3 em {
    margin-left: 3px
}

[data-dpr="3"] .goods-list li h3 em {
    margin-left: 5px
}

[data-dpr="2"] .goods-list li h3 em {
    margin-right: 3px
}

[data-dpr="3"] .goods-list li h3 em {
    margin-right: 5px
}

.goods-list li h3 span.juan {
    color: #ff464e
}

.only-time {
    position: absolute;
    color: #bbb;
    font-size: 11px;
    text-align: right;
    right: 0;
    line-height: 1.1;
    bottom: 2px
}

[data-dpr="2"] .only-time {
    font-size: 22px
}

[data-dpr="3"] .only-time {
    font-size: 33px
}

[data-dpr="2"] .only-time {
    bottom: 4px
}

[data-dpr="3"] .only-time {
    bottom: 6px
}

.only-time.brand-only-time {
    bottom: -18px
}

[data-dpr="2"] .only-time.brand-only-time {
    bottom: -36px
}

[data-dpr="3"] .only-time.brand-only-time {
    bottom: -54px
}

.list-price {
    width: 92%;
    position: relative;
    bottom: 0;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 0;
    line-height: 24px;
    height: 24px
}

[data-dpr="2"] .list-price {
    margin-left: 16px
}

[data-dpr="3"] .list-price {
    margin-left: 24px
}

[data-dpr="2"] .list-price {
    margin-right: 16px
}

[data-dpr="3"] .list-price {
    margin-right: 24px
}

[data-dpr="2"] .list-price,[data-dpr="3"] .list-price {
    margin-top: 0
}

[data-dpr="2"] .list-price {
    line-height: 48px
}

[data-dpr="3"] .list-price {
    line-height: 72px
}

[data-dpr="2"] .list-price {
    height: 48px
}

[data-dpr="3"] .list-price {
    height: 72px
}

.normal-list .list-price {
    margin-left: 0
}

.list-price.special {
    color: #333
}

.list-price .global-goods {
    color: #60e
}

.price-new {
    font-size: 15px;
    color: #ff464e;
    margin-right: 4px
}

[data-dpr="2"] .price-new {
    font-size: 30px
}

[data-dpr="3"] .price-new {
    font-size: 45px
}

[data-dpr="2"] .price-new {
    margin-right: 8px
}

[data-dpr="3"] .price-new {
    margin-right: 12px
}

.global .price-new {
    color: #60e
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
    -o-text-overflow: ellipsis
}

[data-dpr="2"] .list-price .coupon-info {
    font-size: 26px
}

[data-dpr="3"] .list-price .coupon-info {
    font-size: 39px
}

[data-dpr="2"] .list-price .coupon-info {
    line-height: 30px
}

[data-dpr="3"] .list-price .coupon-info {
    line-height: 45px
}

[data-dpr="2"] .list-price .coupon-info {
    line-height: 28px
}

[data-dpr="3"] .list-price .coupon-info {
    line-height: 42px
}

.del {
    color: #bbb;
    text-decoration: line-through;
    font-size: 11px;
    vertical-align: 1px
}

[data-dpr="2"] .del {
    font-size: 22px
}

[data-dpr="3"] .del {
    font-size: 33px
}

[data-dpr="2"] .del {
    vertical-align: 2px
}

[data-dpr="3"] .del {
    vertical-align: 3px
}

.price-new i {
    font-size: 15px
}

[data-dpr="2"] .price-new i {
    font-size: 30px
}

[data-dpr="3"] .price-new i {
    font-size: 45px
}

.good-btn {
    position: absolute;
    color: #fff;
    font-size: 10px;
    text-align: right;
    right: 0;
    line-height: 1.1;
    bottom: 7px
}

[data-dpr="2"] .good-btn {
    font-size: 20px
}

[data-dpr="3"] .good-btn {
    font-size: 30px
}

[data-dpr="2"] .good-btn {
    bottom: 14px
}

[data-dpr="3"] .good-btn {
    bottom: 21px
}

.goods-list li .good-btn img {
    height: 12px;
    width: auto;
    float: left;
    margin-right: 3px
}

.good-btn.start {
    color: #6db110
}

.good-btn.end {
    color: #999
}

.buy .good-btn {
    color: #ff464e
}

.end .good-btn,.start .good-btn {
    color: #999
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
    margin-right: .25rem
}

[data-dpr="2"] .list-price .pintuan_icon {
    height: 22px
}

[data-dpr="3"] .list-price .pintuan_icon {
    height: 33px
}

[data-dpr="2"] .list-price .pintuan_icon {
    line-height: 22px
}

[data-dpr="3"] .list-price .pintuan_icon {
    line-height: 33px
}

[data-dpr="2"] .list-price .pintuan_icon {
    padding: 3px
}

[data-dpr="3"] .list-price .pintuan_icon {
    padding: 5px
}

[data-dpr="2"] .list-price .pintuan_icon {
    padding-bottom: 2px
}

[data-dpr="3"] .list-price .pintuan_icon {
    padding-bottom: 3px
}

[data-dpr="2"] .list-price .pintuan_icon {
    font-size: 20px
}

[data-dpr="3"] .list-price .pintuan_icon {
    font-size: 30px
}

.paging {
    width: 100%;
    text-align: center;
    margin: 4.2rem 0;
    clear: both
}

.paging img {
    width: 6rem
}

.h5kw .list-price {
    margin-left: 0;
    margin-right: 0;
    width: 100%
}

.h5kw .coupon-info,.h5kw h3 {
    width: 100%;
    text-align: center
}

.h5kw h3 {
    margin-left: 0!important
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
    white-space: nowrap
}

[data-dpr="2"] .h5kw .kw_title {
    max-width: 264px
}

[data-dpr="3"] .h5kw .kw_title {
    max-width: 396px
}

[data-dpr="2"] .h5kw .kw_title {
    height: 40px
}

[data-dpr="3"] .h5kw .kw_title {
    height: 60px
}

[data-dpr="2"] .h5kw .kw_title {
    line-height: 40px
}

[data-dpr="3"] .h5kw .kw_title {
    line-height: 60px
}

.h5kw .only-time {
    position: static;
    bottom: auto;
    right: auto;
    display: inline-block;
    vertical-align: top;
    height: 20px;
    line-height: 20px
}

[data-dpr="2"] .h5kw .only-time {
    height: 40px
}

[data-dpr="3"] .h5kw .only-time {
    height: 60px
}

[data-dpr="2"] .h5kw .only-time {
    line-height: 40px
}

[data-dpr="3"] .h5kw .only-time {
    line-height: 60px
}

.new-goods {
    width: 16rem;
    line-height: 1.4;
    font-size: 0;
    color: #3b3b3b;
    margin-bottom: .5rem;
    background-color: #fff;
    box-sizing: border-box
}

.new-goods * {
    box-sizing: inherit
}

.new-goods p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.new-goods img {
    width: 100%;
    height: 100%
}

.new-goods-ad-img {
    display: block;
    height: auto;
    min-height: 5rem
}

.new-goods-a {
    display: block
}

.new-goods-header {
    position: relative;
    padding: .5rem .6rem;
    cursor: pointer
}

.new-goods-header:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 1.8rem;
    width: 0
}

.new-goods-header div {
    font-size: .6rem;
    display: inline-block;
    vertical-align: middle
}

.new-goods-header p {
    width: 11.25rem
}

.new-goods-header__img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: .4rem;
    border: .025rem solid #ebebeb;
    padding-top: .45rem;
    padding-bottom: .45rem
}

.new-goods-header__title {
    font-size: .7rem
}

.new-goods-header__right {
    position: absolute;
    top: .5rem;
    right: .6rem;
    height: 1.8rem
}

.new-goods-header__right:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0
}

.new-goods-header__right:after {
    content: "";
    width: .3rem;
    height: .3rem;
    margin-left: .05rem;
    border-right: .05rem solid #999;
    border-top: .05rem solid #999;
    transform: rotate(45deg)
}

.new-goods-header__right:after,.new-goods-header__right img,.new-goods-header__right span {
    display: inline-block;
    vertical-align: middle
}

.new-goods-header__right img {
    width: auto;
    height: 1.5rem
}

.new-goods-item {
    display: inline-block;
    width: 8rem;
    padding-left: .6rem;
    padding-right: .6rem;
    padding-bottom: .6rem;
    border-right: .05rem solid #ebebeb;
    font-size: .6rem;
    cursor: pointer
}

.new-goods-item__img {
    width: 6.75rem;
    height: 6.75rem;
    margin-bottom: .4rem
}

.new-goods-item__img img.new-goods-item__img__corner {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.8rem;
    height: 1.8rem;
    z-index: 2
}

.new-goods-item span {
    color: #ff464e;
    font-size: .75rem
}

.new-goods-item del {
    padding-left: .3rem;
    font-size: .55rem
}

.new-goods-tag {
    display: inline-block;
    line-height: .65rem;
    padding-left: .1rem;
    padding-right: .1rem;
    margin-right: .2rem;
    font-size: .55rem;
    color: #ff464e;
    border: .025rem solid #ff464e
}

.new-goods .flag {
    width: .75rem;
    height: .5rem;
    margin-right: .2rem
}

.new-goods .gray-txt {
    color: #999
}

.vip_mark {
    padding: .05rem .1rem;
    background: #2f3345;
    color: #ffe8ab;
    border: 1px solid transparent;
    border-radius: 1px;
    font-size: .45rem;
    margin-left: .375rem;
    vertical-align: top
}

.vip-wrapper {
    margin: .15rem 0 -.7rem
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
    transition: all .3s linear 0s
}

.app-other .slide-con {
    position: relative
}

.app-other p {
    position: absolute;
    bottom: 8%;
    left: 50%;
    width: 180px;
    margin-left: -90px;
    text-align: center;
    color: #333;
    text-decoration: underline
}

[data-dpr="2"] .app-other p {
    width: 360px
}

[data-dpr="3"] .app-other p {
    width: 540px
}

[data-dpr="2"] .app-other p {
    margin-left: -180px
}

[data-dpr="3"] .app-other p {
    margin-left: -270px
}

.app-other p a {
    float: left;
    font-size: 12px;
    color: #333;
    text-decoration: none
}

[data-dpr="2"] .app-other p a {
    font-size: 24px
}

[data-dpr="3"] .app-other p a {
    font-size: 36px
}

.app-other p a em {
    width: 24px;
    height: 24px;
    display: inline-block
}

[data-dpr="2"] .app-other p a em {
    width: 48px
}

[data-dpr="3"] .app-other p a em {
    width: 72px
}

[data-dpr="2"] .app-other p a em {
    height: 48px
}

[data-dpr="3"] .app-other p a em {
    height: 72px
}
/* 
.app-other p a em.icon-user {
    background: url(../../../images_v1/icon/icon-user.png?161112) no-repeat;
    background-size: cover
}

.app-other p a em.icon-about {
    background: url(../../../images_v1/icon/icon-about.png?161112) no-repeat;
    background-size: cover
}

.app-other p a:last-child {
    float: right
}

.app-other p a:hover {
    color: #f66
}

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
    padding-bottom: 11px
}

[data-dpr="2"] .app-other ul li {
    line-height: 48px
}

[data-dpr="3"] .app-other ul li {
    line-height: 72px
}

[data-dpr="2"] .app-other ul li {
    padding-top: 22px
}

[data-dpr="3"] .app-other ul li {
    padding-top: 33px
}

[data-dpr="2"] .app-other ul li {
    padding-bottom: 22px
}

[data-dpr="3"] .app-other ul li {
    padding-bottom: 33px
}

.app-other ul li.normal {
    border-left-color: #fff;
    border-left-style: solid;
    border-left-width: 4px;
    cursor: pointer
}

[data-dpr="2"] .app-other ul li.normal {
    border-left-width: 7px
}

[data-dpr="3"] .app-other ul li.normal {
    border-left-width: 11px
}

.app-other ul li.normal a {
    display: block;
    font-size: 15px
}

[data-dpr="2"] .app-other ul li.normal a {
    font-size: 30px
}

[data-dpr="3"] .app-other ul li.normal a {
    font-size: 45px
}

.app-other ul li.normal em {
    display: block;
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 16px;
    margin-left: 15px
}

[data-dpr="2"] .app-other ul li.normal em {
    width: 48px
}

[data-dpr="3"] .app-other ul li.normal em {
    width: 72px
}

[data-dpr="2"] .app-other ul li.normal em {
    height: 48px
}

[data-dpr="3"] .app-other ul li.normal em {
    height: 72px
}

[data-dpr="2"] .app-other ul li.normal em {
    margin-right: 32px
}

[data-dpr="3"] .app-other ul li.normal em {
    margin-right: 48px
}

[data-dpr="2"] .app-other ul li.normal em {
    margin-left: 29px
}

[data-dpr="3"] .app-other ul li.normal em {
    margin-left: 44px
}
/* 
.app-other ul li.normal em.home {
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
    border-left-width: 4px
}

[data-dpr="2"] .app-other ul li.normal.active {
    border-left-width: 7px
}

[data-dpr="3"] .app-other ul li.normal.active {
    border-left-width: 11px
}

.app-other ul li.normal.active a {
    color: #ff464e
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
    border-bottom: 1px solid #ebebeb
}

[data-dpr="2"] .app-other ul li.search {
    margin-left: 24px
}

[data-dpr="3"] .app-other ul li.search {
    margin-left: 36px
}

[data-dpr="2"] .app-other ul li.search {
    margin-right: 24px
}

[data-dpr="3"] .app-other ul li.search {
    margin-right: 36px
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
    float: left
}

[data-dpr="2"] .box-search {
    margin-left: 12px
}

[data-dpr="3"] .box-search {
    margin-left: 18px
}

[data-dpr="2"] .box-search {
    height: 48px
}

[data-dpr="3"] .box-search {
    height: 72px
}

[data-dpr="2"] .box-search {
    line-height: 48px
}

[data-dpr="3"] .box-search {
    line-height: 72px
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
    position: absolute
}

[data-dpr="2"] .box-search input {
    font-size: 32px
}

[data-dpr="3"] .box-search input {
    font-size: 48px
}

[data-dpr="2"] .box-search input {
    height: 48px
}

[data-dpr="3"] .box-search input {
    height: 72px
}

[data-dpr="2"] .box-search input {
    line-height: 48px
}

[data-dpr="3"] .box-search input {
    line-height: 72px
}

[data-dpr="2"] .box-search input {
    margin-left: 50px
}

[data-dpr="3"] .box-search input {
    margin-left: 75px
}

.box-search input:focus {
    outline-offset: -2px
}

.box-search .del {
    display: none;
    position: absolute;
    right: 8px;
    top: 6px;
    line-height: normal
}

[data-dpr="2"] .box-search .del {
    right: 15px
}

[data-dpr="3"] .box-search .del {
    right: 23px
}

[data-dpr="2"] .box-search .del {
    top: 12px
}

[data-dpr="3"] .box-search .del {
    top: 18px
}

.box-search .del img {
    height: 12px
}

[data-dpr="2"] .box-search .del img {
    height: 24px
}

[data-dpr="3"] .box-search .del img {
    height: 36px
}

#search-box {
    position: relative;
    height: auto;
    overflow: hidden
}

#search-box button {
    display: block;
    position: absolute;
    top: 0;
    left: 6px;
    border: 0 none;
    background: none;
    cursor: pointer
}

[data-dpr="2"] #search-box button {
    left: 12px
}

[data-dpr="3"] #search-box button {
    left: 18px
}

#search-box button img {
    height: 24px;
    vertical-align: middle
}

[data-dpr="2"] #search-box button img {
    height: 48px
}

[data-dpr="3"] #search-box button img {
    height: 72px
}

.normal_loading {
    display: none;
    position: fixed;
    text-align: center;
    top: 30%;
    max-width: 16rem;
    width: 100%;
    z-index: 201
}

.normal_loading .box {
    background: #fff;
    border-radius: .4rem;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    padding: 5% 8%;
    position: relative;
    width: 30%
}

.normal_loading .box.other {
    background: none
}

.normal_loading .box .txt {
    font-size: .6rem;
    margin-top: .6rem;
    color: #999
}

.normal_loading .box .loading {
    width: 100%;
    height: auto;
    position: relative;
    height: 3.75rem
}

.normal_loading .box .shade {
    background: #000;
    border-radius: 50%;
    height: .3rem;
    opacity: .1;
    width: 1.6rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -.8rem
}

.normal_loading .box .stars {
    position: absolute;
    top: .8rem;
    left: 50%;
    margin-left: -.9rem
}

.normal_loading .box .loading.show .stars {
    animation: like_poof .7s linear infinite forwards
}

@keyframes like_poof {
    0% {
        top: 36px;
        transform: rotate(0deg)
    }

    25% {
        top: 0;
        transform: rotate(0deg)
    }

    50% {
        top: 0;
        transform: rotate(72deg)
    }

    75% {
        transform: rotate(72deg)
    }

    to {
        top: 36px;
        transform: rotate(72deg)
    }
}

.normal_loading .box .loading.show .shade {
    animation: like_poof_other .7s linear infinite forwards
}

@keyframes like_poof_other {
    0% {
        transform: scale(1)
    }

    25% {
        transform: scale(.5)
    }

    50% {
        transform: scale(.5)
    }

    75% {
        transform: scale(.5)
    }

    to {
        transform: scale(1)
    }
}

.normal_loading .box .loading2 {
    width: 3.1rem;
    height: 3.1rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: hsla(0,0%,100%,.8);
    border-radius: .25rem
}

.normal_loading .box .loading2 img {
    display: block;
    width: 100%;
    height: 100%
}

.normal_loading .box .loading2 .circle-rotating {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation: circle_rotating .7s linear infinite forwards
}

.normal_loading .box .loading2 .circle-rotating-new {
    position: absolute;
    width: 70%;
    height: 70%;
    left: 15%;
    top: 15%;
    border-radius: 50%;
    border: solid hsla(0,0%,100%,.8);
    border-width: 2px;
    box-sizing: border-box;
    border-top-color: #ff464e;
    border-right-color: #ff464e;
    animation: circle_rotating .7s linear infinite forwards
}

[data-dpr="2"] .normal_loading .box .loading2 .circle-rotating-new {
    border-width: 4px
}

[data-dpr="3"] .normal_loading .box .loading2 .circle-rotating-new {
    border-width: 6px
}

@keyframes circle_rotating {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(1turn)
    }
}

.more {
    text-align: center;
    padding: 2% 0
}

.more,.more a {
    font-size: .6rem
}

.more a {
    color: #333;
    padding: 0 .5rem
}

.more a img {
    vertical-align: -.05rem;
    height: .5rem;
    margin: 0 auto;
    margin-left: .1rem
}

.toast_alert {
    position: fixed;
    top: 45%;
    width: 100%;
    z-index: 2000
}

.toast_alert .box {
    background: rgba(0,0,0,.75);
    padding: .5rem;
    width: 8rem;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    font-size: .7rem;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word
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
    background-color: #000
}

.slide-box {
    display: none;
    position: fixed;
    bottom: .5rem;
    right: 4%;
    margin-left: 34%;
    z-index: 300
}

.slide-box a {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    text-align: center;
    display: block;
    margin-bottom: .05rem;
    background: #fff;
    border: 1px solid #ebebeb
}

.slide-box a img {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: .4rem
}

.decollator_box {
    width: 100%;
    height: 40px;
    font-size: 0;
    text-align: center
}

[data-dpr="2"] .decollator_box {
    height: 80px
}

[data-dpr="3"] .decollator_box {
    height: 120px
}

.decollator_box span {
    position: relative;
    display: inline-block;
    padding: 0 .25rem;
    font-size: 13px;
    height: 40px;
    line-height: 40px;
    color: #666;
    vertical-align: top
}

[data-dpr="2"] .decollator_box span {
    font-size: 26px
}

[data-dpr="3"] .decollator_box span {
    font-size: 39px
}

[data-dpr="2"] .decollator_box span {
    height: 80px
}

[data-dpr="3"] .decollator_box span {
    height: 120px
}

[data-dpr="2"] .decollator_box span {
    line-height: 80px
}

[data-dpr="3"] .decollator_box span {
    line-height: 120px
}

.decollator_box span:after,.decollator_box span:before {
    position: absolute;
    top: 50%;
    content: "";
    width: 8px;
    height: 1px;
    background-color: #666;
    transform: translateY(-50%)
}

[data-dpr="2"] .decollator_box span:after,[data-dpr="2"] .decollator_box span:before {
    width: 16px
}

[data-dpr="3"] .decollator_box span:after,[data-dpr="3"] .decollator_box span:before {
    width: 24px
}

[data-dpr="2"] .decollator_box span:after,[data-dpr="2"] .decollator_box span:before {
    height: 2px
}

[data-dpr="3"] .decollator_box span:after,[data-dpr="3"] .decollator_box span:before {
    height: 3px
}

.decollator_box span:before {
    left: -.4rem
}

.decollator_box span:after {
    right: -.4rem
}

.decollator_box.color2 span {
    color: #999
}

.decollator_box.color2 span:after,.decollator_box.color2 span:before {
    background-color: #999
}

.seperator_header_simple {
    position: relative;
    margin: 0 auto;
    height: 2rem;
    overflow: hidden;
    text-align: center
}

.seperator_header_simple:after,.seperator_header_simple:before {
    content: "";
    display: block;
    border-bottom: 1px solid #d9d9d9;
    position: absolute;
    height: 1rem;
    width: 41%
}

.seperator_header_simple:after {
    top: 0;
    right: 0
}

.seperator_header_simple .text {
    position: relative;
    top: .3rem;
    display: inline-block;
    font-size: .6rem;
    color: #999
}

.seperator_header_flex {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 2rem;
    -ms-flex-align: center;
    align-items: center
}

.seperator_header_flex .line {
    -ms-flex: 1;
    flex: 1;
    border-bottom: 1px solid #d9d9d9
}

.seperator_header_flex .text {
    padding: 0 .25rem;
    font-size: .6rem;
    color: #999
}

/* @font-face {
    font-family: iconfont;
    src: url(/jpwebapp_v1/iconfont/iconfont.eot?t=14893730732761sss);
    src: url(/jpwebapp_v1/iconfont/iconfont.eot?t=14893730732761sss#iefix) format("embedded-opentype"),url(/jpwebapp_v1/iconfont/iconfont.woff?t=14893730732761sss) format("woff"),url(/jpwebapp_v1/iconfont/iconfont.ttf?t=14893730732761sss) format("truetype"),url(/jpwebapp_v1/iconfont/iconfont.svg?t=14893730732761sss#iconfont) format("svg")
} */

.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-dingdan:before {
    content: "\e60a"
}

.icon-fanhui:before {
    content: "\e60b"
}

.icon-fenlei:before {
    content: "\e60c"
}

.icon-fenxiang:before {
    content: "\e60d"
}

.icon-gengduo:before {
    content: "\e60e"
}

.icon-gouwuche:before {
    content: "\e60f"
}

.icon-guanbi:before {
    content: "\e610"
}

.icon-xiaoxi:before {
    content: "\e611"
}

.icon-shoucang:before {
    content: "\e612"
}

.icon-zhuye:before {
    content: "\e613"
}

.icon-daifukuan:before {
    content: "\e614"
}

.icon-daishouhuo:before {
    content: "\e615"
}

.icon-daifahuo:before {
    content: "\e616"
}

.icon-dianpu:before {
    content: "\e617"
}

.icon-dingwei:before {
    content: "\e618"
}

.icon-shanchu:before {
    content: "\e619"
}

.icon-liebiaojiantou:before {
    content: "\e61a"
}

.icon-tianjia:before {
    content: "\e61b"
}

.icon-sousuofenlei:before {
    content: "\e61c"
}

.icon-tuikuanshouhou:before {
    content: "\e61d"
}

.icon-bianji:before {
    content: "\e61e"
}

.icon-wuliu:before {
    content: "\e61f"
}

.icon-yishoucang:before {
    content: "\e620"
}

.icon-yixuanzhong:before {
    content: "\e621"
}

.icon-weixuanzhong:before {
    content: "\e622"
}

.icon-daichengtuan:before {
    content: "\e623"
}

.icon-zhifaicon:before {
    content: "\e624"
}

.icon-yixuanzhong1:before {
    content: "\e625"
}

.icon-zhekou:before {
    content: "\e626"
}

.icon-kefu:before {
    content: "\e627"
}

.icon-biyan:before {
    content: "\e628"
}

.icon-zhengyan:before {
    content: "\e629"
}

.icon-sousuo:before {
    content: "\e62a"
}

.icon-shanchu_:before {
    content: "\e62b"
}

.icon-jianpan_shanchu:before {
    content: "\e62c"
}

.icon-dunpai:before {
    content: "\e62d"
}

.icon-jiageshengxu:before {
    content: "\e62e"
}

.icon-shaixuan:before {
    content: "\e62f"
}

.icon-jiagejiangxu:before {
    content: "\e630"
}

.icon-jiarushoucang:before {
    content: "\e631"
}

.icon-jiarugouwuche:before {
    content: "\e632"
}

.alert_normal_fullbg {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(0,0,0,.6);
    display: none
}

@keyframes entrys {
    0% {
        right: -13.75rem
    }

    to {
        right: 0
    }
}

.filter_left {
    width: 2.25rem;
    height: 100%;
    float: left;
    background: transparent
}

.filter_right {
    float: left;
    width: 13.75rem;
    padding-top: 32px;
    background: #fff;
    height: 100%
}

[data-dpr="2"] .filter_right {
    padding-top: 64px
}

[data-dpr="3"] .filter_right {
    padding-top: 96px
}

.filter {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    text-align: center;
    animation: entrys 2s;
    display: none;
    width: 100%;
    font-size: 14px;
    color: #333
}

[data-dpr="2"] .filter {
    font-size: 28px
}

[data-dpr="3"] .filter {
    font-size: 42px
}

.filter .filter_title {
    text-align: left;
    padding-left: .7rem;
    margin-bottom: .8rem
}

.filter .filter_only {
    padding-left: .7rem;
    text-align: left;
    margin-bottom: 36px
}

[data-dpr="2"] .filter .filter_only {
    margin-bottom: 72px
}

[data-dpr="3"] .filter .filter_only {
    margin-bottom: 108px
}

.filter .only_item {
    text-align: center;
    width: 4.55rem;
    height: 1.4rem;
    line-height: 1.4rem;
    background: #f4f4f8;
    border-radius: .05rem;
    display: inline-block;
    margin-right: .7rem;
    font-size: 12px;
    border: 1px solid #f4f4f8
}

[data-dpr="2"] .filter .only_item {
    font-size: 24px
}

[data-dpr="3"] .filter .only_item {
    font-size: 36px
}

.filter .only_item.active {
    background: #fff;
    color: #ff464e;
    border: 1px solid #ff464e
}

.filter .price_title {
    text-align: left;
    padding-left: .7rem
}

.filter .price_input {
    height: 28px;
    margin: 16px .7rem 36px
}

[data-dpr="2"] .filter .price_input {
    height: 56px
}

[data-dpr="3"] .filter .price_input {
    height: 84px
}

[data-dpr="2"] .filter .price_input {
    margin-top: 32px
}

[data-dpr="3"] .filter .price_input {
    margin-top: 48px
}

[data-dpr="2"] .filter .price_input {
    margin-bottom: 72px
}

[data-dpr="3"] .filter .price_input {
    margin-bottom: 108px
}

.filter .price_input input {
    float: left;
    background: #f4f4f8;
    border-radius: 2px;
    height: 28px;
    width: 5.225rem;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    border: 0
}

[data-dpr="2"] .filter .price_input input {
    border-radius: 4px
}

[data-dpr="3"] .filter .price_input input {
    border-radius: 6px
}

[data-dpr="2"] .filter .price_input input {
    height: 56px
}

[data-dpr="3"] .filter .price_input input {
    height: 84px
}

[data-dpr="2"] .filter .price_input input {
    font-size: 24px
}

[data-dpr="3"] .filter .price_input input {
    font-size: 36px
}

[data-dpr="2"] .filter .price_input input {
    line-height: 56px
}

[data-dpr="3"] .filter .price_input input {
    line-height: 84px
}

.filter .price_input .high {
    float: right
}

.filter .price_input .line {
    float: left;
    width: .7rem;
    margin-left: .6rem;
    margin-right: .6rem;
    height: 1px;
    margin-top: 14px;
    background: #999
}

[data-dpr="2"] .filter .price_input .line {
    height: 1px
}

[data-dpr="3"] .filter .price_input .line {
    height: 2px
}

[data-dpr="2"] .filter .price_input .line {
    margin-top: 27px
}

[data-dpr="3"] .filter .price_input .line {
    margin-top: 41px
}

.filter .category {
    padding-left: .7rem;
    padding-right: .7rem;
    margin-bottom: 4px;
    height: 20px;
    line-height: 20px
}

[data-dpr="2"] .filter .category {
    margin-bottom: 8px
}

[data-dpr="3"] .filter .category {
    margin-bottom: 12px
}

[data-dpr="2"] .filter .category {
    height: 40px
}

[data-dpr="3"] .filter .category {
    height: 60px
}

[data-dpr="2"] .filter .category {
    line-height: 40px
}

[data-dpr="3"] .filter .category {
    line-height: 60px
}

.filter .category .category_title {
    float: left
}

.filter .category .category_more {
    float: right;
    color: #999;
    font-size: 12px
}

[data-dpr="2"] .filter .category .category_more {
    font-size: 24px
}

[data-dpr="3"] .filter .category .category_more {
    font-size: 36px
}

.filter .category .category_more .icon-liebiaojiantou {
    margin-left: 3px;
    font-size: 12px
}

[data-dpr="2"] .filter .category .category_more .icon-liebiaojiantou {
    margin-left: 6px
}

[data-dpr="3"] .filter .category .category_more .icon-liebiaojiantou {
    margin-left: 9px
}

[data-dpr="2"] .filter .category .category_more .icon-liebiaojiantou {
    font-size: 24px
}

[data-dpr="3"] .filter .category .category_more .icon-liebiaojiantou {
    font-size: 36px
}

.filter .category .category_more .icon-liebiaojiantou:before {
    transform: rotate(90deg);
    display: inline-block
}

.filter .category .category_more .icon-liebiaojiantou.showall:before {
    transform: rotate(270deg);
    display: inline-block
}

.filter .categorys.showall {
    height: 12.35rem;
    overflow: auto
}

.filter .categorys {
    height: 129px;
    padding-left: .7rem;
    padding-right: .7rem;
    font-size: 12px;
    overflow: hidden
}

[data-dpr="2"] .filter .categorys {
    height: 258px
}

[data-dpr="3"] .filter .categorys {
    height: 387px
}

[data-dpr="2"] .filter .categorys {
    font-size: 24px
}

[data-dpr="3"] .filter .categorys {
    font-size: 36px
}

.filter .categorys div {
    float: left;
    margin-top: 12px;
    margin-right: 5%;
    border-radius: 2px;
    background: #f4f4f8;
    width: 30%;
    height: 28px;
    line-height: 28px;
    border: 1px solid #f4f4f8;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

[data-dpr="2"] .filter .categorys div {
    margin-top: 24px
}

[data-dpr="3"] .filter .categorys div {
    margin-top: 36px
}

[data-dpr="2"] .filter .categorys div {
    border-radius: 4px
}

[data-dpr="3"] .filter .categorys div {
    border-radius: 6px
}

[data-dpr="2"] .filter .categorys div {
    height: 56px
}

[data-dpr="3"] .filter .categorys div {
    height: 84px
}

[data-dpr="2"] .filter .categorys div {
    line-height: 56px
}

[data-dpr="3"] .filter .categorys div {
    line-height: 84px
}

.filter .categorys div:nth-child(3n+0) {
    margin-right: 0
}

.filter .categorys div.active {
    background: #fff;
    border: 1px solid #ff464e;
    color: #ff464e
}

.filter .filter_bnt {
    border-top: 1px solid #ebebeb;
    width: 13.75rem;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    position: absolute;
    bottom: 0
}

[data-dpr="2"] .filter .filter_bnt {
    height: 88px
}

[data-dpr="3"] .filter .filter_bnt {
    height: 132px
}

[data-dpr="2"] .filter .filter_bnt {
    line-height: 88px
}

[data-dpr="3"] .filter .filter_bnt {
    line-height: 132px
}

[data-dpr="2"] .filter .filter_bnt {
    font-size: 32px
}

[data-dpr="3"] .filter .filter_bnt {
    font-size: 48px
}

.filter .filter_bnt .reset {
    width: 50%;
    float: left
}

.filter .filter_bnt .ensure {
    width: 50%;
    float: left;
    background: #ff464e;
    color: #fff
}

.search-result {
    text-align: center
}

#t-find {
    padding-right: 12px
}

[data-dpr="2"] #t-find {
    padding-right: 24px
}

[data-dpr="3"] #t-find {
    padding-right: 36px
}

.no_data {
    padding: 1.2rem 0 1.75rem;
    line-height: 1rem;
    color: #999;
    text-align: center;
    background: #fff;
    font-size: .7rem
}

.no_data img {
    width: 6rem
}

.no_data .b-title {
    font-size: 16px;
    margin-bottom: .2rem;
    color: #333
}

[data-dpr="2"] .no_data .b-title {
    font-size: 32px
}

[data-dpr="3"] .no_data .b-title {
    font-size: 48px
}

.no_data .l-title {
    font-size: 12px;
    color: #666
}

[data-dpr="2"] .no_data .l-title {
    font-size: 24px
}

[data-dpr="3"] .no_data .l-title {
    font-size: 36px
}

#search-form {
    margin-right: 53px;
    margin-left: 48px
}

[data-dpr="2"] #search-form {
    margin-right: 106px
}

[data-dpr="3"] #search-form {
    margin-right: 159px
}

[data-dpr="2"] #search-form {
    margin-left: 96px
}

[data-dpr="3"] #search-form {
    margin-left: 144px
}

#search-form .search-click {
    background: transparent;
    position: absolute;
    border: 0;
    z-index: 100;
    right: 12px;
    top: 9px;
    color: #333;
    line-height: 26px;
    font-size: 15px;
    text-align: center
}

[data-dpr="2"] #search-form .search-click {
    right: 24px
}

[data-dpr="3"] #search-form .search-click {
    right: 36px
}

[data-dpr="2"] #search-form .search-click {
    top: 18px
}

[data-dpr="3"] #search-form .search-click {
    top: 27px
}

[data-dpr="2"] #search-form .search-click {
    line-height: 52px
}

[data-dpr="3"] #search-form .search-click {
    line-height: 78px
}

[data-dpr="2"] #search-form .search-click {
    font-size: 30px
}

[data-dpr="3"] #search-form .search-click {
    font-size: 45px
}

#search-box {
    width: 100%;
    margin-top: 9px;
    margin-right: 120px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    padding: .125rem 0
}

[data-dpr="2"] #search-box {
    margin-top: 18px
}

[data-dpr="3"] #search-box {
    margin-top: 27px
}

[data-dpr="2"] #search-box {
    margin-right: 240px
}

[data-dpr="3"] #search-box {
    margin-right: 360px
}

#search-box button {
    top: .125rem
}

#search-box button img {
    height: 20px
}

[data-dpr="2"] #search-box button img {
    height: 40px
}

[data-dpr="3"] #search-box button img {
    height: 60px
}

.box-search {
    width: 97%;
    height: 20px
}

[data-dpr="2"] .box-search {
    height: 40px
}

[data-dpr="3"] .box-search {
    height: 60px
}

.box-search input {
    margin-left: 30px;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    color: #999;
    height: 20px;
    font-size: 13px;
    width: 86%;
    left: 0
}

[data-dpr="2"] .box-search input {
    margin-left: 60px
}

[data-dpr="3"] .box-search input {
    margin-left: 90px
}

[data-dpr="2"] .box-search input {
    height: 40px
}

[data-dpr="3"] .box-search input {
    height: 60px
}

[data-dpr="2"] .box-search input {
    font-size: 26px
}

[data-dpr="3"] .box-search input {
    font-size: 39px
}

.box-search .del {
    top: 4px
}

[data-dpr="2"] .box-search .del {
    top: 7px
}

[data-dpr="3"] .box-search .del {
    top: 11px
}

.brand-sort {
    width: 16rem;
    color: #333;
    background-color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    border-bottom: 1px solid #ebebeb;
    text-align: center
}

[data-dpr="2"] .brand-sort {
    padding-top: 10px
}

[data-dpr="3"] .brand-sort {
    padding-top: 15px
}

[data-dpr="2"] .brand-sort {
    padding-bottom: 10px
}

[data-dpr="3"] .brand-sort {
    padding-bottom: 15px
}

[data-dpr="2"] .brand-sort {
    font-size: 28px
}

[data-dpr="3"] .brand-sort {
    font-size: 42px
}

.brand-sort table {
    width: 100%;
    height: 30px
}

[data-dpr="2"] .brand-sort table {
    height: 60px
}

[data-dpr="3"] .brand-sort table {
    height: 90px
}

.brand-sort table td {
    width: 20%
}

.brand-sort table td span {
    vertical-align: middle
}

.brand-sort .sort-icon {
    /* background: url(/jpwebapp_v1/images_v1/icon/sort_sprite.png) no-repeat; */
    background-size: 49px;
    margin-left: 5px;
    display: inline-block
}

[data-dpr="2"] .brand-sort .sort-icon {
    background-size: 98px
}

[data-dpr="3"] .brand-sort .sort-icon {
    background-size: 147px
}

[data-dpr="2"] .brand-sort .sort-icon {
    margin-left: 10px
}

[data-dpr="3"] .brand-sort .sort-icon {
    margin-left: 15px
}

.brand-sort .price .sort-icon {
    height: 15px;
    width: 8px;
    background-position-x: 0
}

[data-dpr="2"] .brand-sort .price .sort-icon {
    height: 30px
}

[data-dpr="3"] .brand-sort .price .sort-icon {
    height: 45px
}

[data-dpr="2"] .brand-sort .price .sort-icon {
    width: 15px
}

[data-dpr="3"] .brand-sort .price .sort-icon {
    width: 23px
}

[data-dpr="2"] .brand-sort .price .sort-icon,[data-dpr="3"] .brand-sort .price .sort-icon {
    background-position-x: 0
}

.brand-sort .price.active.desc .sort-icon {
    height: 15px;
    width: 8px;
    background-position-x: -14px
}

[data-dpr="2"] .brand-sort .price.active.desc .sort-icon {
    height: 30px
}

[data-dpr="3"] .brand-sort .price.active.desc .sort-icon {
    height: 45px
}

[data-dpr="2"] .brand-sort .price.active.desc .sort-icon {
    width: 15px
}

[data-dpr="3"] .brand-sort .price.active.desc .sort-icon {
    width: 23px
}

[data-dpr="2"] .brand-sort .price.active.desc .sort-icon {
    background-position-x: -28px
}

[data-dpr="3"] .brand-sort .price.active.desc .sort-icon {
    background-position-x: -42px
}

.brand-sort .price.active.asc .sort-icon {
    height: 15px;
    width: 8px;
    background-position-x: -7px
}

[data-dpr="2"] .brand-sort .price.active.asc .sort-icon {
    height: 30px
}

[data-dpr="3"] .brand-sort .price.active.asc .sort-icon {
    height: 45px
}

[data-dpr="2"] .brand-sort .price.active.asc .sort-icon {
    width: 15px
}

[data-dpr="3"] .brand-sort .price.active.asc .sort-icon {
    width: 23px
}

[data-dpr="2"] .brand-sort .price.active.asc .sort-icon {
    background-position-x: -14px
}

[data-dpr="3"] .brand-sort .price.active.asc .sort-icon {
    background-position-x: -21px
}

.brand-sort .screen .sort-icon {
    height: 13px;
    width: 11px;
    margin-left: 5px;
    background-position-y: 0;
    background-position-x: -23px
}

[data-dpr="2"] .brand-sort .screen .sort-icon {
    height: 26px
}

[data-dpr="3"] .brand-sort .screen .sort-icon {
    height: 39px
}

[data-dpr="2"] .brand-sort .screen .sort-icon {
    width: 22px
}

[data-dpr="3"] .brand-sort .screen .sort-icon {
    width: 33px
}

[data-dpr="2"] .brand-sort .screen .sort-icon {
    margin-left: 10px
}

[data-dpr="3"] .brand-sort .screen .sort-icon {
    margin-left: 15px
}

[data-dpr="2"] .brand-sort .screen .sort-icon,[data-dpr="3"] .brand-sort .screen .sort-icon {
    background-position-y: 0
}

[data-dpr="2"] .brand-sort .screen .sort-icon {
    background-position-x: -46px
}

[data-dpr="3"] .brand-sort .screen .sort-icon {
    background-position-x: -69px
}

.brand-sort .screen.active .sort-icon {
    height: 13px;
    width: 13px;
    margin-left: 5px;
    background-position-y: 0;
    background-position-x: -35px
}

[data-dpr="2"] .brand-sort .screen.active .sort-icon {
    height: 26px
}

[data-dpr="3"] .brand-sort .screen.active .sort-icon {
    height: 39px
}

[data-dpr="2"] .brand-sort .screen.active .sort-icon {
    width: 26px
}

[data-dpr="3"] .brand-sort .screen.active .sort-icon {
    width: 39px
}

[data-dpr="2"] .brand-sort .screen.active .sort-icon {
    margin-left: 10px
}

[data-dpr="3"] .brand-sort .screen.active .sort-icon {
    margin-left: 15px
}

[data-dpr="2"] .brand-sort .screen.active .sort-icon,[data-dpr="3"] .brand-sort .screen.active .sort-icon {
    background-position-y: 0
}

[data-dpr="2"] .brand-sort .screen.active .sort-icon {
    background-position-x: -70px
}

[data-dpr="3"] .brand-sort .screen.active .sort-icon {
    background-position-x: -105px
}

.brand-sort .active {
    color: #ff464e
}

.sort-fixed {
    position: fixed;
    top: 0;
    z-index: 200
}

.menu-more {
    position: absolute;
    width: 30px;
    top: 5px;
    z-index: 2;
    right: 12px
}

[data-dpr="2"] .menu-more {
    width: 60px
}

[data-dpr="3"] .menu-more {
    width: 90px
}

[data-dpr="2"] .menu-more {
    top: 10px
}

[data-dpr="3"] .menu-more {
    top: 15px
}

[data-dpr="2"] .menu-more {
    right: 24px
}

[data-dpr="3"] .menu-more {
    right: 36px
}

.menu-more .iconfont {
    font-size: 30px
}

[data-dpr="2"] .menu-more .iconfont {
    font-size: 60px
}

[data-dpr="3"] .menu-more .iconfont {
    font-size: 90px
}

.menu-item {
    display: none;
    position: absolute;
    top: 40px;
    right: -12px;
    width: 120px;
    height: 135px;
    font-size: 14px;
    line-height: 45px;
    border-radius: 3px;
    background-color: rgba(0,0,0,.7)
}

[data-dpr="2"] .menu-item {
    top: 80px
}

[data-dpr="3"] .menu-item {
    top: 120px
}

[data-dpr="2"] .menu-item {
    right: -24px
}

[data-dpr="3"] .menu-item {
    right: -36px
}

[data-dpr="2"] .menu-item {
    width: 240px
}

[data-dpr="3"] .menu-item {
    width: 360px
}

[data-dpr="2"] .menu-item {
    height: 270px
}

[data-dpr="3"] .menu-item {
    height: 405px
}

[data-dpr="2"] .menu-item {
    font-size: 28px
}

[data-dpr="3"] .menu-item {
    font-size: 42px
}

[data-dpr="2"] .menu-item {
    line-height: 90px
}

[data-dpr="3"] .menu-item {
    line-height: 135px
}

[data-dpr="2"] .menu-item {
    border-radius: 6px
}

[data-dpr="3"] .menu-item {
    border-radius: 9px
}

.menu-item .menu-angle {
    width: 0;
    height: 0;
    border-left: .35rem solid transparent;
    border-right: .35rem solid transparent;
    border-bottom: .35rem solid rgba(0,0,0,.7);
    position: absolute;
    top: -.325rem;
    right: 16px
}

[data-dpr="2"] .menu-item .menu-angle {
    right: 32px
}

[data-dpr="3"] .menu-item .menu-angle {
    right: 48px
}

.menu-item li {
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #666
}

[data-dpr="2"] .menu-item li {
    margin-left: 20px
}

[data-dpr="3"] .menu-item li {
    margin-left: 30px
}

[data-dpr="2"] .menu-item li {
    margin-right: 20px
}

[data-dpr="3"] .menu-item li {
    margin-right: 30px
}

.menu-item li:last-child {
    border-bottom: none
}

.menu-item a {
    color: #fff
}

.menu-item a .iconfont {
    font-size: 24px;
    margin-right: 5px;
    vertical-align: middle;
    display: inline-block;
    color: #fff
}

[data-dpr="2"] .menu-item a .iconfont {
    font-size: 48px
}

[data-dpr="3"] .menu-item a .iconfont {
    font-size: 72px
}

[data-dpr="2"] .menu-item a .iconfont {
    margin-right: 10px
}

[data-dpr="3"] .menu-item a .iconfont {
    margin-right: 15px
}

/*# sourceMappingURL=../../maps/page/m/search.css.map */

</style>