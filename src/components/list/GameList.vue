<template>
  <div class="game-list-container">
    <PanelTitle :title="title">
      <template #right>
        <div class="btns">
          <a-button>View all</a-button>
          <a-button-group class="ml-10">
            <a-button @click="onHandlePre"><icon-left /></a-button>
            <a-button @click="onHandleNext"><icon-right /></a-button>
          </a-button-group>
        </div>
      </template>
    </PanelTitle>
    <Carousel ref="carouselEle" :height="210" :show-dots="false" :show-btns="false" :autoplay="true" :delay="3000">
      <CarouselItem v-for="list in lists">
        <div class="game-list">
          <GameCard v-for="item in list" :title="item.title" :img-src="item.imgSrc" />
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import CarouselItem from '@/components/carousel/components/CarouselItem.vue';
import Carousel from '@/components/carousel/index.vue';
import GameCard from '@/components/card/GameCard.vue';
import PanelTitle from '@/components/title/PanelTitle.vue';
import type GameCardProps from '@/types/components/card/GameCard';
import type { CarouselInstance } from '@/types/components/carousel';

defineProps<{
  lists: GameCardProps[][];
  title: string;
}>()

const carouselEle = ref<CarouselInstance | null>(null)

const onHandleNext = () => {
  if (carouselEle.value) {
    carouselEle.value.throttleNext()
  }
}

const onHandlePre = () => {
  if (carouselEle.value) {
    carouselEle.value.throttlePre()
  }
}

defineOptions({
  name: 'GameList'
})
</script>

<style scoped lang='scss'>
.btns {
  align-items: center;
  display: flex;
}

.game-list-container {
  .title {
    font-size: 20px;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;
  }

  .game-list {
    background-color: var(--color-bg-2);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0 20px;
  }
}
</style>