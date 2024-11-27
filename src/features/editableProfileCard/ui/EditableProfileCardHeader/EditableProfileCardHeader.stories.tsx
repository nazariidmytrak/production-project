import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof EditableProfileCardHeader> = {
  title: 'features/Profile/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the EditableProfileCardHeader component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the EditableProfileCardHeader in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the EditableProfileCardHeader in orange theme.',
      },
    },
  },
};
