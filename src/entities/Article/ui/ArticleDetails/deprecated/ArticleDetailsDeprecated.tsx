import { memo } from 'react';

import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import EyeIcon from '@/shared/assets/icons/deprecated/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Article } from '../../../model/types/article';
import { renderArticleBlock } from '../renderArticleBlock';
import cls from '../ArticleDetails.module.scss';

interface ArticleDetailsDeprecatedProps {
  article?: Article;
}

export const ArticleDetailsDeprecated = memo(
  ({ article }: ArticleDetailsDeprecatedProps) => {
    if (!article) return null;

    const { img, title, subtitle, views, createdAt, blocks } = article;

    return (
      <>
        <HStack justify='center' max>
          <Avatar className={cls.avatar} size={200} src={img} />
        </HStack>
        <VStack gap='4' max data-testid='ArticleDetails.Info'>
          <Text title={title} text={subtitle} size={TextSize.L} />
          <HStack gap='8'>
            <Icon Svg={EyeIcon} />
            <Text text={String(views)} />
          </HStack>
          <HStack gap='8'>
            <Icon Svg={CalendarIcon} />
            <Text text={createdAt} />
          </HStack>
        </VStack>
        {blocks.map(renderArticleBlock)}
      </>
    );
  },
);
