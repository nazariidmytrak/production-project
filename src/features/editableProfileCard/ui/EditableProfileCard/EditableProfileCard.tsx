import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';

import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

// eslint-disable-next-line
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(
  ({ className, id }: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslates = {
      [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect_user_data'),
      [ValidateProfileError.INCORRECT_AGE]: t('Incorrect_age'),
      [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect_country'),
      [ValidateProfileError.NO_DATA]: t('No_data'),
      [ValidateProfileError.SERVER_ERROR]: t('Server_error'),
    };

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    });

    const onChangeFirstname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
      },
      [dispatch]
    );

    const onChangeLastname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
      },
      [dispatch]
    );

    const onChangeCity = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
      },
      [dispatch]
    );

    const onChangeAge = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
      },
      [dispatch]
    );

    const onChangeUsername = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
      },
      [dispatch]
    );

    const onChangeAvatar = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
      },
      [dispatch]
    );

    const onChangeCurrency = useCallback(
      (currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
      },
      [dispatch]
    );

    const onChangeCountry = useCallback(
      (country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
      },
      [dispatch]
    );

    return (
      <DynamicModuleLoader reducers={reducers}>
        <VStack gap='16' max className={classNames('', {}, [className])}>
          <EditableProfileCardHeader />
          {validateErrors?.length
            && validateErrors.map((err) => (
              <Text
                key={err}
                theme={TextTheme.ERROR}
                text={validateErrorsTranslates[err]}
                data-testid='EditableProfileCard.Error'
              />
            ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeFirstName={onChangeFirstname}
            onChangeLastName={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </DynamicModuleLoader>
    );
  }
);
