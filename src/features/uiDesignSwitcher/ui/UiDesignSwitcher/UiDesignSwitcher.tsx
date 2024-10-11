import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo(({ className }: UiDesignSwitcherProps) => {
  const { t } = useTranslation('settings');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const items = useMemo(
    () => [
      {
        content: t('New'),
        value: 'new',
      },
      {
        content: t('Old'),
        value: 'old',
      },
    ],
    [t],
  );

  const onChange = useCallback(
    async (value: string) => {
      if (authData) {
        setIsLoading(true);
        try {
          await dispatch(
            updateFeatureFlags({
              userId: authData.id,
              newFeatures: {
                isAppRedesigned: value === 'new',
              },
            }),
          ).unwrap();
        } finally {
          setIsLoading(false);
        }
      }
    },
    [authData, dispatch],
  );

  return (
    <HStack gap='16'>
      <Text text={t('Interface variant')} />
      {isLoading ? (
        <Skeleton width={88} height={32} border='34px' />
      ) : (
        <ListBox
          onChange={onChange}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      )}
      {error && <Text text={error} variant='error' />}{' '}
    </HStack>
  );
});
