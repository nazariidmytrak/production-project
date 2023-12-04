import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import {
  ArticleBlockType,
  ArticleTextBlock,
  ArticleType,
} from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
  id: '1',
  title: 'Test title',
  subtitle: 'Test subtitle',
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
      ],
    } as ArticleTextBlock,
  ],
};

describe('articleDetailsSlice.test', () => {
  test('test fetch article service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({
      isLoading: true,
    });
  });

  test('test fetch article service fullfiled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(data, '', '1')
      )
    ).toEqual({
      isLoading: false,
      data,
    });
  });
});
