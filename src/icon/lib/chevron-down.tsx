import { defaultIconProps, IconProps } from "../types";

export default function ChevronDownIcon(props: IconProps) {
  const {
    width,
    height,
    fill
  } = {
    ...defaultIconProps,
    ...props
  }

  return (
    <svg fill="none" width={width} height={height} viewBox="0 0 24 24">
      <path d="M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}