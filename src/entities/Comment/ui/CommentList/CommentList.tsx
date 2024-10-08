import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('article-details');

    if (isLoading) {
      return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }
    return (
      <VStack gap='16' max className={classNames('', {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              isLoading={isLoading}
              comment={comment}
            />
          ))
        ) : (
          <Text text={t('No comment')} />
        )}
      </VStack>
    );
  },
);
