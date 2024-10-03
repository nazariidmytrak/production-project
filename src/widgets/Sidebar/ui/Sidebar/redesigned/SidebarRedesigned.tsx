import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { SidebarItem } from '../../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../../model/selectors/getSidebarItems';
import cls from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
  className?: string;
}

export const SidebarRedesigned = memo(
  ({ className }: SidebarRedesignedProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => setCollapsed((prev) => !prev);

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
        {/* App Logo */}
        <AppLogo className={cls.appLogo} size={collapsed ? 30 : 80} />

        {/* Sidebar menu */}
        <VStack role='navigation' gap='8' className={cls.items}>
          {itemsList}
        </VStack>

        {/* Sidebar toggle button */}
        <Icon
          data-testid='sidebar-toggle'
          className={cls.collapseBtn}
          onClick={onToggle}
          Svg={ArrowIcon}
          clickable
        />

        {/*  Switchers */}
        <HStack className={cls.switchers} gap='16'>
          <ThemeSwitcher className={cls.theme} />
          <LangSwitcher short={collapsed} />
        </HStack>
      </aside>
    );
  },
);
