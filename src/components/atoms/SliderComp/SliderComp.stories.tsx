import type { Meta, StoryObj } from '@storybook/react';
import SliderComp from './SliderComp';

const meta = {
    title: 'Atoms/SliderComp',
    component: SliderComp,
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




export const Slider1: Story = {
    args: {
        imageStyle: {
            height: '150px',
            width: '220px'
        },
    }
}



