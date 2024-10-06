import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('article-details');

    const {
      view,
      search,
      order,
      sort,
      type,
      onChangeOrder,
      onChangeSearch,
      onChangeSort,
      onChangeType,
      onChangeView,
    } = useArticleFilters();

    return (
      <VStack gap='16' max className={classNames('', {}, [className])}>
        <HStack justify='between' max>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </HStack>
        <Card className={cls.search}>
          <Input
            onChange={onChangeSearch}
            value={search}
            placeholder={t('Search')}
          />
        </Card>
        <ArticleTypeTabs value={type} onChangeType={onChangeType} />
      </VStack>
    );
  },
);
