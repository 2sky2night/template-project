<template>
  <a-button style="height: 44px;width: 44px;" @click="() => settingStore.toggleSider(flag ? 2 : 1)" class="menu-btn" size="large">
    <template #icon>
      <icon-menu />
    </template>
  </a-button>
</template>

<script lang='ts' setup>
// hooks
import { computed } from 'vue'
import useSettingStore from '@/store/setting';
import { storeToRefs } from 'pinia';

const settingStore = useSettingStore()
const { isBigSider } = storeToRefs(settingStore)

/**
 * 大菜单还是小菜单?
 */
const flag = computed(() => {
  if (isBigSider.value === 1) {
    return true
  } else if (isBigSider.value === 2) {
    return false
  }
})




</script>