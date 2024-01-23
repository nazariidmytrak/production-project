import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    id: '1',
    title: 'Notification',
    description: 'Description',
  },
};
Primary.decorators = [StoreDecorator({})];
