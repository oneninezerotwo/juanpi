<template>
  <div id="root">
    <div>
      <div
        class="App"
        style="background-color: rgb(244, 244, 248); padding-bottom: 2.13333rem; position: relative;"
      >
        <div class="sc-cMljjf QllnW">
          <ul class="sc-jAaTju izStSE">
            <router-link class="act sc-jDwBTQ fSJdS" to="/">
              <img
                class="sc-gPEVay gtkfWd"
                src="https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png"
              >首页
            </router-link>
            <router-link class="sc-jDwBTQ fSJdS" to="https://m.juanpi.com/cate/index?select=2_1">
              <img
                class="sc-gPEVay gtkfWd"
                src="https://s1.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png"
              >分类
            </router-link>
            <router-link class="sc-jDwBTQ fSJdS" to="https://m.juanpi.com/cart/?select=3_1">
              <img
                class="sc-gPEVay gtkfWd"
                src="https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png"
              >购物车
            </router-link>
            <router-link class="sc-jDwBTQ fSJdS" to="https://m.juanpi.com/user/?select=4_1">
              <img
                class="sc-gPEVay gtkfWd"
                src="https://s1.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png"
              >我的卷皮
            </router-link>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>
