export type ReactAttr<T = HTMLElement> = React.HTMLAttributes<T>;

export type ForwardRefProps<T, P = unknown> = React.PropsWithoutRef<
  React.PropsWithChildren<P>
> &
  React.RefAttributes<T>;
export type ForwardRefReturn<T, P = unknown> = React.ForwardRefExoticComponent<
  ForwardRefProps<T, P>
>;

/**
 * For "as" props.  Creates an "as" property that supports native html tags such as 'span', 'a', 'button' as well as custom functional components
 * All native props for the supplied html tag/component are inferred as part of the base component props, allowing the use props like `href` on an 'a' element ect
 */
export type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, "as"> & {
    as?: Element;
  };

export enum ButtonFont {
  LIGHT = "lgt",
  REGULAR = "reg",
  MEDIUM = "med",
  BOLD = "bld",
  BLACK = "blk",
}

export enum ButtonSize {
  XSMALL = "h-10 gap-4 px-4 text-sm font-semibold",
  SMALL = "h-12 gap-6 px-6 text-base font-semibold",
  MEDIUM = "h-14 gap-8 px-8 text-lg font-semibold",
  LARGE = "h-16 gap-10 px-10 text-xl font-semibold",
  XLARGE = "h-20 gap-12 px-12 text-2xl font-semibold",
}

export enum IconButtonSize {
  XSMALL = "h-10 w-10 p-0",
  SMALL = "h-12 w-12 p-0",
  MEDIUM = "h-14 w-14 p-0",
  LARGE = "h-16 w-16 p-0",
  XLARGE = "h-20 w-20 p-0",
}

export enum ButtonRadius {
  SMALL = "rounded-md",
  MEDIUM = "rounded-lg",
  LARGE = "rounded-xl",
  XLARGE = "rounded-2xl",
  CIRCLE = "rounded-full",
  SQUARE = "rounded-none",
}

export enum ButtonIconSize {
  XSMALL = 16,
  SMALL = 20,
  MEDIUM = 24,
  LARGE = 28,
  XLARGE = 32,
}

export type ButtonKind = "SOLID" | "OUTLINE" | "GHOST" | "TINTED";

export type ButtonVariant =
  | "PRIMARY"
  | "ACTION"
  | "ACCENT"
  | "DANGER"
  | "SUCCESS"
  | "WARNING";

// ORDER - bg-zinc-400 text-zinc-900 hover:bg-zinc-500 hover:text-zinc-950 active:bg-zinc-400 active:text-zinc-900 border-zinc-900

export enum ButtonTheme {
  "PRIMARY-SOLID" = "border-transparent bg-opacity-100 bg-zinc-950 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-50 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACTION-SOLID" = "border-transparent bg-opacity-100 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-blue-50 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACCENT-SOLID" = "border-transparent bg-opacity-100 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-500 text-yellow-950 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "DANGER-SOLID" = "border-transparent bg-opacity-100 bg-red-600 hover:bg-red-700 active:bg-red-600 text-red-50 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "SUCCESS-SOLID" = "border-transparent bg-opacity-100 bg-green-600 hover:bg-green-700 active:bg-green-600 text-green-50 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "WARNING-SOLID" = "border-transparent bg-opacity-100 bg-orange-600 hover:bg-orange-700 active:bg-orange-600 text-orange-50 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  //
  "PRIMARY-OUTLINE" = "bg-zinc-900 bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-0 border-zinc-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACTION-OUTLINE" = "bg-blue-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-blue-800 border-blue-600 hover:text-blue-900 active:text-blue-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACCENT-OUTLINE" = "bg-yellow-500 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-yellow-800 border-yellow-500 hover:text-yellow-900 active:text-yellow-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "DANGER-OUTLINE" = "bg-red-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-red-800 border-red-600 hover:text-red-900 active:text-red-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "SUCCESS-OUTLINE" = "bg-green-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-green-800 border-green-600 hover:text-green-900 active:text-green-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "WARNING-OUTLINE" = "bg-orange-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-orange-800 border-orange-600 hover:text-orange-900 active:text-orange-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  //
  "PRIMARY-GHOST" = "bg-zinc-900 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 border-transparent transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACTION-GHOST" = "bg-blue-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-blue-800 border-transparent hover:text-blue-900 active:text-blue-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACCENT-GHOST" = "bg-yellow-500 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-yellow-800 border-transparent hover:text-yellow-900 active:text-yellow-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "DANGER-GHOST" = "bg-red-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-red-800 border-transparent hover:text-red-900 active:text-red-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "SUCCESS-GHOST" = "bg-green-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-green-800 border-transparent hover:text-green-900 active:text-green-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "WARNING-GHOST" = "bg-orange-600 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-10 text-orange-800 border-transparent hover:text-orange-900 active:text-orange-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",

  "PRIMARY-TINTED" = "bg-zinc-900 bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-10 border-transparent transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACTION-TINTED" = "bg-blue-600 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 text-blue-800 border-transparent hover:text-blue-900 active:text-blue-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "ACCENT-TINTED" = "bg-yellow-500 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 text-yellow-800 border-transparent hover:text-yellow-900 active:text-yellow-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "DANGER-TINTED" = "bg-red-600 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 text-red-800 border-transparent hover:text-red-900 active:text-red-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "SUCCESS-TINTED" = "bg-green-600 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 text-green-800 border-transparent hover:text-green-900 active:text-green-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
  "WARNING-TINTED" = "bg-orange-600 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 text-orange-800 border-transparent hover:text-orange-900 active:text-orange-900 transition-all outline-2 border-2 focus:outline-blue-500 disabled:bg-zinc-500 disabled:text-zinc-800 disabled:border-zinc-800",
}

export interface ButtonAdditionalProps {
  /**
   * Specifies the message provided to screen readers when the danger button variant is selected
   */
  dangerText?: string;
  /**
   * Indicates the loading state of the button element
   */
  loading?: boolean;
  /**
   * Specifies the position of loader relative to the button label
   */
  loaderPosition?: "left" | "right" | "center";
  /**
   * ? Specify whether the Button is currently selected. Only applies to the Ghost variant.
   */
  isSelected?: boolean;
}
