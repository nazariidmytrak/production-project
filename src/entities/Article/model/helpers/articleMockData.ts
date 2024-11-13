// articleMockData.ts

import { ArticleType, ArticleBlockType } from '../constants/articleContants';
import { Article } from '../types/article';

export const articleMock: Article = {
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
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus beatae pariatur quibusdam soluta nisi mollitia nemo praesentium aspernatur dolorem.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      // eslint-disable-next-line max-len
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'The title of this block',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt.',
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus beatae pariatur quibusdam soluta nisi mollitia nemo praesentium aspernatur dolorem.',
      ],
    },
  ],
};
