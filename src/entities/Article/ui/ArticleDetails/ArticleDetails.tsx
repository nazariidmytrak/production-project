import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from '@/shared/ui/redesigned/Text';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleDetailsRedesigned } from './redesigned/ArticleDetailsRedesigned';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

// Deprecated
import { ArticleDetailsDeprecated } from './deprecated/ArticleDetailsDeprecated';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';

interface ArticleDetailsProps {
  id?: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  /* useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);
 */
  let content;
  if (isLoading) {
    content = <ArticleDetailsSkeleton />;
  } else if (error) {
    content = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text title={t('Error')} align='center' />}
        off={<TextDeprecated align={TextAlign.CENTER} title={t('Error')} />}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ArticleDetailsRedesigned article={article} />}
        off={<ArticleDetailsDeprecated article={article} />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap='16' max className={classNames('', {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
