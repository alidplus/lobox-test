import { Children, HTMLAttributes, isValidElement, MouseEvent, PropsWithChildren, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import ListItem from "./item";
import "./style.scss";

export * from './item';

const list = tv({
  base: "list",
  // base: "",
  variants: {
    hoverable: {
      true: 'hoverable'
    }
  },
  defaultVariants: {
    hoverable: false
  },
});

type ListVariantProps = VariantProps<typeof list>;

export type LItemBase = {
  key: string
  label?: string
  selected?: boolean
} & {
  [k: string]: any
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ListProps<T extends LItemBase> extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'> {
  items?: T[],
  render?: (item: T) => ReactNode
  onSelect?: (item: T) => void
}

function List<T extends LItemBase>(props: PropsWithChildren<ListProps<T> & ListVariantProps>) {
  const { className, hoverable, onSelect, render, ...restProps } = props;
  const cls = list({ className, hoverable });

  return (
    <ul className={cls} {...restProps}>
      {props.items?.map(item => (
        <ListItem key={item.key} selected={item.selected} onClick={(event) => onSelect?.(item)}>
          {render?.(item) ?? item.label ?? item.key}
        </ListItem>
      )) ?? Children.map(props.children, (child) => {
        if (isValidElement(child) && typeof child.type !== 'string' && 'isValidListItem' in child.type) {
          return child
        }
      })}
    </ul>
  );
}

List.Item = ListItem

export default List