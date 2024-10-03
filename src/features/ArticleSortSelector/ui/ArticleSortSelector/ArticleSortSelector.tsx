import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { SortOrder } from '@/shared/types/sort';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article-details');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('Ascending'),
        },
        {
          value: 'desc',
          content: t('Descending'),
        },
      ],
      [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('Date of creation'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('Title'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('Views'),
        },
      ],
      [t],
    );

    return (
      <HStack gap='16' className={classNames('', {}, [className])}>
        <Select
          options={sortFieldOptions}
          label={t('Sort by')}
          value={sort}
          onChange={onChangeSort}
        />
        <Select
          options={orderOptions}
          label={t('Order')}
          value={order}
          onChange={onChangeOrder}
        />
      </HStack>
    );
  },
);
