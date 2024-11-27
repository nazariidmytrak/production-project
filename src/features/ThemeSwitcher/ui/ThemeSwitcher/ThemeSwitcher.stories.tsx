import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/Switchers/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the ThemeSwitcher component.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the deprecated ThemeSwitcher component.',
      },
    },
  },
};
