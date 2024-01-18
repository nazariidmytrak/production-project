import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { Article } from '../../model/types/article';
import {
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from '../../model/constants/articleContants';

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

const article: Article = {
  id: '1',
  user: {
    id: '1',
    username: 'Nazarii',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  title: 'Javascript news',
  subtitle: 'What is new in JS for 2023?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '04.12.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'The title of this block',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus beatae pariatur quibusdam soluta nisi mollitia nemo praesentium aspernatur dolorem.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'The title of this block',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus beatae pariatur quibusdam soluta nisi mollitia nemo praesentium aspernatur dolorem.',
      ],
    },
  ],
};

export const Big = Template.bind({});
Big.args = {
  view: ArticleView.BIG,
  article,
};

export const Small = Template.bind({});
Small.args = {
  view: ArticleView.SMALL,
  article,
};
