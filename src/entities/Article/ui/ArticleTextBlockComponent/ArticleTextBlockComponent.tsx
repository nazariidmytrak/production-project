import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

// Deprecated
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text title={block.title} />}
          off={<TextDeprecated title={block.title} />}
        />
      )}
      {block.paragraphs.map((paragraph) => (
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text key={paragraph} text={paragraph} />}
          off={<TextDeprecated key={paragraph} text={paragraph} />}
        />
      ))}
    </div>
  ),
);
