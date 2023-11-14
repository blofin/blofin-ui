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

const SliderMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-line-secondary bu-bg-light-background"],
      dark: ["bu-border-dark-line-secondary bu-bg-dark-background"]
    }
  }
});

const SliderActivityMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-primary"],
      dark: ["bu-border-dark-primary"]
    }
  }
});

const MarkLabelVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-label-40"],
      dark: ["bu-text-dark-label-40"]
    }
  }
});

const SliderThumbVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-fill-secondary bu-bg-light-background"],
      dark: ["bu-border-dark-fill-secondary bu-bg-light-background"]
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
  SliderActivityMarkVariants
};
