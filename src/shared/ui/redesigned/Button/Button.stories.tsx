import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import ArrowSvg from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../Icon';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const renderButtonVariants = () => (
  <>
    <Button variant='clear'>Clear</Button>
    <Button variant='outline'>Outline</Button>
    <Button variant='filled'>Filled</Button>
    <Button disabled>Disabled</Button>
  </>
);

export const Variants: Story = {
  render: renderButtonVariants,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows basic button variants: Clear, Outline, Filled, and Disabled.',
      },
    },
  },
};

export const DarkVariants: Story = {
  render: renderButtonVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows button variants with a dark theme applied.',
      },
    },
  },
};

export const OrangeVariants: Story = {
  render: renderButtonVariants,
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows button variants with an orange theme applied.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size='m'>Size M</Button>
      <Button size='l'>Size L</Button>
      <Button size='xl'>Size XL</Button>
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows button sizes: Medium (M), Large (L), and Extra Large (XL).',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <>
      <Button color='normal'>Normal</Button>
      <Button color='success'>Success</Button>
      <Button color='error'>Error</Button>
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows button color options: Normal, Success, and Error.',
      },
    },
  },
};

export const WithAddons: Story = {
  render: () => (
    <>
      <Button addonLeft={<Icon Svg={ArrowSvg} />}>Addon Left</Button>
      <Button addonRight={<Icon Svg={ArrowSvg} />}>Addon Right</Button>
    </>
  ),
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows buttons with left and right icon addons.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => <Button fullWidth>Full width</Button>,
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows full width button.',
      },
    },
  },
};
