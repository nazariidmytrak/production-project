import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
