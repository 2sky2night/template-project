<template>
  <div class="game-card-container">
    <div class="game-img">
      <img :src="imgSrc">
    </div>
    <div class="game-title">
      <span>{{ title }}</span>
      <icon-info-circle size="20" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import type GameCardProps from '@/types/components/card/GameCard'
defineProps<GameCardProps>()
</script>

<style scoped lang='scss'>
.game-card-container{
  display: flex;
  flex-direction: column;
  width: 170px;
  .game-img{
    img{
      width: 100%;
      height: 160px;
    }
    flex-grow: 1;
  }
  .game-title{
    padding: 0 10px;
    height: 50px;
    color:var(--color-text-3);
    background-color: var(--color-bg-1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>