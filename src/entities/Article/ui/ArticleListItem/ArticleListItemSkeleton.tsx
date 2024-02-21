import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import { ArticleView } from '../../model/constants/articleContants';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

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
              <Skeleton width={200} height={200} className={cls.img} />
            </div>
            <div className={cls.infoWrapper}>
              <Skeleton width={130} height={16} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
          </VStack>
        </Card>
      </div>
    );
  }
);
