import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Introduction',
  parameters: {
    docs: {
      page: () => (
        <div>
          <h1>Welcome to B-ui</h1>
          <p>A React component library.</p>
        </div>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {};
