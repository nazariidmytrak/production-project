import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
};

export default meta;
type Story = StoryObj<typeof StarRating>;

const renderStarRatingVariants = () => (
  <>
    <StarRating selectedStars={3} onSelect={() => {}} />
    <StarRating selectedStars={0} onSelect={() => {}} />
  </>
);

export const Variants: Story = {
  render: renderStarRatingVariants,
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows StarRating component with 3 stars selected and no stars selected.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderStarRatingVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story:
          'Shows StarRating component with 3 stars selected and no stars selected in dark mode.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderStarRatingVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story:
          'Shows StarRating component with 3 stars selected and no stars selected in an orange theme.',
      },
    },
  },
};
