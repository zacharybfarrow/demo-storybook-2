import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../iconTypes";
const SvgE1XIcoFont394 = (
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
    <path d="M16.833 10.854a5.323 5.323 0 0 0-.895-4.444l-.359.267c.63.84.97 1.86.97 2.91a4.884 4.884 0 0 1-.24 1.474c.176-.066.351-.135.524-.207ZM15.215 3.33h-.446v.446h.446v-.446Zm-.208 3.08 1.31-2.008a1.557 1.557 0 1 0-2.615 0l1.305 2.007Zm-.931-3.472a1.116 1.116 0 0 1 1.867 1.221l-.936 1.455-.931-1.455a1.115 1.115 0 0 1 0-1.22Zm-7.088 8.085a4.875 4.875 0 0 1 .458-3.944l-.378-.228a5.335 5.335 0 0 0-.755 2.743c0 .42.055.826.147 1.217.174.075.35.145.528.212Zm.885-4.036 1.042-1.49a1.339 1.339 0 1 0-2.09-.005l1.048 1.495Zm-.005-3.21a.887.887 0 0 1 .684 1.454l-.689.97-.684-.97a.892.892 0 0 1 .69-1.454ZM18.59 14.667l-2.643-2.658a.244.244 0 0 0-.347 0l-.68.68h-3.384a.953.953 0 0 0-.651.286h-.001l-.17.173-1.61-.674-.713-.717a.244.244 0 0 0-.348 0L5.41 14.415a.245.245 0 0 0 0 .345l1.983 1.993c.211.504.467.988.762 1.449-.154.255-.25.54-.279.837l-.025.025a.244.244 0 0 0-.073.176.996.996 0 0 0 .776.963 1 1 0 0 0 .977.788.24.24 0 0 0 .124-.038.997.997 0 0 0 .885.543.242.242 0 0 0 .121-.037c.168.318.497.538.882.541l.1-.02c.201-.089.417-.19.626-.295l.091.038.096.02c.38 0 .706-.214.875-.525a.24.24 0 0 0 .134.045h.001a.998.998 0 0 0 .873-.532c.04.025.084.042.131.042.478-.003.874-.34.974-.787a1 1 0 0 0 .783-.976.244.244 0 0 0-.067-.168l-.031-.033a1.952 1.952 0 0 0-.135-.566c.243-.396.454-.81.633-1.24l1.964-1.992a.245.245 0 0 0-.001-.344Zm-9.807 5.075-.008-.002a.5.5 0 0 1-.49-.417l.589-.58a.24.24 0 0 0 .069-.195l.437-.437v-.001a.365.365 0 0 1 .518-.006l.008.007c.074.074.11.168.11.264a.368.368 0 0 1-.06.19l-.287.287-.886.89Zm-.47-1.133c.014-.036.027-.072.044-.107l.026.037-.07.07Zm1.47 1.65a.236.236 0 0 0-.173.062l-.163.163a.506.506 0 0 1-.427-.494l.36-.36v-.001l.756-.761.003-.003c.02-.02.03-.048.047-.07l.469-.47a.364.364 0 0 1 .518-.004l.004.004a.369.369 0 0 1 .002.525l-.002.002-.753.762h.001l-.642.645Zm1.018.506a.236.236 0 0 0-.188.062l-.159.161a.506.506 0 0 1-.425-.494l-.002-.005.876-.884.63-.636a.369.369 0 0 1 .525-.001.379.379 0 0 1 0 .535l-.36.366c-.005.005-.012.006-.017.011l-.757.762-.123.123Zm1.258.255-.155-.072-.399-.184.398.412-.222.222-.048.048-.125.056a.512.512 0 0 1-.474-.5l.625-.631.27-.273a.368.368 0 0 1 .245-.098c.096 0 .19.035.262.108h.001c.009.01.012.022.02.032a.244.244 0 0 0 .053.265l.025.025a.372.372 0 0 1-.098.212l-.378.378Zm.43.226-.131-.056-.008-.001.095-.095a.838.838 0 0 0 .37-.383l.132.133a.502.502 0 0 1-.457.402Zm2.82-1.741-2.898-2.918a.245.245 0 0 0-.347.345l2.9 2.919a.504.504 0 0 1-.411.414l-.127-.127c-.01-.02-.02-.039-.037-.055l-2.735-2.735c-.006-.006-.014-.009-.021-.014-.019-.015-.037-.03-.059-.04a.245.245 0 0 0-.338.227v.004c.001.03.007.06.018.089.01.023.025.043.042.063.004.005.006.012.011.017l.005.004 2.64 2.658a.498.498 0 0 1-.403.4l-.116-.117a.244.244 0 0 0-.05-.074l-.53-.51a.239.239 0 0 0-.107-.056c-.026-.04-.043-.083-.077-.118l-.001-.001-.002-.002a.678.678 0 0 0-.356-.177.703.703 0 0 0 .183-.465.704.704 0 0 0-.203-.495l-.001-.002-.002-.002a.694.694 0 0 0-.49-.202c-.064 0-.127.02-.189.037a.692.692 0 0 0-.202-.477l-.003-.004h-.001a.689.689 0 0 0-.977.005l-.116.115a.677.677 0 0 0-.173-.33l-.009-.008-.001-.002a.69.69 0 0 0-.976.011l-.37.37c-.058-.083-.116-.163-.174-.25a8.906 8.906 0 0 1-.783-1.486l-.053-.08-1.841-1.85 2.288-2.309.573.577.08.053 1.472.616-.46.46-.003.002a.951.951 0 0 0-.2.31l-.001.002v.001l-.737 1.787-.003.007-.001.004a.419.419 0 0 0 .235.54v.001l.01.005h.002c.137.055.28.082.42.082l.008-.001h.012c.441.001.86-.26 1.04-.692l.001-.002.005-.01.418-1.012.296-.3 3.966 3.989.37.394a.5.5 0 0 1-.41.415Zm.94-2.815-.053.079c-.176.43-.387.844-.631 1.24l-.003.003c-.024.042-.052.082-.078.123l-2.063-2.085c.047.003.094.008.141.008.266 0 .528-.053.779-.14a2.37 2.37 0 0 0-.142.78v.011c0 .01.005.019.006.028.003.023.005.045.014.066a.245.245 0 0 0 .4.075.244.244 0 0 0 .052-.079c.008-.02.01-.043.012-.065.002-.01.006-.018.006-.029v-.007a1.887 1.887 0 0 1 .554-1.336c.003-.003.004-.007.006-.01a.245.245 0 0 0 .047-.07.244.244 0 0 0 0-.186.244.244 0 0 0-.319-.134c-.02.008-.037.022-.054.036l-.017.01c-.002.003-.006.004-.01.007a1.872 1.872 0 0 1-.7.437 1.887 1.887 0 0 1-.634.116c-.249 0-.497-.059-.735-.16-.021-.01-.044-.014-.065-.024l-1.194-1.207a.245.245 0 0 0-.174-.072l-.01.002-.01-.002a.244.244 0 0 0-.174.072l-.514.52-.052.078-.437 1.057v.002a.637.637 0 0 1-.581.398.646.646 0 0 1-.173-.034l.69-1.718v-.002a.462.462 0 0 1 .098-.152l.715-.715v-.001h.002l.286-.292a.463.463 0 0 1 .317-.14h3.47a.243.243 0 0 0 .174-.071l.578-.578 2.299 2.311-1.824 1.85ZM8.095 4.44h-.441v.447h.44V4.44Zm.742 2.008-.136.427c.204.066.41.12.618.172a6.772 6.772 0 0 0-.536 2.292H7.208v.446h1.574c.038.64.164 1.262.373 1.854.164.032.329.063.495.089a6.36 6.36 0 0 1-.422-1.943h2.204v2.012c-.25.006-.5.02-.749.046.334.025.67.042 1.011.042.325 0 .645-.016.963-.039a9.632 9.632 0 0 0-.778-.049V9.786h2.208a6.35 6.35 0 0 1-.437 1.955c.17-.025.338-.055.505-.087.212-.596.34-1.224.379-1.868h1.574V9.34H14.53a6.798 6.798 0 0 0-.555-2.292c.206-.052.412-.107.615-.172l-.136-.427c-.22.071-.442.132-.665.186a6.809 6.809 0 0 0-1.5-1.929c.28.036.555.097.826.182l.131-.427a5.422 5.422 0 0 0-3.613.155l.17.412a4.888 4.888 0 0 1 1.16-.312 6.786 6.786 0 0 0-1.459 1.92 9.17 9.17 0 0 1-.666-.187Zm3.04-1.506a6.358 6.358 0 0 1 1.45 1.784c-.48.09-.964.141-1.45.153V4.943Zm0 2.385a9.545 9.545 0 0 0 1.652-.184c.311.687.501 1.428.553 2.196H11.88V7.328Zm-.446-2.423v1.976a9.168 9.168 0 0 1-1.467-.153 6.363 6.363 0 0 1 1.467-1.823Zm0 2.423V9.34h-2.2a6.357 6.357 0 0 1 .536-2.195c.548.11 1.105.171 1.664.183Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgE1XIcoFont394);
export default ForwardRef;
