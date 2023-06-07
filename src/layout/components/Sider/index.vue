<template>
  <div class="sider-container">
    <Transition>
      <BigSider/>
    </Transition>
  </div>
</template>

<script lang='ts' setup>
import BigSider from './components/bigSider/index.vue'
import SmallSider from './components/smallSider/index.vue'

defineOptions({
  name:'sider-bar'
})
</script>

<style scoped lang='scss'>
.sider-container{
  
}
</style>