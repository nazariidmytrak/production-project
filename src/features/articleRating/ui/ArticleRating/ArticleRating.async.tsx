import { lazy, Suspense } from 'react';

import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

// Deprecated
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  return (
    <Suspense fallback={<Skeleton width='100%' height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
