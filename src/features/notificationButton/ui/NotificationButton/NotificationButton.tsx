import { memo } from 'react';

import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} theme={IconTheme.INVERTED} />
        </Button>
        }
      direction='bottom left'
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  )
);
