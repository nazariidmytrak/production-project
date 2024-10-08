import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { TextTheme, TextAlign, Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify='center'
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <Text
        theme={TextTheme.ERROR}
        title={t('An error occurred while loading the profile')}
        text={t('Try refreshing the page')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};
