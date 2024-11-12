import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/deprecated/Loader',
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Loader component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Loader component with a dark theme applied.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Loader component with an orange theme applied.',
      },
    },
  },
};
