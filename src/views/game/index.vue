<template>
  <div class="page">
    <Title />
    <GameScreen />
    <Panel />
    <GameList style="margin: 20px 0;" />
  </div>
</template>

<script lang='ts' setup>
import Title from './components/Title/index.vue'
import GameScreen from './components/GameScreen/index.vue'
import Panel from './components/Panel/index.vue'
import GameList from './components/GameList/index.vue'
defineOptions({
  name: 'Game'
})
</script>

<style scoped lang='scss'>
.page {
  padding: 10px;
}
</style>