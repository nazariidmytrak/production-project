import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from 'shared/ui/ListBox/ListBox';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.NORWAY, content: Country.NORWAY },
  { value: Country.SWEDEN, content: Country.SWEDEN },
  { value: Country.POLAND, content: Country.POLAND },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <ListBox
        readonly={readonly}
        value={value}
        items={options}
        defaultValue={t('Country')}
        label={t('Country')}
        onChange={onChangeHandler}
        direction='top right'
      />
    );
  }
);
