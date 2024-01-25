import { memo } from 'react';

import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/light-theme-icon.svg';
import DarkIcon from '@/shared/assets/icons/dark-theme-icon.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR_INVERTED}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
