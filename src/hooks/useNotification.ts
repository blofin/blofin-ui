import { useContext } from "react";
import { NoticeContext, configType } from "../provider/NoticeProvider";

const useNotification = (position?: string) => {
  const { open } = useContext(NoticeContext);

  const info = (config: configType) => {
    open(config, "info", position);
  };

  const success = (config: configType) => {
    open(config, "success", position);
  };

  const warning = (config: configType) => {
    open(config, "warning", position);
  };

  const danger = (config: configType) => {
    open(config, "danger", position);
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

export default useNotification;
