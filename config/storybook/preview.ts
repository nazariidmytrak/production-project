import { Preview } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
// eslint-disable-next-line
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    FeatureFlagsDecorator({}),
  ],
  parameters: {
    actions: {
      handles: ['click', 'mouseover'],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
};

export default preview;

export const tags = ['autodocs'];
