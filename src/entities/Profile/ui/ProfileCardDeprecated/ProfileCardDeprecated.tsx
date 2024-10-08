import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from './ProfileCardDeprecated.module.scss';

// Deprecated
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap='16'
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify='center' max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.firstname}
        placeholder={t('FirstName')}
        className={cls.input}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid='ProfileCard.firstname'
      />
      <Input
        value={data?.lastname}
        placeholder={t('LastName')}
        className={cls.input}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid='ProfileCard.lastname'
      />
      <Input
        value={data?.age}
        placeholder={t('Age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('City')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Username')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Avatar')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
});
