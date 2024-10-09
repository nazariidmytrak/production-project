import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/deprecated/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../../model/types/article';
import {
  ArticleView,
  ArticleBlockType,
} from '../../../model/constants/articleContants';
import { ArticleListItemProps } from '../ArticleListItem';
// eslint-disable-next-line max-len
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from '../ArticleListItem.module.scss';

export const ArticleListItemDeprecated = memo(
  ({ className, article, view, target }: ArticleListItemProps) => {
    const { t } = useTranslation();

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
      <HStack gap='4'>
        <Text text={String(article.views)} />
        <Icon Svg={EyeIcon} />
      </HStack>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;
      return (
        <div
          data-testid='ArticleListItem'
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <VStack gap='16'>
              <HStack justify='between' max>
                <HStack gap='8'>
                  <Avatar size={30} src={article.user.avatar} />
                  <Text text={article.user.username} />
                </HStack>
                <Text text={article.createdAt} />
              </HStack>
              <Text title={article.title} />
              {types}
              <AppImage
                fallback={<Skeleton width='100%' height={250} />}
                className={cls.img}
                src={article.img}
                alt={article.title}
              />
              {textBlock && (
                <ArticleTextBlockComponent
                  className={cls.textBlock}
                  block={textBlock}
                />
              )}
              <HStack justify='between' max>
                <AppLink
                  to={getRouteArticleDetails(article.id)}
                  target={target}
                >
                  <Button>{t('Read more')}</Button>
                </AppLink>
                {views}
              </HStack>
            </VStack>
          </Card>
        </div>
      );
    }

    return (
      <AppLink
        data-testid='ArticleListItem'
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        to={getRouteArticleDetails(article.id)}
        target={target}
      >
        <Card>
          <VStack gap='8'>
            <div className={cls.imageWrapper}>
              <AppImage
                fallback={<Skeleton width={200} height={200} />}
                className={cls.img}
                src={article.img}
                alt={article.title}
              />
              <Text className={cls.date} text={article.createdAt} />
            </div>
            <HStack justify='between' max>
              {types}
              {views}
            </HStack>
            <Text text={article.title} />
          </VStack>
        </Card>
      </AppLink>
    );
  },
);
