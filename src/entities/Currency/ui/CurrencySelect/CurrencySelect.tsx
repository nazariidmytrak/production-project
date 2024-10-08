import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';

// Deprecated
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const props = {
      className,
      value,
      defaultValue: t('Currency'),
      label: t('Currency'),
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
