<template>
  <div class="navigations-container">
    <div class="navigations-list" v-for="(item,index) in list" :key="index">
      <div class="title">{{ item.title }}</div>
      <ul class="list">
        <li v-for="ele in item.navList" class="nav-item">
          <a :href="ele.path">
            {{ ele.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="community">
      <div class="title">Join our Community</div>
      <ul class="community-list">
        <li v-for="item in 6">
          <a href="https://www.baidu.com">
            <icon-github class="mr-10 mb-10 ml-10"  size="40" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts' setup>
// types
import type FooterNavProps from '@/types/components/footer'
defineProps<FooterNavProps>()
</script>

<style scoped lang='scss'>
.navigations-container{
  display: flex;
  .title{
    font-size: 16px;
    font-weight: 600;
    margin: 30px 0;
  }
  .navigations-list{
    flex-grow: 1;
    .list{
      .nav-item{
        margin: 20px 0;
        a{
          font-size: 15px;
          color:var(--color-text-2);
        }
      }
    }
  }
  .community-list{
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    li{
      cursor: pointer;
      a{
        color:var(--color-text-2);
      }
    }
  }
}
</style>