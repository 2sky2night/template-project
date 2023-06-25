<template>
  <div class="game-title">
    <Breadcrumbs />
    <div>
      By
      <span>Pragmatic Play</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Breadcrumbs from '@/components/breadcrumbs/index.vue';
defineOptions({
  name: 'Title'
})
</script>

<style scoped lang='scss'>
.game-title {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>