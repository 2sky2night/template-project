<template>
  <div class="bet-ract-list-container">
    <Tabs @change="onHandleChangeTab" style="margin-bottom: 20px;" v-model="currentKey" :list="tabsList"
      :font-size="15" />
    <div class="container">
      <Bets  v-if="currentKey === 1" />
      <Bets  v-if="currentKey === 2" />
      <Bets  v-if="currentKey === 3" />
    </div>
  </div>
</template>

<script lang='ts' setup>
// 组件
import Bets from './components/Bets.vue';
import Tabs from '@/components/tabs/index.vue'
// types
import type { TabsItem } from '@/types/components/tabs'
// hooks
import { ref } from 'vue'

const currentKey = ref(1)

const tabsList: TabsItem[] = [
  {
    title: 'Lateset bets',
    key: 1
  },
  {
    title: 'High rollers',
    key: 2
  },
  {
    title: 'Wager contest',
    key: 3
  }
]

/**
 * tabBar值更新的回调
 * @param value 
 */
function onHandleChangeTab () {
  console.log('tabBar值更新的回调')
}

defineOptions({
  name: "BetRaceList"
})
</script>

<style scoped lang='scss'>
.bet-ract-list-container {
  margin-bottom: 30px;
  padding: 0 10px;
  box-sizing: border-box;

  .container {
    position: relative;
  }
}


</style>