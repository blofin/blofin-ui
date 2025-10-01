"use client";
import { useContext } from "react";
import { NoticeContext, configType } from "../provider/NoticeProvider";

const useNotification = () => {
  const { open } = useContext(NoticeContext);

  const info = (config: configType) => {
    open(config, "info");
  };

  const success = (config: configType) => {
    open(config, "success");
  };

  const warning = (config: configType) => {
    open(config, "warning");
  };

  const danger = (config: configType) => {
    open(config, "danger");
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

export { useNotification };
