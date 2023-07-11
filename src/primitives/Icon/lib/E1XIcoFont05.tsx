import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import "../Icon.css";
export interface SVGRProps {
  /**
   * Specifies the title of the icon. This property is used to provide a textual label or name for the icon.
   * It is applied to the <title> element inside the SVG, which serves as an accessible name for the icon when using assistive technologies like screen readers.
   */
  title?: string;
  /**
   * Specifies the ID of the element that contains the title. This property is used to associate the title with a specific element, providing further context or structure.
   * It is applied to the aria-labelledby attribute of the SVG element, referencing the element with the specified ID to provide the accessible name for the icon.
   */
  titleId?: string;
  /**
   * Specifies the description of the icon. This property is used to provide a textual description or additional information about the icon's purpose or functionality.
   * It is applied to the <desc> element inside the SVG, which provides a detailed description of the icon for accessibility purposes.
   */
  desc?: string;
  /**
   * Specifies the ID of the element that contains the description. This property is used to associate the description with a specific element, providing further context or structure.
   * It is applied to the aria-describedby attribute of the SVG element, referencing the element with the specified ID to provide additional information about the icon.
   */
  descId?: string;
  /**
   * Specifies whether or not a tooltip should be applied to the icon on mouseover. Defaults to false.
   */
  tooltip?: boolean;
  /**
   * Specifies the text to be displayed in the tooltip. If no text is provided, the tooltip will display the title and the desc.
   */
  tooltipText?: string;
}
const SvgE1XIcoFont05 = (
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
    id="E1X_ico_font-05_svg__Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill={props.color}
    data-tooltip={props.tooltipText ? props.tooltipText : desc}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <clipPath id="E1X_ico_font-05_svg__clip-path">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
      </clipPath>
      <style>
        {
          ".E1X_ico_font-05_svg__cls-2{clip-path:url(#E1X_ico_font-05_svg__clip-path)}"
        }
      </style>
    </defs>
    <g
      id="E1X_ico_font-05_svg__ico_settings_1"
      className="E1X_ico_font-05_svg__cls-2"
    >
      <path
        d="M14.162 19.957v.002ZM2.972 10.85l.002-.01v-.003Zm6.866 9.11v-.002Zm3.325 1.083h-.002Zm7.862-7.878ZM4.857 7.904l-.002-.001Zm5.982 13.138h-.002ZM13.16 2.958h.003ZM12 9.216A2.783 2.783 0 1 0 14.78 12 2.782 2.782 0 0 0 12 9.216Zm0 4.316A1.533 1.533 0 1 1 13.53 12 1.533 1.533 0 0 1 12 13.532Zm-.973 5.29Zm9.998-7.986a1.177 1.177 0 0 0-1.083-1h.001l-1.05-.059-.034-.024-.005-.005-.002-.006-.411-.997-.004-.007V8.73l.006-.04.702-.788-.003.004a1.15 1.15 0 0 0 .03-1.484l-.019-.022-1.563-1.565-.02-.018a1.147 1.147 0 0 0-1.485.028l.001-.002-.783.703-.007.003-.03.003h-.005l-.008-.004-.999-.412-.004-.001-.026-.032-.004-.008-.058-1.053a1.176 1.176 0 0 0-1.001-1.084A9.85 9.85 0 0 0 12 2.876a9.847 9.847 0 0 0-1.161.082 1.177 1.177 0 0 0-1.001 1.084L9.78 5.094l-.003.005-.026.034-.001.001-.006.002-.997.412-.008.004h-.006l-.037-.005-.784-.704.001.002a1.148 1.148 0 0 0-1.484-.028l-.02.018-1.565 1.566-.019.023a1.151 1.151 0 0 0 .03 1.48l.7.784.003.01.004.031v.009l-.004.007-.41.996-.002.004-.032.028-.008.004-1.05.058h.002a1.178 1.178 0 0 0-1.084 1v.003A9.9 9.9 0 0 0 2.892 12a9.898 9.898 0 0 0 .081 1.164v.001a1.18 1.18 0 0 0 1.081 1h.001l1.05.058.035.024.006.007.002.005.41.996.004.007v.008l-.006.04v.001l-.702.784a1.153 1.153 0 0 0-.029 1.48l.02.023 1.564 1.568.022.018a1.147 1.147 0 0 0 1.484-.03l-.003.003.785-.704.007-.002.03-.004h.006l.008.005.994.41.005.002.028.034.004.007.058 1.052a1.177 1.177 0 0 0 1 1.085 9.862 9.862 0 0 0 1.162.082 9.865 9.865 0 0 0 1.16-.082 1.177 1.177 0 0 0 1.002-1.085l.058-1.051.025-.036.006-.005.005-.002.995-.411.008-.004h.006l.037.005.785.704-.003-.003a1.146 1.146 0 0 0 1.485.029l.021-.018 1.563-1.565.019-.022a1.15 1.15 0 0 0-.028-1.484l-.7-.784-.004-.008-.004-.032.001-.007.003-.007.412-.998.002-.005.032-.027.006-.003 1.051-.058h.002a1.179 1.179 0 0 0 1.08-1.001A9.911 9.911 0 0 0 21.107 12a9.946 9.946 0 0 0-.082-1.164Zm-1.203 1.841a9.914 9.914 0 0 1-.025.235l-.001.009-.988.054h.002a1.268 1.268 0 0 0-.697.267 1.287 1.287 0 0 0-.42.562l-.005-.002-.394.955.004.002a1.253 1.253 0 0 0-.112.51 1.295 1.295 0 0 0 .318.866l-.002-.002.637.713-1.302 1.304-.71-.636.002.003a1.29 1.29 0 0 0-.865-.32 1.248 1.248 0 0 0-.511.113l-.002-.004-.953.394.002.005a1.304 1.304 0 0 0-.827 1.117l-.055.99-.008.002a8.527 8.527 0 0 1-.91.06 7.63 7.63 0 0 1-.91-.06l-.008-.001-.055-.99a1.304 1.304 0 0 0-.827-1.118l.002-.005-.953-.394-.002.004a1.25 1.25 0 0 0-.512-.112 1.288 1.288 0 0 0-.865.32l.004-.004-.711.637-1.303-1.305.639-.713a1.297 1.297 0 0 0 .314-.863 1.253 1.253 0 0 0-.111-.51l.004-.002-.393-.955-.005.002a1.29 1.29 0 0 0-.42-.563 1.268 1.268 0 0 0-.699-.267h.002l-.987-.054-.001-.01a8.496 8.496 0 0 1-.06-.91 7.666 7.666 0 0 1 .06-.913v-.009l.988-.055a1.272 1.272 0 0 0 .695-.266 1.287 1.287 0 0 0 .422-.563l.005.002.393-.955-.004-.001a1.258 1.258 0 0 0 .111-.512 1.297 1.297 0 0 0-.314-.862l-.638-.714 1.302-1.304.71.638-.002-.002a1.289 1.289 0 0 0 .863.317 1.251 1.251 0 0 0 .513-.112l.002.004.953-.394-.003-.006a1.303 1.303 0 0 0 .829-1.113V5.18l.054-.991.008-.001a8.491 8.491 0 0 1 .91-.06 7.635 7.635 0 0 1 .91.06h.008l.055.992a1.3 1.3 0 0 0 .827 1.115l-.002.006.954.394.002-.004a1.248 1.248 0 0 0 .512.113 1.291 1.291 0 0 0 .862-.317l.709-.636 1.302 1.303-.638.714.002-.002a1.296 1.296 0 0 0-.317.865 1.254 1.254 0 0 0 .112.511l-.004.002.394.955.005-.002a1.3 1.3 0 0 0 1.116.828l.987.055v.01a8.541 8.541 0 0 1 .06.911c.001.23-.016.484-.034.677Zm-8.985-9.719h.002Zm2.136 2.221Zm1.189-1.138v.001Z"
        className="E1X_ico_font-05_svg__cls-2"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont05);
export default ForwardRef;
