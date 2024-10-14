import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

export const AdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);

  if (!article) {
    return null;
  }

  return (
    <Card padding='24' border='round'>
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
      />
    </Card>
  );
});
