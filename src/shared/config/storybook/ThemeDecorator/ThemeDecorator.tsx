import { Story } from '@storybook/react';
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div
        className={`app ${theme}`}
        style={{ padding: theme === Theme.DARK ? '0' : '20px' }}
      >
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
