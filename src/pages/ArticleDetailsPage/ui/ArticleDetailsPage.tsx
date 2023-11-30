import { memo } from 'react';

import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article');

  return <div>{t('ArticleDetails')}</div>;
});

export default ArticleDetailsPage;
