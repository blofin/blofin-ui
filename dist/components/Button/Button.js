import { j as s } from "../../vendor.js";
import { c as f } from "../../utils/utils.js";
import { b as h } from "./styles.js";
const g = ({
  size: n = "large",
  disabled: r = !1,
  variant: o = "primary",
  theme: l = "light",
  label: e,
  startIcon: t,
  endIcon: a,
  icon: i,
  onClick: m,
  shape: p = "normal",
  className: c = "",
  ...x
}) => {
  const u = () => {
    m && m();
  };
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: u,
      className: `${f(
        h({ variant: o, size: n, theme: l, shape: p, disabled: r })
      )} ${c}`,
      disabled: r,
      ...x,
      children: [
        t && /* @__PURE__ */ s.jsx("span", { className: "mr-[9.5px]", children: t }),
        e,
        a && /* @__PURE__ */ s.jsx("span", { className: "ml-[9.5px]", children: a }),
        i
      ]
    }
  );
};
export {
  g as B
};
