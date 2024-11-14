import type { Meta, StoryObj, Decorator } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  args: {
    comment: {
      id: '1',
      text: 'Comment example 1',
      user: {
        id: '1',
        username: 'Admin',
        avatar: 'https://i.pravatar.cc/150?img=6',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const createStory = (
  decorators: Decorator[],
  description: string,
  args = {},
): Story => ({
  args,
  decorators,
  parameters: {
    docs: {
      description: {
        story: description,
      },
    },
  },
});

export const Primary = createStory(
  [FlexDecorator, NewDesignDecorator],
  'Shows the primary state of the CommentCard component.',
);

export const Dark = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the CommentCard in dark theme.',
);

export const Orange = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the CommentCard in orange theme.',
);

export const Loading = createStory(
  [FlexDecorator, NewDesignDecorator],
  'Shows the CommentCard in loading state.',
  { isLoading: true },
);

export const DeprecatedPrimary = createStory(
  [FlexDecorator],
  'Shows the primary state of the deprecated CommentCard component.',
);

export const DeprecatedDark = createStory(
  [FlexDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the deprecated CommentCard in dark theme.',
);

export const DeprecatedOrange = createStory(
  [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the deprecated CommentCard in orange theme.',
);
