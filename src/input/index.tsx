import { forwardRef, InputHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Icon, { IconNames } from "../icon";
import "./style.scss";

const input = tv({
  base: "input",
  // base: "",
  variants: {
    disabled: {
      true: 'disabled'
    },
    focused: {
      true: 'focused'
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
    focused: false,
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
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconRight?: IconNames
  iconLeft?: IconNames
  controlClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps & InputVariantProps>((props, ref) => {
  const { className, controlClassName, iconLeft, iconRight, focused, ...restProps } = props;
  const { disabled } = restProps;
  const hasAddonLeft = !!iconLeft, hasAddonRight = !!iconRight
  const inpCls = input({ disabled, hasAddonLeft, hasAddonRight, focused, className });
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
      <input ref={ref} className={inpCls} {...restProps} />
    </div>
  );
})

export default Input 
