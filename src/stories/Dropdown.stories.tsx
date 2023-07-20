import { Meta } from "@storybook/react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    menus: {
      options: [true, false],
      defaultValue:[]
    },
  }
};

export default meta;

export const Primary = {
  render: () => {
    const mode = useMode();

    return (
      <ThemeProvider value={{ theme: mode }}>
        <Dropdown
          menus={[
            {
              key: "1",
              label: "Text1"
            },
            {
              key: "2",
              label: "Text2"
            },
            {
              key: "3",
              label: "Text3"
            }
          ]}>
          {" "}
          Here me
        </Dropdown>
      </ThemeProvider>
    );
  }
};
