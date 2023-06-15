import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const useSettingStore = defineStore(
  'theme',
  () => {

    // 是否展开菜单  1大菜单 2小菜单
    const isBigSider = ref<1 | 2>(1)

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
     * 切换菜单显示样式 1大菜单 2小菜单 
     * @param value 
     */
    function toggleSider (value: 1 | 2) {
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
      html.style.setProperty('--box-bg-color-2', '#f6f7fa')
      html.style.setProperty('--box-bg-color-hover-2', '#eaecf3')
      html.style.setProperty('--mask-color', '#00000052')
      html.style.setProperty('--box-bg-color-1', '#fff')
      html.style.setProperty('--box-bg-color-hover-1', '#f6f7fa')
      html.style.setProperty('--tabs-color', '#f6f7fa')
      html.style.setProperty('--tabs-active-color', '#eaecf3')
    }

    /**
     * 调整css变量为深色模式
     */
    function setDarkCSSVar () {
      const html = document.documentElement
      // 设置 css 变量
      html.style.setProperty('--shadow-color', '#000')
      html.style.setProperty('--border-color', '#2a2a2b')
      html.style.setProperty('--box-bg-color-2', '#2a2a2b')
      html.style.setProperty('--box-bg-color-hover-2', '#313132')
      html.style.setProperty('--mask-color', '#000000d0')
      html.style.setProperty('--box-bg-color-1', '#17171a')
      html.style.setProperty('--box-bg-color-hover-1', '#2d3035')
      html.style.setProperty('--tabs-color', '#24262b')
      html.style.setProperty('--tabs-active-color', '#2d3035')
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