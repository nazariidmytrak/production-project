import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleView } from '../../model/constants/articleContants';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';
import cls from './ArticleListItem.module.scss';

// Deprecated
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    if (view === ArticleView.BIG) {
      return (
        <VStack
          max
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <VStack gap='16'>
              <HStack gap='16' max>
                <Skeleton border='50%' height={30} width={30} />
                <Skeleton width={150} height={16} className={cls.username} />
                <Skeleton width={150} height={16} className={cls.date} />
              </HStack>
              <Skeleton width={250} height={24} className={cls.title} />
              <Skeleton height={200} className={cls.img} />
              <div>
                <Skeleton height={36} width={200} />
              </div>
            </VStack>
          </Card>
        </VStack>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <VStack gap='16'>
            <div className={cls.imageWrapper}>
              <Skeleton width={215} height={200} className={cls.img} />
            </div>
            <div className={cls.infoWrapper}>
              <Skeleton width={130} height={16} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
          </VStack>
        </Card>
      </div>
    );
  },
);
