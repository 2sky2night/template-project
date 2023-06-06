import { createWebHashHistory,createRouter } from 'vue-router'
import { initRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes:initRoutes
})

export default router
