<template>
  <div class="breadcrumb-container">
    <a-breadcrumb>
      <a-breadcrumb-item @click="()=>onHandleClick(item.path)" v-for="item in list" :key="item.path">
        {{ item.title }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang='ts' setup>
import { useRoute,useRouter } from 'vue-router';
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const list = computed(() => {
  return route.matched.map(ele => {
    if (ele.meta) {
      return {
        path: ele.path,
        title: ele.meta.title
      }
    } else {
      return {
        path: ele.path,
        title: ele.path
      }
    }
  })
})

const onHandleClick = (path: string) => {
  router.push(path)
}

defineOptions({
  name: 'Breadcrumbs'
})
</script>
