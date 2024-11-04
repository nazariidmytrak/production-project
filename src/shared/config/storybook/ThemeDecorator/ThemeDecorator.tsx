import { Decorator } from '@storybook/react';
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app_redesigned ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
