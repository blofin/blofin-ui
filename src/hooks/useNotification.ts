import { useContext } from "react";
import { NoticeContext, configType } from "../provider/NoticeProvider";

const useNotification = () => {
  const { open, remove } = useContext(NoticeContext);

  const info = (config: configType) => {
    return open(config, "info");
  };

  const success = (config: configType) => {
    return open(config, "success");
  };

  const warning = (config: configType) => {
    return open(config, "warning");
  };

  const danger = (config: configType) => {
    return open(config, "danger");
  };

  const loading = (config: configType) => {
    return open(config, "loading");
  };

  return {
    methods: {
      info,
      success,
      warning,
      danger,
      loading,
      remove
    }
  };
};

export default useNotification;
