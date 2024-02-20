import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Drawer } from './Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Test',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Test',
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
