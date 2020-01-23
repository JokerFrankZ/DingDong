<template>
  <div class="goods-swiper">
    <swiper :options="swiperTop" class="swiper-top" ref="swiperTop">
      <swiper-slide v-for="(imgUrl, index) in imgUrls" :key="index">
        <img :src="imgUrl" alt="" />
      </swiper-slide>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
    <swiper :options="swiperThumbs" class="swiper-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(imgUrl, index) in imgUrls" :key="index">
        <img :src="imgUrl" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'goodsSwiper',
  props: {
    imgUrls: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data: function() {
    return {
      swiperTop: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperThumbs: {
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.goods-swiper
  .swiper-top,.swiper-thumbs
    width 100%
  .swiper-top
    height 450px
  .swiper-thumbs
    height 87px
    .swiper-slide
      width 20%
      display flex
      justify-content center
      align-items center
      cursor pointer
      img
        width 75px
        height 75px
        &:hover
          border 1px solid #ff0000
</style>
