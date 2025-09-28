import { Meta } from "@storybook/react";
import { Button } from "../components/Button";
import { Notification } from "../components/Notification/Notification";
import { ThemeProvider } from "..";
import useMode from "../hooks/useMode";
import { useState } from "react";
import { NoticeProvider } from "../provider/NoticeProvider";
import useNotification from "../hooks/useNotification";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification
};

export default meta;

const DemoComponent = () => {
  const [arr, setArr] = useState([1, 2, 3, 4]);

  const { methods } = useNotification();

  const info = () => {
    methods.info({
      title: "InfoHeaderInfoHeaderInfoHeaderInfoHeaderInfoHeaderInfoHeader",
      msg: "Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!"
    });
  };

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex", gap: "10px" }}>
            <Button size="medium" onClick={info}>
              Info
            </Button>
          </div>
        );
      })}
    </div>
  );
};

const ButtonGroup = () => {
  const { methods } = useNotification();

  const info = () => {
    methods.info({
      title: "InfoHeaderInfoHeaderInfoHeaderInfoHeaderInfoHeaderInfoHeader",
      msg: "Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!Info!!!!!!!!!"
    });
  };

  const warning = () => {
    methods.warning({
      title: "Warning Header",
      msg: "我是短发舒服撒开了饭就睡啦开发!!!!!!!!!",
      position: "leftTop"
    });
  };
  const success = () => {
    methods.success({
      title: "Success Header",
      msg: "Success!!!!!!!!!",
      position: "rightTop"
    });
  };
  const danger = () => {
    methods.danger({
      title: "danger Header danger Header  danger Header  danger Header",
      msg: "Danger!!!!!!!!!",
      position: "rightBottom"
    });
  };
  const neverClose = () => {
    methods.danger({
      title: "Never close",
      msg: "Danger!!!!!!!!!",
      position: "rightBottom",
      autoClose: false,
      onClose: () => {
        console.log("onClose");
      }
    });
  };

  const [sum, setSum] = useState(1);

  const maxLimit = () => {
    // methods.danger({
    //   title: "danger Header ",
    //   msg: sum,
    //   position: "rightTop"
    // });
    // setSum(sum + 1);
    for (let i = 0; i < 3; i++) {
      methods.danger({
        title: i,
        msg: i,
        position: "rightTop"
      });
    }
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
      <Button size="medium" onClick={neverClose}>
        Never Close
      </Button>
      <Button size="medium" onClick={maxLimit}>
        最多2个
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
            <DemoComponent />
            <ButtonGroup />
          </div>
        </NoticeProvider>
      </ThemeProvider>
    );
  }
};
