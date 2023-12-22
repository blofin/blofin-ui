import { cva } from "class-variance-authority";

export const drawerVariants = cva(
    "bu-absolute  bu-flex  bu-flex-col bu-rounded-[10px] bu-pb-[32px] bu-pt-[24px]",
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
    "bu-absolute bu-right-[20px] bu-h-[24px] bu-w-[24px] bu-cursor-pointer",
    {
      variants: {
        theme: {
          dark: "bu-text-dark-label",
          light: "bu-text-light-label-40"
        }
      }
    }
  );