module.exports = {
  fontSize: {
    "9xl": "72px",
    "8xl": "64px",
    "7xl": "48px",
    "6xl": "36px",
    "5xl": "32px",
    "4xl": "28px",
    "3xl": "24px",
    "2xl": "22px",
    xl: "20px",
    lg: "18px",
    md: "16px",
    base: "14px",
    sm: "12px",
    xs: "10px"
  },
  extend: {
    display: ["group-hover"],
    boxShadow: {
      card: "0px 0px 24px rgba(240, 242, 250, 0.6)",
      table: "inset 6px 0 8px -3px rgb(0 0 0 / 5%)",
      toast: "0px 2px 16px rgba(0, 0, 0, 0.06)"
    },
    colors: {
      light: {
        primary: {
          DEFAULT: "#F80",
          60: "rgba(255, 136, 0, 0.60)",
          40: "rgba(255, 136, 0, 0.40)",
          14: "rgba(255, 136, 0, 0.14)",
          10: "rgba(255, 136, 0, 0.1)"
        },
        secondary: {
          DEFAULT: "#0A6CFF",
          14: "rgba(10, 108, 255, 0.14)"
        },
        success: {
          DEFAULT: "#0FCC71",
          14: "rgba(15, 204, 113, 0.14)"
        },
        warning: {
          DEFAULT: "#FFC400",
          14: "rgba(255, 196, 0, 0.12)"
        },
        danger: {
          DEFAULT: "#D62035",
          14: "rgba(214, 32, 53, 0.14)"
        },
        green: {
          DEFAULT: "#08C787",
          alpha: "rgba(8, 199, 135, 0.12)"
        },
        red: {
          DEFAULT: "#F2465D",
          alpha: "rgba(242, 70, 93, 0.12)"
        },
        background: "#FFFFFF",
        second: "#050505",
        label: {
          DEFAULT: "#0A0A0A",
          60: "rgba(10, 10, 10, 0.6)",
          40: "rgba(10, 10, 10, 0.4)",
          20: "rgba(10, 10, 10, 0.2)"
        },
        fill: {
          primary: "#F7F8FA",
          secondary: "#F0F1F5",
          tertiary: "#ABADB2",
          quaternary: "#E8E9EB"
        },
        line: {
          primary: "#F5F6FA",
          secondary: "#E6E7EB",
          tertiary: "#D5D6DB"
        },
        hover: {
          primary: "#F90",
          secondary: "rgba(20, 114, 255, 1)",
          success: "#1AD97D",
          warning: "#FFDA18",
          danger: "#EB1730",
          green: "#00D991",
          red: "#FF4F67",
          fill: {
            primary: "#F2F3F5",
            secondary: "#EBEDF2",
            tertiary: "#C4C6CC",
            quaternary: "#EDEEF0"
          }
        },
        disabled: {
          blue: "rgba(47, 84, 235, 0.4)"
        },
        badge: {
          "primary-bg": "rgba(255, 136, 0, 0.14)",
          "secondary-bg": "rgba(255, 102, 0, 0.14)",
          "success-bg": "rgba(15, 204, 113, 0.14)",
          "warning-bg": "rgba(245, 205, 18, 0.14)",
          "danger-bg": "rgba(214, 32, 53, 0.14)",
          "info-bg": "#F0F1F5"
        },
        pagination: {
          primary: "#2F54EB",
          "primary-hover": "#F6F7FB"
        },
        input: {
          primary: "#2F54EB",
          gray: "#DCDCDD",
          error: "#D9242F"
        },
        header: {
          bgColor: "#FFFFFF"
        },
        text: "#FFFFFF"
      },
      dark: {
        primary: {
          DEFAULT: "#F80",
          60: "rgba(255, 136, 0, 0.60)",
          40: "rgba(255, 136, 0, 0.40)",
          14: "rgba(255, 136, 0, 0.16)",
          10: "rgba(255, 136, 0, 0.1)",
          4: "rgba(255, 136, 0, 0.04)"
        },
        secondary: {
          DEFAULT: "#0A6CFF",
          14: "rgba(10, 108, 255, 0.14)"
        },
        success: {
          DEFAULT: "#0FCC71",
          14: "rgba(15, 204, 113, 0.14)"
        },
        warning: {
          DEFAULT: "#FFD60A",
          14: "rgba(255, 214, 10, 0.14)"
        },
        danger: {
          DEFAULT: "#D62035",
          14: "rgba(214, 32, 53, 0.14)"
        },
        green: {
          DEFAULT: "#08C787",
          alpha: "rgba(8, 199, 135, 0.14)"
        },
        red: {
          DEFAULT: "#F2465D",
          alpha: "rgba(242, 70, 93, 0.14)"
        },
        background: "#101014",
        second: "#050505",
        label: {
          DEFAULT: "#FCFDFF",
          60: "rgba(235, 236, 245, 0.6)",
          40: "rgba(235, 236, 245, 0.4)",
          20: "rgba(235, 236, 245, 0.2)"
        },
        fill: {
          primary: "#000000",
          secondary: "#1A1A1A",
          tertiary: "#323234",
          quaternary: "#282829"
        },
        line: {
          primary: "#2F3033",
          secondary: "#47484D",
          tertiary: "#575961"
        },
        hover: {
          primary: "#FA7500",
          secondary: "rgba(9, 97, 229, 1)",
          success: "#13BA6A",
          warning: "#FFC908",
          danger: "#BF1D30",
          green: "#0BB87E",
          red: "#E03A51",
          fill: {
            primary: "#111214",
            secondary: "#242424",
            tertiary: "#3E3F41",
            quaternary: "#373738"
          }
        },
        disabled: {
          blue: "rgba(92, 124, 255, 0.4)"
        },
        badge: {
          "primary-bg": "rgba(92, 124, 255, 0.14)",
          "secondary-bg": "rgba(255, 125, 32, 0.14)",
          "success-bg": "rgba(15, 204, 113, 0.14)",
          "warning-bg": "rgba(245, 205, 18, 0.14)",
          "danger-bg": "rgba(214, 32, 53, 0.14)",
          "info-bg": "#232429"
        },
        pagination: {
          primary: "#2F54EB",
          "primary-hover": "#F6F7FB"
        },
        input: {
          primary: "#2F54EB",
          gray: "#DCDCDD",
          error: "#D9242F"
        },
        header: {
          bgColor: "transparent"
        },
        text: "#FFFFFF"
      }
    }
  }
};
