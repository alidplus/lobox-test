import { defaultIconProps, IconProps } from "../types";

export default function CheckIcon(props: IconProps) {
  const {
    width,
    height,
    fill
  } = {
    ...defaultIconProps,
    ...props
  }

  return (
    <svg fill={fill} width={width} height={height} viewBox="0 0 24 24">
      <path d="M4 12.6111L8.92308 17.5L20 6.5" fill={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}