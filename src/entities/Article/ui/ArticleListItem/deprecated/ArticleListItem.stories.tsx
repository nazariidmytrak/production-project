import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ArticleListItem } from '../ArticleListItem';
import { articleMock } from '../../../model/helpers/articleMockData';
import { ArticleView } from '../../../model/constants/articleContants';

const meta: Meta<typeof ArticleListItem> = {
  title: 'entities/Article/deprecated/ArticleListItem',
  component: ArticleListItem,
  args: { article: articleMock },
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Big: Story = {
  args: { view: ArticleView.BIG },
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the big ArticleListItem component.',
      },
    },
  },
};
export const BigDark: Story = {
  args: { view: ArticleView.BIG },
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the big ArticleListItem in dark theme.',
      },
    },
  },
};
export const BigOrange: Story = {
  args: { view: ArticleView.BIG },
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the big ArticleListItem in orange theme.',
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
          'Shows the primary state of the small ArticleListItem component.',
      },
    },
  },
};

export const SmallDark: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the small ArticleListItem in dark theme.',
      },
    },
  },
};

export const SmallOrange: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the small ArticleListItem in orange theme.',
      },
    },
  },
};
