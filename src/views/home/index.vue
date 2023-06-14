<template>
  <div class="page home-page">
    <SignBox />
    <Carousel :height="180" :show-dots="true">
      <CarouselItem v-for="item in 10">
        <div class="container">
          <button @click="fun">{{ item }}</button>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>


<script lang='ts' setup>
import SignBox from './components/SignBox.vue';
import CarouselItem from '@/components/carousel/components/CarouselItem.vue';
import Carousel from '@/components/carousel/index.vue'

function fun () {
  console.log('~~')
}

defineOptions({
  name: 'Home'
})
</script>

<style scoped lang='scss'>
.page {
  height: 200vh;
  .container{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    button{
      background-color: red;
      padding: 10px;
    }
  }
  &.home-page {
    display: flex;
    flex-direction: column;
  }
}
</style>