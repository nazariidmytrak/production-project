import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

// Deprecated
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };
  const label = t(short ? 'LanguageAbbreviation' : 'Language');

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Button variant='clear' onClick={toggle}>
          {label}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={className}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={toggle}
        >
          {label}
        </ButtonDeprecated>
      }
    />
  );
});
