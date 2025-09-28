import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },

  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false // 👈 disable the backgrounds addon
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "storybook-dark-mode",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  docs: {},

  async viteFinal(config) {
    // customize the Vite config here
    config.plugins = [...(config.plugins || [])];

    // return the customized config
    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;