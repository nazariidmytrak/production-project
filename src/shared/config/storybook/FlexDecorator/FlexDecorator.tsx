import { Decorator } from '@storybook/react';

import cls from './FlexDecorator.module.scss';

export const FlexDecorator: Decorator = (Story) => (
  <div className={cls.flexDecorator}>
    <Story />
  </div>
);
