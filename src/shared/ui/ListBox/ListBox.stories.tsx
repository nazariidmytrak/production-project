import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
    value: { control: 'text' },
    items: { control: 'object' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'ListBox',
  items: [
    { value: '1', content: 'First value' },
    { value: '2', content: 'Second value' },
    { value: '3', content: 'Third value' },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  defaultValue: 'ListBox',
  items: [
    { value: '1', content: 'First value' },
    { value: '2', content: 'Second value' },
    { value: '3', content: 'Third value' },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
