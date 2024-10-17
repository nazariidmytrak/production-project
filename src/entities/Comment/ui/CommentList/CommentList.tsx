import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

// Deprecated
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

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
          <ToggleFeatures
            feature='isAppRedesigned'
            on={<Text text={t('No comment')} />}
            off={<TextDeprecated text={t('No comment')} />}
          />
        )}
      </VStack>
    );
  },
);
