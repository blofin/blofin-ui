import { j as m } from "../../../vendor.js";
import { c as o } from "../../utils/utils.js";
import { B as e } from "./styles.js";
const c = ({
  theme: r = "light",
  color: s = "primary",
  decoration: a = !0,
  label: t
}) => /* @__PURE__ */ m.jsxs("span", { className: `${o(e({ theme: r, color: s }))}`, children: [
  a && "• ",
  t
] });
export {
  c as B
};
