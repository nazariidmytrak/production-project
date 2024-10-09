import { HTMLAttributeAnchorTarget, memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/constants/articleContants';
import { ArticleListItemRedesigned } from './redesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from './deprecated/ArticleListItemDeprecated';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  ));
