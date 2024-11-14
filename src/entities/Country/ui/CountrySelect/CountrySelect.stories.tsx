import type { Decorator, Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/Country/CountrySelect',
  component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

const renderCountrySelectVariants = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      right: '50%',
      display: 'flex',
      gap: 16,
    }}
  >
    <CountrySelect />
    <CountrySelect readonly />
  </div>
);

const createStory = (decorators: Decorator[], description: string): Story => ({
  render: renderCountrySelectVariants,
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
  'Shows the primary state of the CountrySelect component.',
);

export const DarkVariants = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the CountrySelect in dark theme.',
);

export const OrangeVariants = createStory(
  [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the CountrySelect in orange theme.',
);

export const DeprecatedVariants = createStory(
  [FlexDecorator],
  'Shows the primary state of the deprecated CountrySelect component.',
);

export const DeprecatedDarkVariants = createStory(
  [FlexDecorator, ThemeDecorator(Theme.DARK)],
  'Shows the deprecated CountrySelect in dark theme.',
);

export const DeprecatedOrangeVariants = createStory(
  [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  'Shows the deprecated CountrySelect in orange theme.',
);
