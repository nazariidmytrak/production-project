import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { Article } from 'entities/Article';

// eslint-disable-next-line
import { fetchCommentsByArticleId } from '../services/fetchCommentByArticleId/fetchCommentByArticleId';
// eslint-disable-next-line
import { ArticlesDetailsRecommendationsSchema } from '../types/ArticlesDetailsRecommendationsSchema';
// eslint-disable-next-line
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations
      || recommendationsAdapter.getInitialState()
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState:
    recommendationsAdapter.getInitialState<ArticlesDetailsRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// eslint-disable-next-line
export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
