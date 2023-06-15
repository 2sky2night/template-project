<template>
  <div class="bet-ract-list-container">
    <Tabs @change="onHandleChangeTab" style="margin-bottom: 20px;" v-model="currentKey" :list="tabsList"
      :font-size="15" />
    <div class="container">
      <TransitionGroup name="move">
        <Bets key="1" v-if="currentKey === 1" />
        <Bets key="2" v-if="currentKey === 2" />
        <Bets key="3" v-if="currentKey === 3" />
      </TransitionGroup>
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
  margin: 20px 0;
  padding: 0 10px;
  box-sizing: border-box;

  .container {
    position: relative;
  }
}

.move-enter-active {
  animation: move .3s 1 ease-in-out;
}

@keyframes move {

  from {
    transform: translateY(10px);
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  to {
    transform: none;
    opacity: 1;
  }
}
</style>