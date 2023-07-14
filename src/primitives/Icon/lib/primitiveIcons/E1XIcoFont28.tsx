import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont28 = (
  {
    title,
    titleId,
    desc,
    descId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    role="img"
    width={props.width}
    height={props.height}
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <clipPath id="clip-path">
        <path d="M0 0h24v24H0z" fill="none" />
      </clipPath>
      <style>{".cls-2{clip-path:url(#clip-path)}"}</style>
    </defs>
    <g id="ico_map_tools_layers" className="cls-2">
      <path
        d="M3.36 11.65a.44.44 0 0 0-.42-.78 1.31 1.31 0 0 0 0 2.31l8 4.5a1.94 1.94 0 0 0 2.17 0l8-4.5a1.33 1.33 0 0 0 .66-1.18 1.43 1.43 0 0 0-.71-1.15.44.44 0 1 0-.42.78.41.41 0 0 1 0 .75l-8 4.52a1.07 1.07 0 0 1-1.2 0l-8-4.52a.41.41 0 0 1 0-.75Zm-.44-2.6 8 4.5a1.94 1.94 0 0 0 2.17 0l8-4.5a1.31 1.31 0 0 0 0-2.31l-8-4.41a1.94 1.94 0 0 0-2.17 0l-8 4.41a1.31 1.31 0 0 0 0 2.31Zm.44-1.51 8-4.41a1.07 1.07 0 0 1 1.2 0l8 4.41a.41.41 0 0 1 0 .75l-8 4.5a1.07 1.07 0 0 1-1.2 0l-8-4.52a.43.43 0 0 1-.24-.38.4.4 0 0 1 .24-.35Zm17.69 7.32a.44.44 0 1 0-.42.78.41.41 0 0 1 0 .75l-8 4.52a1.07 1.07 0 0 1-1.2 0l-8-4.52a.41.41 0 0 1 0-.75.44.44 0 0 0 .18-.6.46.46 0 0 0-.6-.18 1.31 1.31 0 0 0 0 2.31l8 4.5a1.94 1.94 0 0 0 2.17 0l8-4.5a1.32 1.32 0 0 0 .59-1.17 1.43 1.43 0 0 0-.71-1.14Z"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont28);
export default ForwardRef;
