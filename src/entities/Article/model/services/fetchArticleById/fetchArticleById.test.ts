import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

const data = {
  id: '1',
  title: 'Test title',
  subtitle: 'Test subtitle',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '04.12.2023',
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'The title of this block',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt.',
      ],
    },
  ],
};

describe('fetchArticleById.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
