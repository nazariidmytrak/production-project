import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'No root container found. Failed to mount the react application'
  );
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
