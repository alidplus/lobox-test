import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import "./style.scss";

const button = tv({
  base: "btn-base",
  // base: "",
  variants: {
    variant: {
      primary: "btn-primary",
      secondry: "btn-secondry",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    disabled: {
      true: "btn-disabled",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(
  props: PropsWithChildren<ButtonProps & ButtonVariantProps>,
) {
  const { variant, size, className, ...restProps } = props;
  const { disabled } = restProps;
  const cls = button({ variant, size, disabled, className });
  return (
    <button data-text="button" className={cls} {...restProps}>
      {props.children}
    </button>
  );
}
