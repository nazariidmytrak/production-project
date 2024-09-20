import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <HStack
        gap='4'
        className={classNames(cls.ArticleViewSelector, {}, [className])}
      >
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            onClick={onClick(viewType.view)}
            theme={ButtonTheme.CLEAR}
          >
            <Icon
              className={classNames(
                '',
                { [cls.notSelected]: viewType.view !== view },
                []
              )}
              Svg={viewType.icon}
            />
          </Button>
        ))}
      </HStack>
    );
  }
);
