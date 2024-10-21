import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

// Deprecated
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';

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
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <>
            <Text title={feedbackTitle} />
            <Input
              data-testid='RatingCard.Input'
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Your feedback')}
            />
          </>
        }
        off={
          <>
            <TextDeprecated title={feedbackTitle} />
            <InputDeprecated
              data-testid='RatingCard.Input'
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Your feedback')}
            />
          </>
        }
      />
    );

    const content = (
      <>
        <VStack gap='8' align='center' max>
          <ToggleFeatures
            feature='isAppRedesigned'
            on={
              <Text
                title={starsCount ? t('Thank you for the rating!') : title}
              />
            }
            off={
              <TextDeprecated
                title={starsCount ? t('Thank you for the rating!') : title}
              />
            }
          />
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
              <ToggleFeatures
                feature='isAppRedesigned'
                on={
                  <HStack max gap='16' justify='end'>
                    <Button
                      data-testid='RatingCard.Close'
                      onClick={cancelHandler}
                    >
                      {t('Close')}
                    </Button>
                    <Button
                      data-testid='RatingCard.Send'
                      onClick={acceptHandler}
                    >
                      {t('Send')}
                    </Button>
                  </HStack>
                }
                off={
                  <HStack max gap='16' justify='end'>
                    <ButtonDeprecated
                      data-testid='RatingCard.Close'
                      onClick={cancelHandler}
                      theme={ButtonTheme.OUTLINE_RED}
                    >
                      {t('Close')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      data-testid='RatingCard.Send'
                      onClick={acceptHandler}
                    >
                      {t('Send')}
                    </ButtonDeprecated>
                  </HStack>
                }
              />
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
            <VStack gap='32'>
              {modalContent}
              <ToggleFeatures
                feature='isAppRedesigned'
                on={
                  <Button fullWidth onClick={acceptHandler} size='l'>
                    {t('Send')}
                  </Button>
                }
                off={
                  <ButtonDeprecated
                    fullWidth
                    onClick={acceptHandler}
                    size={ButtonSize.L}
                  >
                    {t('Send')}
                  </ButtonDeprecated>
                }
              />
              ;
            </VStack>
          </Drawer>
        </MobileView>
      </>
    );

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card fullWidth border='semi-round' padding='24'>
            {content}
          </Card>
        }
        off={
          <CardDeprecated
            className={className}
            fullWidth
            data-testid='RatingCard'
          >
            {content}
          </CardDeprecated>
        }
      />
    );
  },
);
