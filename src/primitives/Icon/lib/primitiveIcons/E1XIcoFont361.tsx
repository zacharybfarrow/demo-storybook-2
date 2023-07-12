import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont361 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.258 15.228h-.645v.511l-1.29-1.29v-1.494a5.48 5.48 0 1 0-.66 0h.015v1.495l-1.29 1.29v-.512h-.645v1.29a.322.322 0 0 0 .323.322h1.29v-.645h-.512L12 15.04l1.156 1.156h-.511v.645h1.29a.322.322 0 0 0 .322-.322Zm-7.095-7.74A4.837 4.837 0 1 1 12 12.326a4.843 4.843 0 0 1-4.837-4.837ZM6.71 16.67a.94.94 0 0 0 .13-.474.967.967 0 1 0-1.935 0 .947.947 0 0 0 .132.48l-.002-.005a.966.966 0 0 0-.453.815v1.292a.318.318 0 0 0 .095.227l.228.228v1.478a.322.322 0 0 0 .322.323h1.29a.322.322 0 0 0 .322-.323v-1.478l.228-.228a.32.32 0 0 0 .095-.227v-1.291a.966.966 0 0 0-.448-.813l-.004-.003Zm-.838-.797a.322.322 0 1 1-.322.322.322.322 0 0 1 .322-.322Zm.645 2.769-.228.228a.32.32 0 0 0-.095.227v1.29h-.644v-1.29a.318.318 0 0 0-.095-.227l-.228-.228v-1.156a.322.322 0 0 1 .323-.323h.644a.322.322 0 0 1 .323.323Zm11.61-4.381a3.87 3.87 0 1 0 3.869 3.87 3.874 3.874 0 0 0-3.87-3.87Zm0 7.094a3.225 3.225 0 1 1 3.224-3.225 3.229 3.229 0 0 1-3.225 3.225ZM5.872 14.261a3.87 3.87 0 1 0 3.87 3.87 3.874 3.874 0 0 0-3.87-3.87Zm0 7.094a3.225 3.225 0 1 1 3.225-3.225 3.229 3.229 0 0 1-3.225 3.225Zm7.195-16.37a1.29 1.29 0 1 0-2.133.005l-.003-.004a1.29 1.29 0 0 0-.867 1.212v2.257a.323.323 0 0 0 .176.288l.002.001.466.233v2.703a.322.322 0 0 0 .322.323h1.935a.322.322 0 0 0 .323-.323V8.977l.466-.233a.323.323 0 0 0 .179-.288V6.2a1.288 1.288 0 0 0-.858-1.21l-.01-.003ZM12 3.62a.645.645 0 1 1-.645.645.645.645 0 0 1 .645-.645Zm1.29 4.638-.467.233a.323.323 0 0 0-.178.288v2.58h-1.29v-2.58a.322.322 0 0 0-.177-.288h-.001l-.467-.234V6.198a.645.645 0 0 1 .645-.645h1.29a.645.645 0 0 1 .645.645Zm5.675 8.413a.949.949 0 0 0 .13-.474.967.967 0 1 0-1.934 0 .947.947 0 0 0 .132.48l-.003-.005a.966.966 0 0 0-.452.815v1.292a.318.318 0 0 0 .095.227l.228.228v1.478a.322.322 0 0 0 .322.323h1.29a.322.322 0 0 0 .322-.323v-1.478l.228-.228a.32.32 0 0 0 .094-.227v-1.291a.966.966 0 0 0-.447-.813l-.004-.003Zm-.838-.797a.322.322 0 1 1-.322.322.322.322 0 0 1 .322-.322Zm.645 2.769-.228.228a.32.32 0 0 0-.095.227v1.29h-.644v-1.29a.318.318 0 0 0-.095-.227l-.228-.228v-1.156a.322.322 0 0 1 .323-.323h.644a.322.322 0 0 1 .323.323Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont361);
export default ForwardRef;
