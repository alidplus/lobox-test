import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { InputHTMLAttributes, ReactNode, useMemo, useRef } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Card from '../card';
import Input from '../input';
import List, { LItemBase } from "../list";
import "./style.scss";

const select = tv({
  base: "select",
  // base: "",
  variants: {
    disabled: {
      true: 'disabled'
    }
  },
  defaultVariants: {
    disabled: false,
  },
});

type SelectVariantProps = VariantProps<typeof select>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SelectProps<T extends LItemBase> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  options?: T[],
  render?: (item: T) => ReactNode
  onChange?: (item: T) => void
}

// function render(item: LItemBase) {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
//         <span>{item.label}</span>
//         <Icon name={item.icon} width={24} height={24} />
//       </div>
//       {item.selected ? (
//         <Icon name="check" />
//       ) : null}
//     </div>
//   )
// }

export default function Select<T extends LItemBase>(
  props: SelectProps<T> & SelectVariantProps,
) {
  const { className, options = [], render, onChange, ...inputProps } = props;
  const { disabled, value } = inputProps;
  const cls = select({ disabled, className });

  const inputRef = useRef<HTMLButtonElement | null>(null)

  const selectedOption = useMemo(() => options.find(op => op.key === value), [options, value])

  return (
    <Menu as={'div'} className={cls}>
      {({ open, close }) => (
        <>
          <MenuButton
            as={Input}
            {...inputProps}
            ref={inputRef}
            iconRight='chevronDown'
            readOnly
            focused={open}
            value={selectedOption?.label ?? value}
          />
          {open && (
            <MenuItems static anchor="bottom" className="select-menu-portal">
              <Card className='pop-menu'>
                <List
                  hoverable
                  items={options}
                  render={render}
                  onSelect={item => {
                    onChange?.(item)
                    close()
                  }}
                />
              </Card>
            </MenuItems>
          )}
        </>
      )}
    </Menu>
  );
}
