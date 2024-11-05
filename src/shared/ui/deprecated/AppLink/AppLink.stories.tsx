import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/deprecated/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: { theme: AppLinkTheme.PRIMARY },
};

export const Secondary: Story = {
  args: { theme: AppLinkTheme.SECONDARY },
};
