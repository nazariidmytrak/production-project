import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

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
      [hasFeedback, onAccept],
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
          data-testid='RatingCard.Input'
          value={feedback}
          onChange={setFeedback}
          placeholder={t('Your feedback')}
        />
      </>
    );

    return (
      <Card data-testid='RatingCard' className={className} fullWidth>
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
                <Button
                  data-testid='RatingCard.Close'
                  onClick={cancelHandler}
                  theme={ButtonTheme.OUTLINE_RED}
                >
                  {t('Close')}
                </Button>
                <Button data-testid='RatingCard.Send' onClick={acceptHandler}>
                  {t('Send')}
                </Button>
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
  },
);
