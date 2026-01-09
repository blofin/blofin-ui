import { Variants, Transition } from "framer-motion";

/**
 * 遮罩层动画变体
 * 控制背景遮罩的淡入淡出效果
 */
export const overlayVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1 
  },
  exit: { 
    opacity: 0 
  }
};

/**
 * Drawer 动画变体
 * 根据 placement 控制 Drawer 从左侧或右侧滑入
 */
export const drawerVariants = {
  right: {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' }
  } as Variants,
  left: {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' }
  } as Variants
};

/**
 * 过渡配置
 * 统一的动画时长和缓动函数
 */
export const transition: Transition = {
  type: 'tween',
  duration: 0.3,
  ease: 'easeInOut'
};

