import { DocsContainer } from "@storybook/addon-docs";
import { addons } from "@storybook/manager-api";
import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { ReactNode, useEffect, useState } from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import useMode from "../src/hooks/useMode";
import { ThemeProvider } from "../src/provider/ThemeProvider";
import "../src/scss/base.scss";
import "./index.scss";

const channel = addons.getChannel();

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: "light",
    classTarget: "html",
    stylePreview: true,
    lightClass: "bu-light",
    darkClass: "bu-dark",
    dark: { ...themes.dark },
    light: { ...themes.light }
  },
  docs: {
    container: (props: any) => {
      const [isDark, setDark] = useState();

      useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, setDark);
        return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
      }, [channel, setDark]);

      return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />;
    }
  }
};

export const preview: Preview = {
  decorators: [
    (Story) => {
      const mode = useMode();
      return (
        <ThemeProvider value={{ theme: mode }}>
          <Story />
        </ThemeProvider>
      );
    }
  ]
};
export const tags = ["autodocs"];
