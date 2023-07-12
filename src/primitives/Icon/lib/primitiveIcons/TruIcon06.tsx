import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon06 = (
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
    <path d="M22.165 10.365a2.37 2.37 0 0 0-1.68-.695 2.37 2.37 0 0 0-2.335 1.955h-1.813a4.341 4.341 0 0 0-.756-2.128l.353-.447a.75.75 0 1 0-1.176-.931l-.244.309a4.34 4.34 0 0 0-2.139-.765V5.858a2.356 2.356 0 0 0 2.045-2.343 2.37 2.37 0 0 0-.696-1.68 2.37 2.37 0 0 0-1.68-.695 2.37 2.37 0 0 0-1.679.695 2.37 2.37 0 0 0-.695 1.68 2.363 2.363 0 0 0 1.955 2.335v1.813c-.923.08-1.758.44-2.428 1.004l-1.26-1.26c.276-.387.44-.858.44-1.369a2.375 2.375 0 1 0-2.374 2.375c.53 0 1.013-.18 1.408-.472l1.256 1.256a4.328 4.328 0 0 0-1.004 2.428H5.88A2.362 2.362 0 0 0 3.544 9.65a2.37 2.37 0 0 0-1.68.696 2.37 2.37 0 0 0-.695 1.679c0 .607.232 1.217.695 1.68a2.369 2.369 0 0 0 1.68.695 2.358 2.358 0 0 0 2.341-2.025h1.778c.08.923.44 1.758 1.004 2.428l-1.26 1.26a2.359 2.359 0 0 0-1.369-.44 2.375 2.375 0 1 0 2.375 2.374c0-.53-.18-1.013-.472-1.408l1.256-1.256c.67.564 1.505.924 2.428 1.004v1.783a2.369 2.369 0 0 0-1.975 2.337c0 .606.233 1.216.696 1.679a2.37 2.37 0 0 0 1.679.695 2.37 2.37 0 0 0 1.68-.695 2.37 2.37 0 0 0 .695-1.68 2.357 2.357 0 0 0-2.025-2.341v-1.778a4.328 4.328 0 0 0 2.428-1.004l1.275 1.275c-.3.398-.484.887-.484 1.423a2.375 2.375 0 1 0 2.375-2.375c-.505 0-.97.16-1.355.428l-1.28-1.281a4.328 4.328 0 0 0 1.003-2.428h1.805a2.356 2.356 0 0 0 2.343 2.045 2.37 2.37 0 0 0 1.68-.696 2.37 2.37 0 0 0 .695-1.68 2.37 2.37 0 0 0-.695-1.679ZM6.003 7.663a1.627 1.627 0 0 1-1.625-1.625 1.627 1.627 0 0 1 1.625-1.625 1.627 1.627 0 0 1 1.625 1.625 1.627 1.627 0 0 1-1.625 1.625Zm-1.31 5.511a1.618 1.618 0 0 1-1.15.476c-.416 0-.83-.158-1.148-.476a1.619 1.619 0 0 1-.476-1.149c0-.417.158-.83.476-1.15a1.618 1.618 0 0 1 1.149-.475c.417 0 .83.158 1.149.476.318.318.475.732.476 1.149 0 .417-.158.83-.476 1.149Zm1.345 6.448a1.627 1.627 0 0 1-1.625-1.625 1.627 1.627 0 0 1 1.625-1.625 1.627 1.627 0 0 1 1.625 1.625 1.627 1.627 0 0 1-1.625 1.625Zm11.93-3.216a1.627 1.627 0 0 1 1.626 1.625 1.627 1.627 0 0 1-1.625 1.625 1.627 1.627 0 0 1-1.626-1.625 1.627 1.627 0 0 1 1.626-1.625ZM10.897 4.664a1.618 1.618 0 0 1-.476-1.15c0-.416.158-.83.476-1.148a1.618 1.618 0 0 1 1.149-.476c.417 0 .83.158 1.149.476.318.318.475.732.476 1.149 0 .417-.158.83-.476 1.149a1.618 1.618 0 0 1-1.15.476c-.417 0-.83-.158-1.148-.476Zm2.278 14.643c.318.318.476.732.476 1.15 0 .416-.158.83-.476 1.148a1.618 1.618 0 0 1-1.149.476c-.417 0-.83-.158-1.149-.476a1.618 1.618 0 0 1-.476-1.149c0-.417.158-.83.476-1.149l-.265-.265.265.265a1.618 1.618 0 0 1 1.149-.476c.417 0 .83.158 1.15.476ZM12 15.625A3.63 3.63 0 0 1 8.375 12 3.63 3.63 0 0 1 12 8.375a3.613 3.613 0 0 1 2.049.64l-2.21 2.792-1.304-1.36a.75.75 0 1 0-1.083 1.037l2.494 2.603 3.139-3.964a3.6 3.6 0 0 1 .54 1.877A3.63 3.63 0 0 1 12 15.625Zm9.634-2.431a1.618 1.618 0 0 1-1.149.476c-.417 0-.83-.158-1.149-.476a1.618 1.618 0 0 1-.476-1.15c0-.417.158-.83.476-1.148a1.618 1.618 0 0 1 1.15-.476c.416 0 .83.158 1.148.476.318.318.476.731.476 1.149 0 .417-.158.83-.476 1.149Zm-3.602-4.788a2.375 2.375 0 1 0 0-4.75 2.375 2.375 0 0 0 0 4.75Zm0-4a1.627 1.627 0 0 1 1.625 1.625 1.627 1.627 0 0 1-1.625 1.625 1.627 1.627 0 0 1-1.626-1.625 1.627 1.627 0 0 1 1.626-1.625Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon06);
export default ForwardRef;
