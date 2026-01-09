import { useCallback } from "react";

/**
 * Drawer 事件处理 Hook
 * 使用 useCallback 缓存事件处理函数,优化性能
 * 
 * @param cancel - 关闭 Drawer 的回调函数
 * @returns 事件处理函数集合
 */
export const useDrawerCallbacks = (cancel?: () => void) => {
  // 处理关闭事件
  const handleCancel = useCallback(() => {
    cancel?.();
  }, [cancel]);

  // 处理遮罩层点击事件(点击遮罩关闭)
  const handleOverlayClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      event.stopPropagation();
      handleCancel();
    }
  }, [handleCancel]);

  // 处理键盘事件(ESC 键关闭)
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCancel();
    }
  }, [handleCancel]);

  return { 
    handleCancel, 
    handleOverlayClick, 
    handleKeyDown 
  };
};

