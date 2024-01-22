import type { Meta, StoryObj } from '@storybook/react';
import NewCashkick from './NewCashkick';

const meta = {
    title: 'Templates/NewCashkick',
    component: NewCashkick,
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




export const NewCashkick1: Story = {
    args: {
            tableHeaders : ['Name', 'Status', 'Type', 'Per payment', 'Total financed' , 'Total available'],
            height : '100px',
            width : '100px',
            borderRadius : '12px',
            backgroundColor : 'gray',
            padding : '10px'
    }
}



