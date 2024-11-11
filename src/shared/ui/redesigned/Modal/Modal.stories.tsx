import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: { isOpen: true, children: 'This is the modal content' },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the Modal component with content visible.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Modal component with a dark theme applied.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the Modal component with an orange theme applied.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the deprecated Modal component with content visible.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated Modal component with a dark theme applied.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated Modal component with an orange theme applied.',
      },
    },
  },
};
