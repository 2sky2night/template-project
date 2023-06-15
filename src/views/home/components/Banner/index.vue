<template>
  <div class="banner-container mt-10 mb-10">
    <Carousel :height="180" :show-dots="true" :show-btns="true" :autoplay="false" :delay="3000">
      <CarouselItem v-for="item in 10">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for="ele in 5">{{ item }}</div>
        </div>
      </CarouselItem>
    </Carousel>

    <!-- <swiper style="height: 180px;width: 100% !important;overflow: hidden;">
      <swiper-slide v-for="  item   in 5">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for="  ele   in 5">{{ ele }}</div>
        </div>
      </swiper-slide>
    </swiper> -->

    <!-- <a-carousel style="height: 180px;width: 100%;" :auto-play="true" show-arrow="always" indicator-type="line">
      <a-carousel-item v-for=" item  in 5">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for=" ele  in 5">{{ ele }}</div>
        </div>
      </a-carousel-item>
    </a-carousel> -->
  </div>
</template>

<script lang='ts' setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import CarouselItem from '@/components/carousel/components/CarouselItem.vue';
import Carousel from '@/components/carousel/index.vue'
defineOptions({
  name:"Banner"
})
</script>

<style scoped lang='scss'>
.swiper-item {
  height: 100%;
  display: flex;

  .card-item {
    flex-grow: 1;
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
}
</style>