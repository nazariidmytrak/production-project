import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/constants';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export function Popover({
  className,
  trigger,
  direction = 'bottom right',
  children,
}: PopoverProps) {
  const menuClasses = [mapDirectionClass[direction], popupCls.menu];
  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <HPopover.Button as='div' className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
