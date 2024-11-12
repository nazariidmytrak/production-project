import { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Popover } from './Popover';
import { Button } from '../../../Button';

const meta: Meta<typeof Popover> = {
  title: 'shared/deprecated/popups/Popover',
  component: Popover,
  args: {
    trigger: <Button>Popover Trigger</Button>,
    children: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur
        non placeat assumenda rem magnam natus itaque nam ex eligendi?
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Popover component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Popover component in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Popover component in orange theme.',
      },
    },
  },
};
