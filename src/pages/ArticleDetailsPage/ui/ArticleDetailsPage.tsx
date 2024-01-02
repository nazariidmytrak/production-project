import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import cls from './ArticlesDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
// eslint-disable-next-line
import { fetchCommentsByArticleId } from '../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendations } from '../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
// eslint-disable-next-line
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slices';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        {t('Article not found')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
        <Button className={cls.backBtn} onClick={onBackToList}>
          {t('Back to list')}
        </Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={t('Recommended')} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target='_blank'
        />
        <Text size={TextSize.L} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
