import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

const renderSkeletonVariants = () => (
  <>
    <Skeleton width={200} height={200} />
    <Skeleton width={200} height={200} border='25%' />
    <Skeleton width={200} height={200} border='50%' />
  </>
);

export const Variants: Story = {
  render: renderSkeletonVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Skeleton component.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderSkeletonVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Skeleton component with a dark theme applied.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderSkeletonVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Skeleton component with an orange theme applied.',
      },
    },
  },
};
