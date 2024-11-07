import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from '../Text';
import { Card, CardTheme } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/deprecated/Card',
  component: Card,
  args: { children: <Text title='Title' text='Text' /> },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const Outlined: Story = {
  args: { theme: CardTheme.OUTLINED },
};

export const DarkOutlined: Story = {
  args: { theme: CardTheme.OUTLINED },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeOutlined: Story = {
  args: { theme: CardTheme.OUTLINED },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
