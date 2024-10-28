import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

const args = {
  comment: {
    id: '1',
    text: 'Comment example 1',
    user: {
      id: '1',
      username: 'Admin',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
  },
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = args;
PrimaryRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true }),
];

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'Comment example 1',
    user: { id: '1', username: 'John' },
  },
  isLoading: true,
};
