import { FC } from "react";
import { ButtonSize } from "../types";
import styles from "./index.module.scss";

const Loading: FC<{ size: ButtonSize }> = ({ size }) => {
  const styleName = {
    small: styles["loader-small"],
    medium: styles["loader-medium"],
    large: styles["loader-large"],
    max: styles["loader-large"],
    "m-small": styles["loader-m-small"]
  };
  return <span className={styleName[size]}></span>;
};

export default Loading;
