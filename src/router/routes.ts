import type { RouteRecordRaw } from 'vue-router';

export const initRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: 'home',
      icon: 'icon-folder',
      level: 1
    }
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import('@/views/sports/index.vue'),
    meta: {
      title: 'sports',
      icon: 'icon-folder',
      level: 1
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue'),
    meta: {
      title: 'test',
      icon: 'icon-folder',
      level: 1
    },
    children: [
      {
        path: '/test/test-son-01',
        name: 'test-son-01',
        component: () => import('@/views/test/children/test-son-01/index.vue'),
        meta: {
          title: 'test-son-01',
          icon: 'icon-folder',
          level: 2
        },
        children: [
          {
            path: '/test/test-son-01/test-son-01-son-01',
            name: 'test-son-01-son-01',
            component: () => import('@/views/test/children/test-son-01/children/test-son-01-son-01/index.vue'),
            meta: {
              title: 'test-son-01-son-01',
              icon: 'icon-folder',
              level: 3
            },
          },
          {
            path: '/test/test-son-01/test-son-01-son-02',
            name: 'test-son-01-son-02',
            component: () => import('@/views/test/children/test-son-01/children/test-son-01-son-02/index.vue'),
            meta: {
              title: 'test-son-01-son-02',
              icon: 'icon-folder',
              level: 3
            },
          },
        ]
      },
      {
        path: '/test/test-son-02',
        name: 'test-son-02',
        component: () => import('@/views/test/children/test-son-02/index.vue'),
        meta: {
          title: 'test-son-02',
          icon: 'icon-folder',
          level: 2
        },
        children: [
          {
            
            path: '/test/test-son-02/test-son-02-son-01',
            name: 'test-son-02-son-01',
            component: () => import('@/views/test/children/test-son-02/children/test-son-02-son-01/index.vue'),
            meta: {
              title: 'test-son-02-son-01',
              icon: 'icon-folder',
              level: 3
            },
          },
          {
            path: '/test/test-son-02/test-son-02-son-02',
            name: 'test-son-02-son-02',
            component: () => import('@/views/test/children/test-son-02/children/test-son-02-son-02/index.vue'),
            meta: {
              title: 'test-son-02-son-02',
              icon: 'icon-folder',
              level: 3
            },
          },
        ]
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/blog/index.vue'),
    meta: {
      title: 'blog',
      icon: 'icon-folder',
      level: 1
    }
  },
]
