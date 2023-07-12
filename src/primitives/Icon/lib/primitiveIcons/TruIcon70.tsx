import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon70 = (
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
    <path d="M20.578 7.32H18.54V3.728c0-.784-.638-1.422-1.423-1.422H6.882c-.785 0-1.423.638-1.423 1.422v3.594H3.422C2.638 7.32 2 7.959 2 8.743v11.53c0 .784.638 1.422 1.422 1.422h17.156c.784 0 1.422-.638 1.422-1.422V8.743c0-.784-.638-1.422-1.422-1.422ZM5.459 20.748H3.422a.475.475 0 0 1-.474-.474V8.743c0-.261.213-.474.474-.474H5.46v12.478Zm7.581 0h-2.08V18.67h2.08v2.076Zm8.012-.474a.475.475 0 0 1-.474.474h-6.59v-2.55a.474.474 0 0 0-.473-.474h-3.03a.474.474 0 0 0-.474.474v2.55H6.408V3.727c0-.261.212-.474.474-.474h10.236c.262 0 .474.213.474.474v15.599h.949V8.269h2.037c.261 0 .474.213.474.474v11.53ZM8.624 15.745h6.752v-.948H8.624v.948Zm2.902-5.8h.948V8.22H14.2v-.948h-1.725V5.547h-.948v1.725H9.8v.948h1.725v1.725Zm-2.902 2.882h6.752v-.949H8.624v.949Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon70);
export default ForwardRef;
