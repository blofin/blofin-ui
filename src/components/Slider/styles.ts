import { cva } from "class-variance-authority";

const RailVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-line-secondary"],
      dark: ["bu-bg-dark-line-secondary"]
    }
  }
});

const TrackVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary"],
      dark: ["bu-bg-dark-primary"]
    }
  }
});

const TrackVariantsDefault = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-label-60"],
      dark: ["bu-bg-dark-label"]
    },
    disabled: {
      true: ["bu-bg-light-fill-secondary"],
      false: ""
    }
  },
  compoundVariants: [
    {
      theme: "light",
      disabled: true,
      class: "bu-bg-light-fill-secondary"
    },
    {
      theme: "dark",
      disabled: true,
      class: "bu-bg-dark-fill-secondary"
    }
  ]
});

const SliderMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-line-secondary bu-bg-light-background"],
      dark: ["bu-border-dark-line-secondary bu-bg-dark-background"]
    },
    current: {
      true: ["!bu-border-transparent !bu-bg-transparent"],
      false: ""
    }
  },
  compoundVariants: [
    {
      theme: "light",
      current: true,
      class: ["!bu-border-transparent !bu-bg-transparent"]
    },
    {
      theme: "dark",
      current: true,
      class: ["!bu-border-transparent !bu-bg-transparent"]
    }
  ]
});

const SliderActivityMarkVariants = cva("bu-transition-colors", {
  variants: {
    theme: {
      light: ["bu-border-light-primary"],
      dark: ["bu-border-dark-primary"]
    }
  }
});

const SliderMarkVariantsDefault = cva("bu-transition-colors", {
  variants: {
    theme: {
      light: ["bu-border-light-label-60"],
      dark: ["bu-border-dark-label"]
    }
  }
});

const MarkLabelVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-label-60"],
      dark: ["bu-text-dark-label-60"]
    }
  }
});

const SliderThumbVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-primary bu-bg-light-background"],
      dark: ["bu-border-dark-primary bu-bg-dark-background"]
    }
  }
});

const SliderThumbVariantsDefault = cva("", {
  variants: {
    theme: {
      light: ["!bu-border-light-label-60 bu-bg-light-background"],
      dark: ["!bu-border-dark-label bu-bg-dark-background"]
    },
    disabled: {
      true: ["bu-bg-light-fill-tertiary"],
      false: ""
    }
  },
  compoundVariants: [
    {
      theme: "light",
      disabled: true,
      class: "bu-bg-light-fill-tertiary"
    },
    {
      theme: "dark",
      disabled: true,
      class: "bu-bg-dark-fill-tertiary"
    }
  ]
});

const SliderTooltipVariants = cva("after:border", {
  variants: {
    theme: {
      light: [
        "bu-bg-light-fill-tertiary after:bu-border-light-fill-tertiary after:bu-border-x-transparent after:bu-border-b-transparent"
      ],
      dark: [
        "bu-bg-dark-fill-tertiary after:bu-border-dark-fill-tertiary after:bu-border-x-transparent after:bu-border-b-transparent"
      ]
    }
  }
});

export {
  MarkLabelVariants,
  RailVariants,
  SliderActivityMarkVariants,
  SliderMarkVariants,
  SliderMarkVariantsDefault,
  SliderThumbVariants,
  SliderThumbVariantsDefault,
  SliderTooltipVariants,
  TrackVariants,
  TrackVariantsDefault
};
