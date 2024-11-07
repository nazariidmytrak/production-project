import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the redesigned Code component in the light theme.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the redesigned Code component in the dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the redesigned Code component in the orange theme.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  decorators: [FlexDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated Code component in the light theme.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [FlexDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated Code component in the dark theme.',
      },
    },
  },
};
export const OrangeDeprecated: Story = {
  decorators: [FlexDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated Code component in the orange theme.',
      },
    },
  },
};
