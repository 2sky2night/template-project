<template>
  <div class="page home-page">
    <SignBox />
    <Carousel :height="180" :show-dots="true" :show-btns="false" :autoplay="true" :delay="3000">
      <CarouselItem v-for="item in 10">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for=" ele  in 5">{{ ele }}</div>
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
    <div class="mb-10 mt-10"></div>
    <a-carousel style="height: 180px;width: 100%;" :auto-play="true" show-arrow="always" indicator-type="line">
      <a-carousel-item v-for=" item  in 5">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for=" ele  in 5">{{ ele }}</div>
        </div>
      </a-carousel-item>
    </a-carousel>

  </div>
</template>


<script lang='ts' setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SignBox from './components/SignBox.vue';
import CarouselItem from '@/components/carousel/components/CarouselItem.vue';
import Carousel from '@/components/carousel/index.vue'


defineOptions({
  name: 'Home'
})
</script>

<style scoped lang='scss'>
.page {
  height: 200vh;

  .container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .swiper-item {
    height: 100%;
    display: flex;
    padding: 0 40px;

    .card-item {
      flex-grow: 1;
      background-color: skyblue;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }
  }

  &.home-page {
    display: flex;
    flex-direction: column;
  }
}
</style>