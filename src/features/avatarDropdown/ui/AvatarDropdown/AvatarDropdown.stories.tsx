/* const user: User = {
  id: '1',
  username: 'admin',
  avatar: 'https://i.pravatar.cc/150?img=6',
  roles: [UserRole.ADMIN],
}; */

/* export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    user: {
      _inited: true,
      authData: user,
    },
  }),
];
 */

import type { Meta, StoryObj } from '@storybook/react';

import { User, UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { AvatarDropdown } from './AvatarDropdown';

const user: User = {
  id: '1',
  username: 'admin',
  avatar: 'https://i.pravatar.cc/150?img=6',
  roles: [UserRole.ADMIN],
};

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [
    StoreDecorator({
      user: {
        _inited: true,
        authData: user,
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the AvatarDropdown component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the AvatarDropdown in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the AvatarDropdown in orange theme.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated state of the AvatarDropdown component.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated AvatarDropdown in dark theme.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated AvatarDropdown in orange theme.',
      },
    },
  },
};
