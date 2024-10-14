import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleEditButton } from '@/features/ArticleEditButton';
import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
}

export const ArticleAdditionalInfo = memo(
  ({ className, author, createdAt, views }: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation('article-details');

    return (
      <VStack gap='32' className={className}>
        <HStack gap='8'>
          <Avatar src={author.avatar} size={32} />
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </HStack>
        <ArticleEditButton />
        <Text text={t('views', { count: views })} />
      </VStack>
    );
  },
);
