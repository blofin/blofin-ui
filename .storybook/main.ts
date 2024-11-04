import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  addons: ["@storybook/addon-links", "@storybook/addon-interactions", "@storybook/addon-styling", "storybook-dark-mode", {
    name: "@storybook/addon-essentials",
    options: {
      backgrounds: false // 👈 disable the backgrounds addon
    }
  }, "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  },
  async viteFinal(config) {
    // customize the Vite config here
    config.plugins = [...(config.plugins || [])];

    // return the customized config
    return config;
  }
};
export default config;