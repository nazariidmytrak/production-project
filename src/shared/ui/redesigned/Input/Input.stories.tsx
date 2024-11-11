import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import ArrowSvg from '@/shared/assets/icons/arrow-bottom.svg';
import { Input } from './Input';
import { Icon } from '../Icon';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const renderInputVariants = () => (
  <>
    <Input label='Primary' />
    <Input readonly label='Readonly' />
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
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
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
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows Primary and Readonly inputs in an orange theme.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Input size='s' label='Size: S' />
      <Input size='m' label='Size: M' />
      <Input size='l' label='Size: L' />
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows input sizes: small, medium, and large.',
      },
    },
  },
};

export const WithAddons: Story = {
  render: () => (
    <>
      <Input label='Addon Left' addonLeft={<Icon Svg={ArrowSvg} />} />
      <Input label='Addon Right' addonRight={<Icon Svg={ArrowSvg} />} />
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows inputs with icons on the left and right sides.',
      },
    },
  },
};
