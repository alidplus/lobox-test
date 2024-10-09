export const defaultIconProps = {
  width: 32,
  height: 32,
  fill: "currentColor"
}

export type StrictIconProps = typeof defaultIconProps
export type IconProps = Partial<StrictIconProps>