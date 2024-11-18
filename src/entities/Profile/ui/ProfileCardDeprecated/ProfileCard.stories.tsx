import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import { profileMockData } from '../../model/helpers/profileMockData';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/Profile/deprecated/ProfileCard',
  component: ProfileCard,
  args: profileMockData,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the deprecated ProfileCard component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated ProfileCard in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated ProfileCard in orange theme.',
      },
    },
  },
};

export const WithError: Story = {
  args: { error: 'Error' },
  parameters: {
    docs: {
      description: {
        story: 'Shows the error state of the deprecated ProfileCard component.',
      },
    },
  },
};

export const Loading: Story = {
  args: { isLoading: true },
  parameters: {
    docs: {
      description: {
        story: 'Shows the loading state of the deprecated ProfileCard component.',
      },
    },
  },
};
