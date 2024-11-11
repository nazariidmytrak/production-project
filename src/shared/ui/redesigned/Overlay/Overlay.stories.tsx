import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'shared/Overlay',
  component: Overlay,
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Overlay component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Overlay component with a dark theme applied.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Overlay component with an orange theme applied.',
      },
    },
  },
};
