import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  rate?: number;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo(
  ({
    className,
    title,
    rate = 0,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
  }: RatingCardProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
      <>
        <Text title={feedbackTitle} />
        <Input
          value={feedback}
          onChange={setFeedback}
          placeholder={t('Your feedback')}
        />
      </>
    );

    return (
      <Card className={className} fullWidth>
        <VStack gap='8' align='center'>
          <Text title={starsCount ? t('Thank you for the rating!') : title} />
          <StarRating
            selectedStars={starsCount}
            size={40}
            onSelect={onSelectStars}
          />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack max gap='32'>
              {modalContent}
              <HStack max gap='16' justify='end'>
                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                  {t('Close')}
                </Button>
                <Button onClick={acceptHandler}>{t('Send')}</Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
            <VStack gap='32'>
              {modalContent}
              <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                {t('Send')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </Card>
    );
  }
);
