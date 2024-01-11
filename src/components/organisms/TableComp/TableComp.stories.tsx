import type { Meta, StoryObj } from '@storybook/react';
import TableComp from './TableComp';

const meta = {
    title: 'Organisms/TableComp',
    component: TableComp,
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




export const Table: Story = {
    args: {
            tableHeaders : ['Name', 'Status', 'Type', 'Per payment', 'Total financed' , 'Total available'],
            height : '100px',
            width : '100px',
            borderRadius : '12px',
            backgroundColor : 'gray',
            padding : '10px'
    }
}



