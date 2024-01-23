import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/popups/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: '123',
    items: [
      { value: '1', content: 'First value' },
      { value: '2', content: 'Second value' },
      { value: '3', content: 'Third value' },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
};
