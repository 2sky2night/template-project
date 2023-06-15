<template>
  <ul class="tabs-container">
    <li :class="{ 'active': item.key === modelValue }" @click="() => onHandleChangeTab(item.key)" class="tabs-item" :style="{fontSize:fontSize+'px'}"
      v-for="item  in list" :key="item.key">
      {{ item.title }}
    </li>
  </ul>
</template>

<script lang='ts' setup>
import type TabsProps from '@/types/components/tabs'

// 自定义属性
defineProps<TabsProps>()
// 自定义事件
const emit = defineEmits<{
  'update:modelValue': [ value: string | number ];
  change: [ value: string | number ]
}>()

/**
 * 切换面板的回调
 * @param value 对应tab的key
 */
function onHandleChangeTab (value: string | number) {
  emit('update:modelValue', value)
  emit('change', value)
}

defineOptions({
  name: 'Tabs'
})
</script>

<style scoped lang='scss'>
.tabs-container {
  display: flex;

  .tabs-item {
    background-color: var(--tabs-color);
    padding: 10px 20px;
    cursor: pointer;
    color: var(--color-text-3);

    &.active {
      background-color: var(--tabs-active-color);
    }

    &.active,
    &:hover {
      color: var(--color-text-1);
    }
  }
}
</style>