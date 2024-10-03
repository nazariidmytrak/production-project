import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Article, ArticleTextBlock } from '../../model/types/article';
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/constants/articleContants';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
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
