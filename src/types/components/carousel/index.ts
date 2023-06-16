/**
 * 轮播图组件实例暴露出来的属性
 */
export interface CarouselInstance {
  throttleNext: () => void;
  throttlePre: () => void;
}

/**
 * 轮播图组件的自定义属性
 */
export interface CarouselProps {
  /**
   * 高
   */
  height: number;
  /**
   * 是否显示指示器
   */
  showDots: boolean;
  /**
   * 是否显示上下轮播项按钮
   */
  showBtns: boolean;
  /**
   * 是否自动播放
   */
  autoplay: boolean;
  /**
   * 自动播放的延迟时间
   */
  delay: number;
}
