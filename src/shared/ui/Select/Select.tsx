import { ChangeEvent, memo, useMemo } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionsList = useMemo(
      () =>
        options?.map((opt) => (
          <option key={opt.value} className={cls.option} value={opt.value}>
            {opt.content}
          </option>
        )),
      [options]
    );

    const mods: Mods = { [cls.readonly]: readonly };
    return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && <span className={cls.label}>{`${label}>`}</span>}
        <select
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);
