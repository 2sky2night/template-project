<template>
  <div class="page home-page">
    <SignBox />
    <Banner />
    <BigCards />
    <PayList />
    <BetRaceList />
  </div>
</template>


<script lang='ts' setup>
import SignBox from './components/SignBox/index.vue';
import Banner from './components/Banner/index.vue';
import BigCards from './components/BigCards/index.vue'
import PayList from './components/PayList/index.vue'
import BetRaceList from './components/BetRaceList/index.vue';

defineOptions({
  name: 'Home'
})
</script>

<style scoped lang='scss'>
.page {
  &.home-page {
    display: flex;
    flex-direction: column;
  }
}
</style>