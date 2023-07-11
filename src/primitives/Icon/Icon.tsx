import { IconProps } from "@radix-ui/react-icons/dist/types";
import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon,
  ArrowUpIcon,
  AvatarIcon,
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  ExternalLinkIcon,
  InfoCircledIcon,
  Share1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { E1XIcoFont } from "./lib";

export type IconName =
  | "ARROWBOTTOMLEFT"
  | "ARROWBOTTOMRIGHT"
  | "ARROWDOWN"
  | "ARROWLEFT"
  | "ARROWRIGHT"
  | "ARROWTOPLEFT"
  | "ARROWTOPRIGHT"
  | "ARROWUP"
  | "AVATAR"
  | "CHECKCIRCLED"
  | "CROSSCIRCLED"
  | "EXCLAMATIONTRIANGLE"
  | "EXTERNALLINK"
  | "INFOCIRCLED"
  | "SHARE1"
  | "TRASH"
  | "E1XICOFONT";

export default function Icon<T extends IconProps>({
  name,
  ...props
}: { name: IconName } & T) {
  if (!name) return null;
  const iconLookup = {
    ARROWBOTTOMLEFT: <ArrowBottomLeftIcon {...props} />,
    ARROWBOTTOMRIGHT: <ArrowBottomRightIcon {...props} />,
    ARROWDOWN: <ArrowDownIcon {...props} />,
    ARROWLEFT: <ArrowLeftIcon {...props} />,
    ARROWRIGHT: <ArrowRightIcon {...props} />,
    ARROWTOPLEFT: <ArrowTopLeftIcon {...props} />,
    ARROWTOPRIGHT: <ArrowTopRightIcon {...props} />,
    ARROWUP: <ArrowUpIcon {...props} />,
    AVATAR: <AvatarIcon {...props} />,
    CHECKCIRCLED: <CheckCircledIcon {...props} />,
    CROSSCIRCLED: <CrossCircledIcon {...props} />,
    EXCLAMATIONTRIANGLE: <ExclamationTriangleIcon {...props} />,
    EXTERNALLINK: <ExternalLinkIcon {...props} />,
    INFOCIRCLED: <InfoCircledIcon {...props} />,
    SHARE1: <Share1Icon {...props} />,
    TRASH: <TrashIcon {...props} />,
    E1XICOFONT: <E1XIcoFont {...props} />
  };
  return iconLookup[name] ?? null;
}
