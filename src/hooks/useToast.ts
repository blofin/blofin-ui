"use client";
import { useContext } from "react";
import { NoticeContext } from "../provider/NoticeProvider";

const useToast = () => {
  const { openToast } = useContext(NoticeContext);

  const info = (config: string) => {
    openToast(config, "info");
  };

  const success = (config: string) => {
    openToast(config, "success");
  };

  const warning = (config: string) => {
    openToast(config, "warning");
  };

  const danger = (config: string) => {
    openToast(config, "danger");
  };

  return {
    methods: {
      info,
      success,
      warning,
      danger
    }
  };
};

export { useToast };
