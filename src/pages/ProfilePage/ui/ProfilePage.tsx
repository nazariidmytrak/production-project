import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  /*  if (!id) {
    return <Text text={t('Profile not found')} />;
  } */

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        {t('Profile not found')}
      </Page>
    );
  }

  return (
    <Page data-testid='ProfilePage' className={classNames('', {}, [className])}>
      <VStack gap='16' max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
