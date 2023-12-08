import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
      navigate(RoutePath.article_details + article.id);
    }, [navigate, article.id]);

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
      <>
        <Text className={cls.views} text={String(article.views)} />
        <Icon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text className={cls.username} text={article.user.username} />
              <Text className={cls.date} text={article.createdAt} />
            </div>
            <Text className={cls.title} title={article.title} />
            {types}
            <img className={cls.img} src={article.img} alt={article.title} />
            {textBlock && (
              <ArticleTextBlockComponent
                className={cls.textBlock}
                block={textBlock}
              />
            )}
            <div className={cls.footer}>
              <Button onClick={onOpenArticle}>{t('Read more')}</Button>
              {views}
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card onClick={onOpenArticle}>
          <div className={cls.imageWrapper}>
            <img className={cls.img} src={article.img} alt={article.title} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text className={cls.title} text={article.title} />
        </Card>
      </div>
    );
  }
);
