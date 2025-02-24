import { FC } from "react";
import { ButtonSize } from "../types";
import styles from "./index.module.scss";
import { BUITheme } from "../../../types/component";

const Loading: FC<{ size: ButtonSize; theme: BUITheme }> = ({ size, theme }) => {
  const styleName = {
    small: styles["loader-small"],
    medium: styles["loader-medium"],
    large: styles["loader-large"],
    max: styles["loader-large"],
    "m-small": styles["loader-m-small"]
  };

  const loaderColor = {
    light: styles["loader-light"],
    dark: styles["loader-dark"]
  };

  return <span className={`${styleName[size]} ${loaderColor[theme]}`}></span>;
};

export default Loading;
