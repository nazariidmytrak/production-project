import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import AppSvg from '@/shared/assets/icons/app-logo.svg';
import { HStack } from '../../redesigned/Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 80 }: AppLogoProps) => (
  <HStack
    max
    justify='center'
    className={classNames(cls.appLogoWrapper, {}, [className])}
  >
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <AppSvg className={cls.appLogo} height={size} width={size}/*  fill='#d5daf5' */ />
  </HStack>
));
