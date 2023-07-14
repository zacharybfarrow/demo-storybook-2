import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont390 = (
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
    role="img"
    className={!props.tooltip ? "pointer-events-none" : "pointer-events-auto"}
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m12.39 5.206 1.134-.067c-.533-.479-.727-.466-1.133.067Zm7.612 5.272c-.473-.23-.958-.432-1.454-.606-.4-.17-.788-.357-1.164-.557-.097-.049-.145-.194-.188-.31-.242-.606-.515-1.163-1.315-1.127-.12.006-.26-.115-.363-.212-.406-.363-.673-.97-1.418-.715-.14.049-.358-.164-.546-.164-.327-.036-.66-.32-1-.036-.236.212-.46.43-.648.606a1.679 1.679 0 0 0-.521-.17c-.673.061-.836-.084-.788-.751s-.012-.703-.673-.703c-.109 0-.212-.03-.351-.03l.315-1.17c-.315-.103-.545-.127-.776.188a.976.976 0 0 1-.654.436.812.812 0 0 1-.606-.454A5.212 5.212 0 0 1 7.64 3.49c-.085-.103-.31-.382-.424-.515-.116-.134-.346-.352-.376-.352-.43.31-.527-.14-.758-.297a.91.91 0 0 0-.4-.145c-.43-.06-.86-.091-1.29-.134L3.84 2l-.109.158 1.43 2.157.17-.11-.752-1.211c.152.042.237.042.237.073.448.57 1.272.927 1.272 1.818a.315.315 0 0 0 .152.218c.612.309 1.127.866 1.92.69.098-.018.231.085.34.146.246.12.481.26.703.418.273.212.46.43.782.697.321.267.648.521.957.77l.352-.43c.473.812.436 1.078-.049 1.757a2.636 2.636 0 0 0-.26.842.672.672 0 0 0-.049.285c-.002.22.03.439.097.648.116.285.328.528.455.813.309.618.49 1.284 1.212 1.593.201.122.33.335.345.57a66.163 66.163 0 0 1-.418 3.472c-.097.643-.273 1.249-.412 1.855.105.005.15-.022.17-.04-.11.37-.225.758-.346 1.149-.138.487.04 1.009.449 1.309.41.379 1.012.461 1.509.206-.588-.479-.964-.673.103-1.691l-.424-.218.812-.86-.406-.152c.232-.115.457-.244.672-.388.128-.11.271-.202.424-.273.661-.17.758-.363.497-.97.194 0 .515.104.606 0 .476-.45.848-.997 1.091-1.605.069-.484.436-.87.915-.964.594-.127.734-.533.91-.988.205-.545-.043-1.2.43-1.678.185-.18.344-.383.472-.606.182-.334.303-.752-.097-.982Zm-7.72-5.69.054-.164-1.587-.654-.073.266c.642-.14.945.758 1.606.552Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont390);
export default ForwardRef;
