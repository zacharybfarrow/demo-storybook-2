import * as primitiveIcons from "./lib/primitiveIcons/index.ts";
//import * as stackedIcons from './lib/stackedIcons/index.ts'
import React, { RefAttributes, SVGProps } from "react";

export interface SVGRProps {
  /**
   * Specifies the title of the icon. This property is used to provide a textual label or name for the icon.
   * It is applied to the <title> element inside the SVG, which serves as an accessible name for the icon when using assistive technologies like screen readers.
   */
  title?: string;
  /**
   * Specifies the ID of the element that contains the title. This property is used to associate the title with a specific element, providing further context or structure.
   * It is applied to the aria-labelledby attribute of the SVG element, referencing the element with the specified ID to provide the accessible name for the icon.
   */
  titleId?: string;
  /**
   * Specifies the description of the icon. This property is used to provide a textual description or additional information about the icon's purpose or functionality.
   * It is applied to the <desc> element inside the SVG, which provides a detailed description of the icon for accessibility purposes.
   */
  desc?: string;
  /**
   * Specifies the ID of the element that contains the description. This property is used to associate the description with a specific element, providing further context or structure.
   * It is applied to the aria-describedby attribute of the SVG element, referencing the element with the specified ID to provide additional information about the icon.
   */
  descId?: string;
  /**
   * Specifies whether or not a tooltip should be applied to the icon on mouseover. Defaults to false.
   */
  tooltip?: boolean;
  /**
   * Specifieds the background color for the icon, they are transparent by default.
   */
  backgroundColor?: string;
}

export type PrimitiveIconName = keyof typeof primitiveIcons;
//export type StackedIconNames = keyof typeof stackedIcons

export type IconName = PrimitiveIconName; //& StackedIconNames

export const ICONLOOKUP = new Map<
  string,
  React.ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement> & SVGRProps, "ref"> &
      RefAttributes<SVGSVGElement>
  >
>();
Object.keys(primitiveIcons).forEach((key) => {
  ICONLOOKUP.set(key, primitiveIcons[key as keyof typeof primitiveIcons]);
});
