import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

const renderCardVariants = () => (
  <>
    <Card variant='normal'>
      <Text title='Normal Card' />
    </Card>
    <Card variant='light'>
      <Text title='Light Card' />
    </Card>
    <Card variant='outlined'>
      <Text title='Outlined Card' />
    </Card>
  </>
);

export const Variants: Story = {
  render: renderCardVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows card variants with Normal, Light, and Outlined styles.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderCardVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows card variants in a dark theme.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderCardVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows card variants in an orange theme.',
      },
    },
  },
};

export const Paddings: Story = {
  render: () => (
    <>
      <Card padding='0'>
        <Text title='Padding: 0' />
      </Card>
      <Card padding='8'>
        <Text title='Padding: 8' />
      </Card>
      <Card padding='16'>
        <Text title='Padding: 16' />
      </Card>
      <Card padding='24'>
        <Text title='Padding: 24' />
      </Card>
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows cards with different padding levels (0, 8, 16, 24).',
      },
    },
  },
};

export const Borders: Story = {
  render: () => (
    <>
      <Card border='normal'>
        <Text title='Normal Border' />
      </Card>
      <Card border='semi-round'>
        <Text title='Semi-round Border' />
      </Card>
      <Card border='round'>
        <Text title='Round Border' />
      </Card>
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows cards with various border styles: Normal, Semi-round, and Round.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <Card fullWidth>
      <Text title='Full Width' />
    </Card>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Displays a full-width card.',
      },
    },
  },
};

export const FullHeight: Story = {
  render: () => (
    <div style={{ height: '50vh' }}>
      <Card fullHeight>
        <Text title='Full Height' />
      </Card>
    </div>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Displays a full-height card.',
      },
    },
  },
};
