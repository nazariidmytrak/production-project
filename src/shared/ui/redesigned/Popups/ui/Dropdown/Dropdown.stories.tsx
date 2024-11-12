import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/popups/Dropdown',
  component: Dropdown,
  args: {
    items: [
      { content: 'Item 1', onClick: action('Item 1 clicked') },
      { content: 'Item 2', onClick: action('Item 2 clicked') },
      { content: 'Item 3', onClick: action('Item 3 clicked') },
    ],
    trigger: <Button>Dropdown Trigger</Button>,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Dropdown component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Dropdown component in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Dropdown component in orange theme.',
      },
    },
  },
};
