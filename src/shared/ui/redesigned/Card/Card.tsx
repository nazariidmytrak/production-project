import { HTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal';

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

export const Card = memo(
  ({
    className,
    children,
    fullWidth,
    padding = '8',
    border = 'normal',
    variant = 'normal',
    ...otherProps
  }: CardProps) => {
    const paddingClass = mapPaddingToClass[padding];

    return (
      <div
        className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [
          className,
          cls[variant],
          cls[border],
          cls[paddingClass],
        ])}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);
