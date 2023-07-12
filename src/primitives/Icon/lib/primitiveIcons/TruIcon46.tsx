import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon46 = (
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
    <path d="M9.203 8.541h2.67l-2.22 4.888h.966l2.547-5.592v-.14H9.203v.844Zm11.254 8.612a3.693 3.693 0 0 0-.407-5.03V5.981c0-.707-.575-1.282-1.282-1.282H3.281C2.575 4.7 2 5.275 2 5.982v9.229c0 .706.575 1.281 1.281 1.281h9.57a4.938 4.938 0 0 1-.216-.854H3.28a.428.428 0 0 1-.427-.427V5.98c0-.235.192-.427.427-.427h15.487c.235 0 .427.192.427.428v5.556a3.679 3.679 0 0 0-1.817-.38c-.157-.66-.665-1.208-1.445-1.241l1.45-2.064v-.147h-3.628v.77h2.31L14.77 10.4v.163c.697-.174 1.54.033 1.723.748a3.712 3.712 0 0 0-1.78 1.177c-.191-.148-.314-.373-.344-.672h-.843c.037.611.31 1.076.73 1.366a3.678 3.678 0 0 0-.402 1.674 3.706 3.706 0 0 0 3.702 3.702c.867 0 1.665-.3 2.297-.801l1.543 1.543.604-.604-1.543-1.543Zm-2.9.551a2.85 2.85 0 0 1-2.848-2.848 2.85 2.85 0 0 1 2.847-2.847 2.85 2.85 0 0 1 2.848 2.847 2.85 2.85 0 0 1-2.848 2.848ZM6.721 7.665l-1.736 2.751c-.22.336-.368.77-.368 1.187 0 1.278.942 1.908 2.12 1.908 1.188 0 2.13-.63 2.13-1.908 0-1.187-.844-1.867-1.974-1.842-.18 0-.352.041-.516.131l1.4-2.227H6.722Zm.017 2.833c.687 0 1.187.393 1.187 1.105S7.435 12.7 6.739 12.7c-.688 0-1.188-.384-1.188-1.097s.492-1.105 1.188-1.105Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon46);
export default ForwardRef;
