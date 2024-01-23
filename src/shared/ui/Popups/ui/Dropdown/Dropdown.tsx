import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { DropdownDirection } from 'shared/types/ui';

import { mapDirectionClass } from '../../styles/constants';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  href?: string;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown({
  className,
  items,
  trigger,
  direction = 'bottom right',
}: DropdownProps) {
  const menuClasses = [mapDirectionClass[direction]];
  return (
    <Menu
      as='div'
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type='button'
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
