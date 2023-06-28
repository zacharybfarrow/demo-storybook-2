import { IconProps } from '@radix-ui/react-icons/dist/types'
import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon,
  ArrowUpIcon,
  InfoCircledIcon,
  AvatarIcon,
} from '@radix-ui/react-icons'

export type IconName =
  | 'ARROWBOTTOMLEFT'
  | 'ARROWBOTTOMRIGHT'
  | 'ARROWDOWN'
  | 'ARROWLEFT'
  | 'ARROWRIGHT'
  | 'ARROWTOPLEFT'
  | 'ARROWTOPRIGHT'
  | 'ARROWUP'
  | 'INFOCIRCLED'
  | 'AVATAR'


export default function Icon<T extends IconProps>({
  name,
  ...props
}: { name: IconName } & T) {
  if (!name) return null
  const iconLookup = {
    ARROWBOTTOMLEFT: <ArrowBottomLeftIcon {...props} />,
    ARROWBOTTOMRIGHT: <ArrowBottomRightIcon {...props} />,
    ARROWDOWN: <ArrowDownIcon {...props} />,
    ARROWLEFT: <ArrowLeftIcon {...props} />,
    ARROWRIGHT: <ArrowRightIcon {...props} />,
    ARROWTOPLEFT: <ArrowTopLeftIcon {...props} />,
    ARROWTOPRIGHT: <ArrowTopRightIcon {...props} />,
    ARROWUP: <ArrowUpIcon {...props} />,
    INFOCIRCLED: <InfoCircledIcon {...props} />,
    AVATAR: <AvatarIcon {...props} />,
  }
  return iconLookup[name] ?? null
}