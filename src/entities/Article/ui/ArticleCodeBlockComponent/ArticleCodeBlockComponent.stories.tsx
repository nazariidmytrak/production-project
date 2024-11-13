import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ArticleBlockType } from '../../model/constants/articleContants';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  args: {
    block: {
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      type: ArticleBlockType.CODE,
      id: '1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the ArticleCodeBlockComponent component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the ArticleCodeBlockComponent in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the ArticleCodeBlockComponent in orange theme.',
      },
    },
  },
};
