import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

// Deprecated
import {
  Text as TextDeprecated,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';

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

    const renderTitle = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text size='l' title={t('Recommended')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Recommended')} />}
      />
    );

    const renderErrorMessage = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Text
            size='l'
            text={t('An error occurred while fetching recommended articles')}
            variant='error'
          />
        }
        off={
          <TextDeprecated
            size={TextSize.S}
            title={t('An error occurred while fetching recommended articles')}
            theme={TextTheme.ERROR}
          />
        }
      />
    );

    if (error) {
      return (
        <VStack gap='8' className={classNames('', {}, [className])}>
          {renderTitle}
          {renderErrorMessage}
        </VStack>
      );
    }

    return (
      <VStack
        data-testid='ArticleRecommendationsList'
        gap='8'
        className={classNames('', {}, [className])}
      >
        {renderTitle}
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target='_blank'
        />
      </VStack>
    );
  },
);
