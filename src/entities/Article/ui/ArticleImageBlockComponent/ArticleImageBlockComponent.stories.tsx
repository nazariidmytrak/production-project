import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleBlockType } from '../../model/constants/articleContants';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'entities/Article/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  args: {
    block: {
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      id: '1',
      type: ArticleBlockType.IMAGE,
      title: 'Title',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Shows the primary state of the ArticleImageBlockComponent component.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleImageBlockComponent in dark theme.',
      },
    },
  },
};
export const Orange: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleImageBlockComponent in orange theme.',
      },
    },
  },
};
