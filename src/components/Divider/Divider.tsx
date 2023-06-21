import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import { DividerVariants } from "./styles";

export const Divider = () => {
  const { theme } = useTheme();
  return <hr className={`${cn(DividerVariants({ theme }))}`} />;
};
