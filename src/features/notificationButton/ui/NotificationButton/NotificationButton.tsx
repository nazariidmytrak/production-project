import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';
import cls from './NotificationButton.module.scss';

// Deprecated
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated, IconTheme } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/deprecated/notification.svg';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
      setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false);
    }, []);

    const trigger = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
        off={
          <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <IconDeprecated
              Svg={NotificationIconDeprecated}
              theme={IconTheme.INVERTED}
            />
          </ButtonDeprecated>
        }
      />
    );

    return (
      <div>
        <BrowserView>
          <ToggleFeatures
            feature='isAppRedesigned'
            on={
              <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                direction='bottom left'
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </Popover>
            }
            off={
              <PopoverDeprecated
                className={classNames(cls.NotificationButton, {}, [className])}
                direction='bottom left'
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </PopoverDeprecated>
            }
          />
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </MobileView>
      </div>
    );
  },
);
