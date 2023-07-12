import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgTruIcon100 = (
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
    <path d="m20.994 10.711-.638-.16-.756.73 1.178.294a.42.42 0 0 1 .332.425.42.42 0 0 1-.332.425l-1.4.35c-.474.119-.833.472-.96.945s.008.958.36 1.298l1.036 1.003a.42.42 0 0 1 .075.534.42.42 0 0 1-.5.202l-1.386-.397a1.312 1.312 0 0 0-1.305.338 1.312 1.312 0 0 0-.338 1.305l.397 1.387a.42.42 0 0 1-.202.5.42.42 0 0 1-.534-.076l-1.003-1.037a1.312 1.312 0 0 0-1.298-.359 1.312 1.312 0 0 0-.945.96l-.35 1.4c-.077.308-.345.332-.425.332s-.348-.024-.425-.332l-.35-1.4a1.312 1.312 0 0 0-.945-.96 1.31 1.31 0 0 0-1.298.36l-1.003 1.036a.42.42 0 0 1-.534.075.42.42 0 0 1-.202-.5l.397-1.386c.134-.471.008-.959-.338-1.305a1.312 1.312 0 0 0-1.305-.338l-1.387.397a.42.42 0 0 1-.5-.202.42.42 0 0 1 .076-.534l1.037-1.003c.351-.34.486-.826.359-1.298s-.486-.826-.96-.945l-1.4-.35A.42.42 0 0 1 2.89 12a.42.42 0 0 1 .332-.425l1.4-.35c.474-.119.833-.472.96-.945a1.312 1.312 0 0 0-.36-1.298L4.187 7.979a.42.42 0 0 1-.075-.534.42.42 0 0 1 .5-.202l1.386.397c.471.134.959.008 1.305-.338.346-.346.472-.834.338-1.305L7.243 4.61a.42.42 0 0 1 .202-.5.421.421 0 0 1 .534.076l1.003 1.036c.34.352.825.487 1.298.36.473-.127.826-.486.945-.96l.35-1.4c.077-.308.345-.332.425-.332s.348.024.425.332l.35 1.4c.119.474.472.833.945.96.473.126.958-.008 1.298-.36l1.003-1.036a.421.421 0 0 1 .534-.075c.07.04.289.194.202.5l-.397 1.386c-.134.471-.008.959.338 1.305.346.346.834.472 1.305.338l1.387-.397a.42.42 0 0 1 .5.202.42.42 0 0 1-.076.534l-1.037 1.003a1.312 1.312 0 0 0-.282 1.508l1.938-1.871A1.31 1.31 0 0 0 20.66 7a1.31 1.31 0 0 0-1.515-.613l-1.387.396a.429.429 0 0 1-.43-.111.43.43 0 0 1-.111-.43l.396-1.387c.17-.596-.076-1.205-.613-1.515s-1.187-.22-1.619.227l-1.003 1.036a.43.43 0 0 1-.428.119.43.43 0 0 1-.311-.317l-.35-1.4C13.137 2.406 12.62 2 12 2s-1.138.404-1.288 1.006l-.35 1.4a.43.43 0 0 1-.312.316.43.43 0 0 1-.428-.119L8.619 3.567A1.31 1.31 0 0 0 7 3.34a1.31 1.31 0 0 0-.613 1.515l.396 1.387a.43.43 0 0 1-.111.43.43.43 0 0 1-.43.111l-1.387-.396A1.31 1.31 0 0 0 3.34 7a1.31 1.31 0 0 0 .227 1.619l1.036 1.003a.43.43 0 0 1 .119.428.43.43 0 0 1-.317.311l-1.4.35A1.31 1.31 0 0 0 2 12c0 .62.404 1.138 1.006 1.289l1.4.35c.225.056.296.236.316.311s.049.266-.119.428l-1.036 1.003c-.446.431-.537 1.082-.227 1.619s.919.783 1.515.613l1.387-.396a.43.43 0 0 1 .43.11.43.43 0 0 1 .111.43l-.396 1.388A1.31 1.31 0 0 0 7 20.66a1.31 1.31 0 0 0 1.619-.227l1.003-1.036a.43.43 0 0 1 .428-.119.43.43 0 0 1 .311.317l.35 1.4c.151.6.669 1.005 1.289 1.005s1.138-.404 1.288-1.006l.35-1.4a.43.43 0 0 1 .312-.316.43.43 0 0 1 .428.119l1.003 1.036A1.31 1.31 0 0 0 17 20.66a1.31 1.31 0 0 0 .613-1.515l-.396-1.387a.43.43 0 0 1 .111-.43.43.43 0 0 1 .43-.111l1.387.396A1.31 1.31 0 0 0 20.66 17a1.31 1.31 0 0 0-.227-1.619l-1.036-1.003a.43.43 0 0 1-.119-.428.43.43 0 0 1 .317-.311l1.4-.35A1.31 1.31 0 0 0 22 12a1.31 1.31 0 0 0-1.006-1.289Zm-10.01 2.907-1.812-1.812-.63.63 2.127 2.126a.445.445 0 0 0 .63 0l5.226-5.226-.63-.63-4.911 4.912Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTruIcon100);
export default ForwardRef;
