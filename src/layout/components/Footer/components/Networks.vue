<template>
  <div class="networks-container">
    <p class="title">Accepted Networks</p>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <a :href="item.path">
          <component :is="item.icon" size="30" class="mr-10 ml-10"></component>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
// types
import type { FooterNetorkProps } from '@/types/components/footer/index'
defineProps<FooterNetorkProps>()
</script>

<style scoped lang='scss'>
.networks-container {
  .title {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    li {
      cursor: pointer;

      a {
        color: var(--color-text-2);
      }
    }
  }
}</style>