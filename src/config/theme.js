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
          DEFAULT: "var(--light-primary-default)",
          60: "var(--light-primary-60)",
          40: "var(--light-primary-40)",
          14: "var(--light-primary-14)",
          10: "var(--light-primary-10)"
        },
        secondary: {
          DEFAULT: "var(--light-secondary-default)",
          14: "var(--light-secondary-14)"
        },
        tertiary: {
          DEFAULT: "var(--light-tertiary-default)",
          14: "var(--light-tertiary-14)"
        },
        success: {
          DEFAULT: "var(--light-success-default)",
          14: "var(--light-success-14)"
        },
        warning: {
          DEFAULT: "var(--light-warning-default)",
          14: "var(--light-warning-14)"
        },
        danger: {
          DEFAULT: "var(--light-danger-default)",
          14: "var(--light-danger-14)"
        },
        green: {
          DEFAULT: "var(--light-green-default)",
          alpha: "var(--light-green-alpha)"
        },
        red: {
          DEFAULT: "var(--light-red-default)",
          alpha: "var(--light-red-alpha)"
        },
        background: "var(--light-background)",
        second: "var(--light-second)",
        label: {
          DEFAULT: "var(--light-label-default)",
          60: "var(--light-label-60)",
          40: "var(--light-label-40)",
          20: "var(--light-label-20)"
        },
        fill: {
          primary: "var(--light-fill-primary)",
          secondary: "var(--light-fill-secondary)",
          tertiary: "var(--light-fill-tertiary)",
          quaternary: "var(--light-fill-quaternary)"
        },
        line: {
          primary: "var(--light-line-primary)",
          secondary: "var(--light-line-secondary)",
          tertiary: "var(--light-line-tertiary)"
        },
        hover: {
          primary: "var(--light-hover-primary)",
          secondary: "var(--light-hover-secondary)",
          tertiary: "var(--light-hover-tertiary)",
          success: "var(--light-hover-success)",
          warning: "var(--light-hover-warning)",
          danger: "var(--light-hover-danger)",
          green: "var(--light-hover-green)",
          red: "var(--light-hover-red)",
          fill: {
            primary: "var(--light-hover-fill-primary)",
            secondary: "var(--light-hover-fill-secondary)",
            tertiary: "var(--light-hover-fill-tertiary)",
            quaternary: "var(--light-hover-fill-quaternary)"
          }
        },
        disabled: {
          blue: "var(--light-disabled-blue)"
        },
        badge: {
          "primary-bg": "var(--light-badge-primary-bg)",
          "secondary-bg": "var(--light-badge-secondary-bg)",
          "success-bg": "var(--light-badge-success-bg)",
          "warning-bg": "var(--light-badge-warning-bg)",
          "danger-bg": "var(--light-badge-danger-bg)",
          "info-bg": "var(--light-badge-info-bg)"
        },
        pagination: {
          primary: "var(--light-pagination-primary)",
          "primary-hover": "var(--light-pagination-primary-hover)"
        },
        input: {
          primary: "var(--light-input-primary)",
          gray: "var(--light-input-gray)",
          error: "var(--light-input-error)"
        },
        header: {
          bgColor: "var(--light-header-bgColor)"
        },
        text: "var(--light-text)"
      },
      dark: {
        primary: {
          DEFAULT: "var(--dark-primary-default)",
          60: "var(--dark-primary-60)",
          40: "var(--dark-primary-40)",
          14: "var(--dark-primary-14)",
          10: "var(--dark-primary-10)",
          4: "var(--dark-primary-10)"
        },
        secondary: {
          DEFAULT: "var(--dark-secondary-default)",
          14: "var(--dark-secondary-14)"
        },
        tertiary: {
          DEFAULT: "var(--dark-tertiary-default)",
          14: "var(--dark-tertiary-14)"
        },
        success: {
          DEFAULT: "var(--dark-success-default)",
          14: "var(--dark-success-14)"
        },
        warning: {
          DEFAULT: "var(--dark-warning-default)",
          14: "var(--dark-warning-14)"
        },
        danger: {
          DEFAULT: "var(--dark-danger-default)",
          14: "var(--dark-danger-14)"
        },
        green: {
          DEFAULT: "var(--dark-green-default)",
          alpha: "var(--dark-green-alpha)"
        },
        red: {
          DEFAULT: "var(--dark-red-default)",
          alpha: "var(--dark-red-alpha)"
        },
        background: "var(--dark-background)",
        second: "var(--dark-second)",
        label: {
          DEFAULT: "var(--dark-label-default)",
          60: "var(--dark-label-60)",
          40: "var(--dark-label-40)",
          20: "var(--dark-label-20)"
        },
        fill: {
          primary: "var(--dark-fill-primary)",
          secondary: "var(--dark-fill-secondary)",
          tertiary: "var(--dark-fill-tertiary)",
          quaternary: "var(--dark-fill-quaternary)"
        },
        line: {
          primary: "var(--dark-line-primary)",
          secondary: "var(--dark-line-secondary)",
          tertiary: "var(--dark-line-tertiary)"
        },
        hover: {
          primary: "var(--dark-hover-primary)",
          secondary: "var(--dark-hover-secondary)",
          tertiary: "var(--dark-hover-tertiary)",
          success: "var(--dark-hover-success)",
          warning: "var(--dark-hover-warning)",
          danger: "var(--dark-hover-danger)",
          green: "var(--dark-hover-green)",
          red: "var(--dark-hover-red)",
          fill: {
            primary: "var(--dark-hover-fill-primary)",
            secondary: "var(--dark-hover-fill-secondary)",
            tertiary: "var(--dark-hover-fill-tertiary)",
            quaternary: "var(--dark-hover-fill-quaternary)"
          }
        },
        disabled: {
          blue: "var(--dark-disabled-blue)"
        },
        badge: {
          "primary-bg": "var(--dark-badge-primary-bg)",
          "secondary-bg": "var(--dark-badge-secondary-bg)",
          "success-bg": "var(--dark-badge-success-bg)",
          "warning-bg": "var(--dark-badge-warning-bg)",
          "danger-bg": "var(--dark-badge-danger-bg)",
          "info-bg": "var(--dark-badge-info-bg)"
        },
        pagination: {
          primary: "var(--dark-pagination-primary)",
          "primary-hover": "var(--dark-pagination-primary-hover)"
        },
        input: {
          primary: "var(--dark-input-primary)",
          gray: "var(--dark-input-gray)",
          error: "var(--dark-input-error)"
        },
        header: {
          bgColor: "var(--dark-header-bgColor)"
        },
        text: "var(--dark-text)"
      },
      base: {
        primary: {
          DEFAULT: "var(--base-primary-default)",
          60: "var(--base-primary-60)",
          40: "var(--base-primary-40)",
          14: "var(--base-primary-14)",
          10: "var(--base-primary-10)",
          4: "var(--base-primary-10)"
        },
        secondary: {
          DEFAULT: "var(--base-secondary-default)",
          14: "var(--base-secondary-14)"
        },
        tertiary: {
          DEFAULT: "var(--base-tertiary-default)",
          14: "var(--base-tertiary-14)"
        },
        success: {
          DEFAULT: "var(--base-success-default)",
          14: "var(--base-success-14)"
        },
        warning: {
          DEFAULT: "var(--base-warning-default)",
          14: "var(--base-warning-14)"
        },
        danger: {
          DEFAULT: "var(--base-danger-default)",
          14: "var(--base-danger-14)"
        },
        green: {
          DEFAULT: "var(--base-green-default)",
          alpha: "var(--base-green-alpha)"
        },
        red: {
          DEFAULT: "var(--base-red-default)",
          alpha: "var(--base-red-alpha)"
        },
        background: "var(--base-background)",
        second: "var(--base-second)",
        label: {
          DEFAULT: "var(--base-label-default)",
          60: "var(--base-label-60)",
          40: "var(--base-label-40)",
          20: "var(--base-label-20)"
        },
        fill: {
          primary: "var(--base-fill-primary)",
          secondary: "var(--base-fill-secondary)",
          tertiary: "var(--base-fill-tertiary)",
          quaternary: "var(--base-fill-quaternary)"
        },
        line: {
          primary: "var(--base-line-primary)",
          secondary: "var(--base-line-secondary)",
          tertiary: "var(--base-line-tertiary)"
        },
        hover: {
          primary: "var(--base-hover-primary)",
          secondary: "var(--base-hover-secondary)",
          tertiary: "var(--base-hover-tertiary)",
          success: "var(--base-hover-success)",
          warning: "var(--base-hover-warning)",
          danger: "var(--base-hover-danger)",
          green: "var(--base-hover-green)",
          red: "var(--base-hover-red)",
          fill: {
            primary: "var(--base-hover-fill-primary)",
            secondary: "var(--base-hover-fill-secondary)",
            tertiary: "var(--base-hover-fill-tertiary)",
            quaternary: "var(--base-hover-fill-quaternary)"
          }
        },
        disabled: {
          blue: "var(--base-disabled-blue)"
        },
        badge: {
          "primary-bg": "var(--base-badge-primary-bg)",
          "secondary-bg": "var(--base-badge-secondary-bg)",
          "success-bg": "var(--base-badge-success-bg)",
          "warning-bg": "var(--base-badge-warning-bg)",
          "danger-bg": "var(--base-badge-danger-bg)",
          "info-bg": "var(--base-badge-info-bg)"
        },
        pagination: {
          primary: "var(--base-pagination-primary)",
          "primary-hover": "var(--base-pagination-primary-hover)"
        },
        input: {
          primary: "var(--base-input-primary)",
          gray: "var(--base-input-gray)",
          error: "var(--base-input-error)"
        },
        header: {
          bgColor: "var(--base-header-bgColor)"
        },
        text: "var(--base-text)"
      }
    }
  }
};
