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
    }
  }
});

const SliderMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-line-secondary bu-bg-light-background"],
      dark: ["bu-border-dark-line-secondary bu-bg-dark-background"]
    }
  }
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
    }
  }
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
  SliderMarkVariants,
  SliderThumbVariants,
  SliderTooltipVariants,
  TrackVariants,
  TrackVariantsDefault,
  SliderActivityMarkVariants,
  SliderThumbVariantsDefault,
  SliderMarkVariantsDefault
};
