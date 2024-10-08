import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedLoader = () => (
  <HStack
    justify='center'
    max
    className={classNames(cls.ProfileCard, { [cls.loading]: true })}
  >
    <Loader />
  </HStack>
);
