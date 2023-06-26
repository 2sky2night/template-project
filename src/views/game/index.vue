<template>
  <div class="page">
    <Title />
    <GameScreen />
    <Panel :title="gameInfo.gameName" />
  </div>
</template>

<script lang='ts' setup>
import Title from './components/Title/index.vue'
import GameScreen from './components/GameScreen/index.vue'
import Panel from './components/Panel/index.vue'
import { reactive } from 'vue';

const gameInfo = reactive({
  gameName:'Sweet Bonanza'
})

defineOptions({
  name: 'Game'
})
</script>

<style scoped lang='scss'>
.page {
  padding: 10px;
}
</style>