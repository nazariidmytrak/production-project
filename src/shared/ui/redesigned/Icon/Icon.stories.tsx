import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  args: {
    Svg: NotificationIcon,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
};
