import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/deprecated/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation('article-details');
    const typeTabs = useMemo<TabItem[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('All'),
        },
        {
          value: ArticleType.IT,
          content: t('IT'),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('Economics'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Science'),
        },
      ],
      [t],
    );

    const onTabClick = useCallback(
      (tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
      },
      [onChangeType],
    );

    return (
      <Tabs
        className={classNames('', {}, [className])}
        tabs={typeTabs}
        value={value}
        onTabClick={onTabClick}
      />
    );
  },
);
