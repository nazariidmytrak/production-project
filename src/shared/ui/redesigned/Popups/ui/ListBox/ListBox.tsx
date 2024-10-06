import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/constants';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>({
  value,
  items,
  label,
  defaultValue,
  readonly,
  direction = 'bottom right',
  className,
  onChange,
}: ListBoxProps<T>) {
  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(
    () => items?.find((item) => item.value === value),
    [items, value],
  );

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
          <Button variant='filled' disabled={readonly}>
            {selectedItem?.content ?? defaultValue}
          </Button>
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
                  <HStack gap='4'>
                    <span> {item.content}</span>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {selected && <span>●</span>}
                  </HStack>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
