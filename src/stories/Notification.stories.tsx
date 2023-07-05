import { Meta } from "@storybook/react";
import { Button } from "../components/Button";
import { Notification, useNotification } from "../components/Notification/Notification";
import { ThemeProvider } from "..";
import useMode from "../hooks/useMode";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification
};

export default meta;

export const Primary = {
  render: () => {
    const mode=useMode()

    const { methods, context } = useNotification();

    const info = () => {
      methods.info({
        title: "InfoHeaderInfoHeaderInfoHeaderInfoHeaderInfoHeaderInfoHeader",
        msg: "Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!"
      });
    };

    const warning = () => {
      methods.warning({
        title: "Warning Header",
        msg: "我是短发舒服撒开了饭就睡啦开发!!!!!!!!!"
      });
    };
    const success = () => {
      methods.success({
        title: "Success Header",
        msg: "Success!!!!!!!!!"
      });
    };
    const danger = () => {
      methods.danger({
        title: "danger Header",
        msg: "Danger!!!!!!!!!"
      });
    };

    return (
      <ThemeProvider value={{theme:mode}}>
        <div style={{ display: "flex", gap: "10px" }}>
          {context}
          {context}
          <Button size="medium" onClick={info}>
            Info
          </Button>
          <Button size="medium" onClick={warning}>
            Warning
          </Button>
          <Button size="medium" onClick={success}>
            Success
          </Button>
          <Button size="medium" onClick={danger}>
            Danger
          </Button>
        </div>
      </ThemeProvider>
    );
  }
};
