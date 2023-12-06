import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
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
        avatar: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
