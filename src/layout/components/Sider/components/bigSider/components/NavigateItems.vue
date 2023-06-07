<template>
  <template v-for="           route            in routes">

    <!--无子孩子-->
    <a-menu-item @click="() => navigateTo(route.path)" style="height: 42px;" v-if="!route.children" :key="route.path">
      <template #icon>
        <component size="25" v-if="route.meta" :is="route.meta.icon"></component>
      </template>
      <span v-if="route.meta" class="nav-title">{{ route.meta.title }}</span>
      <span v-else class="nav-title">{{ route.path }}</span>

    </a-menu-item>

    <!--有子孩子-->
    <template v-if="route.children">

      <!--渲染1级路由需要单独处理-->
      <a-sub-menu v-if="route.meta && route.meta.level == 1" :key="route.path">
        <template #icon>
          <component size="25" v-if="route.meta" :is="route.meta.icon"></component>
        </template>
        <template #title>
          <span v-if="route.meta" class="nav-title">{{ route.meta.title }}</span>
          <span v-else class="nav-title">{{ route.path }}</span>
        </template>
        <a-menu mode="pop" :selected-keys="[$route.path]">
          <NavigateItems :routes="route.children" />
        </a-menu>
      </a-sub-menu>

      <!--渲染非1级路由-->
      <a-sub-menu v-if="route.meta && route.meta.level != 1" :key="route.path">
        <template #icon>
          <component size="25" v-if="route.meta" :is="route.meta.icon"></component>
        </template>
        <template #title>
          <span v-if="route.meta" class="nav-title">{{ route.meta.title }}</span>
          <span v-else class="nav-title">{{ route.path }}</span>
        </template>
        <NavigateItems :routes="route.children" />
      </a-sub-menu>

    </template>

  </template>
</template>

<script lang='ts' setup>
// types
import type { RouteRecordRaw } from 'vue-router';
// hooks
import { useRoute, useRouter } from 'vue-router';


const $route = useRoute()
const $router = useRouter()

function navigateTo (path: string) {
  $router.push(path)
}

defineProps<{
  routes: RouteRecordRaw[]
}>()

</script>

<style scoped lang='scss'>
.nav-title{
  font-size: 15px;
}
</style>