import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
// import { Tooltip } from "../components/Tooltip/Tooltip";
import { Alert } from "../components/Alert";
import useTheme from "../hooks/useMode";
import { useEffect, useState } from "react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  render: () => {
    const mode = useTheme();

    const [show, setShow] = useState(false);

    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
    }, []);

    const text =
      "Your withdraw function has been suspended. For inquiries, please contact online customer service.";
    const longText =
      "Your withdraw function has been suspended. For inquiries, please contact online customer service.Your withdraw function has been suspended. For inquiries, please contact online customer service.Your withdraw function has been suspended. For inquiries, please contact online customer service.Your withdraw function has been suspended. For inquiries, please contact online customer service.";

    const buttonText = "Button Text ";

    return (
      <div className="bu-w-[800px]">
        <div className="bu-flex bu-flex-col bu-gap-2">
          <Alert type="warning" content={text}></Alert>
          <Alert type="doubt" content={text}></Alert>
          <Alert type="danger" content={text}></Alert>
          <Alert type="success" content={text}></Alert>
          <Alert type="warning" content={text}></Alert>
          <div>多行样式</div>
          <Alert type="warning" content={longText}></Alert>
          <Alert type="doubt" content={longText}></Alert>
          <Alert type="danger" content={longText}></Alert>
          <Alert type="success" content={longText}></Alert>
          <div>text + button</div>
          <Alert type="warning" content={text} buttonText={buttonText}></Alert>
          <Alert type="doubt" content={text} buttonText={buttonText}></Alert>
          <Alert type="danger" content={text} buttonText={buttonText}></Alert>
          <Alert type="success" content={text} buttonText={buttonText}></Alert>
          <Alert type="warning" content={text} buttonText={buttonText}></Alert>
          <div>多行+text+button</div>
          <Alert type="warning" content={longText} buttonText={buttonText}></Alert>
          <Alert type="doubt" content={longText} buttonText={buttonText}></Alert>
          <Alert type="danger" content={longText} buttonText={buttonText}></Alert>
          <Alert type="success" content={longText} buttonText={buttonText}></Alert>
          <Alert type="warning" content={longText} buttonText={buttonText}></Alert>
          <div>close icon</div>
          <Alert type="warning" content={text} showCloseIcon></Alert>
          <Alert type="warning" content={text} buttonText={buttonText} showCloseIcon></Alert>
          <Alert type="warning" content={longText} buttonText={buttonText} showCloseIcon></Alert>
          <Alert type="doubt" content={longText} buttonText={buttonText} showCloseIcon></Alert>
          <Alert type="danger" content={longText} buttonText={buttonText} showCloseIcon></Alert>
          <Alert type="success" content={longText} showCloseIcon></Alert>
          <Alert type="warning" content={longText} showCloseIcon></Alert>
        </div>
      </div>
    );
  }
};
