import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { ArticleView } from '../../model/constants/articleContants';
import { articleMock } from '../../model/helpers/articleMockData';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

const bigArticleArgs = {
  articles: new Array(3).fill(0).map((item, index) => ({
    ...articleMock,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.BIG,
};

const smallArticleArgs = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...articleMock,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.SMALL,
};

export const Big: Story = {
  args: bigArticleArgs,
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in BIG view with default theme.',
      },
    },
  },
};

export const BigDark: Story = {
  args: bigArticleArgs,
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in BIG view with dark theme.',
      },
    },
  },
};

export const BigOrange: Story = {
  args: bigArticleArgs,
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in BIG view with orange theme.',
      },
    },
  },
};

export const BigLoading: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
  },
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in loading state with BIG view.',
      },
    },
  },
};

export const Small: Story = {
  args: smallArticleArgs,
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in SMALL view with default theme.',
      },
    },
  },
};

export const SmallDark: Story = {
  args: smallArticleArgs,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in SMALL view with dark theme.',
      },
    },
  },
};

export const SmallOrange: Story = {
  args: smallArticleArgs,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in SMALL view with orange theme.',
      },
    },
  },
};

export const SmallLoading: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
  },
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleList in loading state with SMALL view.',
      },
    },
  },
};
