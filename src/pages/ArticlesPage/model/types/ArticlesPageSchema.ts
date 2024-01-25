import { EntityState } from '@reduxjs/toolkit';

import {
  ArticleSortField,
  ArticleType,
  Article,
  ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string;
  isLoading?: boolean;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
