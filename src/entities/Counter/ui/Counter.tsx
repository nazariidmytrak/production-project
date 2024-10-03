/* import { useSelector } from 'react-redux'; */
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { counterActions, useCounterActions } from '../model/slice/counterSlice';
import {
  /* getCounterValue, */ useCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  /*  const counterValue = useSelector(getCounterValue); */
  const counterValue = useCounterValue();
  const { decrement, increment, add } = useCounterActions();

  const handleIncrement = () => {
    /* dispatch(counterActions.increment()); */
    increment();
  };

  const handleDecrement = () => {
    /* dispatch(counterActions.decrement()); */
    decrement();
  };

  const handleAddFive = () => {
    /* dispatch(counterActions.add(5)); */
    add(5);
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={handleDecrement} data-testid='decrement-btn'>
        {t('Decrement')}
      </Button>
      <Button onClick={handleIncrement} data-testid='increment-btn'>
        {t('Increment')}
      </Button>
      <Button onClick={handleAddFive} data-testid='increment-btn5'>
        {t('Add 5')}
      </Button>
    </div>
  );
};
