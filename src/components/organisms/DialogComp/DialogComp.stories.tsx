import type { Meta, StoryObj } from '@storybook/react';
import DialogComp from './DialogComp';

const meta = {
    title: 'Organisms/DialogComp',
    component: DialogComp,
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


export const DialogComp1: Story = {
    args: {
            tableHeaders : ['Name', 'Status', 'Type', 'Per payment', 'Total financed' , 'Total available'],
            height : '100px',
            width : '100px',
            borderRadius : '12px',
            backgroundColor : 'gray',
            padding : '10px'
    }
}



