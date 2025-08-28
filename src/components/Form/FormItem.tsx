"use client";

import React, { FC, ReactNode } from "react";
import Control from "./Control";
import FormItemLabel from "./FormLabel";
import { FormItemProps } from "./interface";
import styles from "./styles/item";

const Item: FC<FormItemProps> = (props) => {
  const { children, label } = props;

  return (
    <div className={styles.vertical}>
      {label && <FormItemLabel label={label} />}
      <Control {...props}>{children}</Control>
      {/* error信息 */}
      <div className={`h-[18px] text-xs leading-5 ${styles.error}`}></div>
    </div>
  );
};

export { Item };
