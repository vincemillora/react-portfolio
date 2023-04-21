import type { Meta, StoryObj } from '@storybook/react';

import { AboutMe } from '../../components/DoubleGrid/AboutMe/AboutMe';

const meta: Meta<typeof AboutMe> = {
  title: 'DoubleGridBody/AboutMe',
  component: AboutMe,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AboutMe>;

export const About: Story = {
  args: {},
};