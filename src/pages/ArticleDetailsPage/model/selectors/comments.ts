import { StateSchema } from '@/app/providers/StoreProvider';

// eslint-disable-next-line
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
// eslint-disable-next-line
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
