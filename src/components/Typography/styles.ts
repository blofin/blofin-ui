import { cva } from 'class-variance-authority';

export type TypographyTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TypographyWeight = 'regular' | 'medium' | 'bold';

export type TypographyVariantsType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

const TypographyVariants = (props: {
  variant: TypographyVariantsType;
  weight: TypographyWeight;
}) => {
  return cva('text-black dark:text-white', {
    variants: {
      variant: {
        h1: `text-9xl`,
        h2: `text-8xl`,
        h3: `text-7xl`,
        h4: `text-6xl`,
        h5: `text-5xl`,
        h6: `text-4xl`,
        subtitle1: `text-3xl`,
        subtitle2: `text-2xl`,
        body1: `text-xl`,
        body2: `text-lg`,
        body3: `text-base`,
        body4: `text-sm`
      },
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
        regular: 'font-normal'
      }
    },
    defaultVariants: {
      variant: 'body3',
      weight: 'regular'
    }
  })(props);
};

export default TypographyVariants;
