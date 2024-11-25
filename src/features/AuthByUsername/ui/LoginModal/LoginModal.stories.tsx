import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LoginModal } from './LoginModal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof LoginModal> = {
  title: 'features/AuthByUsername/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true,
    onClose: () => {},
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

type TemplateWithStateProps = React.ComponentProps<typeof LoginModal>;

const TemplateWithState = ({
  isOpen: initialIsOpen,
  onClose,
  ...rest
}: TemplateWithStateProps) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return <LoginModal {...rest} isOpen={isOpen} onClose={handleClose} />;
};

export const Primary: Story = {
  decorators: [NewDesignDecorator],
  render: TemplateWithState,
  parameters: {
    docs: {
      description: {
        story: 'Shows the primary state of the LoginModalcomponent.',
      },
    },
  },
};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
  render: TemplateWithState,
  parameters: {
    docs: {
      description: {
        story: 'Shows the LoginModal in dark theme.',
      },
    },
  },
};

export const Orange: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)],
  render: TemplateWithState,
  parameters: {
    docs: {
      description: {
        story: 'Shows the LoginModal in orange theme.',
      },
    },
  },
};

export const PrimaryDeprecated: Story = {
  render: TemplateWithState,
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated state of the LoginModalcomponent.',
      },
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: TemplateWithState,
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated LoginModal in dark theme.',
      },
    },
  },
};

export const OrangeDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  render: TemplateWithState,
  parameters: {
    docs: {
      description: {
        story: 'Shows the deprecated LoginModal in orange theme.',
      },
    },
  },
};
