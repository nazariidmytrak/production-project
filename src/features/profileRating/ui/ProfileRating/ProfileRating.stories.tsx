import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import ProfileRating from './ProfileRating';

const commonMockData = (response: object) => [
  {
    url: `${__API__}/profile-ratings?userId=1&profileId=1`,
    method: 'GET',
    status: 200,
    response,
  },
];

const meta: Meta<typeof ProfileRating> = {
  title: 'features/Profile/ProfileRating',
  component: ProfileRating,
  args: {
    profileId: '1',
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Primary state of ProfileRating with a rating fetched from the server.',
      },
    },
    mockData: commonMockData([{ rate: 4 }]),
  },
};

export const DarkTheme: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ProfileRating in dark theme.',
      },
    },
    mockData: commonMockData([{ rate: 4 }]),
  },
};

export const OrangeTheme: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ProfileRating in orange theme.',
      },
    },
    mockData: commonMockData([{ rate: 4 }]),
  },
};

export const WithoutRate: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'State of ProfileRating when no rating is available.',
      },
    },
    mockData: commonMockData([]),
  },
};
