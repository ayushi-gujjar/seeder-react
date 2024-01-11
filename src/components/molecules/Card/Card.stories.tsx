import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
    title: 'Molecules/Card',
    component: Card,
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




export const Card1: Story = {
    args: {
        height : '100px',
        width : '100px',
        borderRadius : '12px',
        backgroundColor : 'gray',
        padding : '10px'
    }
}



