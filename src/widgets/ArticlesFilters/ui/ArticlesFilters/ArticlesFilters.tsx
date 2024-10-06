import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';
import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
  search: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo(
  ({
    className,
    search,
    sort,
    order,
    type,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    onChangeType,
  }: ArticlesFiltersProps) => {
    const { t } = useTranslation('article-details');
    return (
      <Card
        className={classNames(cls.ArticlesFilters, {}, [className])}
        padding='24'
      >
        <VStack gap='32'>
          <Input
            onChange={onChangeSearch}
            value={search}
            placeholder={t('Search')}
          />
          <ArticleTypeTabs value={type} onChangeType={onChangeType} />
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
        </VStack>
      </Card>
    );
  },
);
