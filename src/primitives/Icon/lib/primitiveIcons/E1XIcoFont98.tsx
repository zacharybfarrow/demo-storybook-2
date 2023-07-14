import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont98 = (
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
    viewBox="0 0 48 16"
    role="img"
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
    <path d="M31.33 7a1.13 1.13 0 0 0-.33-.44 1.14 1.14 0 0 0-1.2 0 1.07 1.07 0 0 0-.36.43 1.11 1.11 0 0 0-.1.29v.32h2.18a2.53 2.53 0 0 0 0-.32.67.67 0 0 0-.19-.28ZM0 0v16h48V0Zm9.75 9.7a2.07 2.07 0 0 1-.61.74 2.76 2.76 0 0 1-.92.47 4.26 4.26 0 0 1-1.15.16 5.17 5.17 0 0 1-1.59-.23A3.06 3.06 0 0 1 4.21 10l1-1a2 2 0 0 0 .86.52 3.75 3.75 0 0 0 1 .14 1.75 1.75 0 0 0 1-.25.84.84 0 0 0 .36-.73.79.79 0 0 0-.43-.77 1.93 1.93 0 0 0-.44-.1l-.96-.14a3.35 3.35 0 0 1-.9-.24A2.09 2.09 0 0 1 5.08 7a2 2 0 0 1-.56-1.54 2.49 2.49 0 0 1 .18-1 2.25 2.25 0 0 1 .54-.75 2.58 2.58 0 0 1 .86-.49 3.41 3.41 0 0 1 1.14-.12 4.29 4.29 0 0 1 1.42.21A3 3 0 0 1 9.78 4l-1 1A1.65 1.65 0 0 0 8 4.53a3.46 3.46 0 0 0-.82-.1 1.27 1.27 0 0 0-.91.29 1 1 0 0 0-.24 1 .62.62 0 0 0 .19.28 1 1 0 0 0 .29.19 1.58 1.58 0 0 0 .43.11l.93.14a4.61 4.61 0 0 1 .89.22 1.85 1.85 0 0 1 .61.4 1.75 1.75 0 0 1 .46.7 2.83 2.83 0 0 1 .14.95 2.18 2.18 0 0 1-.22.99ZM16 11h-1.4v-.53a1.85 1.85 0 0 1-.66.45 2 2 0 0 1-.77.15 2.11 2.11 0 0 1-.77-.14 1.6 1.6 0 0 1-.58-.37 1.85 1.85 0 0 1-.47-.75 3.48 3.48 0 0 1-.11-.88V5.27h1.43v3.46a1.22 1.22 0 0 0 .08.5 1 1 0 0 0 .22.32.73.73 0 0 0 .31.17 1 1 0 0 0 .33.06 1 1 0 0 0 .39-.06.79.79 0 0 0 .31-.17 1 1 0 0 0 .22-.32 1.21 1.21 0 0 0 .09-.5V5.27H16Zm3.07-1.59a1 1 0 0 0 .81.37 1.12 1.12 0 0 0 .5-.11 1.56 1.56 0 0 0 .43-.34l1 .95a2.51 2.51 0 0 1-.85.59 2.62 2.62 0 0 1-1.05.2 3.1 3.1 0 0 1-.88-.14 2 2 0 0 1-.83-.46 2.69 2.69 0 0 1-.61-.91 3.64 3.64 0 0 1-.24-1.43 3.73 3.73 0 0 1 .24-1.44 2.59 2.59 0 0 1 .61-.89 2.15 2.15 0 0 1 .8-.47 3.47 3.47 0 0 1 .88-.13 2.81 2.81 0 0 1 1.05.19 2.48 2.48 0 0 1 .85.58l-1 1a1.61 1.61 0 0 0-.43-.35 1.12 1.12 0 0 0-.5-.1 1 1 0 0 0-.81.37 1.34 1.34 0 0 0-.24.51 3.16 3.16 0 0 0-.08.76 2.07 2.07 0 0 0 .35 1.25Zm5.28 0a1 1 0 0 0 .81.37 1.12 1.12 0 0 0 .5-.11 1.56 1.56 0 0 0 .43-.34l1 .95a2.51 2.51 0 0 1-.85.59 2.62 2.62 0 0 1-1.05.2 3.1 3.1 0 0 1-.88-.14 2 2 0 0 1-.83-.46 2.69 2.69 0 0 1-.61-.91 3.64 3.64 0 0 1-.24-1.43 3.73 3.73 0 0 1 .24-1.44 2.59 2.59 0 0 1 .61-.89 2.15 2.15 0 0 1 .83-.47 3.47 3.47 0 0 1 .88-.13 2.81 2.81 0 0 1 1.05.19 2.48 2.48 0 0 1 .85.58l-1 1a1.61 1.61 0 0 0-.43-.35 1.12 1.12 0 0 0-.5-.1 1 1 0 0 0-.81.37 1.34 1.34 0 0 0-.24.51 3.16 3.16 0 0 0-.08.76 2.07 2.07 0 0 0 .32 1.25Zm8.52-.83h-3.58a1.36 1.36 0 0 0 .32.92 1.17 1.17 0 0 0 .93.36 1.7 1.7 0 0 0 .75-.14 2.39 2.39 0 0 0 .55-.4l.87.84a3.85 3.85 0 0 1-.44.39 2.28 2.28 0 0 1-1.05.46 3.69 3.69 0 0 1-1.67-.08 2 2 0 0 1-.85-.46 2.39 2.39 0 0 1-.59-.91 3.85 3.85 0 0 1-.23-1.43 4 4 0 0 1 .18-1.25 2.64 2.64 0 0 1 .51-.88 2.08 2.08 0 0 1 .79-.56 2.54 2.54 0 0 1 1-.2 2.57 2.57 0 0 1 1.06.21 2.14 2.14 0 0 1 .79.57 2.49 2.49 0 0 1 .48.88 3.59 3.59 0 0 1 .18 1.1ZM38.32 10a1.62 1.62 0 0 1-.52.58 2.36 2.36 0 0 1-.8.42 3.69 3.69 0 0 1-1 .12h-.66a3.23 3.23 0 0 1-1.22-.36 3.12 3.12 0 0 1-.57-.44l.94-.93a1.9 1.9 0 0 0 .37.28 2.23 2.23 0 0 0 .4.16 2 2 0 0 0 .4.08h.36a2.31 2.31 0 0 0 .37 0 1.5 1.5 0 0 0 .32-.1.71.71 0 0 0 .29-.28.45.45 0 0 0 .09-.28.5.5 0 0 0-.09-.36.72.72 0 0 0-.48-.17l-.92-.09a2.1 2.1 0 0 1-1.2-.44A1.42 1.42 0 0 1 33.93 7a1.65 1.65 0 0 1 .18-.79 1.71 1.71 0 0 1 .49-.58 2.17 2.17 0 0 1 .7-.34 2.94 2.94 0 0 1 .84-.12 4.66 4.66 0 0 1 1.23.15 2.26 2.26 0 0 1 1 .52l-.88.89a1.54 1.54 0 0 0-.6-.3 3.4 3.4 0 0 0-.73-.08.94.94 0 0 0-.62.16.51.51 0 0 0-.19.39.42.42 0 0 0 .13.34.83.83 0 0 0 .46.15l.9.09a2 2 0 0 1 1.24.52 1.6 1.6 0 0 1 .43 1.17 1.77 1.77 0 0 1-.19.83Zm5.51 0a1.53 1.53 0 0 1-.52.58 2.36 2.36 0 0 1-.77.35 3.69 3.69 0 0 1-.95.12h-.66a3.23 3.23 0 0 1-1.22-.36 3.12 3.12 0 0 1-.57-.44l.94-.93a1.9 1.9 0 0 0 .37.28 2.31 2.31 0 0 0 .41.16 1.8 1.8 0 0 0 .39.08h.36a2.31 2.31 0 0 0 .37 0 1.34 1.34 0 0 0 .32-.1.71.71 0 0 0 .23-.18.45.45 0 0 0 .09-.28.5.5 0 0 0-.13-.36.71.71 0 0 0-.49-.2l-.93-.09a2.13 2.13 0 0 1-1.2-.44A1.42 1.42 0 0 1 39.44 7a1.65 1.65 0 0 1 .18-.79 1.71 1.71 0 0 1 .49-.58 2.17 2.17 0 0 1 .7-.34 2.94 2.94 0 0 1 .84-.12 4.6 4.6 0 0 1 1.23.15 2.26 2.26 0 0 1 1 .52l-.88.92a1.54 1.54 0 0 0-.6-.3 3.4 3.4 0 0 0-.73-.08.94.94 0 0 0-.62.16.51.51 0 0 0-.19.39.42.42 0 0 0 .13.34.86.86 0 0 0 .46.15l.9.09a2 2 0 0 1 1.24.49A1.56 1.56 0 0 1 44 9.2a1.77 1.77 0 0 1-.17.8Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont98);
export default ForwardRef;
