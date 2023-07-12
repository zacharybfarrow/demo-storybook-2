import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont360 = (
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
    <path d="M11.998 7.161a2.58 2.58 0 1 0 2.581 2.581A2.584 2.584 0 0 0 12 7.162Zm0 4.516a1.936 1.936 0 1 1 1.936-1.936A1.938 1.938 0 0 1 12 11.677Z" />
    <path d="M11.998 8.451a1.29 1.29 0 1 0 1.29 1.29 1.291 1.291 0 0 0-1.29-1.29Zm0 1.936a.645.645 0 1 1 .646-.645.645.645 0 0 1-.646.645Z" />
    <path d="M20.385 8.129a1.617 1.617 0 0 0-1.579 1.28l-.002.01h-.693a6.098 6.098 0 0 0-1.563-3.783l.004.005.6-.6a1.262 1.262 0 0 0 .65.184 1.29 1.29 0 1 0-1.29-1.29 1.27 1.27 0 0 0 .187.657l-.003-.005-.601.6a6.054 6.054 0 0 0-2.852-1.446l-.04-.006a1.257 1.257 0 0 0 .085-.444V3.29a1.29 1.29 0 0 0-2.58 0 1.277 1.277 0 0 0 .087.453l-.003-.009a6.1 6.1 0 0 0-2.897 1.457l.006-.004-.601-.601a1.26 1.26 0 0 0 .182-.651 1.29 1.29 0 1 0-1.29 1.29 1.27 1.27 0 0 0 .657-.186l-.005.003.6.6a6.08 6.08 0 0 0-1.558 3.761v.015h-.694a1.612 1.612 0 1 0-.001.657l.001-.01h.693a6.09 6.09 0 0 0 1.565 3.78l-.005-.005-.6.6a1.263 1.263 0 0 0-.651-.182 1.29 1.29 0 1 0 1.29 1.29 1.27 1.27 0 0 0-.186-.657l.003.005.579-.579.752.82a2.974 2.974 0 0 1 .767 1.69l.002.013a.963.963 0 0 0-.697 1.612l-.001-.001a.964.964 0 0 0 .712 1.613h.03A2.263 2.263 0 0 0 11.677 22h.646a2.26 2.26 0 0 0 2.23-1.923l.002-.013h.03a.964.964 0 0 0 .711-1.614l.001.001a.963.963 0 0 0-.697-1.611 2.978 2.978 0 0 1 .77-1.705l-.003.003.753-.82.579.579a1.26 1.26 0 0 0-.183.65 1.29 1.29 0 1 0 1.29-1.29 1.27 1.27 0 0 0-.657.187l.005-.003-.6-.601a6.08 6.08 0 0 0 1.558-3.76l.001-.015h.693a1.613 1.613 0 1 0 1.58-1.937ZM3.61 10.709a.967.967 0 1 1 .968-.967.969.969 0 0 1-.968.968Zm13.856-1.29h-1.275v-.874l-.589-.208q-.03-.075-.063-.152l.27-.564-.617-.618.906-.907a5.446 5.446 0 0 1 1.368 3.308l.001.015Zm-2.42 1.369a3.067 3.067 0 0 1-.162.387l.008-.018-.069.14.207.431-1.046 1.046-.43-.206-.141.07a2.893 2.893 0 0 1-.348.146l-.022.007-.148.05-.158.45h-1.479l-.158-.45-.148-.05a3.067 3.067 0 0 1-.388-.163l.018.008-.14-.069-.431.206-1.046-1.046.207-.43-.07-.14a2.932 2.932 0 0 1-.146-.348l-.007-.022-.05-.148-.45-.158V9l.45-.157.05-.148a3.067 3.067 0 0 1 .162-.388l-.008.018.069-.14-.207-.43 1.046-1.046.43.205.141-.069a2.932 2.932 0 0 1 .348-.147l.021-.006.148-.051.158-.449h1.48l.158.45.147.05a3.067 3.067 0 0 1 .388.162l-.018-.008.141.07.43-.206 1.046 1.045-.206.43.069.14a2.93 2.93 0 0 1 .147.348l.007.023.05.147.449.159v1.479l-.45.158Zm-3.049 7.34a.645.645 0 1 1 .646-.644.645.645 0 0 1-.646.645ZM17.806 3.29a.645.645 0 1 1-.645.645.645.645 0 0 1 .645-.645Zm-3.07 3.259-.617-.618-.564.27a2.96 2.96 0 0 0-.152-.063l-.208-.589h-.874V4.536a1.29 1.29 0 0 0 .455-.22l-.003.001a5.44 5.44 0 0 1 2.872 1.333l-.005-.004ZM12 2.645a.645.645 0 1 1-.646.645.645.645 0 0 1 .646-.645Zm-.775 1.672a1.265 1.265 0 0 0 .442.216l.01.002v1.013h-.874l-.208.589q-.077.03-.152.063l-.564-.27-.618.618-.903-.904a5.42 5.42 0 0 1 2.838-1.324l.029-.004Zm-5.032.264a.645.645 0 1 1 .645-.645.645.645 0 0 1-.645.645Zm1.706 1.517.907.907-.617.618.27.564a3.265 3.265 0 0 0-.063.152l-.59.208v.873H6.53a5.459 5.459 0 0 1 1.374-3.327l-.005.006ZM6.53 10.064h1.275v.874l.588.207q.03.076.063.153l-.27.564.618.618-.903.903A5.437 5.437 0 0 1 6.53 10.08l-.001-.015Zm-.338 6.129a.645.645 0 1 1 .645-.645.645.645 0 0 1-.645.645Zm2.144-2.333.925-.925.617.618.564-.27c.05.022.102.043.153.063l.207.589h.874v2.304a1.297 1.297 0 0 0-.785.593l-.003.006h-.84a3.624 3.624 0 0 0-.944-2.14l.002.002Zm1.082 3.624h1.29a1.279 1.279 0 0 0 .182.65l-.003-.005H9.416a.323.323 0 0 1 0-.645Zm2.903 3.87h-.645a1.617 1.617 0 0 1-1.579-1.28l-.001-.01H13.9a1.618 1.618 0 0 1-1.58 1.29Zm2.258-1.935H9.418a.323.323 0 0 1 0-.645h5.161a.323.323 0 0 1 0 .645Zm.323-1.613a.323.323 0 0 1-.323.323h-1.47a1.262 1.262 0 0 0 .18-.645v-.001h1.29a.323.323 0 0 1 .322.322Zm-.012-3.105a3.618 3.618 0 0 0-.94 2.123v.015h-.84a1.291 1.291 0 0 0-.78-.597l-.009-.003v-2.304h.874l.207-.588q.077-.03.153-.063l.564.27.617-.618.925.925Zm2.915.202a.645.645 0 1 1-.645.645.645.645 0 0 1 .645-.645Zm-1.71-1.521-.903-.903.617-.618-.27-.564c.023-.051.044-.101.063-.152l.59-.208v-.874h1.275a5.449 5.449 0 0 1-1.377 3.323l.004-.005Zm4.29-2.672a.967.967 0 1 1 .967-.968.969.969 0 0 1-.967.968Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont360);
export default ForwardRef;