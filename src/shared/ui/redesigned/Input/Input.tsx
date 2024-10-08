import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '../Text';
import { HStack } from '../Stack';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = memo(
  ({
    className,
    value,
    label,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    size = 'm',
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const onBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    const onFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const mods: Mods = {
      [cls.readonly]: readonly,
      [cls.focused]: isFocused,
      [cls.withAddonLeft]: !!addonLeft,
      [cls.withAddonRight]: !!addonRight,
    };

    const input = (
      <div
        className={classNames(cls.InputWrapper, mods, [className, cls[size]])}
      >
        {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
        <input
          className={cls.input}
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          readOnly={readonly}
          placeholder={placeholder}
          {...otherProps}
        />
        {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
      </div>
    );

    if (label) {
      return (
        <HStack max gap='8'>
          <Text text={label} />
          {input}
        </HStack>
      );
    }

    return input;
  },
);
