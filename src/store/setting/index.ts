import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const useSettingStore = defineStore(
  'theme',
  () => {

    // 是否展开菜单 1大菜单 2小菜单 0隐藏所有菜单
    const isBigSider = ref<0 | 1 | 2>(0)

    // 是否为深色模式
    const isDark = ref(true)

    /**
     * 切换主题颜色
     * @param value 布尔值代表深色和浅色
     */
    function toggleTheme (value: boolean) {
      isDark.value = value
    }

    /**
     * 切换菜单显示样式 1大菜单 2小菜单 0隐藏所有菜单
     * @param value 
     */
    function toggleSider (value: 0 | 1 | 2) {
      isBigSider.value = value
    }

    // 监听主题的变化
    watch(isDark, (v) => {
      if (v) {
        // 深色模式 设置为暗黑主题
        document.body.setAttribute('arco-theme', 'dark');
        setDarkCSSVar()
      } else {
        // 浅色模式 恢复亮色主题
        document.body.removeAttribute('arco-theme');
        setLightCSSVar()
      }
    }, {
      immediate: true
    })

    /**
     * 调整css变量为浅色模式
     */
    function setLightCSSVar () {
      const html = document.documentElement
      // 设置 css 变量
      html.style.setProperty('--shadow-color', '#ededed')
      html.style.setProperty('--border-color', '#eee')
      html.style.setProperty('--box-bg-light', '#f6f7fa')
      html.style.setProperty('--box-bg-light-hover', '#eaecf3')
    }

    /**
     * 调整css变量为深色模式
     */
    function setDarkCSSVar () {
      const html = document.documentElement
      // 设置 css 变量
      html.style.setProperty('--shadow-color', '#000')
      html.style.setProperty('--border-color', '#2a2a2b')
      html.style.setProperty('--box-bg-light', '#2a2a2b')
      html.style.setProperty('--box-bg-light-hover', '#313132')
    }

    return {
      isDark,
      isBigSider,
      toggleTheme,
      toggleSider
    }
  },
  {
    persist: true,
  }
)

export default useSettingStore