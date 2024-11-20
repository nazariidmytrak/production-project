import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '@/shared/assets/tests/storybook.png';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

const meta: Meta<typeof ArticleAdditionalInfo> = {
  title: 'widgets/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  args: {
    createdAt: '20.20.20',
    views: 100,
    author: { username: 'username', id: '1', avatar: Avatar },
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleAdditionalInfo>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the ArticleAdditionalInfo component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleAdditionalInfo in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleAdditionalInfo in orange theme.',
      },
    },
  },
};
