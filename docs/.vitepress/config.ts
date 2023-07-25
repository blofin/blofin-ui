import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blofin UI Docs",
  description: "Official docs for Blofin UI library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blofin.com", link: "https://blofin.com/trade/futures/BTC-USDT" }
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/examples" }
        ]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/blofin/blofin-ui" }]
  },
  base: "/blofin-ui/"
});
