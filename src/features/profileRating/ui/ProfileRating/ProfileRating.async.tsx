import { lazy, Suspense } from 'react';

import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';
import { ProfileRatingProps } from './ProfileRating';

// Deprecated
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  return (
    <Suspense fallback={<Skeleton width='100%' height={140} />}>
      <ProfileRatingLazy {...props} />
    </Suspense>
  );
};
