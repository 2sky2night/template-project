<template>
  <div class="footer-box">
    <div class="footer-container">
      <Navigations :list="naviList" />
      <a-divider />
      <Networks :list="networksList" />
      <a-divider />
      <Sponsorships :list="sponsourshipList"/>
      <a-divider />
      <Information />
    </div>
  </div>
</template>

<script lang='ts' setup>
// 组件
import Navigations from './components/Navigations.vue';
import Networks from './components/Networks.vue';
import Sponsorships from './components/Sponsorships.vue'
import Information from './components/Infomation.vue'
// configs
import {naviList,networksList,sponsourshipList} from '@/config'

defineOptions({
  name: 'Footer'
})
</script>

<style scoped lang='scss'>
// 容器
.footer-box {
  background-color: var(--color-bg-1);
}

// 主要内容
.footer-container {
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

// 1690px以上 main居中显示
@media screen and (min-width:1690px) {
  .footer-container {
    width: var(--main-width);
    margin: 0 auto;
  }
}
</style>