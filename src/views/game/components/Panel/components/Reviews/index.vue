<template>
  <div class="reviews-container">
    <GameInfo/>
    <Ratings style="margin: 30px 0;"/>
    <Comments/>
  </div>
</template>

<script lang='ts' setup>
import GameInfo from './components/GameInfo.vue';
import Ratings from './components/Ratings.vue';
import Comments from './components/Comments.vue';
defineOptions({
  name:'Reviews'
})
</script>