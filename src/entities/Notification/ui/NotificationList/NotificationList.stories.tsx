import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notification';

const notification: Notification = {
  id: '1',
  title: 'Notification title',
  description: 'Notification description',
};

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          { ...notification, id: '1' },
          { ...notification, id: '2' },
          { ...notification, id: '3' },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
  decorators: [NewDesignDecorator, StoreDecorator({})],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the NotificationList component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [
    StoreDecorator({}),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
  ],
  parameters: {
    docs: {
      description: { story: 'Shows the NotificationList in dark theme.' },
    },
  },
};

export const Orange: Story = {
  decorators: [
    StoreDecorator({}),
    NewDesignDecorator,
    ThemeDecorator(Theme.ORANGE),
  ],
  parameters: {
    docs: {
      description: { story: 'Shows the NotificationList in orange theme.' },
    },
  },
};

export const PrimaryDeprecated: Story = {
  decorators: [StoreDecorator({})],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the deprecated NotificationList component.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated NotificationList in dark theme.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated NotificationList in orange theme.',
      },
    },
  },
};
