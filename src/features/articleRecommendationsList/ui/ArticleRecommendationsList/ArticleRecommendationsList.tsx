import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  ({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles = [],
      error,
    } = useArticleRecommendationsList(4);

    if (error) {
      return (
        <VStack gap='8' className={classNames('', {}, [className])}>
          <Text size={TextSize.L} title={t('Recommended')} />

          <Text
            size={TextSize.S}
            title={t('An error occurred while fetching recommended articles')}
            theme={TextTheme.ERROR}
          />
        </VStack>
      );
    }

    return (
      <VStack gap='8' className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Recommended')} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target='_blank'
        />
      </VStack>
    );
  }
);
