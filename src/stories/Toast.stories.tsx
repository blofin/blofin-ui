import { Meta } from "@storybook/react";
import { Button } from "../components/Button";
import useMode from "../hooks/useMode";
import { Toast } from "../components/Toast/Toast";
import { NoticeProvider, ThemeProvider } from "..";
import useToast from "../hooks/useToast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast
};

export default meta;

const ButtonGroup = () => {
  const { methods } = useToast();

  const info = () => {
    methods.info("Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!");
  };

  const warning = () => {
    methods.warning( "我是短发舒服撒开了饭就睡啦开发!!!!!!!!!");
  };
  const success = () => {
    methods.success("Success!!!!!!!!!");
  };
  const danger = () => {
    methods.danger("Danger!!!!!!!!!");
  };

  return (
    <>
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
    </>
  );
};

export const Primary = {
  render: () => {
    const mode = useMode();

    return (
      <ThemeProvider value={{ theme: mode }}>
        <NoticeProvider>
          <div style={{ display: "flex", gap: "10px" }}>
            <ButtonGroup/>
          </div>
        </NoticeProvider>
      </ThemeProvider>
    );
  }
};