import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgMaskedIconsFonts179 = (
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
    data-name="Layer 1"
    viewBox="0 0 24 24"
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
    <path d="M4.177 10.311a.202.202 0 0 0 .201-.202v-.97a.94.94 0 0 1 .932-.94h.915a.202.202 0 1 0 0-.404h-.916A1.344 1.344 0 0 0 3.975 9.14v.97a.202.202 0 0 0 .202.202Zm15.963-5.53H3.956A2.276 2.276 0 0 0 1.69 7.045V17.05a2.276 2.276 0 0 0 2.266 2.266H20.14a2.276 2.276 0 0 0 2.266-2.266V7.046A2.276 2.276 0 0 0 20.14 4.78Zm1.555 2.255V17.05a1.546 1.546 0 0 1-1.546 1.546H3.956A1.546 1.546 0 0 1 2.4 17.059V7.046A1.546 1.546 0 0 1 3.946 5.5H20.14a1.546 1.546 0 0 1 1.555 1.536ZM9.88 11.848l.01.009a.26.26 0 0 0 .26-.25v-.653a.25.25 0 0 0-.24-.259h-.02a.26.26 0 0 0-.26.25v.643a.26.26 0 0 0 .25.26ZM6.25 10.695a.26.26 0 0 0-.259.25v.643a.26.26 0 0 0 .25.26.25.25 0 0 0 .26-.24v-.653a.26.26 0 0 0-.25-.26Zm1.383 2.38h.048a.73.73 0 0 0 .74-.72v-1.392a.202.202 0 1 0-.404 0v1.373a.336.336 0 0 1-.336.336h-.048a.202.202 0 1 0 0 .404Zm-1.422 2.66H5.3a.94.94 0 0 1-.94-.932v-.835a.202.202 0 0 0-.404-.001v.837A1.344 1.344 0 0 0 5.3 16.128h.912a.192.192 0 0 0 .201-.182v-.02a.202.202 0 0 0-.202-.191Zm12.347-6.508h-1.68v2.134h-2.134v1.68h2.135v2.135h1.679V13.04h2.134v-1.68h-2.134Zm-7.595-1.422h-.911a.202.202 0 1 0 0 .404h.911a.94.94 0 0 1 .941.931v.97a.202.202 0 0 0 .404 0v-.97a1.344 1.344 0 0 0-1.345-1.335Zm-1.524 5.84a.201.201 0 0 0-.036.035H9.38a1.718 1.718 0 0 1-1.21.508h-.074a1.7 1.7 0 0 1-1.21-.508.202.202 0 0 0-.278.278 2.093 2.093 0 0 0 1.5.634h.075a2.083 2.083 0 0 0 1.5-.624.202.202 0 0 0-.243-.322Zm2.67.112h-.01a.202.202 0 0 0-.201.202v.835a.94.94 0 0 1-.932.941h-.912a.202.202 0 1 0-.001.403h.913a1.344 1.344 0 0 0 1.335-1.334v-.835a.202.202 0 0 0-.192-.212Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMaskedIconsFonts179);
export default ForwardRef;
