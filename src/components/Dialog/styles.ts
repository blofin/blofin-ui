import { cva } from "class-variance-authority";
import { BUIComponentSize } from "../../types/component";

const dialogVariants: (props: { size: BUIComponentSize }) => string = cva(
  "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[30px] absolute bg-white flex flex-col justify-between rounded-[10px]",
  {
    variants: {
      size: {
        large: `w-[680px] min-h-[290px]`,
        medium: `w-[520px] min-h-[290px]`,
        small: `px-[16px] py-[7px] text-[12px]`,
      },
    },
  }
);

export default dialogVariants;
