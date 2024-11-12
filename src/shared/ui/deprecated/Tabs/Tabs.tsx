import { ReactNode, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card';
import { HStack } from '../../redesigned/Stack';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const Tabs = memo(
  ({ className, tabs, value, onTabClick }: TabsProps) => {
    const clickHandle = useCallback(
      (tab: TabItem) => () => {
        onTabClick(tab);
      },
      [onTabClick],
    );

    return (
      <HStack gap='8' className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <Card
            key={tab.value}
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        ))}
      </HStack>
    );
  },
);
