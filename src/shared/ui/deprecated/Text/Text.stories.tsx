import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'shared/deprecated/Text',
};

export default meta;
type Story = StoryObj<typeof Text>;

const baseArgs = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
};

export const Primary: Story = {
  args: baseArgs,
};

export const Dark: Story = {
  args: baseArgs,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  args: baseArgs,
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const onlyTitle: Story = {
  args: {
    title: 'Title lorem ipsum',
  },
};

export const onlyText: Story = {
  args: {
    text: 'Text lorem ipsum',
  },
};

// Error
export const Error: Story = {
  args: {
    ...baseArgs,
    theme: TextTheme.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    ...baseArgs,
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorOrange: Story = {
  args: {
    ...baseArgs,
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

// Size
export const SizeS: Story = {
  args: {
    ...baseArgs,
    size: TextSize.S,
  },
};

export const SizeM: Story = {
  args: {
    ...baseArgs,
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    ...baseArgs,
    size: TextSize.L,
  },
};
