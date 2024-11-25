import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

const defaultStore = StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
});
const errorStore = StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'Error' },
});

export const Primary: Story = {
  decorators: [NewDesignDecorator, defaultStore],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the LoginForm component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, defaultStore, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the LoginForm in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, defaultStore, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the LoginForm in orange theme.',
      },
    },
  },
};

export const Error: Story = {
  decorators: [NewDesignDecorator, errorStore],
  parameters: {
    docs: {
      description: {
        story: 'Shows the error state of the LoginForm component.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  decorators: [defaultStore],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the deprecated LoginForm component.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [defaultStore, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated LoginForm in dark theme.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [defaultStore, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated LoginForm in orange theme.',
      },
    },
  },
};

export const ErrorDeprecated: Story = {
  decorators: [errorStore],
  parameters: {
    docs: {
      description: {
        story: 'Shows the error state of the deprecated LoginForm component.',
      },
    },
  },
};
