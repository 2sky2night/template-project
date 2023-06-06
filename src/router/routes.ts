import type { RouteRecordRaw } from 'vue-router';

export const initRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name:'home',
    component:()=>import('@/views/home/index.vue'),
    meta: {
      title:'home'
    }
  },
  {
    path: '/sports',
    name:'sports',
    component:()=>import('@/views/sports/index.vue'),
    meta: {
      title:'sports'
    }
  }
]
