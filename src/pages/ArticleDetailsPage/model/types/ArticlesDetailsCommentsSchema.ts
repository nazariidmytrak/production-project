import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticlesDetailsCommentsSchema extends EntityState<Comment> {
  error?: string;
  isLoading?: boolean;
}
