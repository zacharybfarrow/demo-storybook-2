import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont391 = (
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
    <path d="M7.425 10.871v-.001.001Zm14.48-2.134-3.979-4a.329.329 0 0 0-.468.002l-1.007 1.037h-5.106c-.37.002-.723.15-.983.411h.001l-.282.282-2.457-1.027-1.085-1.085a.326.326 0 0 0-.464 0l-3.98 3.996a.327.327 0 0 0 0 .463l2.996 3.005c.305.727.674 1.425 1.095 2.091a3.077 3.077 0 0 0-.49 1.651v.026l.002.005-.002.008v.005c0 .708.5 1.297 1.167 1.434a1.463 1.463 0 0 0 1.433 1.178h.02c.07-.001.135-.03.19-.071.032.062.064.125.104.182.262.393.71.651 1.217.651a.324.324 0 0 0 .188-.067 1.46 1.46 0 0 0 1.31.825l.006-.001h.01c.033 0 .062-.012.092-.021.007-.002.014-.002.02-.005.012-.004.024-.003.035-.008.3-.15.613-.302.924-.462l.139.065.14.032h.007a1.46 1.46 0 0 0 1.308-.832.324.324 0 0 0 .203.074 1.471 1.471 0 0 0 1.312-.84.324.324 0 0 0 .205.078h.001a1.47 1.47 0 0 0 1.432-1.172 1.47 1.47 0 0 0 1.172-1.439v-.007a3.113 3.113 0 0 0-.273-1.252c.326-.563.614-1.145.86-1.746l2.987-3.004a.328.328 0 0 0 0-.462ZM7.036 16.403a.805.805 0 0 1-.672-.677l.65-.655 1.136-1.14.002-.003a.464.464 0 0 1 .66-.007l.01.01a.474.474 0 0 1 .005.67l-.385.386-.75.757-.007.006-.649.653Zm1.406.857c-.011.011-.017.027-.027.04l-.229.23a.804.804 0 0 1-.684-.665l.648-.653 1.136-1.14h-.001l.002-.002.002-.001.007-.01.742-.745a.474.474 0 0 1 .674.016c.089.093.132.21.132.33 0 .104-.04.203-.106.288l-.781.786-1.515 1.526Zm1.245 1.031a.805.805 0 0 1-.533-.328.803.803 0 0 1-.125-.35l1.015-1.022 1.135-1.141.004-.004c.022-.022.038-.048.057-.072l.131-.132a.47.47 0 0 1 .668-.003.496.496 0 0 1 0 .69l-.945.946h-.001l-1.406 1.416Zm2.94-.657-.018.019h-.001l-.677.681-.104-.054.078.08-.433.435-.001.001-.269.272a.806.806 0 0 1-.658-.69l.256-.255.001-.002 1.136-1.146.003-.003a.475.475 0 0 1 .77.125.325.325 0 0 0 .018.095c.004.01.012.017.016.026.006.028.017.056.017.085 0 .12-.043.237-.133.33Zm4.363-1.626-4.397-4.418a.328.328 0 1 0-.465.463l4.394 4.415a.81.81 0 0 1-.673.682l-4.391-4.418h-.001l-.009-.006a.327.327 0 0 0-.222-.09v-.001a.327.327 0 0 0-.33.327v.002a.33.33 0 0 0 .025.123.33.33 0 0 0 .064.096c.003.004.003.008.007.01l4.01 4.036a.815.815 0 0 1-.673.682l-.266-.267-.003-.006-.713-.718a1.123 1.123 0 0 0-.276-.433 1.123 1.123 0 0 0-.437-.258 1.152 1.152 0 0 0-.123-1.446l-.005-.005-.004-.004a1.125 1.125 0 0 0-1.02-.305 1.128 1.128 0 0 0-1.115-.943c-.28 0-.564.105-.783.314l-.006.006-.032.032a1.123 1.123 0 0 0-.261-.412l-.012-.011-.002-.003a1.12 1.12 0 0 0-1.588.017l-.605.608c-.075-.108-.153-.215-.225-.324a13.585 13.585 0 0 1-1.187-2.249l-.07-.106L2.79 8.584l3.516-3.53.899.898.105.07 2.272.95-.74.74-.002.002c-.129.131-.23.287-.298.457l-1.115 2.693-.002.005a.592.592 0 0 0 .33.77l.01.005c.206.084.42.124.629.124.44 0 .862-.18 1.173-.49.15-.15.278-.328.365-.535v-.002l.005-.01v-.001l.632-1.541.496-.51 1.59 1.604c.006.007.009.016.015.023.012.014.03.023.044.035l4.367 4.405.581.58a.81.81 0 0 1-.673.682Zm1.42-4.226-.072.11c-.259.646-.568 1.272-.925 1.871-.05.08-.101.155-.151.232l-3.216-3.243c.11.01.22.02.328.02.41 0 .817-.076 1.204-.216a3.56 3.56 0 0 0-.218 1.214v.01c0 .015.007.028.01.043.003.028.005.056.016.082.01.023.026.04.04.06.01.015.017.032.03.045a.33.33 0 0 0 .359.071.33.33 0 0 0 .104-.07h.001c.013-.013.02-.03.03-.045.014-.02.03-.037.04-.06.01-.026.013-.054.017-.081.002-.015.01-.029.01-.045a2.91 2.91 0 0 1 .867-2.056l.003-.003a.325.325 0 0 0-.247-.556l-.014-.002h-.002a.329.329 0 0 0-.122.025.326.326 0 0 0-.095.063l-.013.008a2.865 2.865 0 0 1-3.266.567l-1.83-1.846a.33.33 0 0 0-.469.002l-.778.8-.069.104-.656 1.6a.982.982 0 0 1-.224.322 1.004 1.004 0 0 1-.702.298c-.111 0-.223-.022-.334-.061l1.081-2.62.002-.004.001-.004a.738.738 0 0 1 .16-.243l1.063-1.065c.006-.006.008-.013.014-.02l.002-.001.438-.437V6.65a.739.739 0 0 1 .524-.218H16.59a.327.327 0 0 0 .235-.1l.871-.896 3.514 3.532-2.8 2.814Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont391);
export default ForwardRef;