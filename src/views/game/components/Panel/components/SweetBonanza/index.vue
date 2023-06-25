<template>
  <div class="sweet-bonanza-container">
    <div class="title">Lastest bet & Race</div>
    <Tabs style="margin-bottom: 20px;" :list="list" v-model="currentKey" :font-size="13" />
    <AllBets v-if="currentKey === 1" />
    <MyBets v-if="currentKey === 2" />
  </div>
</template>

<script lang='ts' setup>
// components
import Tabs from '@/components/tabs/index.vue'
import AllBets from './components/AllBets.vue';
import MyBets from './components/MyBets.vue'
// types
import type { TabsItem } from '@/types/components/tabs';
// hooks
import { ref, reactive } from 'vue'

const list = reactive<TabsItem[]>([
  {
    title: 'All Bets',
    key: 1
  },
  {
    title: 'My Bets',
    key: 2
  },
  {
    title: 'High rollers',
    key: 3
  },
  {
    title: 'Wager contest',
    key: 4
  }
])
const currentKey = ref(list[ 0 ].key)

defineOptions({
  name: 'SweetBonanza'
})
</script>

<style scoped lang='scss'>
.sweet-bonanza-container {
  background-color: var(--color-bg-1);
  padding: 20px;

  .title {
    margin: 10px 0;
    font-size: 20px;
  }
}
</style>