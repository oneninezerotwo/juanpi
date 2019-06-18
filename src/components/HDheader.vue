<template>
  <header id="head" class="head">
    <div class="fixtop">
      <span id="t-find">
        <a class="btn btn-left" href="javascript:window.history.go(-1)">
          <span class="iconfont icon-fanhui"></span>
        </a>
      </span>
      <span id="t-index">T恤</span>
      <a class="keywords" href="//m.juanpi.com/keywords">
        <span class="iconfont icon-sousuo"></span>
      </a>
      <div class="menu-more">
        <span class="iconfont icon-gengduo js-showmenu"></span>
        <div class="menu-item">
          <div class="menu-angle"></div>
          <ul>
            <li>
              <a href="//m.juanpi.com">
                <span class="iconfont icon-zhuye"></span>
                首页
              </a>
            </li>
            <li>
              <a href="//m.juanpi.com/myfavorite">
                <span class="iconfont icon-shoucang"></span>
                我的收藏
              </a>
            </li>
            <li>
              <a href="//m.juanpi.com/order">
                <span class="iconfont icon-dingdan"></span>
                我的订单
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "dhaeder"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head {
  z-index: 199;
  height: 44px;
  width: 100%;
  overflow: inherit;
  border-bottom: 1px solid #ebebeb;
}

#head,
.item-triangle {
  position: relative;
}
body * {
  max-height: 9000rem;
}
.fixtop {
  z-index: 999;
  height: 44px;
  width: 100%;
}

.fixtop,
.item-bolck {
  background: #fff;
}
#index,
#t-index,
.fixtop,
.item-triangle .item-tri {
  position: absolute;
}
#t-find {
  padding-top: 8px;
  padding-left: 0.512rem;
  height: 28px;
  width: 1.19467rem;
}

#classify,
#t-find {
  float: left;
}
#head .btn {
  vertical-align: top;
}

.btn {
  width: 1.024rem;
  height: 24px;
  background-size: cover;
}
#head .btn .iconfont {
  font-size: 24px;
}
.icon-fanhui:before {
  content: "\e60b";
}
.keywords {
  position: absolute;
  top: 8px;
  right: 54px;
}

a,
a:active,
a:hover {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
a {
  color: #666;
}
.keywords .iconfont {
  font-size: 24px;
}

#head.logo,
#index .logo,
#t-find img,
#t-user a,
.fixtop span,
.item-bolck img {
  display: block;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.menu-more {
  position: absolute;
  width: 30px;
  top: 5px;
  z-index: 2;
  right: 12px;
}

.menu-more .iconfont {
  font-size: 30px;
}
#head.logo,
#index .logo,
#t-find img,
#t-user a,
.fixtop span,
.item-bolck img {
  display: block;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  background-color: rgba(0, 0, 0, 0.7);
}
.menu-item .menu-angle {
  width: 0;
  height: 0;
  border-left: 0.29867rem solid transparent;
  border-right: 0.29867rem solid transparent;
  border-bottom: 0.29867rem solid rgba(0, 0, 0, 0.7);
  position: absolute;
  top: -0.27733rem;
  right: 16px;
}
.menu-item li {
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #666;
}

li,
li:active,
ul {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
dl,
li,
ol,
ul {
  list-style: none;
}
.menu-item a {
  color: #fff;
}
.menu-item a .iconfont {
  font-size: 24px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
  color: #fff;
}

.menu-more .iconfont {
  font-size: 30px;
}

#t-index {
  cursor: default;
  width: 100%;
  z-index: -1;
  padding: 0 1.536rem;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#t-index,
.btn,
.item-bolck,
.item-goods {
  overflow: hidden;
}
#t-index,
#t-user a {
  text-align: center;
}
#t-index,
#t-user a {
  color: #333;
}
#index,
#t-index,
.fixtop,
.item-triangle .item-tri {
  position: absolute;
}
</style>

