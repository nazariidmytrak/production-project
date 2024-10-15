import { toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import cls from './ArticleDetails.module.scss';

// Deprecated
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  return (
    <VStack gap='16' max>
      <Skeleton className={cls.avatar} width={200} height={200} border='50%' />
      <Skeleton width={300} height={32} />
      <Skeleton width={600} height={24} />
      <Skeleton width='100%' height={200} />
      <Skeleton width='100%' height={200} />
    </VStack>
  );
};
