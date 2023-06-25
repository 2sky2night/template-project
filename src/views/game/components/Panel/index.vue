<template>
  <div class="panel-container">
    <Tabs style="margin: 30px 0;" v-model="currentKey" :list="list" :font-size="15" />
    <div class="panel-content">
      <SweetBonanza v-if="currentKey===1" />
      <SweetBonanza v-if="currentKey===2" />
      <SweetBonanza v-if="currentKey===3" />
    </div>
  </div>
</template>

<script lang='ts' setup>
// components
import Tabs from '@/components/tabs/index.vue'
import SweetBonanza from './components/SweetBonanza/index.vue'
// types
import type { TabsItem } from '@/types/components/tabs';
// hooks
import { ref, reactive } from 'vue'

const list = reactive<TabsItem[]>([
  {
    title: 'Sweet Bonanza',
    key: 1
  },
  {
    title: 'Description',
    key: 2
  },
  {
    title: 'Reviews',
    key: 3
  }
])
const currentKey = ref(list[ 0 ].key)

defineOptions({
  name: 'Panel'
})
</script>

<style scoped lang='scss'>
.panel-container {

  .panel-content {}

}
</style>