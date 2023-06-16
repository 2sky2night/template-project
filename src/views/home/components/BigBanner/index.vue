<template>
  <div class="big-banner-container">
    <Carousel ref="carouselIns" :height="300" :show-dots="false" :show-btns="false" :autoplay="false" :delay="0">
      <CarouselItem v-for="item in 3">
        <div class="swiper-item">
          {{ item }}
        </div>
      </CarouselItem>
    </Carousel>
    <div class="btns">
      <a-button @click="onHandlePre"><icon-left /></a-button>
      <a-button @click="onHandleNext"><icon-right /></a-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import CarouselItem from '@/components/carousel/components/CarouselItem.vue';
import Carousel from '@/components/carousel/index.vue'
import type { CarouselInstance } from '@/types/components/carousel';

const carouselIns = ref<CarouselInstance | null>(null)

/**
 * 上一张
 */
const onHandlePre = () => {
  if (carouselIns.value) {
    carouselIns.value.throttlePre()
  }
}

/**
 * 下一张
 */
const onHandleNext = () => {
  if (carouselIns.value) {
    carouselIns.value.throttleNext()
  }
}

defineOptions({
  name: 'BigBanner'
})
</script>

<style scoped lang='scss'>
.big-banner-container {
  margin-bottom: 30px;
  position: relative;
  .btns{
    top:0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1000;
    pointer-events: none;
    ::v-deep .arco-btn{
      pointer-events: all;
      position: absolute;
      &:first-child{
        transform: translateX(-100%);
      }
      &:last-child{
        right: 0;
        transform: translateX(100%);
      }
    }
  }
}

.swiper-item {
  height: 100%;
  display: flex;
}
</style>