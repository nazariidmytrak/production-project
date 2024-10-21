import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { NotificationButton } from '@/features/notificationButton';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import cls from './Navbar.module.scss';

// Deprecated
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar,
  });

  if (authData) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack className={cls.actions} gap='16'>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(mainClass, {}, [className])}>
            <Text
              className={cls.appName}
              title={t('App name')}
              theme={TextTheme.INVERTED}
            />
            <AppLink
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.SECONDARY}
            >
              {t('Create article')}
            </AppLink>
            <HStack className={cls.actions} gap='16'>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }
  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Button variant='filled' className={cls.links} onClick={onShowModal}>
            {t('Login')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.links}
            onClick={onShowModal}
          >
            {t('Login')}
          </ButtonDeprecated>
        }
      />

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
