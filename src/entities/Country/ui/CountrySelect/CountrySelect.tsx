import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/types/country';

// Deprecated
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';

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
      [onChange],
    );

    const props = {
      className,
      value,
      defaultValue: t('Country'),
      label: t('Country'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
    };

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ListBox {...props} />}
        off={<ListBoxDeprecated {...props} />}
      />
    );
  },
);
