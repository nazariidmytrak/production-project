import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import Avatar from '@/shared/assets/tests/storybook.png';

export const profileMockData = {
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
