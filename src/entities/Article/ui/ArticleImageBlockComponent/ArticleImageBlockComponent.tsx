import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, TextAlign } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock;
  className?: string;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img className={cls.image} src={block.src} alt={block.title} />
        {block.title && <Text text={block.title} />}
      </div>
    );
  }
);
