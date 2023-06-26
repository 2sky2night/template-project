<template>
  <div class="panel-title-container">
    <div class="left-container">
      <slot name="left">
        <span :style="{fontSize:fontSize+'px'}">{{ title }}</span>
      </slot>
    </div>
    <div class="right-container">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { PanelTitleProps } from '@/types/components/title'

withDefaults(defineProps<PanelTitleProps>(), {
  title: '标题',
  fontSize:22
})
defineSlots<{
  left?: () => any;
  right?: () => any;
}>()
</script>

<style scoped lang='scss'>
.panel-title-container {
  display: flex;
  align-items: center;
  padding: 20px 0;
  height: 35px;
  justify-content: space-between;
}
</style>