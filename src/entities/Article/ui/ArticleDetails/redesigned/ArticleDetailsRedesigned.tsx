import { memo } from 'react';

import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { renderArticleBlock } from '../renderArticleBlock';
import { Article } from '../../../model/types/article';
import cls from '../ArticleDetails.module.scss';

interface ArticleDetailsRedesignedProps {
  article?: Article;
}

export const ArticleDetailsRedesigned = memo(
  ({ article }: ArticleDetailsRedesignedProps) => {
    if (!article) return null;

    const { title, subtitle, img, blocks } = article;
    return (
      <>
        <Text title={title} size='l' bold />
        <Text title={subtitle} />
        <AppImage
          fallback={<Skeleton width='100%' height={420} border='16px' />}
          src={img}
          className={cls.img}
        />
        {blocks.map(renderArticleBlock)}
      </>
    );
  },
);
