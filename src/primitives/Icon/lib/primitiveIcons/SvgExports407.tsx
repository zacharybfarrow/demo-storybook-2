import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgSvgExports407 = (
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
    <path d="M18.89 12.55H23v-1.1h-4.11c0 .181.026.363.026.548s-.013.37-.026.553ZM22.769 9.684l-.275-1.062-3.968 1.062c.124.346.219.702.284 1.064l3.959-1.064ZM21.8 6.975l-.55-.952-3.554 2.054c.206.304.389.623.546.955L21.8 6.975ZM17.263 7.514l2.916-2.903-.79-.777-2.907 2.903c.28.238.542.498.78.777ZM17.977 2.75l-.952-.553-2.057 3.561c.332.152.652.33.955.533l2.054-3.542ZM15.378 1.516l-1.062-.285L13.252 5.2c.36.067.715.164 1.061.287l1.065-3.971ZM12.55 5.11V1h-1.1v4.11c.181 0 .363-.03.548-.03s.37.014.553.03ZM9.684 1.231l-1.062.285 1.065 3.968c.346-.124.7-.22 1.061-.288L9.684 1.231ZM6.975 2.197l-.952.552 2.054 3.542c.303-.208.622-.39.955-.546L6.975 2.197ZM7.514 6.737 4.611 3.834l-.777.777 2.903 2.903c.24-.278.499-.538.777-.777ZM2.75 6.023l-.553.952 3.561 2.057c.152-.332.33-.652.533-.955L2.749 6.023ZM1.516 8.622 1.23 9.684 5.2 10.748a7.11 7.11 0 0 1 .287-1.064L1.516 8.622ZM1.231 14.316l.285 1.062 3.968-1.065c-.124-.346-.22-.7-.288-1.061l-3.965 1.064ZM2.197 17.025l.552.952 3.542-2.054a6.799 6.799 0 0 1-.546-.955l-3.548 2.057ZM6.737 16.482 3.834 19.39l.777.79 2.903-2.903a6.944 6.944 0 0 1-.777-.794ZM6.023 21.25l.952.55 2.057-3.558a7.143 7.143 0 0 1-.955-.546L6.023 21.25ZM8.622 22.494l1.062.284 1.064-3.968a6.594 6.594 0 0 1-1.061-.284l-1.065 3.968ZM11.45 18.89V23h1.1v-4.11c-.181 0-.363.026-.552.026s-.367-.013-.549-.026ZM14.316 22.765l1.062-.27-1.065-3.97c-.345.125-.7.22-1.061.285l1.064 3.955ZM17.025 21.8l.952-.55-2.054-3.554a7.143 7.143 0 0 1-.955.546l2.057 3.558ZM16.482 17.263l2.907 2.916.79-.79-2.903-2.907a6.69 6.69 0 0 1-.794.78ZM21.25 17.977l.55-.952-3.558-2.057c-.157.332-.34.651-.546.955l3.555 2.054ZM22.494 15.378l.288-1.062-3.968-1.064a6.594 6.594 0 0 1-.288 1.061l3.968 1.065ZM17.061 11.45h-2.239c.04.183.063.37.066.558 0 .182-.018.364-.052.543h2.235l-.01-1.102ZM14.717 11.066l1.94-1.121-.548-.953-1.948 1.125c.244.278.432.6.556.949ZM12.93 9.29c.356.117.684.304.966.549l1.125-1.948-.953-.552-1.137 1.951ZM11.998 9.131c.186 0 .37.02.553.057V6.952h-1.102v2.252c.18-.042.364-.067.55-.073ZM10.117 9.839c.278-.244.602-.43.952-.549L9.945 7.34l-.953.551 1.125 1.948ZM9.283 11.066c.122-.35.311-.672.556-.95L7.891 8.993l-.552.953 1.944 1.12ZM9.121 12.008c0-.187.02-.375.057-.559H6.952v1.102h2.236a2.927 2.927 0 0 1-.067-.543ZM9.826 13.896a2.92 2.92 0 0 1-.56-.962L7.33 14.055l.552.953 1.945-1.112ZM10.11 14.174 8.992 16.11l.953.549 1.114-1.932a2.874 2.874 0 0 1-.949-.552ZM11.998 14.888c-.184.001-.368-.017-.549-.052v2.228h1.102v-2.232a2.768 2.768 0 0 1-.553.056ZM12.937 14.726l1.118 1.932.953-.55-1.112-1.934c-.28.245-.606.433-.959.552ZM14.174 13.896l1.935 1.118.549-.952-1.938-1.121c-.12.35-.304.675-.546.955ZM5.08 11.998c0-.185 0-.367.03-.549H1v1.102h4.11c0-.182-.03-.364-.03-.553Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSvgExports407);
export default ForwardRef;