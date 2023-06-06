import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 根仓库
const store = createPinia()
// 安装持久化存储插件
store.use(piniaPluginPersistedstate)

export default store
