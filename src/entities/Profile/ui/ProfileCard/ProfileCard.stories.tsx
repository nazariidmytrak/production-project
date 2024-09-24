import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import Avatar from '@/shared/assets/tests/storybook.png';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  data: {
    firstname: 'FirstName',
    lastname: 'LastName',
    username: 'Username',
    age: 24,
    country: Country.UKRAINE,
    city: 'City',
    currency: Currency.USD,
    avatar: Avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
