import type { Meta, StoryObj } from '@storybook/react';
import SummaryCard from './SummaryCard';

const meta = {
    title: 'Organisms/SummaryCard',
    component: SummaryCard,
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


export const SummaryCard1: Story = {
    args: {
            tableHeaders : ['Name', 'Status', 'Type', 'Per payment', 'Total financed' , 'Total available'],
            height : '100px',
            width : '100px',
            borderRadius : '12px',
            backgroundColor : 'gray',
            padding : '10px'
    }
}



