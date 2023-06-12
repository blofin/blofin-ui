export type TypographyTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type TypographyWeight = 'regular' | 'medium' | 'bold';
export type TypographyVariantsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'body3' | 'body4';
declare const TypographyVariants: (props: {
    variant: TypographyVariantsType;
    weight: TypographyWeight;
}) => string;
export default TypographyVariants;
