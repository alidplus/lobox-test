import { InputHTMLAttributes, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import "./style.scss";
import Icon, { IconNames } from "../icon";

const input = tv({
  base: "input",
  // base: "",
  variants: {
    disabled: {
      true: 'disabled'
    },
    hasAddonRight: {
      true: 'has-addon-right'
    },
    hasAddonLeft: {
      true: 'has-addon-left'
    }
  },
  defaultVariants: {
    disabled: false,
    hasAddonRight: false,
    hasAddonLeft: false,
  },
});

const inputControl = tv({
  base: "input-control",
  // base: "",
  variants: {
    hasAddonRight: {
      true: 'has-addon-right'
    },
    hasAddonLeft: {
      true: 'has-addon-left'
    }
  },
  defaultVariants: {
    hasAddonRight: false,
    hasAddonLeft: false,
  },
});

type InputVariantProps = VariantProps<typeof input>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconRight?: IconNames
  iconLeft?: IconNames
  controlClassName?: string
}

export default function Input(
  props: InputProps & InputVariantProps,
) {
  const { className, controlClassName, iconLeft, iconRight, ...restProps } = props;
  const { disabled } = restProps;
  const hasAddonLeft = !!iconLeft, hasAddonRight = !!iconRight
  const inpCls = input({ disabled, hasAddonLeft, hasAddonRight, className });
  const ctrlCls = inputControl({ hasAddonLeft, hasAddonRight, className: controlClassName });
  return (
    <div className={ctrlCls}>
      {iconLeft && (
        <div className="addon addon-left">
          <Icon width={24} height={24} name={iconLeft}/>
        </div>
      )}
      {iconRight && (
        <div className="addon addon-right">
          <Icon width={24} height={24} name={iconRight}/>
        </div>
      )}
      <input className={inpCls} {...restProps} />
    </div>
  );
}
