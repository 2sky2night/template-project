<template>
  <div class="layout-container">
    <Sider />
    <div class="center-container">
      <div class="header-content">
        <Header />
      </div>
      <div ref="mainContent" class="main-content">
        <Main />
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
// 组件
import Header from './components/Header/index.vue'
import Sider from './components/Sider/index.vue'
import Main from './components/Main/index.vue'
import Footer from '@/layout/components/Main/components/Footer/index.vue'
// hooks
import {ref,watch} from 'vue'
import { useRoute } from 'vue-router'

const route=useRoute()
const mainContent = ref<HTMLDivElement | null>(null)

watch(()=>route.path, () => {
  if (mainContent.value!==null) {
    mainContent.value.scroll({top:0,left:0,behavior:'smooth'})
  }
})

defineOptions({
  name: "Layout"
})
</script>

<style scoped lang='scss'>
.layout-container {
  height: 100vh;
  width: 100vw;
  display: flex;

  .center-container {
    flex-grow: 1;
    transition: var(--time-normal);
    height: 100%;

    .header-content {
      height: var(--header-height);
      box-shadow: 0 0px 10px var(--shadow-color);
    }

    .main-content {
      height: calc(100% - var(--header-height));
      overflow: auto;
      background-color: var(--color-bg-2);
      // 隐藏滚动条
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}
</style>