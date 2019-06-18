<template>
  <section class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index" v-show="banner!=''">
        <a :href="item.url">
          <div class="swiper-img flex3">
            <img :src="item.image" width="100%" alt="banner" style="display:block;">
          </div>
        </a>
      </div>
    </div>
    <div class="swiper-pagination" v-for="(item,index) in banner" :key="index" slot="pagination"></div>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "hbanner",
  data() {
    return {
      banner: [
        {
          image:
            "https://goods4.juancdn.com/jas/190612/6/8/5d00e2feb6f8ea44ec2d7f27_1080x418.png"
        },
        {
          image:
            "https://goods5.juancdn.com/jas/190614/8/8/5d033e90b6f8ea121b7998f0_1080x418.jpg"
        },
        {
          image:
            "https://goods6.juancdn.com/jas/190614/b/f/5d033dd533b08927b73a211b_1080x418.png"
        },
        {
          image:
            "https://goods1.juancdn.com/jas/190614/1/7/5d03542c33b08953461c1b57_1080x418.jpg"
        }
      ]
    };
  },
  components: {
    Swiper
    // swiperSlide
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        /* 触摸滑动后是否继续轮播 */
        disableOnInteraction: false
      },
      //设定初始化时slide的索引
      initialSlide: 0,
      //滑动速度
      speed: 800,
      //滑动方向
      direction: "horizontal",
      // paginationClickable: true,
      // centeredSlides: true,
      // autoplayDisableOnInteraction: false,
      // preventClicks: false,
      // speed: 600,
      // observer: true,
      loop: true,
      //   nextButton: ".swiper-button-next"
      // observeParents: true
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      }
    });
  }
};
</script>

<style>
.swiper-pagination-bullet {
  width: 0.3413333333333333rem;
  height: 0.3413333333333333rem;
  margin: 0 0.128rem;
  border-radius: 0.17066666666666666rem;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.swiper-pagination-bullet-active {
  width: 0.6826666666666666rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  background-color: rgba(255, 255, 255, 1);
}
</style>
