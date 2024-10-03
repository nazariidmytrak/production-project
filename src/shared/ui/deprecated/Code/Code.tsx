import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
  text: string;
  className?: string;
}

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
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
  );
});
