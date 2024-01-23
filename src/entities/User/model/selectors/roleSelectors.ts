import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../constants/userConstants';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

// eslint-disable-next-line
export const getIsUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
// eslint-disable-next-line
export const getIsUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));

export const getIsAdminPanelAvailable = createSelector(
  getIsUserAdmin,
  getIsUserManager,
  (isAdmin, isManager) => isAdmin || isManager
);
