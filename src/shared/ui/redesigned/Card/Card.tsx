import { HTMLAttributes, ReactNode, memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
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
  fullHeight?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

export const Card = memo(
  ({
    className,
    children,
    fullWidth,
    fullHeight,
    padding = '8',
    border = 'normal',
    variant = 'normal',
    ...otherProps
  }: CardProps) => {
    const paddingClass = mapPaddingToClass[padding];

    const mods: Mods = {
      [cls.fullWidth]: fullWidth,
      [cls.fullHeight]: fullHeight,
    };

    return (
      <div
        className={classNames(cls.Card, mods, [
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
