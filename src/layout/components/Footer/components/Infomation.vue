<template>
  <div class="information-container">
    <div class="item">
      <div class="title">
        <icon-face-smile-fill />
        <span>{{ title }}</span>
      </div>
      <p class="info">
        A multi-award winning crypto casino. With a player-centric approach, BC.GAME is able to satisfy millions of
        gamblers across the globe. BC.GAME has its priority set on its community, ensuring an everlasting and endlessly
        entertaining gambling experience.
      </p>
    </div>
    <div class="item">
      <div class="more-info">
        <img src="https://bc.game/assets/license.d1460593.png">
        <p class="info">
          BC.GAME is operated by BlockDance B.V. (Commercial register of Curaçao no.158182, Emancipatie Boulevard Dominico
          F. "Don" Martina 31, Curaçao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.
        </p>
      </div>
      <p class="info">
        ©2023 BC.GAME ALL RIGHTS RESERVED

        1BTC=¥3,531,070.36
      </p>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { title } from '@/config'
</script>

<style scoped lang='scss'>
.information-container {
  display: flex;
  .info{
    font-size: 12px;
    color:var(--color-text-3);
  }
  .title{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .item{
    &:first-child{
      margin-right: 10px;
    }
  }
  .more-info{
    display: flex;
    margin-bottom: 20px;
    img{
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  }
}
</style>