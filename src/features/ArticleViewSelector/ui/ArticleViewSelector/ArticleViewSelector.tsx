import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './ArticleViewSelector.module.scss';

// Deprecated
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import ListIconDeprecated from '@/shared/assets/icons/deprecated/list.svg';
import TiledIconDeprecated from '@/shared/assets/icons/deprecated/tiled.svg';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
              className,
            ])}
            border='round'
          >
            <HStack gap='8'>
              {viewTypes.map((viewType) => (
                <Icon
                  key={viewType.view}
                  clickable
                  onClick={onClick(viewType.view)}
                  Svg={viewType.icon}
                  className={classNames(
                    '',
                    { [cls.notSelected]: viewType.view !== view },
                    [],
                  )}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <HStack
            gap='4'
            className={classNames(cls.ArticleViewSelector, {}, [className])}
          >
            {viewTypes.map((viewType) => (
              <ButtonDeprecated
                key={viewType.view}
                onClick={onClick(viewType.view)}
                theme={ButtonTheme.CLEAR}
              >
                <IconDeprecated
                  width={24}
                  height={24}
                  className={classNames(
                    '',
                    { [cls.notSelected]: viewType.view !== view },
                    [],
                  )}
                  Svg={viewType.icon}
                />
              </ButtonDeprecated>
            ))}
          </HStack>
        }
      />
    );
  },
);
