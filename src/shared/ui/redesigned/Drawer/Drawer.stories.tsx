import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
  args: {
    isOpen: true,
    children: 'This is the drawer content',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the Drawer component with content visible.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Drawer component with a dark theme applied.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Drawer component with a orange theme applied.',
      },
    },
  },
};
