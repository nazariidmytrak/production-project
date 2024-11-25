import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof NotificationButton> = {
  title: 'features/Notification/NotificationButton',
  component: NotificationButton,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the NotificationButton component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the NotificationButton in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the NotificationButton in orange theme.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Shows the deprecated state of the NotificationButton component.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated NotificationButton in dark theme.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated NotificationButton in orange theme.',
      },
    },
  },
};
