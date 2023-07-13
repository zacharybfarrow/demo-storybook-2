import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon103 = (
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
    <path d="M15.916 17.975h.979v4.005h-.979zM10.959 11.886c1.875 0 3.653.718 4.994 1.972l.693-.693a8.291 8.291 0 0 0-3.288-1.902 4.946 4.946 0 0 0 2.544-4.32A4.949 4.949 0 0 0 10.959 2C8.233 2 6.016 4.218 6.016 6.943s2.217 4.943 4.943 4.943Zm0-8.907c2.186 0 3.964 1.778 3.964 3.964s-1.778 3.964-3.964 3.964S6.995 9.13 6.995 6.943 8.773 2.98 10.959 2.98ZM21.332 15.724l-2.233-2.234a.49.49 0 0 0-.693 0l-.78.78-.004-.004-.7.7.003.006-.752.752.693.692 1.397-1.397v6.961h.979v-6.961l1.397 1.397.693-.692ZM13.569 20.586c0 .24-.195.435-.435.435H4.082a.435.435 0 0 1-.435-.435v-1.388a7.32 7.32 0 0 1 4.236-6.63c-.33-.182-.64-.391-.931-.625a8.296 8.296 0 0 0-4.284 7.255v1.388c0 .78.635 1.414 1.414 1.414h9.052c.78 0 1.414-.634 1.414-1.414v-.84h-.979v.84Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon103);
export default ForwardRef;
