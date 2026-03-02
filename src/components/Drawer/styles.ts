import { cva } from "class-variance-authority";

export const drawerVariants = cva(
    "bu-absolute  bu-flex  bu-flex-col bu-pb-[32px] bu-pt-[24px]",
    {
      variants: {
        theme: {
          dark: "bu-bg-dark-hover-fill-primary",
          light: "bu-bg-light-background"
        }
      }
    }
  );
  
export const iconStyles = cva(
    "bu-absolute bu-h-[24px] bu-w-[24px] bu-cursor-pointer",
    {
      variants: {
        direction: {
          ltr: "bu-right-[20px]",
          rtl: "bu-left-[20px]"
        },
        theme: {
          dark: "bu-text-dark-label",
          light: "bu-text-light-label-40"
        }
      }
    }
  );