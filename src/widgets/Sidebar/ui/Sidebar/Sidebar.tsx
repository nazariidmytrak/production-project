import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => sidebarItemsList.map((item) => (
      <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    )),
    [collapsed, sidebarItemsList]
  );

  return (
    <aside
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      {/* AppLinks */}
      <VStack role='navigation' gap='8' className={cls.items}>
        {itemsList}
      </VStack>

      {/* Switchers */}
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.theme} />
        <LangSwitcher short={collapsed} />
      </div>

      {/*   Sidebar toggle button */}
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
});
