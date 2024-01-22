import React from 'react';
import Button from '@mui/material/Button';
import './ButtonComp.css'
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';

export interface ButtonProps {
  label: string,
  color: "secondary" | "inherit" | "primary" | "success" | "error" | "info" | "warning" | undefined,
  variant: "text" | "outlined" | "contained" | undefined,
  class: string,
  enable?: boolean,
  isStartIcon?: boolean,
  startIcon?: any,
  onNavChange?: any
}


export const ButtonComp = (props: ButtonProps) => {

  const onBtnClick = () => {
    if (props.onNavChange) {
      props.onNavChange(props.label);
    }
  }

  return (
    <div id='testid'>
      <ThemeProvider theme={theme}>
        <Button onClick={onBtnClick} startIcon={props.isStartIcon ? <img src={props.startIcon} alt="Custom Icon" style={{ width: '16px', height: '16px', marginRight: '5px', marginLeft: '10px' }} /> : null} disabled={props.enable ? props.enable : false} variant={props.variant} color={props.color} size="large"
          className={`${props.class} ${props.enable ? 'disable' : ''}`}>
          {props.label}
        </Button>
      </ThemeProvider>

    </div>
  )
}
export default ButtonComp;
