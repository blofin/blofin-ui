"use client";

import React, { FC, ReactNode } from "react";
import styles from "../index.module.scss";
import { Direction } from "../interface";
import { Button } from "../../Button";

const Pagination: FC<{
  isLastPage: boolean;
  isFirstPage: boolean;
  onChange: (direction: Direction) => void;
}> = (props) => {
  const changePage = (direction: Direction) => {
    props.onChange(direction);
  };

  return (
    <div className={styles.pagination}>
      <Button
        variant="ghost"
        size="small"
        disabled={props.isFirstPage}
        className={styles.prev}
        onClick={() => changePage("prev")}>
        previous
      </Button>
      <Button
        variant="primary"
        size="small"
        disabled={props.isLastPage}
        className={styles.next}
        onClick={() => changePage("next")}>
        next
      </Button>
    </div>
  );
};

export default Pagination;
