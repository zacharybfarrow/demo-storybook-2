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
  | 'ArrowBottomLeft'
  | 'ArrowBottomRight'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowTopLeft'
  | 'ArrowTopRight'
  | 'ArrowUp'
  | 'InfoCircled'
  | 'Avatar'


export default function Icon<T extends IconProps>({
  name,
  ...props
}: { name: IconName } & T) {
  if (!name) return null
  const iconLookup = {
    ArrowBottomLeft: <ArrowBottomLeftIcon {...props} />,
    ArrowBottomRight: <ArrowBottomRightIcon {...props} />,
    ArrowDown: <ArrowDownIcon {...props} />,
    ArrowLeft: <ArrowLeftIcon {...props} />,
    ArrowRight: <ArrowRightIcon {...props} />,
    ArrowTopLeft: <ArrowTopLeftIcon {...props} />,
    ArrowTopRight: <ArrowTopRightIcon {...props} />,
    ArrowUp: <ArrowUpIcon {...props} />,
    InfoCircled: <InfoCircledIcon {...props} />,
    Avatar: <AvatarIcon {...props} />,
  }
  return iconLookup[name] ?? null
}