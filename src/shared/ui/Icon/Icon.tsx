import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

export const Icon = memo(
  ({ className, Svg, theme = IconTheme.PRIMARY }: IconProps) => (
    <Svg className={classNames('', {}, [className, cls[theme]])} />
  )
);
