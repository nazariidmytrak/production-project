import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../constants/userConstants';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

// eslint-disable-next-line
export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
// eslint-disable-next-line
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
