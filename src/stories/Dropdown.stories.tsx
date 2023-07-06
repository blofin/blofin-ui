import { Meta } from "@storybook/react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

export const Primary = {
};