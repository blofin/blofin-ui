import { cva } from "class-variance-authority";

const menuItemStyles = cva("bu-tracking-[-0.2px] bu-w-full bu-cursor-pointer bu-p-[8px]", {
  variants: {
    theme: {
      light: "bu-bg-light-background hover:bu-bg-light-fill-secondary hover:bu-text-light-label",
      dark: "bu-bg-dark-background bu-text-dark-label hover:bu-bg-dark-fill-secondary"
    },
    intent: {
      fill: "bu-text-[12px] bu-leading-[18px]",
      line: "bu-text-[14px] bu-leading-[20px]"
    }
  }
});

const labelStyles = cva("", {
  variants: {
    intent: {
      fill: ["bu-text-[12px]", "bu-leading-[18px]"],
      line: ["bu-text-[14px]", "bu-leading-[20px]"]
    },
    theme: {
      light: "bu-text-light-label",
      dark: "bu-text-dark-label"
    }
  },
  compoundVariants: [
    {
      intent: "fill",
      theme: "light",
      class: "bu-text-light-label-60"
    },
    {
      intent: "fill",
      theme: "dark",
      class: "bu-text-dark-label-60"
    }
  ]
});

export { menuItemStyles, labelStyles };
