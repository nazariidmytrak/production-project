import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta: Meta<typeof UiDesignSwitcher> = {
  title: 'features/Switchers/UiDesignSwitcher',
  component: UiDesignSwitcher,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the UiDesignSwitcher component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the UiDesignSwitcher in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the UiDesignSwitcher in orange theme.',
      },
    },
  },
};
