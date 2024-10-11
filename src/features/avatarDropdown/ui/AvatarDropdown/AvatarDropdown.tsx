import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  getUserAuthData,
  userActions,
  getIsAdminPanelAvailable,
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

// Deprecated
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdminPanelAvailable = useSelector(getIsAdminPanelAvailable);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Admin'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('Profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('Settings'),
      href: getRouteSettings(),
    },
    {
      content: t('Logout'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          items={items}
          trigger={<Avatar src={authData.avatar} size={40} />}
          direction='bottom left'
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          items={items}
          trigger={<AvatarDeprecated src={authData.avatar} size={30} />}
          direction='bottom left'
        />
      }
    />
  );
});
