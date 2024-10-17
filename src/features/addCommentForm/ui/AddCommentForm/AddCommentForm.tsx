import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/redesigned/Button';

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

// Deprecated
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch],
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || '');
      onCommentTextChange('');
    }, [text, onCommentTextChange, onSendComment]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={
            <Card padding='24' border='round' fullWidth>
              <HStack
                data-testid='AddCommentForm'
                max
                gap='16'
                className={classNames('', {}, [className])}
              >
                <Input
                  data-testid='AddCommentForm.Input'
                  className={cls.input}
                  placeholder={t('Write a comment')}
                  value={text}
                  onChange={onCommentTextChange}
                />
                <Button
                  data-testid='AddCommentForm.Button'
                  onClick={onSendHandler}
                >
                  {t('Send')}
                </Button>
              </HStack>
            </Card>
          }
          off={
            <HStack
              data-testid='AddCommentForm'
              justify='between'
              max
              className={classNames(cls.AddCommentForm, {}, [className])}
            >
              <InputDeprecated
                data-testid='AddCommentForm.Input'
                className={cls.input}
                placeholder={t('Write a comment')}
                value={text}
                onChange={onCommentTextChange}
              />
              <ButtonDeprecated
                data-testid='AddCommentForm.Button'
                onClick={onSendHandler}
              >
                {t('Send')}
              </ButtonDeprecated>
            </HStack>
          }
        />
      </DynamicModuleLoader>
    );
  },
);

export default AddCommentForm;
