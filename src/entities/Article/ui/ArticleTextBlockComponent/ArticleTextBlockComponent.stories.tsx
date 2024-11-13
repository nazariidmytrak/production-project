import type { Meta, StoryObj } from '@storybook/react';

import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleBlockType } from '../../model/constants/articleContants';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'entities/Article/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  args: {
    block: {
      title: 'Sample Title',
      paragraphs: [
        'First paragraph: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nostrum omnis doloremque voluptatibus beatae et commodi sit excepturi odit ut.',
        'Second paragraph: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, iste nam eaque facere ab sequi provident quis officia dignissimos voluptatem.',
        'Third paragraph: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam cumque saepe, culpa accusamus quidem aut voluptates dolorem. Facere, quidem repellendus!',
      ],
      id: '1',
      type: ArticleBlockType.TEXT,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {
  decorators: [FlexDecorator, NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleTextBlockComponent in light theme.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleTextBlockComponent in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [FlexDecorator, NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the ArticleTextBlockComponent in orange theme.',
      },
    },
  },
};
