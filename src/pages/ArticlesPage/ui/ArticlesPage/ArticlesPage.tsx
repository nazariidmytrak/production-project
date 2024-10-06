import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { ArticlesPageGreeting } from '@/features/articlesPageGreeting';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
// eslint-disable-next-line
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <Page
              data-testid='ArticlesPage'
              className={classNames(cls.ArticlesPage, {}, [className])}
              onScrollEnd={onLoadNextPart}
            >
              <VStack gap='32' max>
                <ArticleInfiniteList />
                <ArticlesPageGreeting />
              </VStack>
            </Page>
          }
        />
      }
      off={
        <Page
          data-testid='ArticlesPage'
          className={classNames(cls.ArticlesPage, {}, [className])}
          onScrollEnd={onLoadNextPart}
        >
          <VStack gap='32' max>
            <ArticlesPageFilters />
            <ArticleInfiniteList />
            <ArticlesPageGreeting />
          </VStack>
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
