import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLogo } from './AppLogo';

const meta: Meta<typeof AppLogo> = {
  title: 'shared/AppLogo',
  component: AppLogo,
};

export default meta;
type Story = StoryObj<typeof AppLogo>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the default appearance of the AppLogo.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the AppLogo in a dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the AppLogo in an orange theme.',
      },
    },
  },
};
