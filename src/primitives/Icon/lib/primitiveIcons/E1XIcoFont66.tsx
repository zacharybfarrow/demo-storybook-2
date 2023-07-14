import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont66 = (
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
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
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
    <defs>
      <clipPath id="clip-path">
        <path d="M0 0h24v24H0z" fill="none" />
      </clipPath>
      <style>{".cls-2{clip-path:url(#clip-path)}"}</style>
    </defs>
    <g id="ico_permission_0" className="cls-2">
      <path
        d="M12.67 20.67H2.81a.54.54 0 0 1-.07-.1.48.48 0 0 1-.07-.23V7.67A.33.33 0 0 1 3 7.33h17.33a.33.33 0 0 1 .33.33V13a.33.33 0 1 0 .67 0V7.67a1 1 0 0 0-1-1V5a1 1 0 0 0-1-1h-7.11a.34.34 0 0 1-.2-.07L9.71 2.2a1 1 0 0 0-.6-.2H4a1 1 0 0 0-1 1v3.67a1 1 0 0 0-1 1v12.66a1.16 1.16 0 0 0 .22.66 1.1 1.1 0 0 0 .18.2l.11.08a.4.4 0 0 0 .2.06h10a.33.33 0 0 0 0-.67M18 6.67H5.33v-.34A.33.33 0 0 1 5.67 6h12a.33.33 0 0 1 .33.33ZM3.67 3A.33.33 0 0 1 4 2.67h5.11a.33.33 0 0 1 .2.07l2.31 1.73a1 1 0 0 0 .6.2h7.11a.33.33 0 0 1 .33.33v1.67h-1v-.34a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v.33h-1Zm2.66 1a.33.33 0 0 0 0-.67H4.67a.33.33 0 0 0 0 .67Zm2 0H9a.33.33 0 1 0 0-.67h-.67a.33.33 0 1 0 0 .67m-1 0A.33.33 0 1 0 7 3.67a.33.33 0 0 0 .33.33m3.33 10.67a.33.33 0 0 0 .33-.33v-.4a3.67 3.67 0 0 0-1.38-2.86 1.67 1.67 0 1 0-1.86 0 3.67 3.67 0 0 0-1.38 2.86v.4a.33.33 0 1 0 .67 0v-.4a3 3 0 0 1 1.13-2.34l.35-.28h.38l.35.28a3 3 0 0 1 1.13 2.34v.4a.33.33 0 0 0 .33.33m-2-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1M6.33 10a1.33 1.33 0 1 0-2.12 1.07v.07a3 3 0 0 0-.5 1.66v.53a.33.33 0 0 0 .67 0v-.53a2.34 2.34 0 0 1 .39-1.29l.13-.19H5.19l.13.19a2.34 2.34 0 0 1 .28.59.33.33 0 0 0 .64-.2 3 3 0 0 0-.36-.76v-.07A1.33 1.33 0 0 0 6.33 10M5 10.67a.67.67 0 1 1 .67-.67.67.67 0 0 1-.67.67m.83.48ZM13.67 10a1.33 1.33 0 1 0-2.12 1.07v.07a3 3 0 0 0-.36.76.33.33 0 0 0 .64.2 2.34 2.34 0 0 1 .28-.59l.13-.19h.3l.13.2a2.3 2.3 0 0 1 .28.59.33.33 0 0 0 .64-.2 3 3 0 0 0-.36-.76l-.05-.08a1.33 1.33 0 0 0 .49-1.07m-1.33.67A.67.67 0 1 1 13 10a.67.67 0 0 1-.67.67m-.83.48ZM19.75 15l-.75-.74a.82.82 0 0 0-1.16 0l-3 3a.34.34 0 0 0-.09.16l-.47 1.89a.33.33 0 0 0 .41.4l1.88-.47a.34.34 0 0 0 .16-.09L18.91 17l.84-.84a.82.82 0 0 0 0-1.16Zm-3.36 3.58-1.26.32.31-1.26 1.82-1.82.94.94Zm2.89-2.89-.6.6-.94-.94.6-.6a.15.15 0 0 1 .22 0l.73.73a.14.14 0 0 1 0 .11.14.14 0 0 1 0 .11M17 12a5 5 0 1 0 5 5 5 5 0 0 0-5-5m3.06 8.06A4.33 4.33 0 1 1 21.33 17a4.32 4.32 0 0 1-1.27 3.06"
        className="cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont66);
export default ForwardRef;
