import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  view: ArticleView;
  error?: string;
  isLoading?: boolean;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
}
