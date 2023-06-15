<template>
  <div class="sponsorships-container">
    <div class="title">Sponsorship and Gaming Responsibilities</div>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <a :href="item.path">
          <img :src="item.img">
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
import type {FooterSponsourshipProps} from '@/types/components/footer/index'
defineProps<FooterSponsourshipProps>()
</script>

<style scoped lang='scss'>
.sponsorships-container {
  .title {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
  }
  .list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li{
      margin-left: 20px;
      margin-bottom: 10px;
      img{
        
      }
    }
  }
}
</style>