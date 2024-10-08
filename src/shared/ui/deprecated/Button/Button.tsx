import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
}

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const Button = memo(
  ({
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    fullWidth,
    size = ButtonSize.M,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls.fullWidth]: fullWidth,
    };

    return (
      <button
        type='button'
        className={classNames(cls.Button, mods, [
          className,
          cls[theme],
          cls[size],
        ])}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);
