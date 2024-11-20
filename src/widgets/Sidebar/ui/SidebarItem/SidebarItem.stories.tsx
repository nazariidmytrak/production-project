import type { Meta, StoryObj } from '@storybook/react';

import Main from '@/shared/assets/icons/main.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
  title: 'widgets/Siderbar/SidebarItem',
  component: SidebarItem,
  args: { item: { text: 'Main', path: '', Icon: Main } },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the SidebarItem component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the SidebarItem in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the SidebarItem in orange theme.',
      },
    },
  },
};

export const Collapsed: Story = {
  args: { collapsed: true },
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the collapsed state of the SidebarItem component.',
      },
    },
  },
};
