import { Icon, Input, InputAdornment } from '@mui/material'
import './InputComp.css'
import './../../../Images/smile.png'
import smile from './../../../Images/smile.png';
import idicon from './../../../Images/direct-notification.png';
import lock from './../../../Images/lock.png';
import eye from './../../../Images/eye.png';

import React from 'react';

const imageValue  : any= {
    'smile' : smile,
    'id' : idicon,
    'lock' : lock,
    'eye' : eye
}

const InputComp = ({ inputStyle, isStartAdornment, isEndAdornment, value, startIcon, endIcon }: any) => {
    return (
        <div>
            <Input
                placeholder={value}
                id="outlined-basic input-with-icon-adornment"
                className='input'
                startAdornment={
                    (isStartAdornment ? <InputAdornment position="start">
                        <img src={imageValue[startIcon]} alt="Custom Icon" />
                    </InputAdornment> : '')
                }
                endAdornment={
                    (isEndAdornment ? <InputAdornment position="end">
                        <img src={imageValue[endIcon]} alt="End Icon" />
                    </InputAdornment> : '')
                }
            />
        </div>
    )
}

export default InputComp
