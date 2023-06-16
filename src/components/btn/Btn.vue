<template>
  <div class="btn-container">
    <template v-if="icon">
      <component :is="icon" :size="iconSize"></component>
    </template>
    <template v-if="title">
      <span v-if="icon" class="ml-10">{{ title }}</span>
      <span v-else>{{ title }}</span>
    </template>
  </div>
</template>

<script lang='ts' setup>
import BtnProps from '@/types/components/btn/Btn';
defineProps<BtnProps>()
</script>

<style scoped lang='scss'>
.btn-container {
  cursor: pointer;
  background-color: var(--box-bg-color-1);
  padding: 10px 13px;
  border-radius: 3px;

  &:hover {
    background-color: var(--box-bg-color-hover-1);
  }
}
</style>