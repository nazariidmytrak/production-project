import { ReactNode } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
  isOpen?: boolean;
  children?: ReactNode;
  className?: string;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
