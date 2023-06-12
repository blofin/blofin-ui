import { c as t, j as i, a as x } from "./index-6b2f2d9a.js";
import { B as Y } from "./index-6b2f2d9a.js";
import "react";
const v = t("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary", "hover:bg-light-hover-primary"],
      dark: ["bg-dark-primary", "hover:bg-dark-hover-primary"]
    }
  }
}), c = t("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary-40", "hover:bg-light-primary-40"],
      dark: ["bg-dark-primary-40", "hover:bg-dark-primary-40"]
    }
  }
}), k = t("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-hover-primary-10",
        "text-light-primary"
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-hover-primary-10",
        "text-dark-primary"
      ]
    }
  }
}), u = t("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-primary-14",
        "text-light-primary-60"
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-primary-14",
        "text-dark-primary-60"
      ]
    }
  }
}), f = t("", {
  variants: {
    theme: {
      light: [
        "bg-light-fill-primary",
        "hover:bg-light-hover-fill-primary",
        "text-light-label-70"
      ],
      dark: [
        "bg-dark-fill-primary",
        "hover:bg-dark-hover-fill-primary",
        "text-dark-label-70"
      ]
    }
  }
}), w = t("", {
  variants: {
    theme: {
      light: [
        "bg-light-fill-primary",
        "hover:bg-light-fill-primary",
        "text-light-label-40"
      ],
      dark: [
        "bg-dark-fill-primary",
        "hover:bg-dark-fill-primary",
        "text-dark-label-70"
      ]
    }
  }
}), S = t("", {
  variants: {
    theme: {
      light: ["text-light-label", "hover:text-light-primary"],
      dark: ["text-dark-label", "hover:text-dark-primary"]
    }
  }
}), j = t("", {
  variants: {
    theme: {
      light: ["text-light-label-40", "hover:text-light-label-40"],
      dark: ["text-dark-label-40", "hover:text-dark-label-40"]
    }
  }
}), N = t("", {
  variants: {
    theme: {
      light: [
        "text-light-primary",
        "hover:text-light-hover-primary",
        "border",
        "border-solid",
        "border-light-primary",
        "hover:bg-light-primary-10"
      ],
      dark: [
        "text-dark-primary",
        "hover:text-dark-hover-primary",
        "border",
        "border-solid",
        "border-dark-primary",
        "hover:bg-dark-primary-10"
      ]
    }
  }
}), T = t("text-white", {
  variants: {
    theme: {
      light: [
        "text-light-primary-60",
        "hover:text-light-primary-60",
        "border",
        "border-solid",
        "border-light-primary-60",
        "hover:bg-transparent"
      ],
      dark: [
        "text-dark-primary-60",
        "hover:text-dark-primary-60",
        "border",
        "border-solid",
        "border-dark-primary-60",
        "hover:bg-transparent"
      ]
    }
  }
}), l = {
  primary: {
    variant: v,
    disabled: c
  },
  secondary: {
    variant: k,
    disabled: u
  },
  tertiary: {
    variant: f,
    disabled: w
  },
  text: {
    variant: S,
    disabled: j
  },
  ghost: {
    variant: N,
    disabled: T
  }
}, D = (e) => {
  const { theme: r, variant: a } = e;
  return t(
    "rounded-[5px] box-border inline-flex items-center justify-center",
    {
      variants: {
        variant: {
          primary: l[a].variant({ theme: r }),
          secondary: l[a].variant({ theme: r }),
          tertiary: l[a].variant({ theme: r }),
          text: l[a].variant({ theme: r }),
          ghost: l[a].variant({ theme: r })
        },
        size: {
          small: "px-[12px]  text-[14px] leading-[24px] h-[30px] min-w-[30px]",
          medium: "px-[16px] text-[14px] leading-[24px] h-[40px] min-w-[40px]",
          large: "px-[24px] text-[16px] leading-[28px] h-[48px] min-w-[48px]",
          max: "px-[24px] text-[18px] leading-[30px] h-[56px] min-w-[56px]"
        },
        shape: {
          normal: "",
          circle: "rounded-[50%] px-[0px] py-[0px]"
        },
        disabled: {
          true: l[a].disabled({ theme: r })
        }
      }
    }
  )(e);
}, z = ({
  size: e = "large",
  disabled: r = !1,
  variant: a = "primary",
  theme: o = "light",
  label: s,
  startIcon: h,
  endIcon: d,
  icon: n,
  onClick: p,
  shape: m = "normal",
  className: b = "",
  ...g
}) => {
  const y = () => {
    p && p();
  };
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: "button",
      onClick: y,
      className: `${x(
        D({ variant: a, size: e, theme: o, shape: m, disabled: r })
      )} ${b}`,
      disabled: r,
      ...g,
      children: [
        h && /* @__PURE__ */ i.jsx("span", { className: "mr-[9.5px]", children: h }),
        s,
        d && /* @__PURE__ */ i.jsx("span", { className: "ml-[9.5px]", children: d }),
        n
      ]
    }
  );
};
const A = ({ label: e, content: r }) => /* @__PURE__ */ i.jsxs("div", { className: "popover-container relative max-w-fit", children: [
  /* @__PURE__ */ i.jsx("label", { children: e }),
  /* @__PURE__ */ i.jsx("div", { className: "popover hidden absolute top-6 left-0 z-10 shadow", children: r })
] }), $ = (e) => t("text-black dark:text-white", {
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
})(e), B = {
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
}, E = ({
  variant: e = "body3",
  weight: r = "regular",
  className: a = "",
  children: o,
  ...s
}) => {
  const h = B[e];
  return /* @__PURE__ */ i.jsx(
    h,
    {
      className: `${x($({ variant: e, weight: r }))} ${a}`,
      ...s,
      children: o
    }
  );
};
export {
  Y as Badge,
  z as Button,
  A as Popover,
  E as Typography
};
//# sourceMappingURL=index.js.map
