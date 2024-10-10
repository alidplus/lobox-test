import { LiHTMLAttributes, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import "./style.scss";

const listItem = tv({
  base: "list-item",
  // base: "",
  variants: {
    selected: {
      true: 'is-selected'
    }
  },
  defaultVariants: {
  },
});

type ListItemVariantProps = VariantProps<typeof listItem>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ListItemProps<T> extends LiHTMLAttributes<HTMLLIElement> {
  args?: T
}

export default function ListItem<T>(
  props: PropsWithChildren<ListItemProps<T> & ListItemVariantProps>,
) {
  const { className, selected, ...restProps } = props;
  const cls = listItem({ className, selected });
  return (
    <li className={cls} {...restProps}>
      {props.children}
    </li>
  );
}

ListItem.isValidListItem = true
