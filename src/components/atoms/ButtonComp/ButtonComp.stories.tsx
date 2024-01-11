import type { Meta, StoryObj } from '@storybook/react';
import  ButtonComp  from './ButtonComp';

const meta = {
  title: 'Atoms/ButtonComp',
  component: ButtonComp,
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

// export const Primary: Story = {
//   args: {
//     label: 'Login',
//     color : 'secondary',
//     variant : 'contained',
//     class : 'signUpBtn'
//   },
// };

export const SignUpBtn: Story = {
  args: {
    label: 'Sign Up',
    color : 'secondary',
    variant : 'contained',
    class : 'signUpBtn'
  },
};


// export const cashKickBtn: Story = {
//   args: {
//     label: 'New Cash Kick',
//     color : 'secondary',
//     variant : 'contained',
//     class : 'newCashKick'
//   },
// };


// export const learnMore: Story = {
//   args: {
//     label: 'Learn More',
//     color : 'secondary',
//     variant : 'contained',
//     class : 'learMore'
//   },
// };

export const tabBtn: Story = {
  args: {
    label: 'My Contracts',
    color : 'primary',
    variant : 'contained',
    class : 'tabBtn'
  },
};

// export const reniewYourCredit: Story = {
//   args: {
//     label: 'Reniew Your Credit',
//     color : 'secondary',
//     variant : 'contained',
//     class : 'reniewYourCredit',
//     enable : false
//   },
// };

export const submitYourCard: Story = {
  args: {
    label: 'Submit Your Card',
    color : 'secondary',
    variant : 'contained',
    class : 'reniewYourCredit',
    enable : false
  },
};  

// export const createCashKick: Story = {
//   args: {
//     label: 'Create Cash Kick',
//     color : 'secondary',
//     variant : 'contained',
//     class : 'createCashKick',
//     enable : false
//   },
// };  

export const cancelBtn : Story = {
  args : {
    label: 'Cancel',
    color : 'secondary',
    variant : 'contained',
    class : 'cancelBtn',
    enable : false
  }
}

export const restBtn : Story = {
  args : {
    label: 'Reset',
    color : 'secondary',
    variant : 'contained',
    class : 'resetBtn',
    enable : false
  }
}