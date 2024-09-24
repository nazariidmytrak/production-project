import { screen } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import AppRouter from './AppRouter';

describe('AppRouter.test', () => {
  test('the page should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/asdasda',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('redirecting an unauthorized user to the main', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('access to a forbidden page for an authorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('access denied (without required role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('access granted (with required role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
