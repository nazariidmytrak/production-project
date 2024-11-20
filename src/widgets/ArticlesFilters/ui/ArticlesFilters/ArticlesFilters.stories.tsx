import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticlesFilters } from './ArticlesFilters';

const meta: Meta<typeof ArticlesFilters> = {
  title: 'widgets/ArticlesFilters',
  component: ArticlesFilters,
  args: {
    search: '',
    sort: ArticleSortField.TITLE,
    order: 'asc',
    type: ArticleType.ALL,
    onChangeSearch: () => {},
    onChangeOrder: () => {},
    onChangeSort: () => {},
    onChangeType: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the ArticlesFilters component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticlesFilters in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticlesFilters in orange theme.',
      },
    },
  },
};
