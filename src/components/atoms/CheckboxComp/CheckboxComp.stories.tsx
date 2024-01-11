import type { Meta, StoryObj } from '@storybook/react';
import CheckboxComp from './CheckboxComp';

const meta = {
    title: 'Atoms/CheckboxComp',
    component: CheckboxComp,
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




export const checkbox: Story = {
    args: {
        imageStyle: {
            height: '150px',
            width: '220px'
        },
    }
}



