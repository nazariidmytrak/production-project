import { User } from 'entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

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

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

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
