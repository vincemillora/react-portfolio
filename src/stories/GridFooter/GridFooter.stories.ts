import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '../../components/GridFooter/GridFooter';

const meta: Meta<typeof Footer> = {
  title: 'Grids/GridFooter',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Light: Story = {
  args: {
    isDark: false
  },
};

export const Dark: Story = {
  args: {
    isDark: true
  },
};