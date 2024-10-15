import type { Meta, StoryObj } from "@storybook/react";

import Icon, { IconNames } from "../icon";
import { LItemBase } from "../list";
import Select from "./index";
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { type: 'boolean' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    disabled: false,
    onChange: action('on-click'),
    options: [
      { key: 'k1', label: 'Education' },
      { key: 'k2', label: 'Yeeeeh, science!' },
      { key: 'k3', label: 'Art' },
      { key: 'k4', label: 'Sport' },
      { key: 'k5', label: 'Game' },
      { key: 'k6', label: 'Health' },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
  },
};

interface CustomItem extends LItemBase {
  icon: IconNames
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CustomItems: StoryObj<{ component: typeof Select<CustomItem> }> = {
  args: {
    options: [
      { key: 'k1', label: 'Education', icon: 'graduate' },
      { key: 'k2', label: 'Yeeeeh, science!', icon: 'science' },
      { key: 'k3', label: 'Art', icon: 'theater' },
      { key: 'k4', label: 'Sport', icon: 'ball' },
      { key: 'k5', label: 'Game', icon: 'game' },
      { key: 'k6', label: 'Health', icon: 'hospital' },
    ] satisfies CustomItem[],
    value: 'k3',
    render(item: CustomItem) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span>{item.label}</span>
            <Icon name={item.icon} width={24} height={24} />
          </div>
          {item.selected ? (
            <Icon name="check" width={24} height={24} />
          ) : null}
        </div>
      )
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CustomItemsAndMultiSelect: StoryObj<{ component: typeof Select<CustomItem> }> = {
  args: {
    options: [
      { key: 'k1', label: 'Education', icon: 'graduate' },
      { key: 'k2', label: 'Yeeeeh, science!', icon: 'science' },
      { key: 'k3', label: 'Art', icon: 'theater' },
      { key: 'k4', label: 'Sport', icon: 'ball' },
      { key: 'k5', label: 'Game', icon: 'game' },
      { key: 'k6', label: 'Health', icon: 'hospital' },
    ] satisfies CustomItem[],
    value: ['k3'],
    multi: true,
    render(item: CustomItem) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span>{item.label}</span>
            <Icon name={item.icon} width={24} height={24} />
          </div>
          {item.selected ? (
            <Icon name="check" width={24} height={24} />
          ) : null}
        </div>
      )
    }
  },
};