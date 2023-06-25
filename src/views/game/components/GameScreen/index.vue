<template>
  <div class="game-screen-container">
    <!--主界面-->
    <div class="game-main">
      <!--游戏设置-->
      <div class="game-setting">
        <span :class="{'active':!playType}">
          Real Play
        </span>
        <a-switch style="margin: 0 5px;" v-model="playType" size="small" />
        <span :class="{'active':playType}">
          Free Play
        </span>
      </div>
      <!--游戏主界面-->
      <div class="game-content">
        游戏界面
      </div>
    </div>
    <!--游戏工具栏-->
    <div class="game-tools">
      <div class="left">
        <button class="icon-button">
          <icon-star-fill size="20" />
          <span>2085</span>
        </button>
        <button class="icon-button">
          <icon-heart-fill size="20" />
          <span>2085</span>
        </button>
        <button class="icon-button">
          <icon-share-internal size="20" />
        </button>
      </div>
      <div class="right">
        <button class="icon-button">
          <icon-star-fill size="20" />
        </button>
        <button class="icon-button">
          <icon-heart-fill size="20" />
        </button>
        <button class="icon-button">
          <icon-fullscreen size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const playType = ref(true)

defineOptions({
  name: 'GameScreen'
})
</script>

<style scoped lang='scss'>
.game-screen-container {
  height: 725px;
  display: flex;
  flex-direction: column;

  .game-main {
    flex-grow: 1;
    background-color: black;
    .game-setting{
      display: flex;
      justify-content: end;
      padding:5px 10px;
      background-color: var(--color-bg-1);
      span{
        font-size: 12px;
        color:var(--color-text-2);
      }
      .active{
        color:var(--color-text-1);
      }
    }
    .game-content{

    }
  }

  .game-tools {
    height: 65px;
    background-color: var(--box-bg-color-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    .left,.right{
      display: flex;
    }
    .icon-button {
      color: var(--color-text-3);
      padding: 10px;
      transition: var(--time-normal);
      span{
        margin-left: 5px;
      }
      &:hover{
        background-color: var(--color-bg-2);
      }
    }
  }
}
</style>