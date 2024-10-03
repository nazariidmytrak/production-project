import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { SidebarItem } from '../../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../../model/selectors/getSidebarItems';
import cls from './SidebarDeprecated.module.scss';

interface SidebarDeprecatedProps {
  className?: string;
}

export const SidebarDeprecated = memo(
  ({ className }: SidebarDeprecatedProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
      setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
      () =>
        sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        )),
      [collapsed, sidebarItemsList],
    );

    return (
      <aside
        data-testid='sidebar'
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
          className,
        ])}
      >
        <VStack role='navigation' gap='8' className={cls.items}>
          {itemsList}
        </VStack>
        <div className={cls.switchers}>
          <ThemeSwitcher className={cls.theme} />
          <LangSwitcher short={collapsed} />
        </div>
        <Button
          data-testid='sidebar-toggle'
          type='button'
          onClick={onToggle}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          size={ButtonSize.L}
          square
          className={cls.collapseBtn}
        >
          {collapsed ? '>' : '<'}
        </Button>
      </aside>
    );
  },
);
