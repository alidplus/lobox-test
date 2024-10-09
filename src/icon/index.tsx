import { useMemo } from "react";
import * as ICONS from './lib';
import { IconProps } from "./types";

export type IconNames = keyof typeof ICONS

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardProps {
  name: IconNames
}

export default function Icon(
  { name, ...props }: CardProps & IconProps
) {
  const Component = useMemo(() => {
    return ICONS[name]
  }, [name])

  return (
    <Component {...props} />
  );
}
