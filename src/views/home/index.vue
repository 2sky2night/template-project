<template>
  <div class="page home-page">
    <SignBox />
    <Banner />
    <BigCards />
  </div>
</template>


<script lang='ts' setup>
import SignBox from './components/SignBox.vue';
import Banner from './components/Banner.vue';
import BigCards from './components/BigCards.vue'

defineOptions({
  name: 'Home'
})
</script>

<style scoped lang='scss'>
.page {
  height: 200vh;

  &.home-page {
    display: flex;
    flex-direction: column;
  }
}
</style>