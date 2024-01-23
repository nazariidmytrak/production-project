import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { User, UserRole } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

const user: User = {
  id: '1',
  username: 'admin',
  avatar: 'https://i.pravatar.cc/150?img=6',
  roles: [UserRole.ADMIN],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.decorators = [
  StoreDecorator({
    user: {
      _inited: true,
      authData: user,
    },
  }),
];
