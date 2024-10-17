import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

// Deprecated
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    if (isLoading) {
      return (
        <VStack
          data-testid='CommentCard.Loading'
          gap='8'
          max
          className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        >
          <HStack gap='8'>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton width={100} height={16} />
          </HStack>
          <Skeleton width='100%' height={50} />
        </VStack>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card padding='24' border='round' fullWidth>
            <VStack
              data-testid='CommentCard.Content'
              gap='8'
              max
              className={classNames('', {}, [className])}
            >
              <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack gap='8'>
                  {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                  ) : null}
                  <Text text={comment.user.username} bold />
                </HStack>
              </AppLink>
              <Text text={comment.text} />
            </VStack>
          </Card>
        }
        off={
          <VStack
            data-testid='CommentCard.Content'
            gap='8'
            max
            className={classNames(cls.CommentCard, {}, [className])}
          >
            <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
              <HStack gap='8'>
                {comment.user.avatar ? (
                  <AvatarDeprecated size={30} src={comment.user.avatar} />
                ) : null}
                <TextDeprecated title={comment.user.username} />
              </HStack>
            </AppLinkDeprecated>
            <TextDeprecated text={comment.text} />
          </VStack>
        }
      />
    );
  },
);
