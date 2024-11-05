import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/storybook.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/deprecated/Avatar',
  component: Avatar,
  args: { src: AvatarImg, alt: 'Avatar image' },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: 50 },
};

export const Big: Story = {
  args: { size: 150 },
};
