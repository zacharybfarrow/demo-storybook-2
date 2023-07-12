import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont359 = (
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
    <path d="M12 6.063a2.03 2.03 0 1 0-2.03-2.031A2.03 2.03 0 0 0 12 6.062Zm0-3.437a1.406 1.406 0 1 1-1.406 1.406A1.406 1.406 0 0 1 12 2.626Zm7.687 2.656h.005a.433.433 0 0 1 .432.426v2.855a2.038 2.038 0 0 1 .626.413V5.709a1.058 1.058 0 0 0-1.058-1.052h-.002a2.06 2.06 0 0 1-.802.62l-.014.006Zm-1.75 5.156a1.406 1.406 0 1 0 1.407-1.406 1.406 1.406 0 0 0-1.406 1.406Zm2.187 0a.781.781 0 1 1-.781-.782.781.781 0 0 1 .781.782Zm-2.03-5.625a1.406 1.406 0 1 0-1.407-1.406 1.406 1.406 0 0 0 1.407 1.406Zm0-2.187a.781.781 0 1 1-.782.781.781.781 0 0 1 .782-.781ZM14.55 5.75h-.528a2.679 2.679 0 0 1-.767.618l-.014.007h1.303a.897.897 0 0 1 .894.896v6.623a.293.293 0 0 1-.287.293h-.806v-1.875a.313.313 0 0 0-.626 0v8.78a.283.283 0 0 1-.265.281h-1.142V17a.313.313 0 0 0-.625 0v4.374h-1.14a.283.283 0 0 1-.267-.282v-8.78a.313.313 0 0 0-.625 0V14.5h-.807a.292.292 0 0 1-.287-.292V7.272a.897.897 0 0 1 .887-.897h1.3a2.693 2.693 0 0 1-.778-.621l-.003-.004h-.519a1.522 1.522 0 0 0-1.512 1.522v6.936a.917.917 0 0 0 .912.916h.806v5.967a.908.908 0 0 0 .89.908h2.906a.908.908 0 0 0 .89-.908v-6.279h.807a.918.918 0 0 0 .913-.917V7.272a1.522 1.522 0 0 0-1.512-1.521h.002Zm1.947-1.094a1.063 1.063 0 0 0-.993.689l-.002.007a2.162 2.162 0 0 1 .56.405v-.051a.433.433 0 0 1 .434-.426h.817a2.057 2.057 0 0 1-.812-.62l-.003-.004ZM7.938 5.758a2.147 2.147 0 0 1 .549-.4l.012-.006a1.064 1.064 0 0 0-.995-.695 2.06 2.06 0 0 1-.803.62l-.013.005h.817a.433.433 0 0 1 .432.426Zm13.002 5.93a2.06 2.06 0 0 1-.802.62l-.014.005h.819a.433.433 0 0 1 .432.426v4.016a.06.06 0 0 1-.059.056h-.41V15.75a.313.313 0 1 0-.626 0v5.552c0 .044-.027.072-.044.072h-.581v-2.343a.313.313 0 0 0-.625 0v2.343h-.582c-.017 0-.043-.028-.043-.072V15.75a.313.313 0 1 0-.626 0V17h-.41a.06.06 0 0 1-.058-.056v-4.205a.433.433 0 0 1 .432-.427h.818a2.057 2.057 0 0 1-.814-.621l-.003-.004a1.057 1.057 0 0 0-1.057 1.05v4.206a.686.686 0 0 0 .686.68h.408v3.691a.684.684 0 0 0 .668.684h1.788a.685.685 0 0 0 .669-.684v-3.88h.408a.686.686 0 0 0 .686-.68v-4.016a1.058 1.058 0 0 0-1.057-1.051h-.002Zm-16.283.156a1.406 1.406 0 1 0-1.406-1.406 1.406 1.406 0 0 0 1.406 1.406Zm0-2.188a.781.781 0 1 1-.781.782.781.781 0 0 1 .781-.782Zm1.597 2.031a2.06 2.06 0 0 1-.803.62l-.013.006h.816a.433.433 0 0 1 .433.426v4.016a.06.06 0 0 1-.06.056h-.409V15.75a.313.313 0 0 0-.625 0v5.552c0 .044-.026.072-.044.072h-.58v-2.343a.313.313 0 0 0-.626 0v2.343h-.581c-.018 0-.044-.028-.044-.072V15.75a.313.313 0 0 0-.625 0V17h-.41a.06.06 0 0 1-.059-.056v-4.205a.433.433 0 0 1 .433-.427h.817a2.056 2.056 0 0 1-.814-.621l-.003-.004A1.057 1.057 0 0 0 2 12.737v4.206a.686.686 0 0 0 .686.68h.408v3.691a.684.684 0 0 0 .668.684H5.55a.685.685 0 0 0 .67-.684v-3.88h.407a.686.686 0 0 0 .686-.682V12.74a1.058 1.058 0 0 0-1.057-1.052h-.002ZM3.876 5.708a.433.433 0 0 1 .433-.427h.817a2.062 2.062 0 0 1-.813-.62l-.003-.004a1.057 1.057 0 0 0-1.058 1.051v3.268a2.03 2.03 0 0 1 .612-.408l.014-.005Zm2.031-.895a1.406 1.406 0 1 0-1.406-1.406 1.406 1.406 0 0 0 1.406 1.406Zm0-2.187a.781.781 0 1 1-.781.781.781.781 0 0 1 .781-.781Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont359);
export default ForwardRef;
