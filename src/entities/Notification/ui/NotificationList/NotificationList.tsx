import { memo } from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        gap='16'
        max
        className={classNames(
          cls.NotificationList,
          { [cls.loading]: isLoading },
          [className],
        )}
      >
        <Skeleton width='100%' height={80} border='8px' />
        <Skeleton width='100%' height={80} border='8px' />
        <Skeleton width='100%' height={80} border='8px' />
      </VStack>
    );
  }

  return (
    <VStack
      gap='16'
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {notifications?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
