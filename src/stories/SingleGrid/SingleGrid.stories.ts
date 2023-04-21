import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '../../components/SingleGrid/SingleGrid';

const meta: Meta<typeof Grid> = {
  title: 'Grids/SingleGrid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Head: Story = {
  args: {
    type: 'header',
    title: 'Hello World',
    backgroundColor: "#2f2e41;",
    isDark: true
  },
};

export const Foot: Story = {
  args: {
    type: 'footer',
    title: 'Fin.',
    backgroundColor: "white;",
    isDark: false
  },
};