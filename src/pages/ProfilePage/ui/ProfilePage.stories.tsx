import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Avatar from 'shared/assets/tests/storybook.png';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        firstname: 'FirstName',
        lastname: 'LastName',
        username: 'Username',
        age: 24,
        country: Country.UKRAINE,
        city: 'City',
        currency: Currency.USD,
        avatar: Avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        firstname: 'FirstName',
        lastname: 'LastName',
        username: 'Username',
        age: 24,
        country: Country.UKRAINE,
        city: 'City',
        currency: Currency.USD,
        avatar: Avatar,
      },
    },
  }),
];
