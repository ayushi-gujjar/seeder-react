import type { Meta, StoryObj } from '@storybook/react';
import CashAccelaration from './CashAccelaration';
import testicon from './../../../../public/Images/icon-round.png';
import calender from './../../../../public/Images/calendar.png';
import download from './../../../../public/Images/document-download.png';
import percentage from './../../../../public/Images/percentage-square.png';


const meta = {
    title: 'Organisms/CashAccelaration',
    component: CashAccelaration,
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




export const CashAccelarationPanel: Story = {
    args: {
        data: [
            { icon: calender, heading : '12 Months', caption : 'Term cap'},
            { icon: download, heading : '$709.45k', caption : 'Available credit'},
            { icon: percentage, heading : '12.00%', caption : 'Max interest rate'}
        ],
        image: {
            alt: 'calender'
        },
        heading: {
            varient: 'h2',
            textStyle: {
                color: '#E8E7F0'
            }
        },
        iconTextStyle: {
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
            textStyle: {
                color: '#C9C8CC'
            },
            varient: 'body1'
        }
    }
}



