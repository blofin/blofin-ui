import { c as r, j as l, a as b } from "./index-1069cba6.js";
import "react";
const v = r("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary", "hover:bg-light-hover-primary"],
      dark: ["bg-dark-primary", "hover:bg-dark-hover-primary"]
    }
  }
}), k = r("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary-40", "hover:bg-light-primary-40"],
      dark: ["bg-dark-primary-40", "hover:bg-dark-primary-40"]
    }
  }
}), c = r("", {
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
}), f = r("", {
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
}), u = r("", {
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
}), S = r("", {
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
}), w = r("", {
  variants: {
    theme: {
      light: ["text-light-label", "hover:text-light-primary"],
      dark: ["text-dark-label", "hover:text-dark-primary"]
    }
  }
}), j = r("", {
  variants: {
    theme: {
      light: ["text-light-label-40", "hover:text-light-label-40"],
      dark: ["text-dark-label-40", "hover:text-dark-label-40"]
    }
  }
}), D = r("", {
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
}), N = r("text-white", {
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
}), e = {
  primary: {
    variant: v,
    disabled: k
  },
  secondary: {
    variant: c,
    disabled: f
  },
  tertiary: {
    variant: u,
    disabled: S
  },
  text: {
    variant: w,
    disabled: j
  },
  ghost: {
    variant: D,
    disabled: N
  }
}, $ = (i) => {
  const { theme: t, variant: a } = i;
  return r(
    "rounded-[5px] box-border inline-flex items-center justify-center",
    {
      variants: {
        variant: {
          primary: e[a].variant({ theme: t }),
          secondary: e[a].variant({ theme: t }),
          tertiary: e[a].variant({ theme: t }),
          text: e[a].variant({ theme: t }),
          ghost: e[a].variant({ theme: t })
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
          true: e[a].disabled({ theme: t })
        }
      }
    }
  )(i);
}, C = ({
  size: i = "large",
  disabled: t = !1,
  variant: a = "primary",
  theme: s = "light",
  label: o,
  startIcon: h,
  endIcon: p,
  icon: m,
  onClick: d,
  shape: g = "normal",
  className: n = "",
  ...x
}) => {
  const y = () => {
    d && d();
  };
  return /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: y,
      className: `${b(
        $({ variant: a, size: i, theme: s, shape: g, disabled: t })
      )} ${n}`,
      disabled: t,
      ...x,
      children: [
        h && /* @__PURE__ */ l.jsx("span", { className: "mr-[9.5px]", children: h }),
        o,
        p && /* @__PURE__ */ l.jsx("span", { className: "ml-[9.5px]", children: p }),
        m
      ]
    }
  );
};
export {
  C as Button
};
//# sourceMappingURL=Button.es.js.map
