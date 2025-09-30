import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button/Button";
import { Dialog } from "../components/Dialog/Dialog";
import Select from "../components/Select/Select";
import useTheme from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const tpsl_options = [
  {
    value: "price",
    label: "price"
  },
  {
    value: "pnl",
    label: "pnl"
  },
  {
    value: "pnlPercentage",
    label: `pnl(%)`
  }
];

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const Content = () => {
  const [tpTriggerPriceType, setTPTriggerPriceType] = useState("price");

  return (
    <div className="bu-flex bu-flex-col">
      <div className="bu-h-[100px]">1111</div>
      <div className="bu-h-[100px]">1111</div>
      <div className="bu-h-[100px]">1111</div>
      <div className="bu-h-[100px]">1111</div>
      <div className="bu-h-[100px]">1111</div>

      {/* <Select
        value={tpTriggerPriceType}
        selectItems={tpsl_options}
        handleChange={(value) => {
          setTPTriggerPriceType(value);
        }}
        scrollable={true}
      /> */}
      <div className="bu-h-[100px]">1111</div>
      <div className="bu-h-[100px]">1111</div>
    </div>
  );
};

export const Primary: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const mode = useTheme();

    const cancel = () => {
      alert("Cancel");
      setOpen(false);
    };
    const confirm = () => {
      alert("Confirm");
      setOpen(false);
    };

    const openDialog = () => {
      // setOpen(true)
      const close = Dialog.show({
        title: "Confirm Delete",
        content: "Are you sure you want to delete this item?",
        cancelText: "Cancel",
        confirmText: "Confirm",
        size: "medium",
        cancel: () => console.log("Cancel clicked"),
        confirm: () => console.log("Confirm clicked"),
        footerLayout: "right",
        footerSize: "medium",
        footer: (
          <div>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                close();
              }}>
              OK
            </Button>
          </div>
        )
      });
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <Button size="medium" onClick={openDialog}>
          Open Dialog
        </Button>
        {/* <Dialog
          open={open}
          title="Hello"
          content={<Content />}
          cancelText="Cancel"
          confirmText="Confirm"
          size="large"
          cancel={cancel}
          confirm={confirm}
          footer={null}
          footerLayout="left"
          footerSize="large"
          hideCancel={true}
        /> */}
      </ThemeProvider>
    );
  }
};
