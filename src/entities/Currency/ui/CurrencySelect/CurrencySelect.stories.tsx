import type { Decorator, Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/Currency/CurrencySelect',
  component: CurrencySelect,
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

const renderCurrencySelectVariants = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      right: '50%',
      display: 'flex',
      gap: 16,
    }}
  >
    <CurrencySelect />
    <CurrencySelect readonly />
  </div>
);

const createStory = (decorators: Decorator[], description: string): Story => ({
  render: renderCurrencySelectVariants,
  decorators,
  parameters: {
    docs: {
      description: {
        story: description,
      },
    },
  },
});

export const Variants = createStory(
  [FlexDecorator, NewDesignDecorator],
  'Shows the primary state of the CurrencySelect component.',
);

export const DarkVariants = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the CurrencySelect in dark theme.',
);

export const OrangeVariants = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the CurrencySelect in orange theme.',
);

export const DeprecatedVariants = createStory(
  [FlexDecorator],
  'Shows the primary state of the deprecated CurrencySelect component.',
);

export const DeprecatedDarkVariants = createStory(
  [FlexDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the deprecated CurrencySelect in dark theme.',
);

export const DeprecatedOrangeVariants = createStory(
  [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the deprecated CurrencySelect in orange theme.',
);
