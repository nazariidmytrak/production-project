import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
  title: 'shared/AppImage',
  component: AppImage,
  args: { src: 'https://placehold.co/100', alt: 'Sample image' },
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The primary state of the AppImage component, displaying a sample image.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    src: 'qwe',
    errorFallback: <div>Error loading image!</div>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows an error message when the image fails to load.',
      },
    },
  },
};
