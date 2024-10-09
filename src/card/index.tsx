import { HTMLAttributes, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import "./style.scss";

const card = tv({
  base: "card",
  // base: "",
  variants: {
  },
  defaultVariants: {
  },
});

type CardVariantProps = VariantProps<typeof card>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card(
  props: PropsWithChildren<CardProps & CardVariantProps>,
) {
  const { className, ...restProps } = props;
  const cls = card({ className });
  return (
    <div className={cls} {...restProps}>
      {props.children}
    </div>
  );
}
