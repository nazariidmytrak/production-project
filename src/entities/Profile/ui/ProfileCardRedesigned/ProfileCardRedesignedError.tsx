import { useTranslation } from 'react-i18next';

import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack justify='center' max>
      <Text
        variant='error'
        title={t('An error occurred while loading the profile')}
        text={t('Try refreshing the page')}
        align='center'
      />
    </HStack>
  );
};
