import type { Meta, StoryObj } from '@storybook/react';
import SideBarBox from './SideBarBox';
import home from './../../../Images/home.png';
import coin from './../../../Images/coin.png';


const meta = {
    title: 'Molecules/SideBarBox',
    component: SideBarBox,
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


const headerList = [
    { value: "Home", img: home, isActie : false },
    { value: "Cash Accleration", img: coin , isActive : true}
]

export const SideBarBox1: Story = {
    args: {
        headers: headerList,
        textIconStyle: {
            imageStyle: {
                height: '16px',
                width: '16px',
                marginLeft: '8px',
                marginRight: '8px'
            },
            isLeft: true,
            isRight: false,
            // icon: home,
            textStyle: {
                color: '#E8E7F0'
            },
            varinet: 'body2'
        }
    }
}



