import * as React from "react";
import styles from "./index.module.scss";

const Empty: React.FC<{ children?: React.ReactNode }> = (props) => {
  const { children } = props;
  return <div className={styles["empty-wrapper"]}>{children ? children : "No Data"}</div>;
};

export { Empty };
