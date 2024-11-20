import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './PageError.module.scss';

// Deprecated
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <VStack gap='8' align='center'>
        <p>{t('Unexpected error occurred')}</p>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Button onClick={reloadPage}>{t('Refresh the page')}</Button>}
          off={
            <ButtonDeprecated onClick={reloadPage}>
              {t('Refresh the page')}
            </ButtonDeprecated>
          }
        />
      </VStack>
    </div>
  );
};
