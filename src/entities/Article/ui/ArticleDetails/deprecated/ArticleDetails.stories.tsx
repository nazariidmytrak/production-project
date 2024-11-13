import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetails } from '../ArticleDetails';
import { articleMock } from '../../../model/helpers/articleMockData';

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/Article/deprecated/ArticleDetails',
  component: ArticleDetails,
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
  decorators: [StoreDecorator({ articleDetails: { data: articleMock } })],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the ArticleDetails component.',
      },
    },
  },
};
export const Dark: Story = {
  decorators: [
    StoreDecorator({ articleDetails: { data: articleMock } }),
    ThemeDecorator(Theme.DARK),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleDetails in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [
    StoreDecorator({ articleDetails: { data: articleMock } }),
    ThemeDecorator(Theme.ORANGE),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleDetails in orange theme.',
      },
    },
  },
};

export const Loading: Story = {
  decorators: [StoreDecorator({ articleDetails: { isLoading: true } })],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleDetails in loading state.',
      },
    },
  },
};

export const Error: Story = {
  decorators: [StoreDecorator({ articleDetails: { error: 'Error' } })],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleDetails when error occured.',
      },
    },
  },
};
