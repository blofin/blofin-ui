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

    const options = [
      {
        label: "BTCUSDT",
        value: "BTCUSDT",
        icon: "https://s2.blofin.com/static/currency/icon/BTC-y1Z7we69.png"
      },
      {
        label: "ETHUSDT",
        value: "ETHUSDT",
        disabled: true,
        icon: "https://s2.blofin.com/static/currency/icon/BTC-y1Z7we69.png"
      },
      {
        label: "SOLUSDT",
        value: "SOLUSDT",
        icon: "https://s2.blofin.com/static/currency/icon/BTC-y1Z7we69.png"
      },
      {
        label: "HUSDT",
        value: "HUSDT"
      },
      {
        label: "BNBUSDT",
        value: "BNBUSDT"
      },
      {
        label: "DOGEUSDT",
        value: "DOGEUSDT"
      },
      {
        label: "XRPUSDT",
        value: "XRPUSDT"
      },
      {
        label: "TRXUSDT",
        value: "TRXUSDT"
      },
      {
        label: "ADAUSDT",
        value: "ADAUSDT"
      }
    ];

    return (
      <div className="bu-flex bu-w-[1200px] bu-flex-col bu-gap-[100px] bu-p-[100px]">
        <div>
          <MultiSelect
            id="multi-select-filled"
            size="md"
            theme={mode}
            variant="filled"
            className="bu-w-[400px]"
            options={options}
            optionsFormat={(option) => {
              return (
                <div className="bu-flex bu-items-center bu-gap-[4px]">
                  <div>{option.label}</div>
                  <div>{option.value}</div>
                </div>
              );
            }}
          />
        </div>
        <div>
          <MultiSelect
            id="multi-select-outlined"
            size="lg"
            theme={mode}
            variant="outlined"
            className="bu-w-[400px]"
            options={options}
            multiLimit={3}
            onChange={(vals) => {
              console.log("Selected values:", vals);
            }}
          />
        </div>
      </div>
    );
  }
};
