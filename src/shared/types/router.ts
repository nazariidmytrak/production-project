import { RouteProps } from 'react-router-dom';

// also possible to move it app/providers/router/
// eslint-disable-next-line
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
