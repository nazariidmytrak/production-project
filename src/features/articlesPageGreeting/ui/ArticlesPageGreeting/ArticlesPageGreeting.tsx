import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlesPageGreeting = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { hasArticlesPageBeenOpened } = useJsonSettings();

  useEffect(() => {
    if (!hasArticlesPageBeenOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ hasArticlesPageBeenOpened: true }));
    }
  }, [dispatch, hasArticlesPageBeenOpened]);

  const onClose = () => setIsOpen(false);

  const text = (
    <Text
      title={t('Welcome to the articles page!')}
      text={t('Here you can search and view articles on various topics.')}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
