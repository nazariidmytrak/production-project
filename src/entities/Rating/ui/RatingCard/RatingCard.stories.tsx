import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the RatingCard component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the RatingCard component with a dark theme applied.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the RatingCard component with an orange theme applied.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the RatingCard component.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the RatingCard component with a dark theme applied.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the RatingCard component with an orange theme applied.',
      },
    },
  },
};
