<template>
  <div class="panel-title-container">
    <div class="left-container">
      <slot name="left">
        <span class="title">{{ title }}</span>
      </slot>
    </div>
    <div class="right-container">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { PanelTitleProps } from '@/types/components/title'

defineProps<PanelTitleProps>()
defineSlots<{
  left?: () => any;
  right?: () => any;
}>()
</script>

<style scoped lang='scss'>
.panel-title-container {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;

  .left-container {
    .title {
      font-size: 22px;
    }
  }
}
</style>