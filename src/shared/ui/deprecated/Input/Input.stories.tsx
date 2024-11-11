import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';

const meta: Meta<typeof Input> = {
  title: 'shared/deprecated/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const renderInputVariants = () => (
  <>
    <Input placeholder='Primary' />
    <Input readonly placeholder='Readonly' />
  </>
);

export const Variants: Story = {
  render: renderInputVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows basic input styles: Primary and Readonly.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderInputVariants,
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows Primary and Readonly inputs in dark mode.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderInputVariants,
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows Primary and Readonly inputs in an orange theme.',
      },
    },
  },
};
