import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;


export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default primary link.',
      },
    },
  },
};

export const Error: Story = {
  args: { variant: 'error' },
  parameters: {
    docs: {
      description: {
        story: 'An error link indicating a problem.',
      },
    },
  },
};

export const PrimaryDark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'The primary link in a dark theme.',
      },
    },
  },
};

export const ErrorDark: Story = {
  args: { variant: 'error' },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'An error link in a dark theme.',
      },
    },
  },
};

export const PrimaryOrange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'The primary link in an orange theme.',
      },
    },
  },
};

export const ErrorOrange: Story = {
  args: { variant: 'error' },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'An error link in an orange theme.',
      },
    },
  },
};
