import type { Meta, StoryObj } from '@storybook/react';
import  TypographyComp  from './TypographyComp';

const meta = {
  title: 'Atoms/TypographyComp',
  component: TypographyComp,
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




export const h1 : Story = {
    args : {
        varient : 'h1',
        value : 'Cash accleration',
        textStyle : {
            color : '#E8E7F0'
        }
    }
}

export const h2 : Story = {
    args : {
        varient : 'h2',
        value : 'Your Contracts',
        textStyle : {
            color : '#E8E7F0'
        }
    }
}

export const h3 : Story = {
    args : {
        varient : 'h3',
        value : 'Place to create new cash kicks to run your business',
        textStyle : {
            color : '#A5A5A6'
        }
    }
}


export const body1 : Story = {
    args : {
        varient : 'body1',
        value : 'Term Cap',
        textStyle : {
            color : '#C9C8CC'
        }
    }
}


export const body2 : Story = {
    args : {
        varient : 'body2',
        value : 'Name',
        textStyle : {
            color : '#A5A5A6'
        }
    }
}

export const body3 : Story = {
    args : {
        varient : 'body3',
        value : '12.0% fee',
        textStyle : {
            color : '#A5A5A6'
        }
    }
}