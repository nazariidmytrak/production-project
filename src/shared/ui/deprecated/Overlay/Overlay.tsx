import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const Overlay = memo(({ className, onClick }: OverlayProps) => (
  <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
));
