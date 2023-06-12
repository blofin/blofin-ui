import { j as a } from "../../vendor.js";
import { c as y } from "../../utils/utils.js";
import { T as m } from "./styles.js";
const T = {
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
}, i = ({
  variant: o = "body3",
  weight: p = "regular",
  className: h = "",
  children: r,
  ...s
}) => {
  const t = T[o];
  return /* @__PURE__ */ a.jsx(
    t,
    {
      className: `${y(m({ variant: o, weight: p }))} ${h}`,
      ...s,
      children: r
    }
  );
};
export {
  i as T
};
