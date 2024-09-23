import { CSSProperties, useMemo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import UserIcon from '../../assets/icons/user-filled.svg';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallback = <Skeleton width={size} height={size} border='50%' />;
  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
