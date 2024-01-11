import type { Meta, StoryObj } from '@storybook/react';
import CashCard from './CashCard';
import testicon from './../../../../public/Images/icon-round.png';
import calender from './../../../../public/Images/calendar.png';

const meta = {
    title: 'Molecules/CashCard',
    component: CashCard,
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




export const CashCard1: Story = {
    args: {
        image : {
            src : calender,
            alt : 'calender'
        },
        heading : {
            varient : 'h2',
            value : '12 months',
            textStyle : {
                color : '#E8E7F0'
            }
        },
        iconTextStyle : {
            imageStyle: {
                height: '16px',
                width: '16px',
                marginTop: '5px',
                marginLeft: '8px',
                marginRight: '8px'
            },
            isLeft: false,
            isRight: true,
            icon: testicon,
            textStyle : {
                color: '#C9C8CC'
            },
            label : "Team Cap",
            varient : 'body1'
        }
    }
}



