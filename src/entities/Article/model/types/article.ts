import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../constants/articleContants';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
  type: ArticleBlockType.CODE;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  src: string;
  title: string;
  type: ArticleBlockType.IMAGE;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  title?: string;
  paragraphs: string[];
  type: ArticleBlockType.TEXT;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface Article {
  id: string;
  user: User;
  img: string;
  views: number;
  title: string;
  subtitle: string;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
