import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

// Deprecated
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <VStack
            gap='16'
            className={classNames(cls.LoginForm, {}, [className])}
          >
            <Text title={t('Login form')} />
            {error && <Text text={t('Invalid credentials')} variant='error' />}
            <Input
              className={classNames(cls.input)}
              type='text'
              placeholder={t('Username')}
              autofocus
              onChange={onChangeUsername}
              value={username}
            />
            <Input
              className={classNames(cls.input)}
              type='text'
              placeholder={t('Password')}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              className={classNames(cls.loginBtn)}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Login')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Login form')} />
            {error && (
              <TextDeprecated
                text={t('Invalid credentials')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              className={classNames(cls.input)}
              type='text'
              placeholder={t('Username')}
              autofocus
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              className={classNames(cls.input)}
              type='text'
              placeholder={t('Password')}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              className={classNames(cls.loginBtn)}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Login')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
