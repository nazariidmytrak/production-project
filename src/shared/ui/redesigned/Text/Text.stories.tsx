import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'shared/Text',
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Text>;

const renderTextVariants = () => (
  <>
    <Text title='Primary title' text='Primary text' />
    <Text title='Error title' text='Error text' variant='error' />
    <Text title='Accent title' text='Accent text' variant='accent' />
    <Text title='Only title' />
    <Text text='Only text' />
  </>
);

export const Variants: Story = {
  render: renderTextVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows primary, error, accent, and text-only variants.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderTextVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story:
          'Shows text variants with dark theme applied.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderTextVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story:
          'Shows text variants with orange theme applied.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Text size='s' title='Size: S' text='Size: S' />
      <Text size='m' title='Size: M' text='Size: M' />
      <Text size='l' title='Size: L' text='Size: L' />
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows small, medium, and large text sizes.',
      },
    },
  },
};
