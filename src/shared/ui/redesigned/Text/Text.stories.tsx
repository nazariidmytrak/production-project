import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../../redesigned/Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'shared/Text',
  decorators: [NewDesignDecorator],
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
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  args: baseArgs,
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
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
    variant: 'error',
  },
};

export const ErrorDark: Story = {
  args: {
    ...baseArgs,
    variant: 'error',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
};

export const ErrorOrange: Story = {
  args: {
    ...baseArgs,
    variant: 'error',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
};

// Size
export const SizeS: Story = {
  args: {
    ...baseArgs,
    size: 's',
  },
};

export const SizeM: Story = {
  args: {
    ...baseArgs,
    size: 'm',
  },
};

export const SizeL: Story = {
  args: {
    ...baseArgs,
    size: 'l',
  },
};
