<template>
  <a-button style="height: 44px;width: 44px;" @click="toToggleMenu" class="menu-btn" size="large">
    <template #icon>
      <icon-menu />
    </template>
  </a-button>
</template>

<script lang='ts' setup>
// hooks
import useSettingStore from '@/store/setting';
import { storeToRefs } from 'pinia';

const settingStore = useSettingStore()
const { isBigSider } = storeToRefs(settingStore)


function toToggleMenu () {
  // 不考虑移动端适配下 为大小菜单切换
  if (isBigSider.value === 1) {
    isBigSider.value = 2
  } else if(isBigSider.value === 2) {
    isBigSider.value = 1
  }
}



</script>