import type { Meta, StoryObj, Decorator } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  args: {
    comments: [
      {
        id: '1',
        text: 'Comment example',
        user: {
          id: '1',
          username: 'Admin',
          avatar: 'https://i.pravatar.cc/150?img=6',
        },
      },
      {
        id: '2',
        text: 'Comment example 2',
        user: {
          id: '1',
          username: 'John',
          avatar: 'https://i.pravatar.cc/150?img=6',
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

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
  'Shows the primary state of the CommentList component.',
);

export const Dark = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the CommentList in dark theme.',
);

export const Orange = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the CommentList in orange theme.',
);

export const Loading = createStory(
  [FlexDecorator, NewDesignDecorator],
  'Shows the CommentList component in loading state.',
  { isLoading: true },
);

export const PrimaryDeprecated = createStory(
  [FlexDecorator],
  'Shows the primary state of the deprecated CommentList component.',
);

export const DarkDeprecated = createStory(
  [FlexDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the deprecated CommentList in dark theme.',
);

export const OrangeDeprecated = createStory(
  [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the deprecated CommentList in orange theme.',
);
