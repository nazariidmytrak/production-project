import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  title: 'features/Switchers/LangSwitcher',
  component: LangSwitcher,
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the LangSwitcher component.',
      },
    },
  },
};

export const Short: Story = {
  args: { short: true },
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the LangSwitcher component.',
      },
    },
  },
};
