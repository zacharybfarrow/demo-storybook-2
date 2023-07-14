import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont51 = (
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
    <g id="ico_add_message_0" className="cls-2">
      <path
        d="M12 2.47C6.53 2.47 2 6.1 2 10.7a7.48 7.48 0 0 0 3.62 6.1L3.9 20.89a.47.47 0 0 0 .65.59l5-2.73a16.84 16.84 0 0 0 2.46.19c5.47 0 10-3.64 10-8.24S17.47 2.47 12 2.47M12 18a16.29 16.29 0 0 1-2.47-.19.47.47 0 0 0-.31 0L5.27 20l1.34-3.19a.46.46 0 0 0-.18-.57c-2.14-1.35-3.5-3.24-3.5-5.54 0-4 4-7.3 9.07-7.3s9.07 3.32 9.07 7.3S17.06 18 12 18m1-11.37h-2v3H8v2h3v3h2v-3h3v-2h-3Z"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont51);
export default ForwardRef;
