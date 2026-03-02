import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

// Container 容器样式
export const containerStyles = cva("bu-w-full bu-rounded-lg", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

// Table 样式
export const tableStyles = cva("bu-w-full bu-border-collapse");

// Thead 样式
export const theadStyles = cva("bu-sticky bu-top-0 bu-z-[100]", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

// Th 样式
export const thStyles = cva(
  "bu-relative bu-z-[999] bu-h-[25px] bu-select-none bu-border-b bu-px-[4px] bu-text-[12px] bu-font-medium bu-transition-all bu-duration-300",
  {
    variants: {
      theme: {
        light: "bu-border-light-line-primary bu-text-light-label-40",
        dark: "bu-border-dark-line-primary bu-text-dark-label-40"
      },
      draggable: {
        true: "bu-cursor-grab hover:bu-cursor-grab",
        false: ""
      }
    }
  }
);

// Th Fixed Left 样式
export const thFixedLeftStyles = cva("bu-sticky bu-left-0 bu-top-0 bu-z-[1000]", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

// Th Fixed Right 样式
export const thFixedRightStyles = cva("bu-sticky bu-right-0 bu-top-0 bu-z-[1000]", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

// Th Sortable 样式
export const thSortableStyles = cva("bu-cursor-pointer", {
  variants: {
    theme: {
      light: "hover:bu-bg-light-hover-fill-primary",
      dark: "hover:bu-bg-dark-hover-fill-primary"
    }   
  }
});

// Drag Handle 样式
export const dragHandleStyles = cva(
  "bu-pointer-events-auto bu-opacity-0 bu-transition-opacity bu-duration-200 group-hover:bu-opacity-100",
  {
    variants: {
      theme: {
        light: "bu-text-light-label-60 hover:bu-text-light-primary",
        dark: "bu-text-dark-label-60 hover:bu-text-dark-primary"
      }
    }
  }
);

// Dragging 样式
export const draggingStyles = cva("bu-z-[1002] !bu-cursor-grabbing bu-opacity-60 bu-shadow-lg", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

// Sort Icon 样式
export const sortIconStyles = cva("ltr:bu-ml-2 rtl:bu-mr-2 bu-inline-flex bu-flex-col bu-align-middle");

// Sort Arrow 样式
export const sortArrowStyles = cva(
  "bu-h-0 bu-w-0 bu-border-l-4 bu-border-r-4 bu-border-transparent",
  {
    variants: {
      direction: {
        asc: "bu-mb-0.5 bu-border-b-[5px]",
        desc: "bu-border-t-[5px]"
      },
      theme: {
        light: "bu-border-b-light-line-secondary bu-border-t-light-line-secondary",
        dark: "bu-border-b-dark-line-secondary bu-border-t-dark-line-secondary"
      },
      active: {
        true: "!bu-border-b-light-primary !bu-border-t-light-primary",
        false: ""
      }
    }
  }
);

// Tbody 样式
export const tbodyStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

// Tr 样式
export const trStyles = cva("bu-group bu-border-b bu-transition-colors bu-duration-200", {
  variants: {
    theme: {
      light: "bu-hover:bu-bg-light-fill-primary bu-border-light-line-primary",
      dark: "bu-hover:bu-bg-dark-fill-primary bu-border-dark-line-primary"
    }
  }
});

// Td 样式
export const tdStyles = cva("bu-h-[60px] bu-border-b bu-px-[4px] bu-text-[12px]", {
  variants: {
    theme: {
      light:
        "bu-border-light-line-primary bu-text-light-label group-hover:bu-bg-light-fill-primary",
      dark: "bu-border-dark-line-primary bu-text-dark-label group-hover:bu-bg-dark-fill-primary"
    }
  }
});

// Td Fixed Left 样式
export const tdFixedLeftStyles = cva("bu-sticky bu-left-0", {
  variants: {
    theme: {
      light: "bu-bg-light-background group-hover:bu-bg-light-fill-primary",
      dark: "bu-bg-dark-background group-hover:bu-bg-dark-fill-primary"
    }
  }
});

// Td Fixed Right 样式
export const tdFixedRightStyles = cva("bu-sticky bu-right-0", {
  variants: {
    theme: {
      light: "bu-bg-light-background group-hover:bu-bg-light-fill-primary",
      dark: "bu-bg-dark-background group-hover:bu-bg-dark-fill-primary"
    }
  }
});

// Empty 样式
export const emptyStyles = cva("bu-px-5 bu-py-10 bu-text-center", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-dark-label-60"
    }
  }
});

// 获取文本对齐样式
export const getTextAlign = (align?: "center" | "flex-start" | "flex-end") => {
  const alignMap = {
    "flex-start": "left",
    center: "center",
    "flex-end": "right"
  };
  return alignMap[align || "center"];
};

// 组合样式工具函数
export const getThClasses = (props: {
  theme: BUITheme;
  fixed?: "left" | "right";
  sortable?: boolean;
  isDragging?: boolean;
  draggable?: boolean;
  customClass?: string;
}) => {
  const { theme, fixed, sortable, isDragging, draggable, customClass } = props;

  // 可拖拽但非固定列才显示 grab cursor
  const isDraggableCol = draggable && !fixed;

  const classes = [thStyles({ theme, draggable: isDraggableCol })];

  if (fixed === "left") {
    classes.push(thFixedLeftStyles({ theme }));
  } else if (fixed === "right") {
    classes.push(thFixedRightStyles({ theme }));
  }

  // if (sortable) {
  //   classes.push(thSortableStyles({ theme }));
  // }

  if (isDragging) {
    classes.push(draggingStyles({ theme }));
  }

  if (customClass) {
    classes.push(customClass);
  }

  return classes.join(" ");
};

export const getTdClasses = (props: {
  theme: BUITheme;
  fixed?: "left" | "right";
  customClass?: string;
}) => {
  const { theme, fixed, customClass } = props;

  const classes = [tdStyles({ theme })];

  if (fixed === "left") {
    classes.push(tdFixedLeftStyles({ theme }));
  } else if (fixed === "right") {
    classes.push(tdFixedRightStyles({ theme }));
  }

  if (customClass) {
    classes.push(customClass);
  }

  return classes.join(" ");
};

// 导出样式配置
export const proTableStyles = {
  container: containerStyles,
  table: tableStyles,
  thead: theadStyles,
  th: thStyles,
  thFixedLeft: thFixedLeftStyles,
  thFixedRight: thFixedRightStyles,
  thSortable: thSortableStyles,
  dragHandle: dragHandleStyles,
  dragging: draggingStyles,
  sortIcon: sortIconStyles,
  sortArrow: sortArrowStyles,
  tbody: tbodyStyles,
  tr: trStyles,
  td: tdStyles,
  tdFixedLeft: tdFixedLeftStyles,
  tdFixedRight: tdFixedRightStyles,
  empty: emptyStyles,
  getThClasses,
  getTdClasses,
  getTextAlign
};

export default proTableStyles;
