import React from 'react';
import Button from '@mui/material/Button';
import theme from '../../../theme/theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { makeStyles } from '@mui/styles';
import './ButtonComp.css'

interface ButtonProps {
  label: string,
  color: "secondary" | "inherit" | "primary" | "success" | "error" | "info" | "warning" | undefined,
  variant: "text" | "outlined" | "contained" | undefined,
  class: string,
  enable?: boolean
}


export const ButtonComp = (props: ButtonProps) => {
  const buttonStyle = {
    width: `${props.label.length * 22}px`, 
  };
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button disabled={props.enable ? props.enable : false} variant={props.variant} color={props.color} size="large"
          className={`${props.class} ${props.enable ? 'disable' : ''}`}>
          {props.label}
        </Button>
      </ThemeProvider>
    </div>
  )
}
export default ButtonComp;
