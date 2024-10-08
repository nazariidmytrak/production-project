import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

  return (
    <Card padding='24' fullWidth className={className}>
      <VStack gap='32'>
        {data?.avatar && (
          <HStack justify='center' max>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap='24' max>
          <VStack gap='16' max>
            <Input
              value={data?.firstname}
              label={t('FirstName')}
              onChange={onChangeFirstName}
              readonly={readonly}
              data-testid='ProfileCard.firstname'
            />
            <Input
              value={data?.lastname}
              label={t('LastName')}
              onChange={onChangeLastName}
              readonly={readonly}
              data-testid='ProfileCard.lastname'
            />
            <Input
              value={data?.age}
              label={t('Age')}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              value={data?.city}
              label={t('City')}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack gap='16' max>
            <Input
              value={data?.username}
              label={t('Username')}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Avatar')}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
