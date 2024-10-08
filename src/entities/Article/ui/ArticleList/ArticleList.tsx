import { memo, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/constants/articleContants';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.SMALL,
  }: ArticleListProps) => {
    const { t } = useTranslation('article-details');

    const renderArticle = (article: Article) => (
      <ArticleListItem
        key={article.id}
        className={cls.card}
        article={article}
        view={view}
        target={target}
      />
    );

    if (!isLoading && !articles.length) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <Text size={TextSize.L} title={t('Articles not found')} />
        </div>
      );
    }
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <HStack
            wrap='wrap'
            gap='16'
            data-testid='ArticleList'
            className={classNames(cls.ArticleListRedesigned, {}, [])}
          >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
          </HStack>
        }
        off={
          <div
            data-testid='ArticleList'
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
          </div>
        }
      />
    );
  },
);
