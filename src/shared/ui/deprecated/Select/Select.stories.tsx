import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/deprecated/Select',
  component: Select,
};

const options = [
  { value: '1', content: 'first option' },
  { value: '2', content: 'second option' },
  { value: '3', content: 'third option' },
];

export default meta;
type Story = StoryObj<typeof Select>;

const renderSelectVariants = () => (
  <>
    <Select label='Primary' options={options} />
    <Select readonly label='Readonly' options={options} />
  </>
);

export const Primary: Story = {
  render: renderSelectVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Select component.',
      },
    },
  },
};

export const Dark: Story = {
  render: renderSelectVariants,
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Select component.',
      },
    },
  },
};

export const Orange: Story = {
  render: renderSelectVariants,
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Select component.',
      },
    },
  },
};
