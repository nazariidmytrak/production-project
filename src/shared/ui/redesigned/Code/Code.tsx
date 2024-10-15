import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';
import CopyIconRedesigned from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

// Deprecated
import CopyIconDeprecated from '@/shared/assets/icons/deprecated/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button';

interface CodeProps {
  text: string;
  className?: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            clickable
            onClick={onCopy}
            className={cls.copyBtn}
            Svg={CopyIconRedesigned}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
            onClick={onCopy}
          >
            <CopyIconDeprecated className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  );

  /* return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  ); */
});
