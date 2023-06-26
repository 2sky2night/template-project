<template>
  <div class="page">
    <Title />
    <GameScreen />
    <Panel />
  </div>
</template>

<script lang='ts' setup>
import Title from './components/Title/index.vue'
import GameScreen from './components/GameScreen/index.vue'
import Panel from './components/Panel/index.vue'
defineOptions({
  name: 'Game'
})
</script>

<style scoped lang='scss'>
.page {
  padding: 10px;
}
</style>