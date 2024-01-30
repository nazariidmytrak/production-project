import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Main')}
      <RatingCard
        hasFeedback
        title={t('Your feedback')}
        feedbackTitle={t('Leave feedback on this article')}
      />
    </Page>
  );
});

export default MainPage;
