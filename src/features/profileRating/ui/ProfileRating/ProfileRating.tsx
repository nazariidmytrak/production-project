import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import {
  useGetProfileRating,
  useRateProfile,
} from '../../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
  const { t } = useTranslation('profile');

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });

  const [rateProfileMutation] = useRateProfile();

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({
          userId: userData?.id ?? '',
          profileId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [profileId, rateProfileMutation, userData?.id]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateProfile(starsCount);
    },
    [handleRateProfile]
  );

  if (isLoading) {
    return <Skeleton width='100%' height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title={t('Rate this user')}
      hasFeedback
      feedbackTitle={t('What do you think about this user?')}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
});

export default ProfileRating;
