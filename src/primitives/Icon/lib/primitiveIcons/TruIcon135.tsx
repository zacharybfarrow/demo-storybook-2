import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon135 = (
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
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.86 9.952h4.976v-.833h-4.977v.833ZM22 12.771l-.59-.59-.46.462a4.203 4.203 0 0 0-.65-.598V5.689c0-.69-.56-1.25-1.25-1.25H3.25c-.69 0-1.25.56-1.25 1.25V16.46c0 .69.56 1.25 1.25 1.25h9.681a5.375 5.375 0 0 1-.313-.833H3.25a.417.417 0 0 1-.417-.417V5.689c0-.23.187-.417.417-.417h15.8c.23 0 .417.187.417.417v5.876a4.143 4.143 0 0 0-1.64-.337c-2.298 0-4.167 1.87-4.167 4.167s1.869 4.166 4.166 4.166 4.167-1.869 4.167-4.166c0-.752-.201-1.457-.55-2.066L22 12.77Zm-4.174 5.957c-1.838 0-3.333-1.495-3.333-3.333s1.495-3.334 3.333-3.334c1.014 0 1.922.455 2.534 1.171l-2.54 2.54-1.185-1.186-.59.59 1.48 1.48a.416.416 0 0 0 .59 0l2.712-2.712c.213.439.333.931.333 1.45a3.337 3.337 0 0 1-3.334 3.334Zm.01-11.844h-4.977v.834h4.977v-.834ZM4.29 14.22v.607c0 .452.369.82.82.82h6.009c.452 0 .82-.368.82-.82v-.607a3.816 3.816 0 0 0-1.258-2.833c-.197.202-.419.38-.66.53a2.986 2.986 0 0 1 1.085 2.303v.594H5.124v-.594a2.995 2.995 0 0 1 2.991-2.991c1.303 0 2.362-1.06 2.362-2.362s-1.06-2.362-2.362-2.362a2.365 2.365 0 0 0-2.362 2.362c0 .738.34 1.397.872 1.831a3.83 3.83 0 0 0-2.335 3.522Zm2.296-5.353a1.53 1.53 0 0 1 1.529-1.53 1.53 1.53 0 0 1 0 3.058 1.53 1.53 0 0 1-1.529-1.528Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon135);
export default ForwardRef;
