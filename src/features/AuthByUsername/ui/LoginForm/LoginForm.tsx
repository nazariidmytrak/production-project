import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={classNames(cls.input)}
        type='text'
        placeholder={t('Username')}
        autofocus
      />
      <Input
        className={classNames(cls.input)}
        type='text'
        placeholder={t('Password')}
      />
      <Button className={classNames(cls.loginBtn)}>{t('Login')}</Button>
    </div>
  );
};
