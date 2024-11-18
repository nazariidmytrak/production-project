import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import { profileMockData } from '../../model/helpers/profileMockData';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  args: profileMockData,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the ProfileCard component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ProfileCard in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ProfileCard in orange theme.',
      },
    },
  },
};

export const WithError: Story = {
  decorators: [NewDesignDecorator],
  args: { error: 'Error' },
  parameters: {
    docs: {
      description: {
        story: 'Shows the error state of the ProfileCard component.',
      },
    },
  },
};

export const Loading: Story = {
  decorators: [NewDesignDecorator],
  args: { isLoading: true },
  parameters: {
    docs: {
      description: {
        story: 'Shows the loading state of the ProfileCard component.',
      },
    },
  },
};
