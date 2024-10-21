import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import {
  ArticleBlockType,
  ArticleView,
} from '../../../model/constants/articleContants';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo(
  ({ className, article, view, target }: ArticleListItemProps) => {
    const { t } = useTranslation();

    const userInfo = useMemo(
      () => (
        <>
          <Avatar size={32} src={article.user.avatar} />
          <Text bold text={article.user.username} />
        </>
      ),
      [article.user.avatar, article.user.username],
    );

    const articleTypes = useMemo(
      () => <Text text={article.type.join(', ')} />,
      [article.type],
    );

    const articleViews = useMemo(
      () => (
        <HStack gap='8'>
          <Icon Svg={EyeIcon} />
          <Text text={String(article.views)} />
        </HStack>
      ),
      [article.views],
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;

      return (
        <Card
          data-testid='ArticleListItem'
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
          fullWidth
          padding='24'
        >
          <VStack max gap='16'>
            <HStack max gap='8'>
              {userInfo}
              <Text text={article.createdAt} />
            </HStack>
            <Text bold title={article.title} />
            <Text title={article.subtitle} size='s' />
            {articleTypes}
            <AppImage
              fallback={<Skeleton width='100%' height={250} />}
              className={cls.img}
              src={article.img}
              alt={article.title}
            />
            {textBlock?.paragraphs && (
              <Text
                className={cls.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}
            <HStack justify='between' max>
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Button variant='outline'>{t('Read more')}</Button>
              </AppLink>
              {articleViews}
            </HStack>
          </VStack>
        </Card>
      );
    }

    return (
      <AppLink
        data-testid='ArticleListItem'
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card} border='semi-round' padding='0'>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            alt={article.title}
            src={article.img}
            className={cls.img}
          />
          <VStack className={cls.info} gap='4'>
            <Text title={article.title} />
            <VStack gap='4' className={cls.footer} max>
              <HStack justify='between' max>
                <Text text={article.createdAt} />
                {articleViews}
              </HStack>
              <HStack gap='4'>{userInfo}</HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    );
  },
);
