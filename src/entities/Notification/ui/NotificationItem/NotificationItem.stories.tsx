import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  args: {
    item: {
      id: '1',
      title: 'Notification',
      description: 'Description',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the NotificationItem component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the NotificationItem in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the NotificationItem in orange theme.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the deprecated NotificationItem component.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated NotificationItem in dark theme.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated NotificationItem in orange theme.',
      },
    },
  },
};
