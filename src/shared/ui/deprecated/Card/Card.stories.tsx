import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { Text } from '../Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title='test' text='text text' />,
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Text title='test' text='text text' />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
