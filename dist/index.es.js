import { Badge as y } from "./Badge.es.js";
import { Button as v } from "./Button.es.js";
import { j as e, c as x, a as h } from "./index-1069cba6.js";
import "react";
const b = ({ label: t, content: o }) => /* @__PURE__ */ e.jsxs("div", { className: "popover-container relative max-w-fit", children: [
  /* @__PURE__ */ e.jsx("label", { children: t }),
  /* @__PURE__ */ e.jsx("div", { className: "popover hidden absolute top-6 left-0 z-10 shadow", children: o })
] }), n = (t) => x("text-black dark:text-white", {
  variants: {
    variant: {
      h1: "text-9xl",
      h2: "text-8xl",
      h3: "text-7xl",
      h4: "text-6xl",
      h5: "text-5xl",
      h6: "text-4xl",
      subtitle1: "text-3xl",
      subtitle2: "text-2xl",
      body1: "text-xl",
      body2: "text-lg",
      body3: "text-base",
      body4: "text-sm"
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-normal"
    }
  },
  defaultVariants: {
    variant: "body3",
    weight: "regular"
  }
})(t), p = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p"
}, c = ({
  variant: t = "body3",
  weight: o = "regular",
  className: a = "",
  children: r,
  ...s
}) => {
  const l = p[t];
  return /* @__PURE__ */ e.jsx(
    l,
    {
      className: `${h(n({ variant: t, weight: o }))} ${a}`,
      ...s,
      children: r
    }
  );
};
export {
  y as Badge,
  v as Button,
  b as Popover,
  c as Typography
};
//# sourceMappingURL=index.es.js.map
