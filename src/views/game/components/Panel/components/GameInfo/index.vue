<template>
  <div class="game-info-container">
    <BetRace/>
    <GameList class="mb-10 mt-10" :lists="lists" title="Related Games" />
    <Provider/>
  </div>
</template>

<script lang='ts' setup>
// components
import BetRace from './components/BetRace/index.vue'
import GameList from '@/components/list/GameList.vue'
import Provider from './components/Provider/index.vue'
import type GameCardProps from '@/types/components/card/GameCard';

const lists: GameCardProps[][] = [
  [
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    }
  ],
  [
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title: 'Wazdan',
      imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    }
  ],
]

defineOptions({
  name: 'GameInfo'
})
</script>

<style scoped lang='scss'>
.game-info-container{

}
</style>