import { Children, HTMLAttributes, isValidElement, PropsWithChildren, ReactNode } from "react";
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

export interface LItemBase {
  key: string
  label?: ReactNode
  selected?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ListProps<T extends LItemBase> extends HTMLAttributes<HTMLUListElement> {
  items?: T[],
  render?: (item: T) => ReactNode
}

export default function List<T extends LItemBase>(
  props: PropsWithChildren<ListProps<T> & ListVariantProps>,
) {
  const { className, hoverable, ...restProps } = props;
  const cls = list({ className, hoverable });
  return (
    <ul className={cls} {...restProps}>
      {props.items?.map(item => (
        <ListItem key={item.key} selected={item.selected}>{props.render?.(item) ?? item.label ?? item.key}</ListItem>
      )) ?? Children.map(props.children, (child) => {
        if (isValidElement(child) && typeof child.type !== 'string' && 'isValidListItem' in child.type) {
          return child
        }
      })}
    </ul>
  );
}

List.Item = ListItem