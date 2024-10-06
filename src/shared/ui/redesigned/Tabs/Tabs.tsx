import { ReactNode, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs = memo(
  ({ className, tabs, value, onTabClick, direction = 'row' }: TabsProps) => {
    const renderedTabs = useMemo(
      () =>
        tabs.map((tab) => {
          const isSelected = tab.value === value;
          return (
            <Card
              variant={isSelected ? 'light' : 'normal'}
              className={classNames(cls.tab, { [cls.selected]: isSelected })}
              key={tab.value}
              onClick={() => onTabClick(tab)}
              border='round'
            >
              {tab.content}
            </Card>
          );
        }),
      [tabs, value, onTabClick],
    );

    return (
      <Flex
        direction={direction}
        align='start'
        gap='8'
        className={classNames(cls.Tabs, {}, [className])}
      >
        {renderedTabs}
      </Flex>
    );
  },
);
