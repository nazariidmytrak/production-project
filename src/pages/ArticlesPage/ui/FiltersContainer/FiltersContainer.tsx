import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
  const {
    search,
    order,
    sort,
    type,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      search={search}
      order={order}
      sort={sort}
      type={type}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
    />
  );
});
