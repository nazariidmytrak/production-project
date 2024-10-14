import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/redesigned/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';

interface ArticleEditButtonProps {
  className?: string;
}

export const ArticleEditButton = memo(
  ({ className }: ArticleEditButtonProps) => {
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article.id));
      }
    }, [article, navigate]);

    return <Button onClick={onEditArticle}>{t('Edit')}</Button>;
  },
);
