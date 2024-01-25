import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
/* import cls from './ArticleEditPage.module.scss'; */

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? t('Edit article with ID = ') + id : t('Create new article')}
    </Page>
  );
});

export default ArticleEditPage;
