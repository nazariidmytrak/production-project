import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button';
import { HStack } from '../../../../redesigned/Stack';
import { DropdownDirection } from '@/shared/types/ui';

import { mapDirectionClass } from '../../styles/constants';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox({
  value,
  items,
  label,
  defaultValue,
  readonly,
  direction = 'bottom right',
  className,
  onChange,
}: ListBoxProps) {
  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <HStack gap='4'>
      {label && (
        <span className={classNames('', { [popupCls.disabled]: readonly }, [])}>
          {`${label}>`}
        </span>
      )}
      <HListBox
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        as='div'
        disabled={readonly}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={popupCls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                  {selected && '●'}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
