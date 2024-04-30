import { cva } from "class-variance-authority";



export const TextLabel = cva("", {
  variants: {
    intent: {
      select: "bu-text-md",
      unSelect: "bu-text-base"
    },
    theme: {
      light: "bu-text-light-label",
      dark: "bu-text-dark-label"
    }
  },
  compoundVariants: [
    {
      intent: "unSelect",
      theme: "light",
      class: "bu-text-light-label"
    },
    {
      intent: "unSelect",
      theme: "dark",
      class: "bu-text-dark-label-40"
    }
  ]
});