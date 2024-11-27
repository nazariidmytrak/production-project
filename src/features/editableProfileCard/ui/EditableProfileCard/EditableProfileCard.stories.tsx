import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCard } from './EditableProfileCard';
import { profileCardMockData } from '../../model/helpers/ProfileCardMockData';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/Profile/EditableProfileCard',
  component: EditableProfileCard,
  decorators: [StoreDecorator({ profile: { form: profileCardMockData } })],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the EditableProfileCard component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the EditableProfileCard in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the EditableProfileCard in orange theme.',
      },
    },
  },
};
