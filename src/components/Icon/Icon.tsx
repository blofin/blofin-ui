"use client";

import React, { FC } from "react";

export interface IconProps {
  color?: string;
  name: string;
}

export const Icon: FC<IconProps> = (props) => {
  const { color, name } = props;
  return (
    <svg className="icon svg-icon" aria-hidden="true" style={{ color }}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
