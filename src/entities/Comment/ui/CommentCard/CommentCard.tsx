import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <VStack
          data-testid='CommentCard.Loading'
          gap='8'
          max
          className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        >
          <div className={cls.header}>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton width={100} height={16} />
          </div>
          <Skeleton width='100%' height={50} />
        </VStack>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <VStack
        data-testid='CommentCard.Content'
        gap='8'
        max
        className={classNames(cls.CommentCard, {}, [className])}
      >
        <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
          {comment.user.avatar ? (
            <Avatar size={30} src={comment.user.avatar} />
          ) : null}
          <Text title={comment.user.username} />
        </AppLink>
        <Text text={comment.text} />
      </VStack>
    );
  },
);
