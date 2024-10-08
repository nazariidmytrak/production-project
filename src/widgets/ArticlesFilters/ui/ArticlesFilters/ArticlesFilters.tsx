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
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';
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
            size='s'
            placeholder={t('Search')}
            addonLeft={<Icon Svg={SearchIcon} />}
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
