import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageGreeting } from './ArticlesPageGreeting';

export default {
  title: 'features/ArticlesPageGreeting',
  component: ArticlesPageGreeting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageGreeting>;

const Template: ComponentStory<typeof ArticlesPageGreeting> = () => (
  <ArticlesPageGreeting />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/users`,
      method: 'GET',
      status: 200,
      response: [{ hasArticlesPageBeenOpened: false }],
    },
  ],
};
