import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const Icon = memo(
  ({ className, Svg, theme = IconTheme.PRIMARY, ...otherProps }: IconProps) => (
    <Svg
      className={classNames('', {}, [className, cls[theme]])}
      {...otherProps}
    />
  ),
);
