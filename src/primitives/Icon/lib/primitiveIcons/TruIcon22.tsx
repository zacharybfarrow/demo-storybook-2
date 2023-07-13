import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon22 = (
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
    <path d="M17.014 16.867c.272.272.63.408.987.408s.715-.136.987-.408a1.397 1.397 0 0 0 0-1.974 1.398 1.398 0 0 0-1.974 0 1.397 1.397 0 0 0 0 1.974Zm.644-1.33a.483.483 0 0 1 .686 0 .481.481 0 0 1 0 .685.485.485 0 0 1-.686-.685Zm-12.01-5.138h-.911v2.888h.91V10.4Zm14.985-6.005H3.367C2.613 4.394 2 5.007 2 5.76v12.48c0 .753.613 1.366 1.367 1.366h16.355v-.91H3.367a.456.456 0 0 1-.456-.456V8.938H21.09v10.589c.53-.189.911-.694.911-1.287V5.76c0-.753-.613-1.366-1.367-1.366Zm.456 3.633H2.91V5.76c0-.251.204-.455.456-.455h17.266c.252 0 .456.204.456.455v2.267ZM5.644 7.126h.91v-.91h-.91v.91Zm-1.82 0h.91v-.91h-.91v.91Zm15.456 0h.91v-.91h-.91v.91Zm-4.2 3.73a1.397 1.397 0 0 0-1.973 0 1.398 1.398 0 0 0 .987 2.382c.357 0 .715-.136.987-.408a1.397 1.397 0 0 0 0-1.974Zm-.644 1.33a.485.485 0 1 1-.685-.687.485.485 0 0 1 .685.687Zm-9.424 4.68c.272.273.63.409.987.409a1.392 1.392 0 0 0 1.396-1.395c0-.373-.145-.724-.41-.987-.263-.264-.613-.41-.986-.41s-.723.146-.987.41a1.397 1.397 0 0 0 0 1.974Zm.644-1.33a.481.481 0 0 1 .686 0 .482.482 0 0 1 0 .686.485.485 0 0 1-.686-.685Zm2.888 1.788h.911v-2.888h-.911v2.888Zm3.038-6.925h-.911v2.888h.911V10.4Zm-.569 6.468c.272.272.63.408.987.408s.715-.136.987-.408A1.397 1.397 0 0 0 12 14.484c-.373 0-.723.145-.987.409a1.387 1.387 0 0 0-.409.987c0 .373.145.723.409.987Zm.644-1.33a.482.482 0 0 1 .686 0 .481.481 0 0 1 0 .685.481.481 0 0 1-.686 0 .482.482 0 0 1 0-.685Zm2.888 1.787h.911v-2.888h-.911v2.888Zm3.456-4.086c.357 0 .715-.136.987-.408a1.397 1.397 0 0 0 0-1.974 1.398 1.398 0 0 0-1.974 0 1.397 1.397 0 0 0 .987 2.382Zm-.343-1.738a.483.483 0 0 1 .686 0 .485.485 0 1 1-.686 0Zm-8.512-.644a1.397 1.397 0 0 0-1.974 0 1.398 1.398 0 0 0 .987 2.382c.358 0 .715-.136.987-.408a1.397 1.397 0 0 0 0-1.974Zm-.644 1.33a.485.485 0 1 1-.685-.687.485.485 0 0 1 .685.687Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon22);
export default ForwardRef;
