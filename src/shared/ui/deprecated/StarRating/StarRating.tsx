import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  size?: number;
  onSelect?: (starsCount: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const StarRating = memo(
  ({ onSelect, size = 30, selectedStars = 0, className }: StarRatingProps) => {
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

    const onHover = (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount);
      }
    };

    const onLeave = () => {
      if (!isSelected) {
        setCurrentStarsCount(0);
      }
    };

    const onClick = (starsCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starsCount);
        setCurrentStarsCount(starsCount);
        setIsSelected(true);
      }
    };

    return (
      <div className={classNames(cls.StarRating, {}, [className])}>
        {stars.map((starNumber) => (
          <Icon
            data-testid={`StarRating.${starNumber}`}
            data-selected={currentStarsCount >= starNumber}
            className={classNames(
              cls.starIcon,
              { [cls.selected]: isSelected },
              [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
            )}
            Svg={StarIcon}
            key={starNumber}
            width={size}
            height={size}
            onClick={onClick(starNumber)}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
          />
        ))}
      </div>
    );
  },
);
