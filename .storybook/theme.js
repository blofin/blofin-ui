import { create } from "@storybook/theming";
import Logo from "../src/stories/assets/logo.svg";

export default create({
  base: "light",
  brandTitle: "b-ui",
  brandUrl: "",
  brandImage: Logo,
  brandTarget: "_self",
});
