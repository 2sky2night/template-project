<template>
  <Layout />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Layout from '@/layout/index.vue'

onMounted(() => {
  // 设置为暗黑主题
// document.body.setAttribute('arco-theme', 'dark')
})

</script>

<style lang="scss">
* {
  user-select: none;
}
body{
  background-color:var(--color-bg-1);
  color: var(--color-text-1);
  transition: .3s;
}
</style>user-select: none;