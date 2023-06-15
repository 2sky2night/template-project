import type { Plugin } from 'vue'
// 路由
import router from '@/router'
// pinia仓库
import store from '@/store'
// 重置样式
import '@/styles/reset.scss'
// 组件库
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
// 主样式
import '@/styles/index.css'
// Import Swiper styles
import 'swiper/css';
const plugins: Plugin = {
  install (app) {
    app.use(router)
    app.use(store)
    app.use(ArcoVue);
    app.use(ArcoVueIcon);
  }
}

export default plugins