import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';

import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(
  ({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
      return <Text text={t('An error occurred while fetching articles')} />;
    }

    return (
      <ArticleList
        className={className}
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    );
  },
);
