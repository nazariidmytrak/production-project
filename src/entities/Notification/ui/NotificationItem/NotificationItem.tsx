import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

// Deprecated
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(
  ({ className, item }: NotificationItemProps) => {
    const content = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card
            className={classNames(cls.NotificationItem, {}, [className])}
            variant='outlined'
            padding='16'
          >
            <Text title={item.title} text={item.description} />
          </Card>
        }
        off={
          <CardDeprecated
            className={classNames(cls.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
          >
            <TextDeprecated title={item.title} text={item.description} />
          </CardDeprecated>
        }
      />
    );

    if (item.href) {
      return (
        <a
          className={cls.link}
          href={item.href}
          target='_blank'
          rel='noreferrer'
        >
          {content}
        </a>
      );
    }

    return content;
  },
);
