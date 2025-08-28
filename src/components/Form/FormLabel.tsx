"use client";

import React, { FC, ReactNode } from "react";
import { FormItemLabelProps } from "./interface";

const FormItemLabel: FC<FormItemLabelProps> = (props) => {
  const { label } = props;
  return <label className="mb-[14px]">{label}</label>;
};

export default FormItemLabel;
