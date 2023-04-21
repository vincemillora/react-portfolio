import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '../../components/DoubleGrid/DoubleGrid';

const meta: Meta<typeof Grid> = {
  title: 'Grids/DoubleGrid',
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

export const About: Story = {
  args: {
    title: 'About me',
    backgroundColor: null,
    isDark: true
  },
};

export const Work: Story = {
  args: {
    title: 'Work',
    backgroundColor: "#d03050",
    isDark: true
  },
};

export const Contact: Story = {
  args: {
    title: 'Contact me',
    backgroundColor: "#2f2e41",
    isDark: true
  },
};