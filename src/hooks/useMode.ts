"use client";

import { useEffect, useState } from "react";
import { useDarkMode } from "storybook-dark-mode";

const useMode = () => {
  const mode = useDarkMode() ? "dark" : "light";

  return mode;
};

export default useMode;
