<template>
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
defineOptions({
  name:'CarouselItem'
})
</script>

<style scoped lang='scss'>
.carousel-item{
  min-width: 100%;
  height: 100%;
}
</style>