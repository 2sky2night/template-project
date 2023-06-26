<template>
  <div class="provider-container">
    <PanelTitle title="About The Provider" />
    <div class="provider-content">
      <img class="mb-10" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp">
      <p class="mb-10">psasdsdmascioasndionioasndoi psasdsdmascioasndionioasndoi psasdsdmascioasndionioasndoi psasdsdmascioasndionioasndoi psasdsdmascioasndionioasndoi psasdsdmas</p>
      <div class="btns">
        <a-button class="mr-10">341 Games <icon-right/></a-button>
        <a-button>More Info</a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import PanelTitle from '@/components/title/PanelTitle.vue';

defineOptions({
  name:'Provider'
})
</script>

<style scoped lang='scss'>
.provider-container{
  .provider-content{
    padding:20px 15px;
    background-color: var(--color-bg-3);
    img{
      height: 60px;
      width: 200px;
    }
  }
}
</style>