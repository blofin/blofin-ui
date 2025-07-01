import type { Meta, StoryObj } from "@storybook/react";
import useTheme from "../hooks/useMode";
import { useEffect, useState } from "react";
import MultiSelect from "../components/MultiSelect/MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
  render: () => {
    const mode = useTheme();

    return (
      <div className="bu-flex bu-w-[1200px] bu-gap-[100px] bu-p-[100px]">
        <MultiSelect
          id="multi-select-filled"
          size="md"
          theme={mode}
          variant="filled"
          className="bu-w-[400px]"
        />
        <MultiSelect
          id="multi-select-outlined"
          size="lg"
          theme={mode}
          variant="outlined"
          className="bu-w-[400px]"
        />
      </div>
    );
  }
};
