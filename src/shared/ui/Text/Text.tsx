import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.RIGHT,
  }: TextProps) => (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
);
