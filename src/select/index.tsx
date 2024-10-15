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
interface SingleSelectProps<T extends LItemBase> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  options?: T[],
  render?: (item: T) => ReactNode
  value?: string,
  multi?: false
  onChange?: (item: string) => void,
}

interface MultiSelectProps<T extends LItemBase> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  options?: T[],
  render?: (item: T) => ReactNode
  onChange?: (item: string[]) => void,
  value?: string[],
  multi: true
}

type SelectProps<T extends LItemBase> = SingleSelectProps<T> | MultiSelectProps<T>

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

function isMultiSelectProps<T extends LItemBase>(props: SelectProps<T>): props is MultiSelectProps<T> {
  return 'multi' in props && props.multi === true
}

function toggleIteminArray(value: string, array: string[]): string[] {
  if(array.includes(value)) {
    return array.filter(item => item !== value)
  } else {
    return [...array, value]
  }
}

export default function Select<T extends LItemBase>(
  props: SelectProps<T> & SelectVariantProps,
) {
  const { className, options = [], render, onChange, ...inputProps } = props;
  const { disabled, value } = inputProps;
  const cls = select({ disabled, className });

  const inputRef = useRef<HTMLButtonElement | null>(null)

  const selectedKeys = value ? Array.isArray(value) ? value : [value] : []

  const selectedLabels = selectedKeys.reduce<string[]>((acc, k) => {
    const item = options.find(({ key }) => k === key)
    if (item) {
      const label = item?.label ?? item?.key
      return [...acc, label]
    }
    return acc
  }, [])

  function handleChange (item: T) {
    if (isMultiSelectProps(props)) {
      const nextValue = Array.isArray(props.value) ? [...props.value] : []
      props.onChange?.(toggleIteminArray(item.key, nextValue))
    } else {
      props.onChange?.(item.key)
    }
    close()
  }

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
            value={selectedLabels.join(' - ')}
          />
          {open && (
            <MenuItems static anchor="bottom" className="select-menu-portal">
              <Card className='pop-menu'>
                <List
                  hoverable
                  items={options}
                  render={render}
                  onSelect={handleChange}
                />
              </Card>
            </MenuItems>
          )}
        </>
      )}
    </Menu>
  );
}
