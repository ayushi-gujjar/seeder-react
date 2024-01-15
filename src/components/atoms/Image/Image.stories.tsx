import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import check from './../../../Images/Cheque.png'


const meta = {
    title: 'Atoms/Image',
    component: Image,
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




export const Image1: Story = {
    args: {
        imageStyle: {
            height: '150px',
            width: '220px'
        },
        src : check,
        alt : 'Check Image'
    }
}



