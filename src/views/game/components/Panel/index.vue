<template>
  <div class="panel-container">
    <Tabs style="margin: 30px 0;" v-model="currentKey" :list="list" :font-size="15" />
    <div class="panel-content">
      <TransitionGroup :name="mode?'toLeft':'toRight'">
        <GameInfo key="1" v-if="currentKey === 1" />
        <Description key="2" v-if="currentKey === 2" />
        <Reviews key="3" v-if="currentKey === 3" />
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang='ts' setup>
// components
import Tabs from '@/components/tabs/index.vue'
import GameInfo from './components/GameInfo/index.vue'
import Description from './components/Description/index.vue'
import Reviews from './components/Reviews/index.vue'
// types
import type { TabsItem } from '@/types/components/tabs';
// hooks
import { ref, reactive,watch } from 'vue'


const props = defineProps<{ title: string }>()
const list = reactive<TabsItem[]>([
  {
    title: props.title,
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
const mode = ref(false)
const currentKey = ref(list[ 0 ].key)
watch(currentKey, (v, o) => {
  if (v > o) {
    // 从左往右翻页
    mode.value=false
  } else {
    mode.value=true
  }
})
defineOptions({
  name: 'Panel'
})
</script>

<style scoped lang='scss'>
.panel-container {
  
  .panel-content {
    overflow: hidden;
  }

}

.toRight-enter-active {
  animation: goRight .3s 1 ease-in-out
}

.toLeft-enter-active {
  animation: goLeft .3s 1 ease-in-out
}


@keyframes goRight {
  from {
    transform: translateX(100%);
  }

  to {
    transform: none;
  }
}

@keyframes goLeft {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: none;
  }
}

</style>