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
        value: "BTC-USDT",
        icon: "https://s2.blofin.com/static/currency/icon/BTC-y1Z7we69.png"
      },
      {
        label: "ETHUSDT",
        value: "ETH-USDT",
        disabled: true,
        icon: "https://s2.blofin.com/static/currency/icon/BTC-y1Z7we69.png"
      },
      {
        label: "SOLUSDT",
        value: "SOL-USDT",
        icon: "https://s2.blofin.com/static/currency/icon/BTC-y1Z7we69.png"
      },
      {
        label: "HUSDT",
        value: "H-USDT"
      },
      {
        label: "BNBUSDT",
        value: "BNB-USDT"
      },
      {
        label: "DOGEUSDT",
        value: "DOG-EUSDT"
      },
      {
        label: "XRPUSDT",
        value: "XRP-USDT"
      },
      {
        label: "TRXUSDT",
        value: "TRX-USDT"
      },
      {
        label: "ADAUSDT",
        value: "ADA-USDT"
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
            labelShowKey="label"
          />
        </div>
      </div>
    );
  }
};
