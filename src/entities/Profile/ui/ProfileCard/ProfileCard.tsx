import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ToggleFeatures } from '@/shared/lib/features';
import { Profile } from '../../model/types/profile';
import {
  ProfileCardRedesignedSkeleton,
  ProfileCardRedesignedError,
  ProfileCardRedesigned,
} from '../ProfileCardRedesigned';

// Deprecated
import {
  ProfileCardDeprecatedLoader,
  ProfileCardDeprecatedError,
  ProfileCardDeprecated,
} from '../ProfileCardDeprecated';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { isLoading, error } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
