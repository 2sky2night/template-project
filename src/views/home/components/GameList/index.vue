<template>
  <div class="games-list-container">
    <div class="title mb-10">
      <div class="text">{{ title }}</div>
      <div class="btns">
        <a-button>View all</a-button>
        <a-button-group class="ml-10">
          <a-button @click="onHandlePre"><icon-left /></a-button>
          <a-button @click="onHandleNext"><icon-right /></a-button>
        </a-button-group>
      </div>
    </div>
    <Carousel ref="carouselIns" :height="180" :autoplay="false" :show-dots="false" :show-btns="false" :delay="0">
      <CarouselItem v-for="item in 10">
        <div class="swiper-item">
          <div class="card-item mr-10" v-for="ele in 5">{{ item }}</div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang='ts' setup>
// 组件
import Carousel from '@/components/carousel/index.vue'
import CarouselItem from '@/components/carousel/components/CarouselItem.vue';
// hooks
import { ref } from 'vue'
// types
import type { CarouselInstance } from '@/types/components/carousel'

// 轮播图实例
const carouselIns = ref<CarouselInstance | null>(null)
// 自定义属性
const props = defineProps<{title:string}>()

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
  name: 'GameList'
})
</script>

<style scoped lang='scss'>
.games-list-container {
  margin-bottom: 30px;

  .title {
    display: flex;
    justify-content: space-between;

    .text {
      font-weight: 600;
      font-size: 20px;
    }

    .btns {
      display: flex;

    }
  }
}

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