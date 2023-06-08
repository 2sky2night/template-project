<template>
  <div class="setting-container">
    <Btn class="mr-10" :icon-size="25" icon="icon-github" />
    <Btn :icon-size="25" icon="icon-language" />
  </div>
</template>

<script lang='ts' setup>
import Btn from '@/components/btn/Btn.vue';
</script>

<style scoped lang='scss'>
.setting-container {
  display: flex;
  align-items: center;
}
</style>