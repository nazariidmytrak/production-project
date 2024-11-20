import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { SidebarRedesigned as Sidebar } from './SidebarRedesigned';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Siderbar/Sidebar',
  component: Sidebar,
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <Sidebar />
    </div>
  ),
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Sidebar component.',
      },
    },
  },
};

export const Dark: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <Sidebar />
    </div>
  ),
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Sidebar in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <Sidebar />
    </div>
  ),
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Sidebar in orange theme.',
      },
    },
  },
};

export const NoAuth: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <Sidebar />
    </div>
  ),
  decorators: [NewDesignDecorator, StoreDecorator({ user: {} })],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Sidebar component.',
      },
    },
  },
};
