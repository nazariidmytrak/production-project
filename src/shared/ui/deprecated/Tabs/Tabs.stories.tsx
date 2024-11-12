import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Tabs, TabItem, TabsProps } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/deprecated/Tabs',
  component: Tabs,
  args: {
    tabs: [
      { value: 'tab 1', content: 'Tab 1 content' },
      { value: 'tab 2', content: 'Tab 2 content' },
      { value: 'tab 3', content: 'Tab 3 content' },
    ],
    value: 'tab 1',
    onTabClick: action('Tab clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const InteractiveTabsStory = (args: TabsProps) => {
  const { value, onTabClick } = args;
  const [selectedTab, setSelectedTab] = useState(value);

  const handleTabClick = (tab: TabItem) => {
    setSelectedTab(tab.value);
    onTabClick(tab);
  };

  return <Tabs {...args} value={selectedTab} onTabClick={handleTabClick} />;
};

export const Primary: Story = {
  render: (args) => <InteractiveTabsStory {...args} />,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Tabs component.',
      },
    },
  },
};

export const Dark: Story = {
  render: (args) => <InteractiveTabsStory {...args} />,
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the dark theme state of the Tabs component.',
      },
    },
  },
};

export const Orange: Story = {
  render: (args) => <InteractiveTabsStory {...args} />,
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the orange theme state of the Tabs component.',
      },
    },
  },
};
