import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { Renderer } from "@storybook/types";
import { ReactNode, useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import "../src/scss/base.scss";

const channel = addons.getChannel();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: "light",
    classTarget: "html",
    stylePreview: true,
    lightClass: "light",
    darkClass: "dark",
    dark: { ...themes.dark },
    light: { ...themes.light },
  },
  docs: {
    container: (
      props: JSX.IntrinsicAttributes &
        DocsContainerProps<Renderer> & { children?: ReactNode }
    ) => {
      const [isDark, setDark] = useState();

      useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, setDark);
        return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
      }, [channel, setDark]);

      return (
        <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />
      );
    },
  },
};
