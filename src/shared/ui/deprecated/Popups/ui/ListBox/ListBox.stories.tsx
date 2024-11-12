import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ListBox, ListBoxProps } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/deprecated/popups/ListBox',
  component: ListBox,
  args: {
    items: [
      { content: 'Item 1', value: 'value1' },
      { content: 'Item 2', value: 'value2' },
      { content: 'Item 3', value: 'value3' },
    ],
    defaultValue: 'Item 1',
    onChange: action('Selected item changed'),
  },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const InteractiveListBoxStory = (args: ListBoxProps) => {
  const { defaultValue, onChange } = args;
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return <ListBox {...args} value={selectedValue} onChange={handleChange} />;
};

const renderListBoxVariants = (args: ListBoxProps) => (
  <>
    <InteractiveListBoxStory {...args} defaultValue='Primary' />
    <InteractiveListBoxStory {...args} readonly defaultValue='Disabled' />
  </>
);

export const Variants: Story = {
  render: (args) => renderListBoxVariants(args),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows basic ListBox styles: Primary and Readonly.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: (args) => renderListBoxVariants(args),
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows Primary and Readonly ListBox in a dark mode.',
      },
    },
  },
};

export const Orange: Story = {
  render: (args) => renderListBoxVariants(args),
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows Primary and Readonly ListBox in an orange mode.',
      },
    },
  },
};
