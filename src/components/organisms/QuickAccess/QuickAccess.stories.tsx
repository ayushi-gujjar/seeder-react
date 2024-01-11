import type { Meta, StoryObj } from '@storybook/react';
import QuickAccess from './QuickAccess';

const meta = {
    title: 'Organisms/QuickAccess',
    component: QuickAccess,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;




export const QuickAccessCard: Story = {
    args: {
            height : '100px',
            width : '100px',
            borderRadius : '12px',
            backgroundColor : 'gray',
            padding : '10px'
    }
}



