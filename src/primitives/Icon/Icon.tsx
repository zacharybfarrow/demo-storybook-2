import React from "react";
import { IconName, ICONLOOKUP, SVGRProps } from "./iconTypes.tsx";

export default function Icon<
  T extends React.SVGAttributes<SVGElement> & SVGRProps
>({ name, ...props }: { name: IconName } & T) {
  if (!name) return null;
  const IconComponent = ICONLOOKUP.get(name);
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
