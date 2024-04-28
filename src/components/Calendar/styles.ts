import { cva } from "class-variance-authority";

export const ArrowLine = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label",
      dark: "bu-text-dark-label"
    }
  },
});

export const CaptionStart = cva("", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary",
      dark: "bu-border-dark-line-secondary"
    }
  }
});

export const NavButton = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-background hover:bu-bg-light-fill-quaternary hover:bu-text-light-label",
      dark: "bu-bg-dark-background hover:bu-bg-dark-fill-quaternary hover:bu-text-dark-label"
    }
  }
});

export const HeadCell = cva("", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary bu-text-light-label-40",
      dark: "bu-border-dark-line-secondary bu-text-dark-label-40"
    }
  }
});

export const Cell = cva("", {
  variants: {
    theme: {
      light:
        "[&:has([aria-selected])]:bu-bg-light-primary-14 [&:has([aria-selected])]:bu-text-light-second [&:has([aria-selected].day-outside)]:!bu-bg-light-background [&:has([disabled])]:bu-bg-light-line-primary",
      dark: "[&:has([aria-selected])]:bu-bg-dark-primary-14 [&:has([aria-selected])]:bu-text-dark-second [&:has([aria-selected].day-outside)]:!bu-bg-dark-background [&:has([disabled])]:bu-bg-dark-line-primary"
    }
  }
});

export const Day = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label hover:bu-bg-light-primary-14 hover:bu-text-light-primary",
      dark: "bu-text-dark-label hover:bu-bg-dark-primary-14 hover:bu-text-dark-primary"
    }
  }
});

export const DayRangeStart = cva("", {
  variants: {
    theme: {
      light:
        "bu-bg-light-primary bu-text-light-second hover:!bu-bg-light-primary hover:!bu-text-light-second",
      dark: "bu-bg-dark-primary bu-text-dark-second hover:!bu-bg-dark-primary hover:!bu-text-dark-second"
    }
  }
});

export const DayRangeEnd = cva("", {
  variants: {
    theme: {
      light:
        "bu-bg-light-primary bu-text-light-second hover:!bu-bg-light-primary hover:!bu-text-light-second",
      dark: "bu-bg-dark-primary bu-text-dark-second hover:!bu-bg-dark-primary hover:!bu-text-dark-second"
    }
  }
});

export const DayToday = cva("", {
  variants: {
    theme: {
      light:
        "bu-bg-light-fill-quaternary bu-text-light-label aria-selected:bu-bg-light-primary aria-selected:bu-text-light-second",
      dark: "bu-bg-dark-fill-quaternary bu-text-dark-label aria-selected:bu-bg-dark-primary aria-selected:bu-text-dark-second"
    }
  }
});

export const DaySelected = cva("", {
  variants: {
    theme: {
      light:
        "hover:bu-bg-light-primary hover:bu-text-light-second focus:bu-bg-light-primary focus:bu-text-light-second",
      dark: "hover:bu-bg-dark-primary hover:bu-text-dark-second focus:bu-bg-dark-primary focus:bu-text-dark-second"
    }
  }
});

export const DayOutside = cva("", {
  variants: {
    theme: {
      light:
        "bu-text-light-label-40 hover:!bu-bg-light-primary-14 hover:!bu-text-light-primary aria-selected:!bu-bg-light-background aria-selected:!bu-text-light-label-40",
      dark: "bu-text-dark-label-40 hover:!bu-bg-dark-primary-14 hover:!bu-text-dark-primary aria-selected:!bu-bg-dark-background aria-selected:!bu-text-dark-label-40"
    }
  }
});

export const DayDisabled = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
      dark: "bu-text-dark-label-40"
    }
  }
});

export const DayRangeMiddle = cva("", {
  variants: {
    theme: {
      light: "hover:!bu-bg-light-primary-14 hover:!bu-text-light-primary",
      dark: "hover:!bu-bg-dark-primary-14 hover:!bu-text-dark-primary"
    }
  }
});
