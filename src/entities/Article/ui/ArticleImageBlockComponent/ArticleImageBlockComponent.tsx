import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

// Deprecated
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock;
  className?: string;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <img className={cls.image} src={block.src} alt={block.title} />
      {block.title && (
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text text={block.title} align='center' />}
          off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
        />
      )}
    </div>
  ),
);
