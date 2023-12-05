import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton width={100} height={16} />
          </div>
          <Skeleton width='100%' height={50} />
        </div>
      );
    }

    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          {comment.user.avatar ? (
            <Avatar size={30} src={comment.user.avatar} />
          ) : null}
          <Text title={comment.user.username} />
        </div>
        <Text text={comment.text} />
      </div>
    );
  }
);
