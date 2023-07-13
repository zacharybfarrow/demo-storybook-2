import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon111 = (
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
    <path d="M21.574 11.896h-.843V5.555a1.28 1.28 0 0 0-1.28-1.28H3.28A1.28 1.28 0 0 0 2 5.555V16.58c0 .705.574 1.28 1.28 1.28h10.696a8.22 8.22 0 0 1-.454-.854H3.279a.427.427 0 0 1-.426-.426V5.555c0-.236.191-.427.426-.427h16.172c.235 0 .427.191.427.427v6.341H14.31a.426.426 0 0 0-.426.427c0 3.542 1.26 5.946 3.855 7.35a.426.426 0 0 0 .406 0C20.739 18.27 22 15.864 22 12.323a.426.426 0 0 0-.426-.427Zm-3.632 6.913c-2.085-1.211-3.11-3.15-3.199-6.06h6.068l-2.87 2.87-1.212-1.214-.604.603 1.515 1.515a.425.425 0 0 0 .603 0l2.831-2.831c-.267 2.392-1.281 4.042-3.132 5.117ZM4.344 14.285v.621c0 .463.377.84.84.84h6.15a.84.84 0 0 0 .839-.84v-.62a3.905 3.905 0 0 0-1.288-2.9c-.202.206-.429.388-.675.543a3.056 3.056 0 0 1 1.11 2.356v.608H5.197v-.608a3.065 3.065 0 0 1 3.062-3.061c1.333 0 2.417-1.085 2.417-2.418S9.592 6.39 8.26 6.39A2.42 2.42 0 0 0 5.84 8.806c0 .756.348 1.43.892 1.874a3.92 3.92 0 0 0-2.389 3.605Zm2.35-5.479c0-.863.702-1.565 1.565-1.565.862 0 1.564.702 1.564 1.565s-.702 1.565-1.564 1.565a1.567 1.567 0 0 1-1.565-1.565Zm11.514-2.028h-5.094v.853h5.094v-.853Zm-5.094 3.14h5.094v-.853h-5.094v.853Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon111);
export default ForwardRef;
