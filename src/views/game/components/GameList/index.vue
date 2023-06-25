<template>
  <div class="game-list-container">
    <div class="title">
      <div>Related Games</div>
      <div class="btns">
        <Btn title="&lt;" @click="currentValue--"></Btn>
        <Btn title=">" @click="currentValue++"></Btn>
      </div>
    </div>
    <a-carousel animation-name="slide" show-arrow="never" indicator-type="never" :style="{ height: '240px' }" v-model:current="currentValue"
      @change="handleChange">
      <a-carousel-item v-for="image in images">
        <img :src="image">
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import Btn from '@/components/btn/Btn.vue';

const currentValue=ref(1)
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];
const handleChange = (value: number) => {
  console.log(value)
}
defineOptions({
  name: 'GameList'
})
</script>

<style scoped lang='scss'>
.game-list-container {
  .title {
    font-size: 20px;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;

    .btns {
      display: flex;
    }
  }
}
</style>