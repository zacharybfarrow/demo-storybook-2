import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont371 = (
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
    <path d="M18.784 3.819a.908.908 0 1 0-.909-.909.908.908 0 0 0 .909.909Zm0 5.638a.908.908 0 1 0-.909-.908.908.908 0 0 0 .909.908Zm-2.22-.603a2.236 2.236 0 1 0 0-.7H15.35V3.35h1.212a2.236 2.236 0 1 0 0-.7h-1.912v9h-3.247V8.985c-.057-2.764-8.825-2.764-8.882 0v6.028c0 1.416 2.302 2.061 4.441 2.061s4.441-.645 4.441-2.061V12.35h3.247v9h1.912a2.236 2.236 0 1 0 0-.7h-1.212v-4.804h1.212a2.236 2.236 0 1 0 0-.7h-1.212V8.854Zm2.2-2.061a1.711 1.711 0 1 1-1.711 1.711 1.713 1.713 0 0 1 1.711-1.711Zm0-5.504A1.711 1.711 0 1 1 17.053 3a1.713 1.713 0 0 1 1.711-1.711ZM10.77 15.013c-.055 1.87-7.561 1.869-7.613 0v-1.185c1.318 1.364 6.295 1.364 7.613 0Zm0-1.904h-.002c-.018 1.871-7.592 1.87-7.61 0h-.001v-1.185c1.318 1.365 6.295 1.365 7.613 0Zm0-1.903h-.002c-.018 1.871-7.592 1.87-7.61 0h-.001v-1.09c1.695 1.247 5.918 1.247 7.613 0Zm-7.613-2.22c.053-1.871 7.562-1.87 7.613 0-.054 1.87-7.562 1.869-7.613 0Zm15.607 10.303A1.711 1.711 0 1 1 17.053 21a1.713 1.713 0 0 1 1.711-1.711Zm0-5.505a1.711 1.711 0 1 1-1.711 1.712 1.713 1.713 0 0 1 1.711-1.712Zm-8.946-2.102a.317.317 0 0 0 0-.635.317.317 0 0 0 0 .635Zm0 3.806a.317.317 0 0 0 0-.634.317.317 0 0 0 0 .634Zm0-1.903a.317.317 0 0 0 0-.634.317.317 0 0 0 0 .634Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont371);
export default ForwardRef;
