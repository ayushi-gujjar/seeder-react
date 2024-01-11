import type { Meta, StoryObj } from '@storybook/react';
import IconText from './IconText';
import testicon from './../../../../public/Images/icon-round.png';

const meta = {
    title: 'Molecules/IconText',
    component: IconText,
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




export const iconText1: Story = {
    args: {
        imageStyle: {
            height: '24px',
            width: '22px',
            marginTop: '5px',
            marginLeft: '8px',
            marginRight: '8px'
        },
        isLeft: false,
        isRight: true,
        icon: testicon,
        textStyle : {
            color: '#E8E7F0'
        },
        label : "Your Payments",
        varinet : 'h2'
    }
}



