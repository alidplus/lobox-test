import type { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import Icon, { IconNames } from "../icon";
import List, { LItemBase } from "./index";

type CustomListProps = ComponentProps<typeof List> & { itemCount: number };

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/List",
  component: List,
  render({ itemCount, ...props }) {
    return (
      <List {...props}>
        {new Array(itemCount).fill(0).map((_, i) => (
          <List.Item key={i}>Item {i + 1}</List.Item>
        ))}
      </List>
    )
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    itemCount: { type: 'number', options: [1, 5, 10, 20, 50, 100], control: "select", description: 'icon name' },
    hoverable: { type: 'boolean' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    itemCount: 1,
    hoverable: true
  },
} satisfies Meta<CustomListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Items: Story = {
  args: {
    items: [
      {key: 'k1', label: 'Education' },
      {key: 'k2', label: 'Yeeeeh, science!' },
      {key: 'k3', label: 'Art' },
      {key: 'k4', label: 'Sport' },
      {key: 'k5', label: 'Game' },
      {key: 'k6', label: 'Health' },
    ]
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Renderer: Story = {
  args: {
    items: [
      {key: 'k1', label: 'Education' },
      {key: 'k2', label: 'Yeeeeh, science!' },
      {key: 'k3', label: 'Art' },
      {key: 'k4', label: 'Sport' },
      {key: 'k5', label: 'Game' },
      {key: 'k6', label: 'Health' },
    ],
    render(item) {
      return `item ${item.key}: ${item.label}`
    }
  },
};

interface CustomItem extends LItemBase {
  icon: IconNames
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CustomItems: StoryObj<{ component: typeof List<CustomItem> }> = {
  args: {
    items: [
      {key: 'k1', label: 'Education', icon: 'graduate' },
      {key: 'k2', label: 'Yeeeeh, science!', icon: 'science' },
      {key: 'k3', label: 'Art', icon: 'theater', selected: true },
      {key: 'k4', label: 'Sport', icon: 'ball' },
      {key: 'k5', label: 'Game', icon: 'game' },
      {key: 'k6', label: 'Health', icon: 'hospital' },
    ],
    render(item: CustomItem) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span>{item.label}</span>
            <Icon name={item.icon} width={24} height={24} />
          </div>
          {item.selected ? (
            <Icon name="check" />
          ) : null}
        </div>
      )
    }
  },
};
