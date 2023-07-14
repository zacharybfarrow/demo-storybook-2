import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont384 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.833 19.162a1.698 1.698 0 0 0-1.256-.559h-.047l-.205-.486h1.926v-.966H7.131v-.967l1.95-1.499h12.17V8.83L7.618 5.965 7.13 3.95l-1.967-.656v-.076a1.218 1.218 0 1 0-1.219 1.218c.271.014.538-.067.756-.228l1.464.732 1.933 9.224-1.95 1.47v2.454l.89 1.107a1.67 1.67 0 0 0-.387 1.095 1.698 1.698 0 1 0 1.294-1.658l-.327-.527h10.23l.587.937a1.698 1.698 0 1 0 2.398.12ZM9.082 13.719v-.012l-.615-2.875 2.875.234.586 2.653H9.082Zm3.402-.012-.585-2.606 2.822.217.223 2.39h-2.46Zm5.359 0h-2.43l-.223-2.342 2.653.205v2.137Zm.492-4.761 1.95.375-.006 1.95-1.944-.158V8.946Zm0 2.67 1.944.152v1.94h-1.944v-2.092ZM7.618 6.884l10.23 1.968v2.214l-2.699-.217-.234-2.542-.48-.093.245 2.623-2.88-.234-.674-3.01-.586-.111.685 3.074-2.887-.234-.72-3.438Zm.72 12.674h.012a.732.732 0 1 1-.012 0Zm11.203 1.464a.732.732 0 0 1-.006-1.464h.018a.732.732 0 0 1-.012 1.464Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont384);
export default ForwardRef;
