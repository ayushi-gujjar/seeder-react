import type { Meta, StoryObj } from '@storybook/react';
import PaymentsCard from './PaymentsCard';
import testicon from './../../../Images/icon-round.png';
import receipt from './../../../Images/receipt-text.png';

const meta = {
    title: 'Molecules/PaymentsCard',
    component: PaymentsCard,
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




export const PaymentsCard1: Story = {
    args: {
        image : {
            src : receipt,
            alt : 'receipt'
        },
        heading : {
            varient : 'h2',
            value : '$14,204.55',
            textStyle : {
                color : '#E8E7F0'
            }
        },
        tag : {
            varient : 'body2',
            value : 'Due in 30 day(s)',
            textStyle : {
                color : '#201F24'
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
            label : "Due - May 03, 2021 ",
            varient : 'body1'
        }
    }
}



