import { useContext } from 'react';
/* import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage'; */
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    saveAction?.(newTheme);
    /* localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme); */
    /*  document.body.className = newTheme; */
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
