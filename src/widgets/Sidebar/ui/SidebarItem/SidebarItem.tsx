import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const { Icon, path, text } = item;

  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <Icon className={cls.icon} />
      <span className={cls.link}>{t(text)}</span>
    </AppLink>
  );
});
