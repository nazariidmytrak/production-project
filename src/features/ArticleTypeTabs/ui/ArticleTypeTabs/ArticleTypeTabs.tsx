import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs, TabItem } from '@/shared/ui/redesigned/Tabs';
import { ToggleFeatures } from '@/shared/lib/features';

// Deprecated
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';

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
        { value: ArticleType.ALL, content: t('All') },
        { value: ArticleType.IT, content: t('IT') },
        { value: ArticleType.ECONOMICS, content: t('Economics') },
        { value: ArticleType.SCIENCE, content: t('Science') },
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
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            direction='column'
          />
        }
        off={
          <TabsDeprecated
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
          />
        }
      />
    );
  },
);
