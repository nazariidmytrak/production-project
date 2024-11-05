import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/storybook.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: { src: AvatarImg, alt: 'Avatar image' },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the default version of Avatar.',
      },
    },
  },
};

export const Small: Story = {
  args: { size: 50 },
  parameters: {
    docs: {
      description: {
        story: 'Shows the small version of Avatar',
      },
    },
  },
};

export const Big: Story = {
  args: { size: 150 },
  parameters: {
    docs: {
      description: {
        story: 'Shows the bigger version of Avatar',
      },
    },
  },
};
