import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleListItem } from '../ArticleListItem';
import { articleMock } from '../../../model/helpers/articleMockData';
import { ArticleView } from '../../../model/constants/articleContants';

const meta: Meta<typeof ArticleListItem> = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  args: { article: articleMock },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Big: Story = {
  args: { view: ArticleView.BIG },
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleListItem in BIG view with default theme.',
      },
    },
  },
};
export const BigDark: Story = {
  args: { view: ArticleView.BIG },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows ArticleListItem in BIG view with dark theme.',
      },
    },
  },
};
export const BigOrange: Story = {
  args: { view: ArticleView.BIG },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story:  'Shows ArticleListItem in BIG view with orange theme.',
      },
    },
  },
};

export const Small: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
         'Shows ArticleListItem in SMALL view with default theme.',
      },
    },
  },
};

export const SmallDark: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story:  'Shows ArticleListItem in SMALL view with dark theme.',
      },
    },
  },
};

export const SmallOrange: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story:  'Shows ArticleListItem in SMALL view with orange theme.',
      },
    },
  },
};
