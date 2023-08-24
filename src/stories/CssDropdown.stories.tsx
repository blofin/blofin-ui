import { Meta } from "@storybook/react";
import { Button, Typography } from "..";
import { CssDropdown } from "../components/CssDropdown";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof CssDropdown> = {
  title: "Components/CssDropdown",
  component: CssDropdown,
  argTypes: {}
};

export default meta;

export const Primary = {
  render: () => {
    const mode = useMode();

    return (
      <ThemeProvider value={{ theme: mode }}>
        <CssDropdown
          label="CssDropdown"
          content={
            <>
              <div className="bu-grid bu-grid-cols-4 bu-gap-2">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <Button
                    key={i}
                    variant="primary"
                    size="small"
                    className="bu-w-[64px] bu-min-w-[64px]">
                    {i}
                  </Button>
                ))}
              </div>
              <div className="bu-py-1">
                <Typography variant="body4">Avaliable</Typography>
              </div>
              <div className="bu-grid bu-grid-cols-4 bu-gap-2">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="small"
                    className="bu-w-[64px] bu-min-w-[64px]">
                    {i}
                  </Button>
                ))}
              </div>
            </>
          }
        />
      </ThemeProvider>
    );
  }
};
