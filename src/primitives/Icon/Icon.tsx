import { IconProps } from "@radix-ui/react-icons/dist/types";

import { SVGRProps, IconName, ICONLOOKUP } from "./iconTypes.tsx";

export default function Icon<T extends IconProps, P = SVGRProps>({
  name,
  ...props
}: { name: IconName } & T & { svgProps?: P }) {
  if (!name) return null;
  const IconComponent = ICONLOOKUP.get(name);
  if (!IconComponent) return null;
  const { svgProps, ...restProps } = props;
  return (
    <IconComponent
      {...svgProps}
      {...restProps}
      color="#2563eb"
      title="accessibility title"
      desc="accessibility description"
    />
  );
}
