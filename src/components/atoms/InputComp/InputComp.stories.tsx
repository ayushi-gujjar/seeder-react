import type { Meta, StoryObj } from '@storybook/react';
import  InputComp  from './InputComp';

const meta = {
  title: 'Atoms/InputComp',
  component: InputComp,
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




export const nameInput : Story = {
    args : {
        value : 'Enter name',
        inputStyle : {
            border : '1px solid',
            borderRadious : '12px'
        },
        isStartAdornment : true,
        isEndAdornment : false,
        startIcon : 'smile'
    }
}


export const passwordInput : Story = {
    args : {
        value : 'Enter your password',
        inputStyle : {
            border : '1px solid',
            borderRadious : '12px'
        },
        isStartAdornment : true,
        isEndAdornment : true,
        startIcon : 'lock',
        endIcon : 'eye'

    }
}
