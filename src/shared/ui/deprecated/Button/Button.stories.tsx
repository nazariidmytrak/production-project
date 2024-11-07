import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/deprecated/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const renderButtonVariants = () => (
  <>
    <Button theme={ButtonTheme.CLEAR}>Clear</Button>
    <Button theme={ButtonTheme.CLEAR_INVERTED}>Clear Inverted</Button>
    <Button theme={ButtonTheme.OUTLINE}>Outline</Button>
    <Button theme={ButtonTheme.OUTLINE_RED}>Outline Red</Button>
    <Button theme={ButtonTheme.BACKGROUND}>Background</Button>
    <Button theme={ButtonTheme.BACKGROUND_INVERTED}>Background Inverted</Button>
    <Button disabled>Disabled</Button>
  </>
);

export const Variants: Story = {
  render: renderButtonVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows button variants styled for the light theme.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderButtonVariants,
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows button variants styled for the dark theme.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderButtonVariants,
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows button variants styled for the orange theme.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size={ButtonSize.M}>Size M</Button>
      <Button size={ButtonSize.L}>Size L</Button>
      <Button size={ButtonSize.XL}>Size XL</Button>
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows button size options: Medium (M), Large (L), and Extra Large (XL).',
      },
    },
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full Width' },
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows a button with full-width styling, stretching across the container.',
      },
    },
  },
};
