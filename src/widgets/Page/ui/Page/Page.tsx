import { MutableRefObject, ReactNode, memo, useRef, UIEvent } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(
  ({ className, children, onScrollEnd, 'data-testid': testId }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
    });

    useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
      dispatch(
        uiActions.setScrollPosition({
          position: e.currentTarget.scrollTop,
          path: pathname,
        })
      );
    }, 500);

    return (
      <main
        className={classNames(cls.Page, {}, [className])}
        ref={wrapperRef}
        onScroll={onScroll}
        data-testid={testId ?? 'Page'}
      >
        {children}
        {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
      </main>
    );
  }
);
