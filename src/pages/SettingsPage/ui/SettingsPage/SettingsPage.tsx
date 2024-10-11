import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo(({ className }: SettingsPageProps) => {
  const { t } = useTranslation('settings');

  return (
    <Page>
      <VStack gap='16'>
        <Text title={t('Settings')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
